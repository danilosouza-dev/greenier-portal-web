
import { Container, Form, FormWrapper, Wrapper } from './styles';
// import logo from '../../assets/logo-greenier.svg';
import logoSantoVerde from '../../assets/logo-santo-verde.svg';

export function Login() {
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
            <Form>

              <label className='label-form'>
                Email
                <input className='input-form' type="text" placeholder="digite seu email" />
              </label>

              <label className='label-form'>
                Senha
                <input className='input-form' type="password" placeholder="digite sua senha" />
              </label>

              <label className='container-checkbox' for='checkbox-conect'>
                <input type="checkbox" className='input-checkbox' id='checkbox-conect' />
                Manter conectado
              </label>

              <button type='submit'>Entrar</button>

            </Form>
          </FormWrapper>
        </Wrapper>
      </ Container>
    </>
  )
}