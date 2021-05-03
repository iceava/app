import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FORM_ERROR, ROLES, VALIDATION_MESAGE } from '../form-data';
import { SignSService } from '../sign-s.service';
import { User } from '../user';
import { emailValid, rangeValid } from '../validators';

@Component({
  selector: 'app-sign-form',
  templateUrl: './sign-form.component.html',
  styleUrls: ['./sign-form.component.scss']
})
 export class SignFormComponent implements OnInit {

  user: User = new User('', '', '', '',  0, '', '', '');

  roles = ROLES;
  formError = FORM_ERROR
  validatorMessage = VALIDATION_MESAGE;

  constructor(private fb: FormBuilder, public svc: SignSService) { }

  site!: AbstractControl;
  userLogin!: FormGroup;


  ngOnInit(): void {
    this.formValidator()
    this.createControl()
  }

  formValidator () {
    this.userLogin = this.fb.group({
      login:[this.user.login, [Validators.required, Validators.minLength(7), Validators.maxLength(25)]],
      password:[this.user.password, [Validators.required, Validators.minLength(7), Validators.maxLength(25)]],
      email:[this.user.email,[emailValid]],
      age:[this.user.age,[ rangeValid(1, 122)]],
      site:[this.user.site,  [Validators.required]],
      role:[this.user.role,[Validators.required]],
      terms:[this.user.terms,[Validators.required]]
    })

    this.userLogin.valueChanges.subscribe(data => this.onValueChanged(data))
  }


  createControl() {
    this.site = this.userLogin.controls.site
  }


  onValueChanged (data: any) {
    if(!this.userLogin){
      return
    }


        const form = this.userLogin


        for(const fild in this.formError){
          this.formError[fild] = ''
          const control = form.get(fild)

          if(control && control.dirty && control.invalid) {
            const mesage = this.validatorMessage[fild]
            
            for ( const key in control.errors){
              this.formError[fild] += mesage[key] + ' '
            }
          }
        }

  }


   
     onSubmit() {
       this.svc.insertUser(this.userLogin.value)
       alert('user was created')
       this.userLogin.reset()
       
     }
}

