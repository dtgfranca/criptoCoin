import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { forkJoin }   from 'rxjs/observable/forkJoin';
import { timeoutWith } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

/*
  Generated class for the CotacaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  @Injectable()
  export class CotacaoProvider {

  	constructor(public http: HttpClient) {
  		console.log('Hello CotacaoProvider Provider');
  	}

  	getCotacao(crypto, currency): Observable<any>{
  		return this.http.get(" https://api.coinmarketcap.com/v1/ticker/"+crypto+"/?convert="+currency)
  		.pipe(
  			timeoutWith(5000, Observable.throw(new Error('Failed to verify holding.')))
  			);

  	}
  }
