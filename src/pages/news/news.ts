import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import { LoadingProvider } from '../../providers/loading/loading';


/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-news',
 	templateUrl: 'news.html',
 })
 export class NewsPage {

 	articles : object;

 	constructor(
 		public navCtrl: NavController, 
 		public navParams: NavParams, 
 		private news: NewsProvider,
 		private loading: LoadingProvider
 		) {}

 	ionViewDidLoad() {

 		this.loading.presentLoading("Aguarde! Carregando Notícias");
 		this.news.getNews("crypto-coins-news").subscribe(data =>{
 			this.articles = data.articles;
 			this.loading.dismiss();
 			console.log(data.articles);
 			}, err => console.log(err)
 		)
 	}

 	refreshNews(news){
 		this.news.getNews("crypto-coins-news").subscribe(data =>{
 			this.articles = data.articles;
 			this.loading.dismiss();
 			console.log(data.articles);
 			}, err => console.log(err))
 	}

 }
