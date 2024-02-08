import { Button } from "primereact/button";
import {
  Box,
  Input,
  TBody,
  Table,
  Td,
  Th,
  Thead,
  Title,
  Tr,
  WrapContainer,
} from "../../../styles/styles";
import { FaPlus, FaSearch } from "react-icons/fa";
import { IoCloseCircleSharp, IoNewspaperSharp } from "react-icons/io5";
import { BsPencilSquare } from "react-icons/bs";
import { FaRegTrashCan } from "react-icons/fa6";
import { useState } from "react";

interface Tflags {
  search: boolean;
}

const VisitorsPage = () => {
  const [flags, setFlags] = useState<Tflags>({
    search: false,
  });

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
            Visitantes Cadastrados
          </Title>
          <Box $w="100%" $mt="58px" $justify="space-between">
            <Title $align="left" $color="black" $size="16px">
              Lista de visitantes
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
                  className="p-2 flex justify-content-center align-items-center text-base font-bold border-round-sm border-none bg-red-400 hover:text-white hover:bg-pink-500 transition-duration-200"
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
          <Table $w="100%">
            <Thead $h="28px">
              <Tr $bg="#D9D9D9">
                <Th scope="col">Nome</Th>
                <Th scope="col">CPF</Th>
                <Th scope="col">Cidade / Estado</Th>
                <Th scope="col">Ações</Th>
              </Tr>
            </Thead>
            <TBody $w="100%">
              <Tr $h="28px">
                <Td $weight="bold">{"Jõao Brito"}</Td>
                <Td $weight="bold">{"000.000.000-42"}</Td>
                <Td $weight="bold">{"Fortaleza"}</Td>
                <Td
                  $weight="bold"
                  $display="flex"
                  $justify="center"
                  $gap="05px"
                  $align="center"
                >
                  <Button
                    icon={
                      <IoNewspaperSharp className="text-black text-center w-12 h-auto" />
                    }
                    className="p-1 flex justify-content-center align-items-center text-base font-bold border-round-sm border-none bg-pink-400 hover:text-white hover:bg-pink-500 transition-duration-200"
                  />
                  <Button
                    icon={
                      <BsPencilSquare className="text-black text-center w-12 h-auto" />
                    }
                    className="p-1 flex justify-content-center align-items-center text-base font-bold border-round-sm border-none bg-pink-400 hover:text-white hover:bg-pink-500 transition-duration-200"
                  />
                  <Button
                    icon={
                      <FaRegTrashCan className="text-black text-center w-12 h-auto" />
                    }
                    className="p-1 flex justify-content-center align-items-center text-base font-bold border-round-sm border-none bg-pink-400 hover:text-white hover:bg-pink-500 transition-duration-200"
                  />
                </Td>
              </Tr>
            </TBody>
          </Table>
        </Box>
      </WrapContainer>
    </>
  );
};

export default VisitorsPage;
