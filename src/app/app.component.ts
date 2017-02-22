import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';

import { SettingsPage } from '../pages/settings/settings';
import { AccountPage } from '../pages/account/account';
import { ContactPage } from './../pages/contact/contact';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = TabsPage;

  pages: Array<{ title: string, component: any, tabComponent?: any, index?: number; }>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Homepage', component: TabsPage, },
      { title: 'Settings', component: TabsPage, tabComponent: SettingsPage, index: 3 },
      { title: 'Account', component: TabsPage, tabComponent: AccountPage, index: 3 },
      { title: 'Contact', component: TabsPage, tabComponent: ContactPage , index: 2 }
    ];

  }
  openPage(page) {
    if (page.index) {
      this.nav.setRoot(page.component, { tabIndex: page.index, tabComponent: page.tabComponent });
    } else {
      this.nav.setRoot(page.component).catch(() => {
        console.log("Didn't set nav root");
      });
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
