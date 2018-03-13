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
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
var NewsProvider = /** @class */ (function () {
    function NewsProvider(http) {
        this.http = http;
        this.apiKey = "31748d861a3640b2ae348b30cd2fe044";
        console.log('Hello NewsProvider Provider');
    }
    NewsProvider.prototype.getNews = function (sources) {
        return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + sources + '&apiKey=' + this.apiKey)
            .pipe(timeoutWith(5000, Observable.throw(new Error('Failed to verify holding.'))));
    };
    NewsProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], NewsProvider);
    return NewsProvider;
}());
export { NewsProvider };
//# sourceMappingURL=news.js.map