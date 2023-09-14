const validation = (userData) => {
  
    const errors = {}

    if(!/\S+@\S+\.\S+/.test(userData.email)) {
       errors.email = 'El usuario tiene que ser un email';
      } 
      if (!userData.email) {
        errors.email = 'Tenes que ingresar un email'
      }
      if (userData.email.length > 35) {
        errors.email = 'Tu mail no puede exceder los 35 caracteres'
      }
      if (!/.*\d+.*/.test(userData.password)) {
        errors.password = 'Necesita por lo menos un digito'
      }
      if (userData.password.length < 6 && userData.password.length > 10 ) {
        errors.password = 'La contraseña tiene que ser entre 6 y 10 caracteres'
      }

      return errors;
      }

export default validation