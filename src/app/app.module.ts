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


@NgModule({
  declarations: [
    MyApp
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HoldingsProvider,
    PoloniexProvider,
    NewsProvider,
    LoadingProvider,
    CotacaoProvider,
    {provide:LOCALE_ID, useValue:'pt-BR'}
  ]
})
export class AppModule {}
