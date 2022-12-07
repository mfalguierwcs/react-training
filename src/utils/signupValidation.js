export default function validate(formState) {
    let errors = {}
  
    if (!formState.email) {
      errors.email = "L'adresse e-mail est requise"
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      errors.email = "L'adresse e-mail est invalide"
    }

    if (!formState.password) {
      errors.password = "Le mot de passe est requis"
    } else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(formState.password)) {
      errors.password = "Mot de passe d'au moins 8 caractères et composé de minimum 1 chiffre, 1 majuscule"
    }

    if (!formState.passwordConfirmation) {
      errors.passwordConfirmation = "La confirmation du mot de passe est requise"
    } else if (formState.password !== formState.passwordConfirmation) {
      errors.passwordConfirmation = "Le champs confirmation password et différent du champs password"
    }

    return errors
  }