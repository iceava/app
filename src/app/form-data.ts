export const ROLES: string[] = ['Guest', 'User', 'Admin'];

export const FORM_ERROR: any = {
    login: '',
    password: '',
    email: '',
    age: '',
    site: '',
    role: '',
    terms: ''

  }

  export const VALIDATION_MESAGE: any = {
    login: {
      required: 'required name',
      minlength: 'required 7 letters or digits',
      maxlength: 'too much letters or digits'
    },


    password:{
      required: ' required age',
      minlength: 'min 7 digits',
      maxlength: 'too much digits or letters'
    },
    email: {
      required: 'email is required',
      emailValidat: 'wrong email format' 
    },
    age: {
      required: 'age required',
      ageError: 'must be positive value'
    },

    site: {
    required: 'site is required for form',
    errorMesage: 'wrong site adress', 
    pending: 'pending adress is checking'
    },

    role: {
      required: 'required role',
    },
    terms: {
        required: 'please accept our condiotions'
    }
  }
