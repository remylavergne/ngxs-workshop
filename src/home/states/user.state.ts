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

    @Action(AddUser)
    public add(ctx: StateContext<UserStateModel>, { payload }: AddUser) {
        const state = ctx.getState();
        ctx.patchState({
            users: [...state.users, payload]
        });
    }

    @Action(DeleteUser)
    public delete(ctx: StateContext<UserStateModel>, user: DeleteUser): void {
        // State actuel
        const state = ctx.getState();
        // Modification du State actuel
        ctx.patchState({
            users: [...state.users.filter(u => u.email !== user.payload.email)]
        });
    }

}
