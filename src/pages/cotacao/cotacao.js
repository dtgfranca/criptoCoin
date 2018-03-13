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
import { CotacaoProvider } from '../../providers/cotacao/cotacao';
import { LoadingProvider } from '../../providers/loading/loading';
/**
 * Generated class for the CotacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CotacaoPage = /** @class */ (function () {
    function CotacaoPage(navCtrl, navParams, cotacao, loading) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cotacao = cotacao;
        this.loading = loading;
    }
    CotacaoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.presentLoading("Aguarde! Carregando informações");
        if (this.navParams.data[0].crypto == "BTC") {
            this.crypto = "bitcoin";
        }
        this.currency = this.navParams.data[0].currency;
        this.cotacao.getCotacao(this.crypto, this.currency).subscribe(function (data) {
            _this.market_cap_usd = data[0].market_cap_usd;
            _this.price_usd = data[0].price_usd;
            _this.volume_usd = "Nao informado";
            _this.available_supply = data[0].available_supply;
            _this.percent_change_24h = data[0].percent_change_24h;
            _this.nomeMoeda = data[0].name;
            _this.loading.dismiss();
            console.log(data);
        }, function (err) {
            _this.loading.dismiss();
            console.log(err);
        });
    };
    CotacaoPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-cotacao',
            templateUrl: 'cotacao.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            CotacaoProvider,
            LoadingProvider])
    ], CotacaoPage);
    return CotacaoPage;
}());
export { CotacaoPage };
//# sourceMappingURL=cotacao.js.map