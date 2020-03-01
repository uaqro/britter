import React, {useContext} from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import { useHistory, Link } from "react-router-dom";
import {useStateContext} from '../../hooks/useStateContext';
import { LoginStyles, LogHeaderStyles } from './LoginStyles';
import { MyContext } from "../../contexts/context";
import { ReactComponent as Logo } from '../../assets/assets_Search_2020-03-01/britte-r.svg';
const Login = props => {
  const context = useContext(MyContext);
  const  [state, action]  = useStateContext();
  const { handleSubmit, register, errors } = useForm({
    defaultValues: state.formSignup
  });
  const { push } = useHistory();

  const onSubmit = data => {
    action(state, data);
    context.handleLogin(()=>{
      push("/profile");
    });
  };

  return (
    <div style={{background:'#e2e8f0', height:'100vh'}}>
      <LogHeaderStyles>
      <div className='icon-container'>
          <Logo className='icon'/>
      </div>
        <h4>Iniciar sesión</h4>
        <span>
            Si aun no tienes una cuenta, crea una {" "}
            <Link to="/signup">aqui</Link>
        </span>
      </LogHeaderStyles>
      <LoginStyles onSubmit={handleSubmit(onSubmit)}>
        <label>
          <strong>Correo:</strong>
          <input
            name="correo"
            placeholder='correo'
            type="text"
            ref={register({
              required: "Este campo es requerido"
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
        <button type="submit"><strong>iniciar Sesión</strong></button>
        {/* <input type="submit" label="iniciar secion" /> */}
      </LoginStyles>
    </div>
  );
};

export default Login;