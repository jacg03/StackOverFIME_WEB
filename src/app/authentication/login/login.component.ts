import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/core/helpers/modal.service';
import { UserService } from 'src/app/core/services/user.service';
import { AuthService } from 'src/app/core/helpers/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	data: any = {
		UserName: '',
		Password: ''
	};

	constructor(
		private modalService: ModalService,
		private userService: UserService,
		private authService: AuthService) { }

	ngOnInit() {
	}

	login() {
		this.userService
			.login(this.data)
			.subscribe((success: any) => {
				sessionStorage.setItem('user', JSON.stringify(success));
				this.authService.setCredentials(success);
				this.modalService.setModalShowed('');
			});
	}

	goToRegister() {
		this.modalService.setModalShowed('register');
	}

	hideModal() {
		this.modalService.setModalShowed('');
	}
}
