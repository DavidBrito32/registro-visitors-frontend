import { Button } from "primereact/button";
import { Box, Input, Title, WrapContainer } from "../../../styles/styles";
import { FaPlus, FaSearch } from "react-icons/fa";
import { IoCloseCircleSharp } from "react-icons/io5";
import { useState } from "react";
import DataTable from "../../../components/data-table";

interface Tflags {
  search: boolean;
}

const UsersPage = () => {
  const [flags, setFlags] = useState<Tflags>({
    search: false,
  });

  const header: Array<string> = ["Nome", "CPF", "Cargo"];

  const toogleSearch = (): void =>
    setFlags({ ...flags, search: !flags.search });
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
            Usuarios Cadastrados
          </Title>
          <Box $w="100%" $mt="58px" $justify="space-between">
            <Title $align="left" $color="black" $size="16px">
              Lista de usuarios
            </Title>
            {flags.search ? (
              <Box>
                <Input
                  type="text"
                  $h="35px"
                  $w="auto"
                  $border="2px solid black"
                  placeHolder="Digite o CPF"
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
                  className="p-2 flex justify-content-center align-items-center text-base font-bold border-round-sm border-none bg-red-400 hover:text-white hover:bg-red-500 transition-duration-200"
                />
              </Box>
            ) : (
              <Box>
                <Button
                  icon={<FaPlus className={`text-black mr-2 w-1rem h-auto`} />}
                  label="Novo"
                  className="flex p-2 text-base font-bold border-round-sm border-none bg-pink-400 hover:text-white hover:bg-pink-500 transition-duration-200"
                />
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
          {/* IMPORTE O DATA TABLE AQUI EM BAIXO */}
          <DataTable header={header} />
        </Box>
      </WrapContainer>
    </>
  );
};

export default UsersPage;
