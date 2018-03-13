import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage }    from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import { forkJoin }   from 'rxjs/observable/forkJoin';
import { timeoutWith } from 'rxjs/operators';
import 'rxjs/add/observable/throw'

/*
  Generated class for the PoloniexProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PoloniexProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PoloniexProvider Provider');
  }

}
