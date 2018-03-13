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
import 'rxjs/add/observable/throw';
import { getClient } from 'poloniex-exchange-api';
/*
  Generated class for the PoloniexProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
var client = getClient();
var _a = yield client.returnBalances(), status = _a.status, data = _a.data;
//const  valor = await  client.returnBalances();
var PoloniexProvider = /** @class */ (function () {
    function PoloniexProvider(http) {
        this.http = http;
        this.client = getClient({
            publicKey: '',
            privateKey: '',
        });
        console.log('Hello PoloniexProvider Provider');
    }
    PoloniexProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], PoloniexProvider);
    return PoloniexProvider;
}());
export { PoloniexProvider };
//# sourceMappingURL=poloniex.js.map