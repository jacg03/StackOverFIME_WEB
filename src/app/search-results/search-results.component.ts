import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentaryService } from '../core/services/commentary.service';

@Component({
	selector: 'app-search-results',
	templateUrl: './search-results.component.html',
	styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
	commentaries = [];

	constructor(private activatedRoute: ActivatedRoute,
		private commentaryService: CommentaryService) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe((params) => {
			if (params.text == '') {
				this.commentaryService
					.get()
					.subscribe((success: any) => {
						this.commentaries = success;
					});
			}
			else {
				this.commentaryService
					.search(params.text)
					.subscribe((success: any) => {
						this.commentaries = success;
					});
			}
		});
	}
}
