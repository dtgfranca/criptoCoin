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
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { timeoutWith } from 'rxjs/operators';
import 'rxjs/add/observable/throw';
var HoldingsProvider = /** @class */ (function () {
    function HoldingsProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.holdings = [];
        this.pricesUnavailable = false;
    }
    HoldingsProvider.prototype.addHolding = function (holding) {
        this.holdings.push(holding);
        this.fetchPrices();
        this.saveHoldings();
    };
    HoldingsProvider.prototype.removeHolding = function (holding) {
        this.holdings.splice(this.holdings.indexOf(holding), 1);
        this.fetchPrices();
        this.saveHoldings();
    };
    HoldingsProvider.prototype.saveHoldings = function () {
        this.storage.set('cryptoHoldings', this.holdings);
    };
    HoldingsProvider.prototype.loadingHoldings = function () {
        var _this = this;
        this.storage.get('cryptoHoldings').then(function (holdings) {
            if (holdings !== null) {
                _this.holdings = holdings;
                _this.fetchPrices();
            }
        });
    };
    HoldingsProvider.prototype.verifyHolding = function (holding) {
        return this.http.get('https://api.cryptonator.com/api/ticker/' + holding.crypto + '-' + holding.currency)
            .pipe(timeoutWith(5000, Observable.throw(new Error('Failed to verify holding.'))));
    };
    HoldingsProvider.prototype.fetchPrices = function (refresher) {
        var _this = this;
        var requests = [];
        for (var _i = 0, _a = this.holdings; _i < _a.length; _i++) {
            var holding = _a[_i];
            var request = this.http.get('https://api.cryptonator.com/api/ticker/' + holding.crypto + '-' + holding.currency);
            requests.push(request);
        }
        forkJoin(requests).pipe(timeoutWith(5000, Observable.throw(new Error('Failed to fetch prices.'))))
            .subscribe(function (results) {
            results.forEach(function (result, index) {
                _this.holdings[index].value = result.ticker.price;
            });
            if (typeof (refresher) !== 'undefined') {
                refresher.complete();
            }
            _this.saveHoldings();
        }, function (err) {
            if (typeof (refresher) !== 'undefined') {
                refresher.complete();
            }
        });
    };
    HoldingsProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, Storage])
    ], HoldingsProvider);
    return HoldingsProvider;
}());
export { HoldingsProvider };
//# sourceMappingURL=holdings.js.map