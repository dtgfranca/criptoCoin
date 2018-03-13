import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HistoricoPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html'
})
export class HistoricoPage {

  cotacaoRoot = 'CotacaoPage'
  lembreteRoot = 'LembretePage'
  holding;


  constructor(public navCtrl: NavController, private navParams: NavParams) {
  	this.holding =navParams.get('holding');
  	console.log(navParams.get('holding'));
  }

}
