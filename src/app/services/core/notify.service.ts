import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from '../../componets/alert-modal/alert-modal.component';


enum AlertTypes {
    DANGER = 'danger',
    SUCCESS = 'success',
    WARNING = 'warning'
}

@Injectable({
    providedIn: 'root'
})
export class NotifyService {
    constructor(
        private modalService: BsModalService,
    ) { }

    private showAlert(message: any, type: string, dismissTimeOut?: number) {
        const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
        bsModalRef.content.type = type;
        bsModalRef.content.message = message;

        if (dismissTimeOut) {
            setTimeout(() => bsModalRef.hide(), dismissTimeOut);
        }
    }

    showAlertDanger(message: any, dismissTimeOut?: number) {
        this.showAlert(message, AlertTypes.DANGER, dismissTimeOut)
    }

    showAlertSuccess(message: any, dismissTimeOut?: number) {
        this.showAlert(message, AlertTypes.SUCCESS, dismissTimeOut);
    }

    showAlertWarning(message: any, dismissTimeOut?: number) {
        this.showAlert(message, AlertTypes.WARNING, dismissTimeOut);
    }
}