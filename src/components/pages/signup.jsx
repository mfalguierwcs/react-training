import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import validate from '../../utils/signupValidation'

function SignUp() {
  const initForm = {
    email: '',
    password: '',
    passwordConfirmation: ''
  }
  const ref = useRef(null)
  const [formState, setFormState] = useState(initForm)
  const [errorFormState, setErrorFormState] = useState({})
  const [isSubmittingForm, setIsSubmittingForm] = useState(false)
  const [isLive, setIsLive] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorFormState(validate(formState));
    setIsSubmittingForm(true);
    setIsLive(false)
  }

  useEffect(() => {
    setTimeout(() => {
      ref.current.style.opacity = 1
    }, 100)
  }, [])

  useEffect(() => {
    if (isSubmittingForm && Object.keys(errorFormState).length === 0 && !isLive) {
        console.log("To do post request here", formState);
        setFormState({
          email: '',
          password: '',
          passwordConfirmation: ''
        });
        setIsSubmittingForm(false);
    }
  }, [isSubmittingForm, errorFormState, formState, isLive])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleKeyUp = (e) => {
    if (isSubmittingForm) {
      setErrorFormState(validate(formState))
      setIsLive(true)
    }
  }

  console.log("error state", errorFormState)
  return (
    <div ref={ref} className='transition'>
      <h2 className="text-xl mb-2">Inscription</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email">Email : </label>
          <input
            className={`border border-slate-600 ${
              errorFormState.email && 'b-error'
            }`}
            type="text"
            id="email"
            onChange={handleChange}
            onKeyUp={handleKeyUp}
            value={formState.email}
            autoComplete="off"
          />
          {errorFormState.email ? (
            <div className="error">{errorFormState.email}</div>
          ) : null}
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password : </label>
          <input
            className={`border border-slate-600 ${
              errorFormState.password && 'b-error'
            }`}
            type="password"
            id="password"
            onChange={handleChange}
            onKeyUp={handleKeyUp}
            value={formState.password}
            autoComplete="off"
          />
          {errorFormState.password ? (
            <div className="error">{errorFormState.password}</div>
          ) : null}
        </div>
        <div className="mb-4">
          <label htmlFor="passwordConfirmation">Password confirmation : </label>
          <input
            className={`border border-slate-600 ${
              errorFormState.passwordConfirmation && 'b-error'
            }`}
            type="password"
            id="passwordConfirmation"
            onChange={handleChange}
            onKeyUp={handleKeyUp}
            value={formState.passwordConfirmation}
            autoComplete="off"
          />
          {errorFormState.passwordConfirmation ? (
            <div className="error">{errorFormState.passwordConfirmation}</div>
          ) : null}
        </div>
        <button className="bg-black text-white p-2" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  )
}

export default SignUp
