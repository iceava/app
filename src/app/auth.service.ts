import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  log!: string;
  redirect!: string;
  pass!: number;
  redirectUrl!: string;
  
adminLog(e:any){
  this.log = e.target.value
  return this.log
  console.log(this.log)
}
adminPass (e: any)  {
this.pass = +e.target.value
return this.pass
}
  constructor() { }

  

      login(log: string, pass: number): Observable<boolean> {
        const res = of(true).pipe(delay(1000));
        console.log(this.log)
        return res.pipe(map(res => log === 'admin' && pass === 12345 ? this.isLoggedIn = res : res = false));

      }

      logout ( ): boolean {
        return this.isLoggedIn = false;
      }

}
