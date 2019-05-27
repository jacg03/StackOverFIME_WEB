import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommentaryService } from '../../core/services/commentary.service';
import { ModalService } from 'src/app/core/helpers/modal.service';
import { NotifyService } from 'src/app/core/helpers/notify.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-response-form',
	templateUrl: './response-form.component.html',
	styleUrls: ['./response-form.component.css']
})
export class ResponseFormComponent implements OnInit {
	@Input('initialId') initialId: string;
	@Output('responseAdded') emitter = new EventEmitter<any>();
	credentials = JSON.parse(sessionStorage.getItem('user'));
	text: string = '';

	constructor(private router:Router,
		private commentaryservice: CommentaryService,
		private modalService: ModalService,
		private notifyService: NotifyService) { }

	ngOnInit() {
	}

	add() {
		let c = JSON.parse(sessionStorage.getItem('user'));
		if (c != null) {
			this.commentaryservice
				.addCommentary({
					ParentId: this.initialId,
					Text: this.text,
					UserId: c.Id
				})
				.subscribe((success: any) => {
					this.notifyService.succesAlert('Guardado', 'Respuesta publicada exitosamente');
					this.emitter.emit(null);
					this.text = '';
				});
		}
		else {
			this.modalService.setModalShowed('login');
		}
	}
}
