# NgxsWorkshop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Outils

- Redux DevTools : https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?utm_source=chrome-ntp-icon

## Lancement du projet

```text
1. Installation des packages NPM
$ npm install && npm install node-sass
2. Lancement de l'application
$ npm start
```

Ouvrir l'adresse dans le navigateur : <http://localhost:4200/>

## Exercices

### 1) Récupérer les utilisateurs ajoutés du store

- créer un sélecteur "getUsers" dans UserState
- Utiliser ce sélecteur dans le composant UsersComponent

### 2) Au clic sur un utilisateur, ouvrir une modal de confirmation pour le supprimer

- Créer une action OpenModal qui prend l'interface IModal en paramètre de constructeur
- Créer le state comprenant la méthode open et les selecteurs "isOpened", "getTitle", "getText", "getConfirmBtn" et "getCloseBtn"
- Dans ModalComponent, conditionner son affichage en fonction de ces sélecteurs

### 3) Confirmer la suppression de l'utilisateur

- Créer une action DeleteUser dans UserState
- Ajouter l'appel à cette action dans "confirmCallback" de la modal de confirmation
- Créer une action CloseModal prenant en paramètre ModalActionsEnum et ajouter une méthode correspondante dans ModalState
- Appeler l'action "CloseModal" au click sur les boutons de fermeture de la modal et sur le bouton confirmer
- Dans le cas de la confirmation, appeler le callback "confirmCallback"