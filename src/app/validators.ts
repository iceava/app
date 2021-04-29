import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";



export function emailValid(control: AbstractControl): ValidationErrors | null {
    const emailRegex = /^[a-zA-Z0-9.-_]+@[a-z]+\.[a-z]{2,4}$/i;
    const value = control.value;
    const result = emailRegex.test(value)
    

if (result){
    return null;
} else {
    return {emailValidat: {value}}
}

}

export function rangeValid (min: number, max: number): ValidatorFn {
    return function (control: AbstractControl): ValidationErrors | null {
        const value  = control.value;
        if(isNaN(value)){
         return   {ageError: {value}}
        } else if(value < min || value > max) {
            return {ageError: {value}}
        } else {
            return null
        
        }
    }
}