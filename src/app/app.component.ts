import { ViewChild, Component } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;
	rootPage:string = 'HomePage';
  //rootPage:string = 'NewsPage';
  pages: Array<{title: string, component: any, icon:any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
  	platform.ready().then(() => {

  	});

  	this.pages = [
    { title: 'Início', component:'HomePage',icon:"home"  },
    { title: 'Noticias', component:'NewsPage',icon:"list-box" }
    


    ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.title=='Início'){

      this.nav.setRoot(page.component);
    }else{

      this.nav.push(page.component);
    }
    
  }
}

