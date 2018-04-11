import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Status:string;

  constructor(private storage:Storage, public navCtrl: NavController) {

  }

  updateStatus()
  {
    this.navCtrl.push("StatusPage");
  }

  ionViewWillEnter()
  {
    this.storage.get("Status").then((data)=>{this.Status = data; })
    .catch((err) => { console.log("database retrieval err")})
  }
}
