import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PoloniexPage } from './poloniex';

@NgModule({
  declarations: [
    PoloniexPage,
  ],
  imports: [
    IonicPageModule.forChild(PoloniexPage),
  ],
})
export class PoloniexPageModule {}
