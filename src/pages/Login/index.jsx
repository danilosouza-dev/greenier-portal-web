
import { Container, Form, FormWrapper, Wrapper } from './styles';
import logo from '../../assets/logo-greenier.svg';

export function Login() {
  return (
    <>
      <Container>
        <img src={logo} alt="logo" />
        <Wrapper>
          <FormWrapper>
            <Form>
              <div className="title-form">
                <h1>Login</h1>
                <p>Não possui uma conta? <a href="#">Cadastre-se</a> </p>
              </div>
              
              <label>
                Email
                <input type="text" placeholder="Email"/>
              </label>

              <label>
                Senha
                <input type="password" placeholder="senha"/>
              </label>

              <button>Entrar</button>

            </Form>
          </FormWrapper>
        </Wrapper>
      </ Container>
    </>
  )
}