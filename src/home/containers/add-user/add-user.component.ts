import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';

import { AddUser } from '../../actions';
import { IUser } from '../../interfaces';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

    public form: FormGroup;

    constructor(private fb: FormBuilder, private store: Store) {
        this.createForm();
    }

    ngOnInit() {
    }

    public createForm() {
        this.form = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]]
        });
    }

    public onSubmit() {
        this.addUser(this.form.value);
    }

    private addUser(user: IUser) {
        this.store.dispatch(new AddUser({ ...user })).subscribe(() => this.form.reset());
    }

}
