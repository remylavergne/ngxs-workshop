import { State } from '@ngxs/store';

import { ModalStateModel } from '../models';

// import { CloseModal, OpenModal } from '../actions';
@State<ModalStateModel>({
    name: 'modal',
    defaults: {
        modal: undefined
    }
})
export class ModalState {

    // TODO

}
