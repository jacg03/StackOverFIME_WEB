import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentaryService } from '../core/services/commentary.service';
import { ModalService } from '../core/helpers/modal.service';
import { AuthService } from 'src/app/core/helpers/auth.service';
import { SortService } from '../core/helpers/sort.service';

@Component({
	selector: 'app-discussions',
	templateUrl: './discussions.component.html',
	styleUrls: ['./discussions.component.css']
})
export class DiscussionsComponent implements OnInit {
	array = [];

	userId = JSON.parse(sessionStorage.getItem('user')) != null ? JSON.parse(sessionStorage.getItem('user')).Id : '';

	constructor(private router: Router,
		private commentaryService: CommentaryService,
		private modalService: ModalService,
		private authService: AuthService,
		private sortService: SortService) { }

	ngOnInit() {
		this.authService
			.getCredentials()
			.subscribe((success: any) => {
				this.userId = success.Id;
				this.loadCommentaries();
			});
		if (this.userId != '') {
			this.loadCommentaries();
		}
		else {
			this.modalService.setModalShowed('login');
		}
	}

	loadCommentaries() {
		this.commentaryService
			.getByUserId(this.userId)
			.subscribe((success: any) => {
				let temp = [];
				for (let obj of success) {
					obj['Name'] = JSON.parse(sessionStorage.getItem('user')).Name;
					temp.push(obj);
				}
				this.array = this.sortService.latestDate(temp);
			});
	}
}
