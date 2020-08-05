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

⚠️ Toutes les modifications / solutions sont ici, pour commencer le tutorial, vous devez vous placer sur la branche <https://github.com/remylavergne/ngxs-workshop/tree/add-user>

### Créer un utilisateur (Branche : <https://github.com/remylavergne/ngxs-workshop/tree/add-user>)

- Créer une action pour ajouter une utilisateur `src/home/actions/user/add-user.action.ts` :

```typescript
export class AddUser {
    static readonly type = '[User] Add';
    constructor(public payload: IUser) { }
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
        this.store.dispatch(new AddUser({ ...user })).subscribe(() => this.form.reset());
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

    // Ajout d'un @Select pour écouter les changements du Store
    @Select(state => state.users) users$: Observable<UserStateModel>;

    constructor(private store: Store) { }

    ngOnInit() {
    }

    public delete(user: IUser) {
       this.store.dispatch(new DeleteUser({...user})).subscribe(() => console.log(`${user.email} supprimé`));
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
        <tr *ngFor="let user of (users$ | async).users" (click)="delete(user)">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
        </tr>
    </tbody>
</table>
```

### Supprimer un utilisateur (Branche : <https://github.com/remylavergne/ngxs-workshop/tree/delete-user>)

- Créer la classe permettant de définir l'action `src/home/actions/user/delete-user.action.ts` :

```typescript
export class DeleteUser {
    static readonly type = '[User] Delete';
    constructor(public payload: IUser) { }
}
```

- Créer une action pour supprimer un utilisateur `src/home/states/user.state.ts` :

```typescript
@State<UserStateModel>({
    name: 'users',
    defaults: {
        users: []
    }
})
export class UserState {

   // ...

    @Action(DeleteUser)
    public delete(ctx: StateContext<UserStateModel>, user: DeleteUser): void {
        // State actuel
        const state = ctx.getState();
        // Modification du State actuel en supprimant l'utilisateur cliqué 
        ctx.patchState({
            users: [...state.users.filter(u => u.email !== user.payload.email)]
        });
    }
}
```

## Ressources

- [ngxs.io](https://www.ngxs.io/)