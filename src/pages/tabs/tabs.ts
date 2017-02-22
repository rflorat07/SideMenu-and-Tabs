import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;
  tab4Root: any;
  shouldHide = false;

  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.tab4Root = navParams.data.tabComponent || ContactPage;
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }
}
