import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SortService {

	latestDate(array) {
		return array.sort((a: any, b: any) => {
			a = new Date(a.CreatedAt);
			b = new Date(b.CreatedAt);
			return a > b ? -1 : a < b ? 1 : 0;
		});
	}
}
