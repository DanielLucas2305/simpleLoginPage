import { Users } from './../../models/aula.model';
import { AulaService } from './../../aula.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private authService: AulaService) { }

  router: any;

  email: string = "";
  senha: string = "";

  login() {
    this.authService.authenticate({ email: this.email, senha: this.senha }).subscribe(response => {
      // console.log(this.email, this.senha)
      console.log("Talvez sim");
      this.router.navigate(['/forget-password']);
    }, error => {
      console.log("");
      console.log(error);
    });
  }

}
