import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { LoadingController, Loading } from 'ionic-angular';

/*
  Generated class for the LoadingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  @Injectable()
  export class LoadingProvider {

  	private loading: Loading;
  	constructor(public http: HttpClient, private loadingCtrl: LoadingController ) {
  		
  	}

  	presentLoading(message: string){
  		this.loading = this.loadingCtrl.create({
  			content: message
  		});
  		this.loading.present();
  	}

  	dismiss(){
  		if(this.loading){
  			this.loading.dismiss();
  		}
  	}
  }
