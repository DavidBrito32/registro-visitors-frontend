/* eslint-disable @typescript-eslint/ban-ts-comment */
/* @ts-ignore */
import { Button } from "primereact/button";
import {
  Form,
  Input,
  Label,
  Main,
  Modal,
  Overlay,
  Select,
  Text,
  Title,
} from "../../styles/styles";
import { InputMask } from "primereact/inputmask";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { API } from "../../services/API";

interface Register {
  name: string;
  cpf: number;
  profession: string;
  gender: string;
  age: number;
  city: string;
  state: string;
}

const HomePage = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Register>();

  const [modal, setModal] = useState<boolean>(false);
  const [error, setError] = useState<string>(
    "CADASTRO REALIZADO COM SUCESSO 💕"
  );

  const toogleModal = (): void => setModal(!modal);

  const cadastrar = async (data: Register) => {
    await API.post("visitor/", data)
      .then((item) => {
        reset();
        toogleModal();
        setError(item.data);
      })
      .catch((err) => {
        toogleModal();
        setError(err.response.data);
        console.log(err);
      });
  };

  return (
    <>
      <Main className="mt-5">
        <Form>
          <Title>Seja bem vindo(a) visitante</Title>
          <Label $w="100%">
            <Text>Nome do visitante:</Text>
            {/* @ts-ignore */}
            <Input
              type="text"
              placeholder="Digite seu nome completo"
              {...register("name", {
                required: true,
              })}
            />
            {errors?.name?.type === "required" && (
              <p className="text-xl p-2 bg-red-300 border-round-lg text-white">
                Nome não pode ficar em branco
              </p>
            )}
          </Label>
          <Label $w="100%">
            <Text>CPF:</Text>
            <InputMask
              className="w-full h-3rem border-transparent border-round-lg text-sm transition-duration-200 pl-3 focus:border-purple-500"
              mask="999.999.999-99"
              placeholder="Informe seu CPF"
              {...register("cpf", {
                required: true,
              })}
            />
            {errors?.cpf?.type === "required" && (
              <p className="text-xl p-2 bg-red-300 border-round-lg text-white">
                CPF deve conter 11 numeros
              </p>
            )}
          </Label>
          <Label $w="100%">
            <Text>Profissão:</Text>
            {/* @ts-ignore */}
            <Input
              placeholder="O que você faz?"
              {...register("profession", {
                required: true,
              })}
            />
            {errors?.profession?.type === "required" && (
              <p className="text-xl p-2 bg-red-300 border-round-lg text-white">
                Profissão deve ser preenchida
              </p>
            )}
          </Label>
          <Label $w="45%">
            <Text>Gênero</Text>
            {/*@ts-ignore*/}
            <Select
              {...register("gender", {
                required: true,
              })}
            >
              <option value={""}>Informe seu gênero</option>
              <option>Masculino</option>
              <option>Feminino</option>
              <option>Homossexual</option>
              <option>Bissexual</option>
              <option>Transsexual</option>
              <option>Sisgênero</option>
            </Select>
            {errors?.gender?.type === "required" && (
              <p className="text-xl p-2 bg-red-300 border-round-xs text-white">
                Selecione um Gênero
              </p>
            )}
          </Label>
          <Label $w="45%">
            <Text>Idade</Text>
            {/* @ts-ignore */}
            <Input
              type="number"
              placeholder="Informe sua idade"
              {...register("age", {
                required: true,
              })}
            />
            {errors?.age?.type === "required" && (
              <p className="text-xl p-2 bg-red-300 border-round-xs text-white">
                Informe sua Idade
              </p>
            )}
          </Label>

          <Label $w="45%">
            <Text>Estado</Text>
            {/* @ts-ignore */}
            <Input
              type="text"
              maxLength={2}
              placeholder="Informe sua estado"
              {...register("state", {
                required: true,
              })}
            />

            {errors?.state?.type === "required" && (
              <p className="text-xl p-2 bg-red-300 border-round-xs text-white">
                Informe seu Estado
              </p>
            )}
          </Label>

          <Label $w="45%">
            <Text>Cidade</Text>
            {/* @ts-ignore */}
            <Input
              type="text"
              placeholder="Informe sua cidade"
              {...register("city", {
                required: true,
              })}
            />
            {errors?.city?.type === "required" && (
              <p className="text-xl p-2 bg-red-300 border-round-xs text-white">
                Informe sua cidade
              </p>
            )}
          </Label>
          <Button
            className="w-full h-3rem border-round-lg flex justify-content-center align-items-center text-xl font-bold bg-indigo-700 text-cyan-50 border-none hover:bg-indigo-800"
            type="button"
            onClick={() => handleSubmit(cadastrar)()}
          >
            Enviar
          </Button>
        </Form>
      </Main>

      <Overlay onClick={toogleModal} className={modal ? "active" : ""}>
        <Modal>
          {error ? (
            <>
              <p className="text-2xl text-red-500 font-bold">{error}</p>
            </>
          ) : (
            <>
              <Title $color="black">Cadastro Concluido</Title>
              <Title $color="black">Aproveite a visita! 🎉</Title>
            </>
          )}
        </Modal>
      </Overlay>
    </>
  );
};

export default HomePage;
