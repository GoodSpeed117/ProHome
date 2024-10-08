import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AutheticationService } from 'src/app/services/authetication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm : FormGroup
  constructor(public route : Router,public formBuilder:FormBuilder,public loadingController: LoadingController,public authService:AutheticationService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email : ['',[
        Validators.required,
        Validators.email,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
      ]],
      password : ['',[
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-8])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'),
      ]]
    })
  }

  get errorControl() {
    return this.loginForm?.controls;
  }
  async login() {
    const loading = await this.loadingController.create();
    await loading.present();
  
    if (this.loginForm?.valid) {
      try {
        const userCredential = await this.authService.loginUser(
          this.loginForm.value.email,
          this.loginForm.value.password
        );
  
        if (userCredential && userCredential.user) {
          console.log('Login Successful:', userCredential.user);
          await loading.dismiss();
          this.route.navigate(['/home']); // Redirigir a home dentro de tabs
        } else {
          console.log('Login failed: No user returned');
          await loading.dismiss();
        }
      } catch (error) {
        console.error('Error during login:', error.message);
        await loading.dismiss();
      }
    } else {
      console.log('Form is invalid');
      await loading.dismiss();
    }
  }

}
