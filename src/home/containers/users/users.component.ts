import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';

import { IUser } from '../../interfaces';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    constructor(private store: Store) { }

    ngOnInit() {
    }

    public delete(user: IUser) {
        // TODO
    }

    // TODO replace by a selector
    public get users(): Observable<IUser[]> {
        return of(
            []
        );
    }

}
