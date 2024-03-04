import { Box, Title, WrapContainer } from "../../../styles/styles";
import { useEffect, useState } from "react";
import DataTable from "../../../components/data-table";
import { API } from "../../../services/API";
import EditVisitor from "./editUser";
import { CONFIGS } from "../../../services/axiosHeaders";

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
  const [loading, setLoading] = useState<boolean>(true);

  const getAllVisitors = async () => {
    API.get("visitor", CONFIGS).then((item): void => {
      setVisitors(item.data.visitantes);
      setLoading(false);
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
          $h="100%"
          $bg="white"
          $overflow="scroll"
        >
          <Title $align="left" $color="black">
            Visitantes Cadastrados
          </Title>
          <Box $w="100%" $mt="58px" $justify="space-between">
            <Title $align="left" $color="black" $size="16px">
              Lista de visitantes
            </Title>
          </Box>
          <DataTable
            loading={loading}
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
