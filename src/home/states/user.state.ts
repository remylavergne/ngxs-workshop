import { Action, State, StateContext } from '@ngxs/store';

import { AddUser } from '../actions';
import { UserStateModel } from '../models';

@State<UserStateModel>({
    name: 'users',
    defaults: {
        users: []
    }
})
export class UserState {

    @Action(AddUser)
    add(ctx: StateContext<UserStateModel>, { payload }: AddUser) {
        const state = ctx.getState();
        ctx.patchState({
            users: [...state.users, payload]
        });
    }
}
