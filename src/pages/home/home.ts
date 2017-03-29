import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
// import moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
    public navCtrl: NavController
  ) {
    // console.log(moment().format('dddd'))
  }
}
