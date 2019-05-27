import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentaryService } from '../core/services/commentary.service';
import { ModalService } from '../core/helpers/modal.service';
import { NotifyService } from 'src/app/core/helpers/notify.service';

@Component({
	selector: 'app-add-discussion',
	templateUrl: './add-discussion.component.html',
	styleUrls: ['./add-discussion.component.css']
})
export class AddDiscussionComponent implements OnInit {
	date: Date = new Date();
	text: string = '';

	constructor(private router: Router,
		private commentaryservice: CommentaryService,
		private modalService:ModalService,
		private notifyService: NotifyService) { }

	ngOnInit() {
	}

	add() {
		let c = JSON.parse(sessionStorage.getItem('user'));
		if (c != null) {
			this.commentaryservice
				.addCommentary({
					ParentId: null,
					Text: this.text,
					UserId: c.Id
				})
				.subscribe((success: any) => {
					this.notifyService.succesAlert('Guardado', 'Discussion publicada exitosamente');
					this.router.navigate(['my-discussions']);
				});
		}
		else {
			this.modalService.setModalShowed('login');
		}
	}

	goBack() {
		this.router.navigate(['']);
	}
}
