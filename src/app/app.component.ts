import { Component, OnInit } from '@angular/core';
import { ModalService } from './core/helpers/modal.service';
import { AuthService } from 'src/app/core/helpers/auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'StackOverFIME';
	modalShowed = '';

	constructor(private modalService: ModalService,
		private authService: AuthService) {
	}

	ngOnInit() {
		this.modalService
			.getModalShowed()
			.subscribe((success: any) => {
				this.modalShowed = success;
			});
		let credentials = JSON.parse(sessionStorage.getItem('user'));
		if (credentials) {
			this.authService.setCredentials(credentials);
		}
		else {
			this.modalService.setModalShowed('login');
		}
	}
}
