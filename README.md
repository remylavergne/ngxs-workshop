# NgxsWorkshop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Pré-requis

- Avoir des connaissances en Angular
- Lire la documentation [ngxs](https://www.ngxs.io/)

## Lancement du projet

```text
1. Installation des packages NPM
npm install
2. Lancement de l'application
npm start
```

Ouvrir l'adresse dans le navigateur : <http://localhost:4200/>

## Exercices

Au démarrage de l'application, il n'y a aucun utilisateur enregistré dans le *State* initial.

### Créer un utilisateur

- Créer une action pour ajouter une utilisateur `src/home/actions/user/add-user.action.ts` :

```typescript
export class AddUser {
    // TODO
}
```

Cette action prend un utilisateur en paramètre. C'est cette information que nous allons garder dans le *State*.

- *Dispatch* du nouvel utilisateur dans le *Store* `src/home/home.component.html` :

```typescript
@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html'
})
export class AddUserComponent implements OnInit {

    public form: FormGroup;

    constructor(private fb: FormBuilder, private store: Store) {
        this.createForm();
    }

    ngOnInit() {
    }

   // ... Logique de formulaire pour récupérer les informations

    private addUser(user: IUser) {
        // TODO
    }
}
```

### Afficher un utilisateur

- Récupérer l'état du Store pour afficher la liste des utilisateurs enregistrés `src/home/containers/users/users.component.ts` :

```typescript
@Component({
    selector: 'app-users',
    templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

    // TODO: Ajout d'un @Select pour écouter les changements du Store

    constructor(private store: Store) { }

    ngOnInit() {
    }

}
```

- Editer la partie HMTL pour afficher la liste reçue aux changements `src/home/containers/users/users.component.html` :

```html
<table class="table table-striped">
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody>
        <!-- Afficher la liste des utilisateurs -->
    </tbody>
</table>
```

## Ressources

- [ngxs.io](https://www.ngxs.io/)