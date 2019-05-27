import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentaryService } from '../core/services/commentary.service';
import { SortService } from '../core/helpers/sort.service';

@Component({
	selector: 'app-recents',
	templateUrl: './recents.component.html',
	styleUrls: ['./recents.component.css']
})
export class RecentsComponent implements OnInit {
	array = [];

	constructor(private router: Router,
		private commentaryService: CommentaryService,
		private sortService: SortService) { }

	ngOnInit() {
		this.commentaryService
			.get()
			.subscribe((sucess: any) => {
				this.array = this.sortService.latestDate(sucess);
			});
	}

}
