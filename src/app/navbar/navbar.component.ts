import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/core/helpers/modal.service';
import { AuthService } from '../core/helpers/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	isHome = true;
	Name = '';
	searchText:string = '';

	constructor(private modalService: ModalService,
		private authService: AuthService,
		private router:Router) { }

	ngOnInit() {
		this.authService
			.getCredentials()
			.subscribe((success: any) => {
				this.Name = success.Name
			});
		let c = JSON.parse(sessionStorage.getItem('user'));
		this.Name = c != null ? c.Name : '';
	}

	goToLogin() {
		this.modalService.setModalShowed('login');
	}

	logout(){
		sessionStorage.removeItem('user');
		this.authService.setCredentials('');
		this.Name = '';
	}

	goToSearch(){
		this.router.navigate(['search-results', this.searchText]);
	}
}
