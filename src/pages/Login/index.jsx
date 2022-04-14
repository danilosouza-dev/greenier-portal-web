
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Container, Wrapper, FormWrapper, Form } from './styles';

import logoSantoVerde from '../../assets/logo-santo-verde.svg';


const schema = yup.object({
  email: yup.string().email("digite um email válido").required("* o email é obrigatório"),
  password: yup.string().min(6, "* a senha deve ter pelo menos 6 dígitos").required("* a senha é obrigatória"),
}).required();

export function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  function onSubmit(userData) {
    console.log(userData);
  }

  return (
    <>
      <Container>
        <Wrapper>
          <FormWrapper>
            <img src={logoSantoVerde} alt="logo santo verde" />
            <div className="title-form">
              <h1>Login</h1>
              <p>Não possui uma conta? <a href="#">Cadastre-se</a> </p>
            </div>

            <Form onSubmit={handleSubmit(onSubmit)}>
              <div className="container-form">

                <label className='field'>
                  <span>Email</span>
                  <span className="error-email">{errors.email?.message}</span>
                  <input
                    className='input-form'
                    type="text"
                    placeholder="digite seu email"
                    {...register("email", { required: true })}
                  />

                </label>

                <label className='field'>
                  <span>Senha</span>
                  <span className="error-password">{errors.password?.message}</span>
                  <input
                    className='input-form'
                    type="password"
                    placeholder="digite sua senha"
                    {...register("password", { required: true })}
                  />
                </label>

                <label className='container-checkbox' for='checkbox-conect'>

                  <input type="checkbox" className='input-checkbox' id='checkbox-conect' />
                  Manter conectado
                </label>

                <button type="submit">Entrar</button>
              </div>
            </Form>
          </FormWrapper>
        </Wrapper>
      </ Container>
    </>
  )
}