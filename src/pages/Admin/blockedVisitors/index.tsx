import { Box, Title, WrapContainer } from "../../../styles/styles";
import { useEffect, useState } from "react";
import DataTable from "../../../components/data-table";
import { API } from "../../../services/API";
import { CONFIGS } from "../../../services/axiosHeaders";

export interface BlockedVisitor {
  id: string;
  name: string;
  cpf: string;
  message: string;
}

const BlockedPage = () => {
  const [data, setData] = useState<Array<BlockedVisitor>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getAllBlockedVisitor = async () => {
    await API.get("/visitor/blacklist", CONFIGS)
      .then((item) => {
        setData(item.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getAllBlockedVisitor();
  }, []);

  const header: Array<string> = [
    "usuario bloqueado",
    "CPF",
    "Motivo do Bloqueio",
  ];

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
            Visitantes Bloqueados
          </Title>
          <Box $w="100%" $mt="58px" $justify="space-between">
            <Title $align="left" $color="black" $size="16px">
              Lista de visitantes
            </Title>
          </Box>
          <DataTable
            loading={loading}
            header={header}
            tableColor="purple"
            color={"white"}
            body={data}
            get={getAllBlockedVisitor}
          />
        </Box>
      </WrapContainer>
    </>
  );
};

export default BlockedPage;
