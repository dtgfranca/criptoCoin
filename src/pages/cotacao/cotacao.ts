import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CotacaoProvider } from '../../providers/cotacao/cotacao';
import { LoadingProvider } from '../../providers/loading/loading';

/**
 * Generated class for the CotacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-cotacao',
 	templateUrl: 'cotacao.html',
 })
 export class CotacaoPage {

 	private crypto: string;
 	private currency: string;
 	public informacoes: object;
 	private market_cap_usd:number;
 	private price_usd :number;
 	private volume_usd :string;
 	private available_supply :number;
 	private percent_change_24h :number;
 	private nomeMoeda: string;

 	constructor(
 		public navCtrl: NavController, 
 		public navParams: NavParams, 
 		private cotacao: CotacaoProvider,
 		private loading: LoadingProvider) {
 	}

 	ionViewDidLoad() {
 		this.loading.presentLoading("Aguarde! Carregando informações")
 		if(this.navParams.data[0].crypto =="BTC"){
 			this.crypto ="bitcoin";
 		}

 		this.currency = this.navParams.data[0].currency;
 		this.cotacao.getCotacao(this.crypto,this.currency).subscribe(data=>{
 			this.market_cap_usd = data[0].market_cap_usd;
 			this.price_usd = data[0].price_usd;
 			this.volume_usd = "Nao informado";
 			this.available_supply = data[0].available_supply;
 			this.percent_change_24h= data[0].percent_change_24h
 			this.nomeMoeda=data[0].name;
 			this.loading.dismiss();
 			console.log(data)
 		}, err=>{
 			this.loading.dismiss();
 			console.log(err);
 		})

 	}

 }
