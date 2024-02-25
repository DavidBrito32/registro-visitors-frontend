/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  Button,
  Container,
  Form,
  Input,
  Label,
  Text,
  Title,
} from "../../styles/styles";
import BG from "./assets/Piramide.jpg";
import { useForm } from "react-hook-form";

interface Login {
  email: string;
  password: string;
  remember: boolean;
}

const LoginPage = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Login>();

  const LoginData = async (data: Login): Promise<void> => {
    console.log(data);
    reset();
  };

  return (
    <>
      <Container $justify="center" $align="center" $img={BG}>
        <Form $w="400px">
          <Title>Faça Login para continuar</Title>
          <Label $w="100%">
            <Text>Email:</Text>
            {/* @ts-ignore */}
            <Input
              type="text"
              placeholder="informe seu e-mail:"
              {...register("email", {
                required: true,
              })}
            />
            {errors?.email?.type === "required" && (
              <p className="text-xl p-2 bg-red-300 border-round-lg text-white">
                E-mail não pode ficar em branco
              </p>
            )}
          </Label>
          <Label $w="100%">
            <Text>Senha:</Text>
            {/* @ts-ignore */}
            <Input
              type="text"
              placeholder="informe sua senha:"
              {...register("password", {
                required: true,
              })}
            />
            {errors?.password?.type === "required" && (
              <p className="text-xl p-2 bg-red-300 border-round-lg text-white">
                Senha não pode ficar em branco
              </p>
            )}
          </Label>
          <Label $dir="row">
            <Text>Permanecer Logado?</Text>
            {/* @ts-ignore */}
            <Input
              type="checkbox"
              $w="20px"
              $h="18px"
              {...register("remember")}
            />
          </Label>
          <Button
            type="button"
            $w="100%"
            $p="10px"
            $bg="#590869"
            $radius="8px"
            $color="white"
            $size="16px"
            $weight="bold"
            onClick={() => handleSubmit(LoginData)()}
          >
            Entrar
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default LoginPage;
