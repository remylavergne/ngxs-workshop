import { Action, State, StateContext } from '@ngxs/store';

import { AddUser, DeleteUser } from '../actions';
import { UserStateModel } from '../models';

@State<UserStateModel>({
    name: 'users',
    defaults: {
        users: [
            {
                name: 'Rémy',
                email: 'Lavergne'
            }
        ]
    }
})
export class UserState {

    // TODO: Créer une @Action pour ajouter un utilisateur

}
