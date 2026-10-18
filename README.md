# NEXOVA — Organise ton univers

**Nexova** est un site web de productivité conçu pour aider chacun à mieux organiser son quotidien, gérer ses tâches, développer de bonnes habitudes et améliorer sa concentration.

L'objectif est simple : réunir dans un espace unique, moderne et intuitif les outils essentiels pour mieux gérer son temps, suivre ses objectifs et progresser chaque jour.

---

## Sommaire

- [1. Présentation du projet](#1-présentation-du-projet)
- [2. Pourquoi Nexova ?](#2-pourquoi-nexova-)
- [3. À quoi sert le site ?](#3-à-quoi-sert-le-site-)
- [4. Fonctionnalités principales](#4-fonctionnalités-principales)
- [5. Comment fonctionne Nexova ?](#5-comment-fonctionne-nexova-)
- [6. Technologies utilisées](#6-technologies-utilisées)
- [7. Structure du projet](#7-structure-du-projet)
- [8. Installation et lancement](#8-installation-et-lancement)
- [9. Public cible](#9-public-cible)
- [10. Sécurité et stockage des données](#10-sécurité-et-stockage-des-données)
- [11. Améliorations futures](#11-améliorations-futures)
- [12. Conclusion](#12-conclusion)

---

## 1. Présentation du projet

Nexova est un projet de site web consacré à l'organisation personnelle et à la productivité.

Il propose une interface sombre, élégante et responsive, accompagnée d'outils interactifs qui permettent à l'utilisateur de planifier ses activités, de noter ses idées, de suivre ses habitudes et de travailler par sessions de concentration.

Contrairement à une simple page de présentation, Nexova intègre de véritables fonctionnalités utilisables directement dans le navigateur.

Le projet repose sur trois fichiers principaux :

- `index.html` : la structure et le contenu du site.
- `style.css` : l'apparence visuelle et l'adaptation aux différents écrans.
- `script.js` : les fonctionnalités interactives et la gestion des données locales.

## 2. Pourquoi Nexova ?

Dans la vie quotidienne, il peut être difficile de rester organisé, de hiérarchiser ses priorités et de maintenir de bonnes habitudes.

Les tâches s'accumulent, les idées se dispersent et la concentration peut diminuer.

Nexova a été imaginé pour répondre à ces difficultés en proposant un espace simple qui regroupe plusieurs outils complémentaires.

Les objectifs du projet sont les suivants :

- **Simplifier l'organisation :** centraliser les tâches et les notes.
- **Améliorer la concentration :** utiliser un minuteur pour structurer les périodes de travail.
- **Encourager la régularité :** suivre les habitudes quotidiennes.
- **Visualiser les progrès :** consulter l'avancement des tâches.
- **Faciliter l'utilisation :** proposer une interface claire, accessible et adaptée aux mobiles.
- **Rester accessible :** permettre une utilisation sans création de compte dans la version actuelle.

Nexova repose sur une idée essentielle : les progrès durables se construisent grâce à de petites actions répétées.

## 3. À quoi sert le site ?

Nexova sert de tableau de bord personnel pour mieux gérer sa journée.

Depuis une seule interface, l'utilisateur peut :

1. Ajouter les tâches qu'il souhaite accomplir.
2. Marquer les tâches terminées.
3. Consulter sa progression.
4. Lancer une session de concentration.
5. Écrire et conserver ses notes.
6. Cocher ses habitudes quotidiennes.
7. Retrouver ses données locales lors de ses prochaines visites sur le même navigateur.

Le site est conçu pour être utile aussi bien aux étudiants qu'aux professionnels, aux créateurs de contenu ou à toute personne souhaitant mieux organiser son temps.

## 4. Fonctionnalités principales

### 4.1. Gestion des tâches

Le gestionnaire de tâches permet de créer une liste d'actions à accomplir.

Fonctionnalités :

- Ajouter une tâche personnalisée.
- Marquer une tâche comme terminée.
- Supprimer une tâche.
- Afficher le nombre de tâches terminées.
- Calculer le pourcentage de progression.
- Mettre à jour les statistiques du tableau de bord.

Les tâches sont enregistrées dans le stockage local du navigateur afin d'être retrouvées lors d'une prochaine visite sur le même navigateur.

### 4.2. Minuteur de concentration

Le minuteur permet de structurer le travail et les pauses.

Trois durées sont proposées :

- **25 minutes :** session de concentration.
- **15 minutes :** session courte.
- **5 minutes :** pause rapide.

L'utilisateur peut démarrer le minuteur, le mettre en pause et le réinitialiser.

Lorsque la session se termine, l'interface affiche un message de confirmation. Une notification du navigateur peut également être envoyée si les conditions nécessaires sont réunies et que l'autorisation a été accordée.

Cette fonctionnalité s'inspire des méthodes de travail par intervalles, notamment la technique Pomodoro, sans imposer de méthode particulière.

### 4.3. Carnet de notes

Le carnet permet de conserver des idées, des rappels et des informations utiles.

Fonctionnalités :

- Écrire du texte libre.
- Enregistrer automatiquement les modifications.
- Retrouver les notes lors d'une prochaine visite.
- Effacer le contenu après confirmation.

Il est particulièrement utile pour éviter de perdre des idées ou pour préparer les tâches à effectuer.

### 4.4. Suivi des habitudes

Le suivi des habitudes encourage la régularité au quotidien.

Le site propose quatre habitudes de départ :

- Lire quelques pages.
- Pratiquer une activité physique.
- Boire suffisamment d'eau.
- Préparer la journée suivante.

L'utilisateur peut cocher chaque habitude accomplie et consulter le nombre d'habitudes validées.

Le suivi est réinitialisé automatiquement pour une nouvelle journée selon la date locale utilisée par le navigateur.

### 4.5. Tableau de bord et progression

La section d'accueil présente des indicateurs liés à l'activité de l'utilisateur.

Elle affiche notamment :

- Le nombre de tâches terminées.
- Le pourcentage de progression des tâches.
- Une barre de progression visuelle.
- Un accès rapide aux outils du site.

Ces indicateurs permettent de consulter rapidement l'avancement de son travail.

### 4.6. Interface responsive

Nexova est conçu pour s'adapter à différentes tailles d'écran :

- Ordinateurs de bureau.
- Ordinateurs portables.
- Tablettes.
- Téléphones mobiles.

La mise en page, les cartes et les éléments interactifs s'adaptent à la largeur disponible pour faciliter la navigation.

### 4.7. Questions fréquentes

Une section FAQ présente des réponses aux questions courantes concernant le fonctionnement du site, la sauvegarde des données et l'utilisation sur mobile.

---

## 5. Comment fonctionne Nexova ?

Nexova fonctionne côté navigateur.

Le fichier HTML définit les éléments affichés. Le fichier CSS détermine leur apparence. Le fichier JavaScript gère les interactions et les mises à jour de l'interface.

Le stockage local du navigateur, appelé `localStorage`, conserve les tâches, les notes et les habitudes sans nécessiter de serveur pour cette version.

Le fonctionnement général peut être résumé ainsi :

1. L'utilisateur ouvre le site.
2. Le navigateur charge les trois fichiers.
3. JavaScript récupère les données locales disponibles.
4. L'utilisateur interagit avec les différents outils.
5. Les changements sont enregistrés localement lorsque cela est prévu.
6. Les données peuvent être retrouvées lors d'une prochaine visite sur le même navigateur.

**Limite importante :** cette version ne possède pas de compte utilisateur, de base de données distante ni de synchronisation entre plusieurs appareils.

---

## 6. Technologies utilisées

### HTML5

HTML définit la structure du site : navigation, titres, sections, formulaires, boutons et contenu.

Le balisage sémantique contribue à rendre le projet plus lisible et plus facile à maintenir.

### CSS3

CSS gère l'identité visuelle du projet :

- Thème sombre.
- Palette de couleurs.
- Typographie.
- Grilles et cartes.
- Espacements et bordures.
- Effets de survol.
- Adaptation mobile grâce aux media queries.

### JavaScript

JavaScript rend le site interactif :

- Création et suppression de tâches.
- Calcul de la progression.
- Gestion du minuteur.
- Sauvegarde des notes.
- Suivi des habitudes.
- Mise à jour dynamique de l'interface.

### LocalStorage

`localStorage` permet de conserver certaines données dans le navigateur sans mettre en place de serveur.

Il est utilisé pour les tâches, les notes et les habitudes quotidiennes.

### Google Fonts

Le site utilise les polices **DM Sans** et **Space Grotesk** pour obtenir une présentation moderne. Leur chargement dépend de la disponibilité du service Google Fonts et de la connexion Internet.

---

## 7. Structure du projet

L'organisation des fichiers est la suivante :

```text
nexova/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### Rôle de chaque fichier

| Fichier | Responsabilité |
|---|---|
| `index.html` | Structure et contenu du site |
| `style.css` | Design, mise en page et responsive |
| `script.js` | Interactions et logique applicative |
| `README.md` | Documentation du projet |

Cette séparation facilite la maintenance, la correction des erreurs et l'ajout de nouvelles fonctionnalités.

---

## 8. Installation et lancement

### Prérequis

Aucun framework ni outil de compilation n'est nécessaire pour lancer la version actuelle.

Un navigateur récent suffit.

### Étape 1 — Récupérer les fichiers

Télécharge ou copie les fichiers du projet dans un même dossier nommé `nexova`.

### Étape 2 — Vérifier les fichiers

Assure-toi que les quatre fichiers suivants sont présents :

- `index.html`
- `style.css`
- `script.js`
- `README.md`

### Étape 3 — Ouvrir le site

Double-clique sur `index.html` pour ouvrir Nexova dans ton navigateur.

Pour le développement, tu peux également utiliser Visual Studio Code avec une extension de serveur local telle que Live Server.

### Étape 4 — Tester les fonctionnalités

Vérifie que tu peux :

- Ajouter et supprimer une tâche.
- Marquer une tâche comme terminée.
- Démarrer et réinitialiser le minuteur.
- Écrire et effacer des notes.
- Cocher et décocher des habitudes.
- Utiliser le site sur un écran mobile.

---

## 9. Public cible

Nexova peut être utilisé par différents profils.

**Étudiants :** pour planifier les révisions, organiser les devoirs et structurer les périodes de travail.

**Professionnels :** pour noter les priorités et garder une vue d'ensemble sur les tâches quotidiennes.

**Entrepreneurs et créateurs :** pour organiser les idées, structurer les sessions de travail et suivre certaines routines.

**Toute personne souhaitant s'organiser :** pour centraliser des tâches, des notes et des habitudes dans une interface unique.

Le site n'est pas réservé à un secteur particulier : son objectif est de faciliter l'organisation personnelle.

---

## 10. Sécurité et stockage des données

Dans la version actuelle, les tâches, les notes et les habitudes sont conservées dans le stockage local du navigateur.

Cela signifie que :

- Aucune inscription n'est requise.
- Aucune synchronisation distante n'est intégrée.
- Les données ne sont pas automatiquement transférées vers un serveur Nexova.
- Les données peuvent disparaître si le stockage du navigateur est effacé.
- Les données ne sont pas automatiquement partagées entre différents appareils ou navigateurs.

Il est préférable de ne pas enregistrer de mots de passe, de données financières ou d'informations confidentielles dans le carnet.

Le stockage local apporte de la simplicité, mais ne remplace pas un système sécurisé de sauvegarde ou de gestion de comptes.

---

## 11. Améliorations futures

Nexova peut évoluer vers une plateforme de productivité plus complète.

Les fonctionnalités suivantes pourraient être ajoutées progressivement.

### Comptes utilisateurs

Permettre à chaque utilisateur de créer un compte et de retrouver ses données après connexion.

### Synchronisation dans le cloud

Sauvegarder les tâches, les notes et les habitudes sur un serveur afin de les retrouver sur plusieurs appareils.

### Calendrier intégré

Ajouter une vue quotidienne, hebdomadaire ou mensuelle pour planifier les tâches et les échéances.

### Catégories et priorités

Permettre de classer les tâches par projet, niveau de priorité, date limite ou statut.

### Statistiques avancées

Afficher l'évolution de la productivité, les habitudes les plus régulières et l'historique des sessions de concentration.

### Personnalisation

Proposer différents thèmes, des paramètres d'affichage et des objectifs personnalisés.

### Notifications et rappels

Permettre de programmer des rappels pour les tâches et les habitudes.

### Version mobile avancée

Développer une expérience mobile enrichie, voire une application installable de type PWA.

Ces améliorations nécessiteraient, selon les fonctionnalités choisies, une architecture supplémentaire, par exemple un backend, une base de données et un système d'authentification.

---

## 12. Conclusion

Nexova est une première version fonctionnelle d'un espace personnel de productivité. Il rassemble des outils simples pour organiser les tâches, améliorer la concentration, conserver des notes et suivre des habitudes.

Le projet repose sur une base accessible : HTML, CSS et JavaScript, avec un stockage local dans le navigateur.

Son architecture séparée permet de comprendre facilement le code, de le personnaliser et de le faire évoluer progressivement.

**La vision de Nexova :** rendre l'organisation quotidienne plus simple, encourager la régularité et aider chacun à avancer vers ses objectifs, un jour à la fois.

---

*Projet Nexova — Organise ton univers. Construis tes habitudes. Avance chaque jour.*
