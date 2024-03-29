import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm, NgModel } from '@angular/forms';
import { ServerProvider } from '../../provider/server';

import { LoadingController, AlertController } from 'ionic-angular';
import { ResultadoPage } from '../resultado/resultado';
/*
interface MeusAtributos {
  data: number,
  temperatura: number
}
*/
interface MeusAtributos {

  co: number,
  pt08co: number,
  nmhc: number,
  pt08nmhc: number,
  nox: number,
  pt08nox: number,
  no2: number,
  pt08o3: number,
  t: number,
  rh: number,
  ah: number,
}
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private atributos: MeusAtributos;
  resposta: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public serverProvider: ServerProvider, public loadingController: LoadingController,public alertCtrl: AlertController) {
   /* this.atributos = {
      data: 29112018,
      temperatura: 5681
    }
*/
  }
  calcular(form: NgForm) {

    this.atributos =
     {
        co: form.value.co,
        pt08co: form.value.pt08co,
        nmhc: form.value.nmhc,
        pt08nmhc: form.value.pt08nmhc,
        nox: form.value.nox,
        pt08nox: form.value.pt08nox,
        no2: form.value.no2,
        pt08o3: form.value.pt08o3,
        t: form.value.t,
        rh: form.value.rh,
        ah: form.value.ah
     }
     console.log(this.atributos.co);
     console.log(this.atributos.pt08co);
     console.log(this.atributos.nmhc);
     console.log(this.atributos.pt08nmhc);
     console.log(this.atributos.no2);
     console.log(this.atributos.t);
     console.log(this.atributos.rh);
     console.log(this.atributos.ah);
     
    let loader = this.loadingController.create({
      content: "aguarde..."
    });
    loader.present();
    this.serverProvider.postServer(this.atributos).then(data => {    
      console.log(JSON.stringify(data));
    loader.dismiss();
    this.navCtrl.push(ResultadoPage, { data: data });
    console.log('data: '+ data);
    })

  }




}
