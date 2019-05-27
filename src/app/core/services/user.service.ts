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

export class UserService {
	public serviceName = 'Users';

	constructor(private http: HttpClient) { }

	public registerUser(body) {
		return this.http.post(`${URLS.API}${this.serviceName}`, body, httpOptions);
	}

	public login(body) {
		return this.http.post(`${URLS.API}${this.serviceName}/Login`, body, httpOptions);
	}
}
