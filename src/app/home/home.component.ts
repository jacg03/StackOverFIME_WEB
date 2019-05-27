import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent {
	searchText: string = '';

	constructor(private router: Router) { }

	addDiscussion() {
		this.router.navigate(['add-discussion']);
	}

	goToSearch() {
		this.router.navigate(['search-results', this.searchText]);
	}
}
