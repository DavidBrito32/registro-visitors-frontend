/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Sidebar } from "primereact/sidebar";
import { Button, Form, Input, Label, Text, Title } from "../../../styles/styles";
import { useForm } from "react-hook-form";
import { API } from "../../../services/API";
import { useRef } from "react";
import { Toast } from "primereact/toast";

interface Props {
  state: boolean;
  toogle: (id?: string) => void;
  updateUsers: () => void;
  id: string | undefined;
}

interface User {
  name: string;
  email: string;
  role: string;
  password: string;
}

const EditUser = ({ state, toogle, updateUsers, id }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<User>();

  // const [retorno, setRetorno] = useState<string>("");
  const toast = useRef<Toast>(null);
  const succesToast = (message: string) => {
    toast.current?.show({
      severity: "success",
      summary: "Informação:",
      detail: message,
    });
  };
  const errorToast = (message: string) => {
    toast.current?.show({
      severity: "success",
      summary: "Informação:",
      detail: message,
    });
  };

  const editarUsuario = async (data: User): Promise<void> => {
    if (id) {
      await API.put(`users/auth/${id}`, data)
        .then((item) => {
          reset();
          toogle();
          succesToast(item.data);
          updateUsers();
        })
        .catch((err) => {
          errorToast(err.response.data);
          console.log(data);
        });
    } else {
      errorToast("id não pode vir ausente");
    }
  };

  return (
    <div className="card flex justify-content-center">
      <Toast ref={toast} position="bottom-center" />
      <Sidebar
        position="right"
        visible={state}
        onHide={toogle}
        className="bg-white"
      >
        <Title $color="black">Edição de usuario</Title>
        <Form $dir="column" $justify="start" $w="100%" $h="100%" $bg="white">
          <Label $w="100%">
            <Text $color="black">Nome: </Text>
            {/*@ts-ignore */}
            <Input
              $w="100%"
              $border="2px solid pink"
              placeholder="Digite o nome do usuario"
              {...register("name")}
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
              $w="100%"
              $border="2px solid pink"
              placeholder="Digite o email do usuario"
              {...register("email")}
            />
          </Label>
          <Label $w="100%">
            <Text $color="black">Cargo: </Text>
            {/*@ts-ignore */}
            <Input
              $w="100%"
              $border="2px solid pink"
              placeholder="Digite o cargo do usuario"
              {...register("role")}
            />
          </Label>
          <Label $w="100%">
            <Text $color="black">Senha: </Text>
            {/*@ts-ignore */}
            <Input
              $w="100%"
              $border="2px solid pink"
              placeholder="Digite o senha do usuario"
              {...register("password")}
            />
          </Label>
          <Button
            type="button"
            $w="100%"
            $p="10px"
            $size="18px"
            $radius="12px"
            $bg="#637186"
            onClick={() => handleSubmit(editarUsuario)()}
          >
            Atualizar usuario
          </Button>
        </Form>
      </Sidebar>
    </div>
  );
};

export default EditUser;
