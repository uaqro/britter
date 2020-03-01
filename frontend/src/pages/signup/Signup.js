import React, {useContext} from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import { useHistory, Link } from "react-router-dom";
import {useStateContext} from '../../hooks/useStateContext';
import { SignupStyles, SignupHeaderStyles } from './SignupStyles';
import { MyContext } from "../../contexts/context";
import { ReactComponent as Logo } from '../../assets/assets_Search_2020-03-01/britte-r.svg';
const Signup = props => {
  const context = useContext(MyContext);
  const  [state, action]  = useStateContext();
  const { handleSubmit, register, errors } = useForm({
    defaultValues: state.formSignup
  });
  const { push } = useHistory();
  const onSubmit = data => { 
    action(state, data); //here we are setting the formSignup
    context.handleSignup(()=>{
      push("/profile");
    });
  };

  return (
    <div style={{background:'#e2e8f0', height:'100vh', width:'100vw'}}>
      <SignupHeaderStyles>
      <div className='icon-container'>
          <Logo className='icon'/>
      </div>
        <h4>Iniciar sesión</h4>
        <span>
            Si aun no tienes una cuenta, crea una {" "}
            <Link to="/signup">aqui</Link>
        </span>
      </SignupHeaderStyles>
      <SignupStyles onSubmit={handleSubmit(onSubmit)}>
        <label>
          <strong>Numero de Cuenta:</strong>
          <input
            name="cc"
            placeholder='Numero de cuenta'
            type="text"
            ref={register({
              required: "Este campo es requerido",
              pattern: {
                value: /[0-9]/i,
                message: "Debes ingresar solo digitos"
              },
              maxLength: {
                value:10,
                message:"El numero de cuenta debe tener 10 digitos"
              },
              minLength: {
                value:10,
                message:"El numero de cuenta debe tener 10 digitos"
              }
            })}
          />
          <ErrorMessage errors={errors} name="cc" as="p" />
        </label>
        <label>
          <strong>Correo:</strong>
          <input
            name="email"
            placeholder='correo'
            type="text"
            ref={register({
              required: "Este campo es requerido",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Dirección de correo invalida"
              }
            })}
          />
          <ErrorMessage errors={errors} name="email" as="p" />
        </label>
        <label>
        <strong>password:</strong>
          <input
            name="password"
            type="password"
            placeholder='*********'
            ref={register({
              required: "Este campo es requerido"
            })}
          />
          <ErrorMessage errors={errors} name="password" as="p" />
        </label>
        <button type="submit"><strong>Registrate</strong></button>
        {/* <input type="submit" label="iniciar secion" /> */}
      </SignupStyles>
    </div>
  );
};

export default Signup;