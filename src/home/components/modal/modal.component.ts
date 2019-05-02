import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';

// import { CloseModal } from '../../actions';
@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

    constructor(private store: Store) { }

    public close(): void {
        // TODO
    }

    public confirm(): void {
        // TODO
    }

    // TODO replace by selector
    public get isOpened(): Observable<boolean> {
        return of(false);
    }

    // TODO replace by selector
    public get title(): Observable<string> {
        return of('');
    }

    // TODO replace by selector
    public get text(): Observable<string> {
        return of('');
    }

    // TODO replace by selector
    public get confirmBtn(): Observable<string> {
        return of('');
    }

    // TODO replace by selector
    public get closeBtn(): Observable<string> {
        return of('');
    }

}
