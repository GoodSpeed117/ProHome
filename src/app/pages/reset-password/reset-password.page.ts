import { Component, OnInit } from '@angular/core';
import { AutheticationService } from 'src/app/services/authetication.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  email : any
  constructor(public route:Router,public authService:AutheticationService,private toastController: ToastController) { }

  ngOnInit() {
  }

  async resetPassword(){
    this.authService.resetPassword(this.email).then(()=>{
      console.log('resent link sent')
      this.route.navigate(['/login'])
    }
  ).catch((error =>{
    console.log(error);
  }))
  }

}
