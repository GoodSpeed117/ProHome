import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutheticationService } from 'src/app/services/authetication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  user: any;

  constructor(public route: Router, public authService: AutheticationService) {
    this.user = authService.getProfile();
  }

  async logout() {
    this.authService.signOut().then(() => {
      this.route.navigate(['/landing']);
    }).catch((error) => {
      console.log(error);
    });
  }
}

