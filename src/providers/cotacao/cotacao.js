var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { timeoutWith } from 'rxjs/operators';
import 'rxjs/add/observable/throw';
/*
  Generated class for the CotacaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
var CotacaoProvider = /** @class */ (function () {
    function CotacaoProvider(http) {
        this.http = http;
        console.log('Hello CotacaoProvider Provider');
    }
    CotacaoProvider.prototype.getCotacao = function (crypto, currency) {
        return this.http.get(" https://api.coinmarketcap.com/v1/ticker/" + crypto + "/?convert=" + currency)
            .pipe(timeoutWith(5000, Observable.throw(new Error('Failed to verify holding.'))));
    };
    CotacaoProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], CotacaoProvider);
    return CotacaoProvider;
}());
export { CotacaoProvider };
//# sourceMappingURL=cotacao.js.map