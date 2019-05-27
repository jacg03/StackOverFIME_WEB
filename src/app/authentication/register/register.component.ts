import { Component } from '@angular/core';
import { ModalService } from 'src/app/core/helpers/modal.service';
import { UserService } from '../../core/services/user.service';
import { NotifyService } from 'src/app/core/helpers/notify.service';
import { AuthService } from 'src/app/core/helpers/auth.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent {
	data: any = {
		Id: '00000000-0000-0000-0000-000000000000',
		Name: '',
		UserName: '',
		Password: '',
		Active: true,
		CreatedAt: new Date(),
		UpdatedAt: new Date()
	};

	constructor(
		private modalService: ModalService,
		private userService: UserService,
		private notifyService: NotifyService,
		private authService: AuthService) { }

	save() {
		this.userService
			.registerUser(this.data)
			.subscribe((success: any) => {
				this.notifyService.succesAlert('Guardado', '¡Usuario registrado exitosamente!')
				sessionStorage.setItem('user', JSON.stringify({ Name: success.Name, Id: success.Id }));
				this.authService.setCredentials({ Name: success.Name, Id: success.Id });
				this.modalService.setModalShowed('');
			});
	}

	goToLogin() {
		this.modalService.setModalShowed('login');
	}

	hideModal() {
		this.modalService.setModalShowed('');
	}
}
