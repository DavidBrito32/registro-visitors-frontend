/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Sidebar } from "primereact/sidebar";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { Toast } from "primereact/toast";
import {
  Button,
  Form,
  Input,
  Label,
  Text,
  Title,
} from "../../../styles/styles";
import { API } from "../../../services/API";

interface Props {
  state: boolean;
  toogle: (id?: string) => void;
  uptateVisitor: () => void;
  id: string | undefined;
}

interface User {
  name: string;
  profession: string;
  gender: string;
  age: number;
  city: string;
  state: string;
}

const EditVisitor = ({ state, toogle, uptateVisitor, id }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<User>();
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
      await API.put(`visitor/${id}`, data)
        .then((item) => {
          reset();
          toogle();
          succesToast(item.data);
          uptateVisitor();
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
        <Title $color="black">Edição do visitante</Title>
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
            <Text $color="black">Profissão: </Text>
            {/*@ts-ignore */}
            <Input
              $w="100%"
              $border="2px solid pink"
              placeholder="Digite o email do usuario"
              {...register("profession")}
            />
            {errors.profession?.type === "required" && (
              <p className="text-xl p-2 bg-red-300 border-round-lg text-white">
                nome deve ser preenchido
              </p>
            )}
          </Label>
          <Label $w="100%">
            <Text $color="black">Idade: </Text>
            {/*@ts-ignore */}
            <Input
              $w="100%"
              $border="2px solid pink"
              placeholder="Digite o cargo do usuario"
              {...register("age")}
            />
          </Label>
          <Label $w="100%">
            <Text $color="black">Cidade: </Text>
            {/*@ts-ignore */}
            <Input
              $w="100%"
              $border="2px solid pink"
              placeholder="Digite o senha do usuario"
              {...register("city")}
            />
          </Label>
          <Label $w="100%">
            <Text $color="black">Estado: </Text>
            {/*@ts-ignore */}
            <Input
              $w="100%"
              $border="2px solid pink"
              placeholder="Digite o senha do usuario"
              {...register("state")}
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
            Atualizar Visitante
          </Button>
        </Form>
      </Sidebar>
    </div>
  );
};

export default EditVisitor;
