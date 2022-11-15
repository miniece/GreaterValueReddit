import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaupersReddit } from './PaupersReddit';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PaupersRedditService {
	baseURL: string = 'https://www.reddit.com/r/';
	constructor(private http: HttpClient) {}

	GetPostByName(name: string): Observable<PaupersReddit> {
		return this.http.get<PaupersReddit>(this.baseURL + name + '.json');
	}
}
