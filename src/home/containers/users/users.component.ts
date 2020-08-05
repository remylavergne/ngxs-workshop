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

    // TODO: Ajouter un @Select pour écouter les changements du Store

    constructor(private store: Store) { }

    ngOnInit() {
    }

}
