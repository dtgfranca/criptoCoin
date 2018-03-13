var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var NewsPage = /** @class */ (function () {
    function NewsPage(navCtrl, navParams, news, loading) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.news = news;
        this.loading = loading;
    }
    NewsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.presentLoading("Aguarde! Carregando Notícias");
        this.news.getNews("crypto-coins-news").subscribe(function (data) {
            _this.articles = data.articles;
            _this.loading.dismiss();
            console.log(data.articles);
        }, function (err) { return console.log(err); });
    };
    NewsPage.prototype.refreshNews = function (news) {
        var _this = this;
        this.news.getNews("crypto-coins-news").subscribe(function (data) {
            _this.articles = data.articles;
            _this.loading.dismiss();
            console.log(data.articles);
        }, function (err) { return console.log(err); });
    };
    NewsPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-news',
            templateUrl: 'news.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            NewsProvider,
            LoadingProvider])
    ], NewsPage);
    return NewsPage;
}());
export { NewsPage };
//# sourceMappingURL=news.js.map