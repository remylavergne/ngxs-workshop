import { IUser } from '../../interfaces';

export class AddUser {
    static readonly type = '[User] Add';
    constructor(public payload: IUser) { }
}
