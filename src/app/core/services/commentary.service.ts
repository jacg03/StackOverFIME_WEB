import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URLS } from '../config/constants';

export const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	})
};

@Injectable({
	providedIn: 'root'
})

export class CommentaryService {
	public serviceName = 'Commentaries';

	constructor(private http: HttpClient) { }

	public addCommentary(body){
		return this.http.post(`${URLS.API}${this.serviceName}`, body)
	}

	public getByUserId (id) {
		return this.http.get(`${URLS.API}${this.serviceName}/GetInitialsByUserId/${id}`);
	}

	public getByParentId (id) {
		return this.http.get(`${URLS.API}${this.serviceName}/GetByInitialId/${id}`);
	}

	public get() {
		return this.http.get(`${URLS.API}${this.serviceName}`);
	}

	public getById(id) {
		return this.http.get(`${URLS.API}${this.serviceName}/${id}`);
	}

	public search(text) {
		return this.http.get(`${URLS.API}${this.serviceName}/Search/${text}`);
	}

	public delete(id) {
		return this.http.delete(`${URLS.API}${this.serviceName}/${id}`);
	}
}
