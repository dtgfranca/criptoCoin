import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CotacaoPage } from './cotacao';

import { CotacaoProvider } from '../../providers/cotacao/cotacao';
import { LoadingProvider } from '../../providers/loading/loading'

@NgModule({
  declarations: [
    CotacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(CotacaoPage),
  ],
  providers:[
  	CotacaoProvider,
  	LoadingProvider
  ]
})
export class CotacaoPageModule {}
