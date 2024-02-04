import { Button } from "primereact/button";
import { InputMask } from "primereact/inputmask";

import { Form, Label, Main, Modal, Overlay, Text, Title } from "../../../styles/styles";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface Registred {
  cpf: number;
}

const RegistedPage = (): JSX.Element => {
  const { register, handleSubmit, formState: {errors}, reset } = useForm<Registred>();
  const [modal, setModal] = useState<boolean>(false);
  const [error] = useState<string>("");

  const submit = (data: Registred): void => {
    console.log(data);
    reset();
    toogleModal();
  }

  const toogleModal = (): void => setModal(!modal);
  return (
    <>
      <Main>
        <Form>
          <Title>Que bom rever você novamente</Title>
          <Label $w="100%">
            <Text>CPF:</Text>
            <InputMask
              className="w-full h-3rem border-transparent border-round-lg text-base transition-duration-200 pl-3 focus:border-purple-500"
              mask="999.999.999-99"
              placeholder="Informe seu CPF"
              {...register("cpf", {
                required: true
              })}
            />
            {
              errors?.cpf?.type === "required" && (
                <p className="text-xl p-2 bg-red-300 border-round-lg text-white">
                CPF não pode ficar em branco
              </p>
              )
            }
          </Label>
          <Button 
          className="w-full h-3rem border-round-lg flex justify-content-center align-items-center text-xl font-bold bg-indigo-700 text-cyan-50 border-none hover:bg-indigo-800"
          type="button"
          onClick={() => handleSubmit(submit)()}
          >
            Enviar
          </Button>
        </Form>
      </Main>
      <Overlay onClick={toogleModal} className={modal ? "active" : ""}>
        <Modal>
          {error ? (
            <><Title $color="black">{error}</Title></>
          ) : (
            <>
              <Title $color="black">Bem vindo de volta  fulano</Title>
              <Title $color="black">Aproveite a visita! 🎉</Title>
            </>
          )}
        </Modal>
      </Overlay>
    </>
  );
};

export default RegistedPage;
