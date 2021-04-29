import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message!: string;

  constructor(public sLogin: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.setMessage()
  }

        setMessage() {
          this.message = `logged ${this.sLogin.isLoggedIn ? 'in' : 'out'}`
        }


     login () {
       this.message = 'trying login'
       this.sLogin.login(this.sLogin.log, this.sLogin.pass)
       .subscribe((res: boolean) => {
        if(this.sLogin.isLoggedIn) {
          const routing = this.sLogin.redirect ? this.sLogin.redirect : '/list';
          this.router.navigate([routing])
        } 
          
        })
     }

 

}
