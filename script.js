
document.addEventListener("DOMContentLoaded", () => {
    const $ = (selector) => document.querySelector(selector);
    const $$ = (selector) => document.querySelectorAll(selector);

    const STORAGE_KEYS = {
        tasks: "nexova_tasks",
        notes: "nexova_notes",
        habits: "nexova_habits"
    };

    function loadData(key, fallback) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : fallback;
        } catch {
            return fallback;
        }
    }

    function saveData(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch {
            console.warn("Impossible de sauvegarder les données localement.");
        }
    }

    // Année dans le pied de page
    $("#currentYear").textContent = new Date().getFullYear();

    // -------------------------
    // GESTION DES TÂCHES
    // -------------------------

    let tasks = loadData(STORAGE_KEYS.tasks, []);
    const taskForm = $("#taskForm");
    const taskInput = $("#taskInput");
    const taskList = $("#taskList");

    function renderTasks() {
        taskList.replaceChildren();

        tasks.forEach((task) => {
            const li = document.createElement("li");
            li.className = "task-item" + (task.done ? " done" : "");

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = task.done;
            checkbox.setAttribute("aria-label", "Terminer " + task.text);

            checkbox.addEventListener("change", () => {
                task.done = checkbox.checked;
                saveData(STORAGE_KEYS.tasks, tasks);
                renderTasks();
            });

            const text = document.createElement("span");
            text.textContent = task.text;

            const removeButton = document.createElement("button");
            removeButton.className = "delete-task";
            removeButton.type = "button";
            removeButton.textContent = "✕";
            removeButton.setAttribute("aria-label", "Supprimer " + task.text);

            removeButton.addEventListener("click", () => {
                tasks = tasks.filter((item) => item.id !== task.id);
                saveData(STORAGE_KEYS.tasks, tasks);
                renderTasks();
            });

            li.append(checkbox, text, removeButton);
            taskList.append(li);
        });

        const completed = tasks.filter((task) => task.done).length;
        const total = tasks.length;
        const progress = total ? Math.round(completed / total * 100) : 0;

        $("#taskSummary").textContent =
            `${completed} tâche${completed !== 1 ? "s" : ""} terminée${completed !== 1 ? "s" : ""} sur ${total}`;

        $("#heroTasks").textContent = completed;
        $("#heroProgress").textContent = progress + "%";
        $("#heroProgressBar").style.width = progress + "%";
    }

    taskForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const text = taskInput.value.trim();
        if (!text) return;

        tasks.push({
            id: Date.now().toString() + Math.random().toString(16).slice(2),
            text,
            done: false
        });

        saveData(STORAGE_KEYS.tasks, tasks);
        taskInput.value = "";
        renderTasks();
        taskInput.focus();
    });

    renderTasks();

    // -------------------------
    // MINUTEUR DE CONCENTRATION
    // -------------------------

    let remainingSeconds = 25 * 60;
    let timerInterval = null;
    let timerRunning = false;

    const timerDisplay = $("#timerDisplay");
    const timerToggle = $("#timerToggle");
    const timerReset = $("#timerReset");
    const timerStatus = $("#timerStatus");

    function updateTimerDisplay() {
        const minutes = Math.floor(remainingSeconds / 60);
        const seconds = remainingSeconds % 60;

        timerDisplay.textContent =
            String(minutes).padStart(2, "0") + ":" +
            String(seconds).padStart(2, "0");
    }

    function stopTimer() {
        if (timerInterval !== null) {
            clearInterval(timerInterval);
            timerInterval = null;
        }

        timerRunning = false;
        timerToggle.textContent = "Démarrer";
    }

    function startTimer() {
        if (timerRunning) return;

        if (remainingSeconds <= 0) {
            timerStatus.textContent = "Choisis une nouvelle session.";
            return;
        }

        timerRunning = true;
        timerToggle.textContent = "Pause";
        timerStatus.textContent = "Session en cours. Reste concentré.";

        timerInterval = setInterval(() => {
            remainingSeconds--;
            updateTimerDisplay();

            if (remainingSeconds <= 0) {
                stopTimer();
                timerStatus.textContent = "Session terminée ! Bien joué.";
                timerDisplay.textContent = "00:00";

                if ("Notification" in window &&
                    Notification.permission === "granted") {
                    new Notification("Nexova", {
                        body: "Ta session est terminée. Prends un instant pour souffler."
                    });
                }
            }
        }, 1000);
    }

    timerToggle.addEventListener("click", () => {
        if (timerRunning) {
            stopTimer();
            timerStatus.textContent = "Minuteur en pause.";
        } else {
            startTimer();
        }
    });

    timerReset.addEventListener("click", () => {
        stopTimer();

        const activeMode = $(".mode.active");
        const minutes = Number(activeMode?.dataset.minutes || 25);

        remainingSeconds = minutes * 60;
        updateTimerDisplay();
        timerStatus.textContent = "Prêt quand tu l'es.";
    });

    $$(".mode").forEach((button) => {
        button.addEventListener("click", () => {
            stopTimer();

            $$(".mode").forEach((mode) => mode.classList.remove("active"));
            button.classList.add("active");

            remainingSeconds = Number(button.dataset.minutes) * 60;
            updateTimerDisplay();

            const labels = {
                25: "Session de concentration sélectionnée.",
                15: "Session courte sélectionnée.",
                5: "Pause sélectionnée."
            };

            timerStatus.textContent = labels[remainingSeconds / 60] || "Session sélectionnée.";
        });
    });

    updateTimerDisplay();

    // -------------------------
    // CARNET DE NOTES
    // -------------------------

    const notesInput = $("#notesInput");
    const notesStatus = $("#notesStatus");
    const clearNotes = $("#clearNotes");

    notesInput.value = loadData(STORAGE_KEYS.notes, "");

    notesInput.addEventListener("input", () => {
        saveData(STORAGE_KEYS.notes, notesInput.value);
        notesStatus.textContent = "Notes sauvegardées ✓";
    });

    clearNotes.addEventListener("click", () => {
        if (!notesInput.value) return;

        const confirmed = confirm("Veux-tu vraiment effacer toutes tes notes ?");
        if (!confirmed) return;

        notesInput.value = "";
        saveData(STORAGE_KEYS.notes, "");
        notesStatus.textContent = "Carnet effacé.";
    });

    // -------------------------
    // HABITUDES QUOTIDIENNES
    // -------------------------

    const today = new Date().toLocaleDateString("en-CA");
    let habitsData = loadData(STORAGE_KEYS.habits, {});

    if (habitsData.date !== today) {
        habitsData = { date: today, completed: [] };
        saveData(STORAGE_KEYS.habits, habitsData);
    }

    const habitCheckboxes = $$("[data-habit]");

    function renderHabits() {
        habitCheckboxes.forEach((checkbox) => {
            checkbox.checked = habitsData.completed.includes(
                checkbox.dataset.habit
            );
        });

        const completedCount = habitsData.completed.length;
        $("#habitSummary").textContent =
            `${completedCount} habitude${completedCount !== 1 ? "s" : ""} sur ${habitCheckboxes.length} accomplie${completedCount !== 1 ? "s" : ""}`;
    }

    habitCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
            const habit = checkbox.dataset.habit;

            if (checkbox.checked) {
                if (!habitsData.completed.includes(habit)) {
                    habitsData.completed.push(habit);
                }
            } else {
                habitsData.completed = habitsData.completed.filter(
                    (item) => item !== habit
                );
            }

            saveData(STORAGE_KEYS.habits, habitsData);
            renderHabits();
        });
    });

    renderHabits();
});
