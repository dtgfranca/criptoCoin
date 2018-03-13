import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsPage } from './news';
import { NewsProvider } from '../../providers/news/news';
import { LoadingProvider } from '../../providers/loading/loading';

@NgModule({
  declarations: [
    NewsPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsPage),
  ],
  providers:[
  	NewsProvider,
  	LoadingProvider
  	]
})
export class NewsPageModule {}
