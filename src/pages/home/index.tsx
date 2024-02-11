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

interface Register {
  nome: string;
  cpf: number;
  profissao: string;
  genero: string;
  idade: number;
  cidade: string;
  estado: string;
}

const HomePage = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Register>();
  console.log(errors);

  const [modal, setModal] = useState<boolean>(false);
  const [error] = useState<string>("CADASTRO REALIZADO COM SUCESSO 💕");

  const toogleModal = (): void => setModal(!modal);

  const cadastrar = (data: Register) => {
    console.log(data);
    reset();
    toogleModal();
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
              {...register("nome", {
                required: true,
              })}
            />
            {errors?.nome?.type === "required" && (
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
              {...register("profissao", {
                required: true,
              })}
            />
            {errors?.profissao?.type === "required" && (
              <p className="text-xl p-2 bg-red-300 border-round-lg text-white">
                Profissão deve ser preenchida
              </p>
            )}
          </Label>
          <Label $w="45%">
            <Text>Gênero</Text>
            {/*@ts-ignore*/}
            <Select
              {...register("genero", {
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
            {errors?.genero?.type === "required" && (
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
              {...register("idade", {
                required: true,
              })}
            />
            {errors?.idade?.type === "required" && (
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
              {...register("estado", {
                required: true,
              })}
            />

            {errors?.estado?.type === "required" && (
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
              {...register("cidade", {
                required: true,
              })}
            />
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
