/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Sidebar } from "primereact/sidebar";
import { Button, Form, Input, Label, Text } from "../../../styles/styles";
import { useForm } from "react-hook-form";
import { InputMask } from "primereact/inputmask";
import { API } from "../../../services/API";
import { AxiosResponse } from "axios";
import { CONFIGS } from "../../../services/axiosHeaders";

interface Props {
  state: boolean;
  toogle: () => void;
  updateUsers: () => void;
  retorno: (message: string) => void;
  complete: () => void;
}

interface User {
  name: string;
  email: string;
  cpf: string;
  role: string;
  password: string;
}

const CreateUser = ({
  state,
  toogle,
  updateUsers,
  retorno,
  complete,
}: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<User>();

  const criarUsuario = async (data: User): Promise<void> => {
    await API.post("users/auth/", data, CONFIGS)
      .then((item: AxiosResponse) => {
        reset();
        toogle();
        complete();
        retorno(item.data);
        updateUsers();
      })
      .catch((err) => {
        retorno(err.response.data);
        toogle();
        complete();
        console.log(data);
      });
  };

  return (
    <>
      <div className="card flex justify-content-center">
        <Sidebar position="right" visible={state} onHide={toogle}>
          <Form $dir="column" $justify="start" $w="100%" $h="100%" $bg="white">
            <Label $w="100%">
              <Text $color="black">Nome: </Text>
              {/*@ts-ignore */}
              <Input
                $transform="none"
                $w="100%"
                $border="2px solid pink"
                placeholder="Digite o nome do usuario"
                {...register("name", {
                  required: true,
                })}
              />
              {errors.name?.type === "required" && (
                <p className="text-xl p-2 bg-red-300 border-round-lg text-white">
                  nome deve ser preenchido
                </p>
              )}
            </Label>
            <Label $w="100%">
              <Text $color="black">Email: </Text>
              {/*@ts-ignore */}
              <Input
                $transform="none"
                $w="100%"
                $border="2px solid pink"
                placeholder="Digite o email do usuario"
                {...register("email", {
                  required: true,
                })}
              />
            </Label>
            <Label $w="100%">
              <Text $color="black">CPF: </Text>
              <InputMask
                className="w-full h-3rem border-2 border-pink-200 border-round-lg  text-sm transition-duration-200 pl-3 focus:border-purple-500"
                mask="999.999.999-99"
                placeholder="Informe seu CPF"
                {...register("cpf", {
                  required: true,
                  min: 14,
                })}
              />
            </Label>
            <Label $w="100%">
              <Text $color="black">Cargo: </Text>
              <select 
              className="w-full h-5 p-2 border-2 border-round-xs border-pink-500 "
              {...register("role")}
              >
                <option value="Admin">Admin</option>
                <option value="Operador">Operador</option>
              </select>
            </Label>
            <Label $w="100%">
              <Text $color="black">Senha: </Text>
              {/*@ts-ignore */}
              <Input
                $transform="none"
                $w="100%"
                $border="2px solid pink"
                placeholder="Digite o senha do usuario"
                {...register("password", {
                  required: true,
                })}
              />
            </Label>
            <Button
              type="button"
              $w="100%"
              $p="10px"
              $size="18px"
              $radius="12px"
              $bg="#637186"
              onClick={() => handleSubmit(criarUsuario)()}
            >
              Enviar
            </Button>
          </Form>
        </Sidebar>
      </div>
    </>
  );
};

export default CreateUser;
