import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  log: string = 'admin';
  redirect!: string;
  pass: number = 12345;
  redirectUrl!: string;
  

  
  constructor() { }

  

      login(log: string, pass: number): Observable<boolean> {
        const res = of(true).pipe(delay(1000));

        return res.pipe(map(res => log === 'admin' && pass === 12345 ? this.isLoggedIn = res : res = false));

      }

      logout ( ): boolean {
        return this.isLoggedIn = false;
      }

}
