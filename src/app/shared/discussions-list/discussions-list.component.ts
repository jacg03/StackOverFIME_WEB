import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CommentaryService } from 'src/app/core/services/commentary.service';
import { NotifyService } from 'src/app/core/helpers/notify.service';

@Component({
	selector: 'app-discussions-list',
	templateUrl: './discussions-list.component.html',
	styleUrls: ['./discussions-list.component.css']
})
export class DiscussionsListComponent implements OnInit {
	@Input('array') array: any[];
	@Input('isInitial') isInitial;
	@Input('isDetail') isDetail;
	@Input('canDelete') canDelete;
	@Output('commentaryDeleted') emitter = new EventEmitter<any>();

	constructor(private router: Router,
		private commentaryService: CommentaryService,
		private notifyService: NotifyService) { }

	ngOnInit() {
	}

	goToDiscussion(id) {
		this.router.navigate(['discussion', id]);
	}

	delete(id) {
		this.notifyService
			.warningAlert('Advertencia', 'Si eliminas esta discusion, no podras volver a acceder a ella ni ver sus respuestas, ¿Deseas eliminarla de todas formas?')
			.then((result) => {
				if (result.value) {
					this.commentaryService
						.delete(id)
						.subscribe((success: any) => {
							this.emitter.emit(null);
							this.notifyService.succesAlert('Realizado', 'Discussion eliminada exitosamente');
						});
				}
			});
	}
}
