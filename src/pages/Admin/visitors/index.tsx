import { Button } from "primereact/button";
import { Box, Title, WrapContainer } from "../../../styles/styles";
import { FaSearch } from "react-icons/fa";
import { IoCloseCircleSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import DataTable from "../../../components/data-table";
import { API } from "../../../services/API";
import { InputMask } from "primereact/inputmask"; 
import EditVisitor from "./editUser";

interface Tflags {
  search: boolean;
  visitante?: boolean;
  edit: boolean;
}

interface Visitor {
  id: string;
  name: string;
  cpf: number;
  profissao: string;
  genero: string;
  idade: number;
  cidade: string;
  estado: string;
}

const VisitorsPage = () => {
  const [flags, setFlags] = useState<Tflags>({
    search: false,
    visitante: true,
    edit: false,
  });
  const [idEdit, setIdEdit] = useState<string>();

  const getAllVisitors = async () => {
    API.get("visitor").then((item): void => {
      setVisitors(item.data.visitantes);
    });
  };

  const deleteVisitor = async (id: string): Promise<void> => {
    await API.delete(`visitor/${id}`)
      .then(() => {
        console.log("deletado com sucesso");
        getAllVisitors();
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const toogleSearch = (): void =>
    setFlags({ ...flags, search: !flags.search });
  const toogleEdit = (id?: string): void => {
    setFlags({ ...flags, edit: !flags.edit });
    setIdEdit(id);
  };

  const header: Array<string> = ["Nome", "CPF", "Cidade", "Estado"];
  const [visitors, setVisitors] = useState<Array<Visitor>>([]);

  useEffect((): void => {
    getAllVisitors();
  }, []);

  return (
    <>
      <WrapContainer>
        <Box
          $dir="column"
          $p="20px"
          $justify="baseline"
          $align="flex-start"
          $w="90%"
          $h="90%"
          $bg="white"
        >
          <Title $align="left" $color="black">
            Visitantes Cadastrados
          </Title>
          <Box $w="100%" $mt="58px" $justify="space-between">
            <Title $align="left" $color="black" $size="16px">
              Lista de visitantes
            </Title>
            {flags.search ? (
              <Box>
                <InputMask
                  className="w-full h-3rem border-2 border-pink-200 border-round-lg  text-sm transition-duration-200 pl-3 focus:border-purple-500"
                  mask="999.999.999-99"
                  placeholder="Informe seu CPF"
                  // {...register("cpf", {
                  //   required: true,
                  // })}
                />
                <Button
                  icon={
                    <FaSearch className="text-black mr-1 text-center w-1rem h-auto" />
                  }
                  label="Pesquisar"
                  className="p-2 flex justify-content-center align-items-center text-base font-bold border-round-sm border-none bg-green-400 hover:text-white hover:bg-pink-500 transition-duration-200"
                />
                <Button
                  onClick={toogleSearch}
                  icon={
                    <IoCloseCircleSharp className="text-black text-center w-max h-max" />
                  }
                  className="p-2 flex justify-content-center align-items-center text-base font-bold border-round-sm border-none bg-red-400 hover:text-white hover:bg-pink-500 transition-duration-200"
                />
              </Box>
            ) : (
              <Box>
                <Button
                  onClick={toogleSearch}
                  icon={
                    <FaSearch className="text-black text-center w-1rem h-auto" />
                  }
                  className={`p-2 flex justify-content-center align-items-center text-base font-bold border-round-sm border-none bg-pink-400 hover:text-white hover:bg-pink-500 transition-duration-200`}
                />
              </Box>
            )}
          </Box>
          <DataTable
            edit={toogleEdit}
            deleteUser={deleteVisitor}
            header={header}
            body={visitors}
            visitante={flags.visitante}
          />
        </Box>
      </WrapContainer>
      <EditVisitor
        id={idEdit}
        toogle={toogleEdit}
        uptateVisitor={getAllVisitors}
        state={flags.edit}
      />
    </>
  );
};

export default VisitorsPage;
