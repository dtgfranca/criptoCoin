var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HoldingsProvider } from '../providers/holdings/holdings';
import { PoloniexProvider } from '../providers/poloniex/poloniex';
import { NewsProvider } from '../providers/news/news';
import { LoadingProvider } from '../providers/loading/loading';
import { CotacaoProvider } from '../providers/cotacao/cotacao';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp
            ],
            imports: [
                BrowserModule,
                IonicModule.forRoot(MyApp, {
                    preloadModules: true
                }),
                IonicStorageModule.forRoot(),
                HttpClientModule
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp
            ],
            providers: [
                StatusBar,
                SplashScreen,
                { provide: ErrorHandler, useClass: IonicErrorHandler },
                HoldingsProvider,
                PoloniexProvider,
                NewsProvider,
                LoadingProvider,
                CotacaoProvider,
                { provide: LOCALE_ID, useValue: 'pt-BR' }
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map