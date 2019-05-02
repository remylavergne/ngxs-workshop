import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

    @Input()
    public type: string;

    @Input()
    public id: string;

    @Input()
    public placeholder: string;

    @Input()
    public label: string;

    @Input()
    public control: FormControl;

    constructor() { }

    ngOnInit() {
    }

}
