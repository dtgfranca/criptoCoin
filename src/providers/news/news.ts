import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { forkJoin }   from 'rxjs/observable/forkJoin';
import { timeoutWith } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  @Injectable()
  export class NewsProvider {

  	private apiKey="31748d861a3640b2ae348b30cd2fe044";

  	constructor(public http: HttpClient) {
  		console.log('Hello NewsProvider Provider');
  	}


  	getNews(sources): Observable<any>{
  		return this.http.get('https://newsapi.org/v2/top-headlines?sources='+sources+ '&apiKey='+this.apiKey)
  		.pipe(
  			timeoutWith(5000, Observable.throw(new Error('Failed to verify holding.')))
  			);

  	}
  }
