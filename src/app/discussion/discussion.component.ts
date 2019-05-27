import { Component, OnInit } from '@angular/core';
import { CommentaryService } from '../core/services/commentary.service';
import { ActivatedRoute } from '@angular/router';
import { SortService } from '../core/helpers/sort.service';

@Component({
	selector: 'app-discussion',
	templateUrl: './discussion.component.html',
	styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent implements OnInit {
	discussion: any[] = [];
	commentaries: any[] = [
		{
			id: '0'
		},
		{
			id: '1'
		},
		{
			id: '2'
		},
		{
			id: '3'
		},
		{
			id: '4'
		}
	];

	constructor(private activatedRoute: ActivatedRoute,
		private commentaryService: CommentaryService,
		private sortService: SortService) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe((params) => {
			this.commentaryService
				.getById(params.id)
				.subscribe((success: any) => {
					this.discussion = [success];
					this.loadCommentaries(success.Id);
				});
		})
	}


	loadCommentaries(id) {
		this.commentaryService
			.getByParentId(id)
			.subscribe((success: any) => {
				this.commentaries = this.sortService.latestDate(success);
			});
	}
}
