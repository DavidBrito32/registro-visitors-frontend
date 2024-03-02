/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useContext, useState } from "react";
import { API } from "../../services/API";
import {
  Box,
  Button,
  Container,
  Form,
  Input,
  Label,
  Overlay,
  Text,
  Title,
} from "../../styles/styles";
import BG from "./assets/Piramide.jpg";
import { useForm } from "react-hook-form";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

interface Login {
  email: string;
  password: string;
  remember: boolean;
}

interface Message {
  message: string;
  status: string;
  active: boolean;
}

const LoginPage = (): JSX.Element => {
  const { setState } = useContext(UserContext);
  const [request, setRequest] = useState<Message>({
    message: "",
    status: "",
    active: false
  })
  console.log(request);
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Login>();

  const LoginData = async (data: Login): Promise<void> => {
    await API.post("users/auth/login", data)
      .then((item) => {
        setState(item.data);
        console.log(item.data)
        reset();
       localStorage.setItem("token", item.data.token);
       localStorage.setItem("name", item.data.usuario.name);
       localStorage.setItem("email", item.data.usuario.email);
       localStorage.setItem("role", item.data.usuario.role);
        setRequest({...request, active: false})
        navigate("/admin");
        console.log(item);
      })
      .catch((err) => {
        console.log(err);
        setRequest({...request, message: err.response.data, status: "Acesso não autorizado", active: true})
      });
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
              $transform="none"
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
              $transform="none"
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
        <Overlay onClick={() => setRequest({...request, active: false})} className={request.active ? "active" : ""}>
          <Box $p="30px 30px" $bg="white" $radius="12px" $dir="column">
            <Title $color="black">{request.status}</Title>
            <Text $size="16px" $color="black">{request.message}</Text>
          </Box>
        </Overlay>
      </Container>
    </>
  );
};

export default LoginPage;
