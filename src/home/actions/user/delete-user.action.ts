import { IUser } from '../../interfaces';

export class DeleteUser {
    static readonly type = '[User] Delete';
    constructor(public payload: IUser) { }
}
