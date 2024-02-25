import { Button } from "primereact/button";
import { Box, Title, WrapContainer } from "../../../styles/styles";
import { FaSearch } from "react-icons/fa";
import { IoCloseCircleSharp } from "react-icons/io5";
import { InputMask } from "primereact/inputmask";
import { useEffect, useState } from "react";
import DataTable from "../../../components/data-table";
import { API } from "../../../services/API";

interface Flags {
  search: boolean;
}
export interface BlockedVisitor {
  id: string;
  name: string;
  cpf: string;
  message: string;
}

const BlockedPage = () => {
  const [flags, setFlags] = useState<Flags>({
    search: false,
  });
  const [data, setData] = useState<Array<BlockedVisitor>>([]);
  
  const getAllBlockedVisitor = async () => {
    await API.get("/visitor/blacklist")
      .then((item) => {
        setData(item.data);
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
  const toogleSearch = () => setFlags({ ...flags, search: !flags.search });

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
            {flags.search ? (
              <Box>
                <InputMask
                  className="w-full h-3rem border-2 border-pink-200 border-round-lg  text-sm transition-duration-200 pl-3 focus:border-purple-500"
                  mask="999.999.999-99"
                  placeholder="Informe seu CPF"
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
          <DataTable header={header} tableColor="gray" body={data} get={getAllBlockedVisitor} />
        </Box>
      </WrapContainer>
    </>
  );
};

export default BlockedPage;
