import {
  Container,
  BoxTitle,
  Title,
  Form,
  InputLogin,
  CotainerText,
} from "./styles";

export default function FormLogin() {
  return (
    <section>
      <Container>
        <div>
          <BoxTitle>
            <Title>Entre na sua conta</Title>
          </BoxTitle>
          <div>
            <Form>
              <div>
                <InputLogin type="text" placeholder="Email" />
              </div>
              <div>
                <InputLogin type="text" placeholder="Senha" />
              </div>
            </Form>
          </div>
          <CotainerText>
            <p>
              Tente entar na nossa plataforma de outra maneira usando o botão
              abaixo.
            </p>
          </CotainerText>
        </div>
      </Container>
    </section>
  );
}
