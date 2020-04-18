import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage }    from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import { forkJoin }   from 'rxjs/observable/forkJoin';
import { timeoutWith } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

//import { getClient, IPoloniexClient } from 'poloniex-exchange-api';

/*
  Generated class for the PoloniexProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */

  //const client: IPoloniexClient = getClient();
 // const { status, data } = await client.returnBalances();

//const  valor = await  client.returnBalances();
  @Injectable()
  export class PoloniexProvider {

  	constructor(public http: HttpClient) {
  		console.log('Hello PoloniexProvider Provider');
  	}



	 //client: IPoloniexClient = getClient({
       //     publicKey : '', // Your public key
          //  privateKey: '', // Your private key
      // });


  	 

  }
