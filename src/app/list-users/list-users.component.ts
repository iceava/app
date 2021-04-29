import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { SignSService } from '../sign-s.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  constructor(public svc: SignSService, private sLogin: AuthService, private router: Router) { }

  ngOnInit(): void {
   
  }

  logout() {
    this.sLogin.logout()
    this.router.navigate(['/home'])
    } 

    getData() {
      this.svc.getUser()
    }

    deleteUser(users: any): void{
       this.svc.deleteUser(users).subscribe(() => {
         this.svc.users.splice(this.svc.users.indexOf(users), 1)
         alert('user was deleted')
       })
    }
   
}
