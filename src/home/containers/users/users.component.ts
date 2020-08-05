import { Component, OnInit } from '@angular/core';
// Dépendance à la librairie ngxs
import { Store, Select } from '@ngxs/store';
import { Observable, of } from 'rxjs';

import { IUser } from '../../interfaces';
import { UserStateModel } from 'src/home/models/states/user-state.model';
import { DeleteUser } from 'src/home/actions';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

    @Select(state => state.users) users$: Observable<UserStateModel>;

    constructor(private store: Store) { }

    ngOnInit() {
    }

    public delete(user: IUser) {
      // TODO: Envoyer l'utilisateur à supprimer au Store
    }
}
