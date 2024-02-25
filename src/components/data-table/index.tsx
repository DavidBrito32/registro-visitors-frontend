import {
  Box,
  Overlay,
  TBody,
  Table,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Button as Botao,
} from "../../styles/styles";
import { BsPencilSquare } from "react-icons/bs";
import { FaRegTrashCan, FaUnlock } from "react-icons/fa6";
import { FaUserLock } from "react-icons/fa";
import { API } from "../../services/API";
import { Button } from "primereact/button";
import { useState } from "react";
type TBody = {
  id: string;
  name: string;
  cpf: number | string;
  role?: string | undefined;
  city?: string | undefined;
  profissao?: string | undefined;
  email?: string | undefined;
  gender?: string | undefined;
  state?: string | undefined;
  message?: string;
  ID?: string;
};

interface Props {
  header: Array<string>;
  body?: Array<TBody>;
  tableColor?: string | undefined;
  deleteUser?: (id: string) => Promise<void>;
  visitante?: boolean;
  edit?: (id: string) => void;
  get?: () => Promise<void>;
}

const DataTable = ({
  header,
  body,
  tableColor,
  deleteUser,
  visitante,
  edit,
  get
}: Props): JSX.Element => {
  const blockVisitor = async (id: string): Promise<void> => {
    await API.post(`/visitor/block/${id}`, {
      id,
      message: "ficou malinando",
    })
      .then((item) => {
        console.log(item);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [toogle, setToogle] = useState<boolean>(false);
  const [unLock, setUnlock] = useState<boolean>(false);
  const [userIdToDelete, setUserIdToDelete] = useState<string>("");
  const [userIdTounlock, setUserIdToUnlock] = useState<string>("");

  const toogleDeleteUser = async (id: string) => {
    setToogle(true);
    setUserIdToDelete(id);
  };
  const toogleUnlock = async (id: string) => {
    setUnlock(true);
    setUserIdToUnlock(id);
  };

  const deletar = async () => {
    deleteUser && (await deleteUser(userIdToDelete));
    setToogle(false);
  };

  const unlockVisitor = async () => {
    await API.delete(`/visitor/block/${userIdTounlock}`)
      .then((item) => {
        setUnlock(false);
        get && get();
        console.log(item.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Table $w="100%">
        <Thead $h="28px">
          <Tr $bg={tableColor}>
            {header.map((item, index) => (
              <Th scope="col" key={index}>
                {item}
              </Th>
            ))}
            <Th scope="col">Ações</Th>
          </Tr>
        </Thead>
        <TBody $w="100%">
          {body &&
            body.map((item) => (
              <Tr key={item.id || item.ID} $h="28px" $bg="#FFFFFF">
                <Td $weight="bold">{item.name}</Td>
                <Td $weight="bold">{item.cpf}</Td>
                <Td $weight="bold">{item.role || item.city || item.message}</Td>
                {item.state && (
                  <Td $weight="bold">{item.role || item.state}</Td>
                )}
                <Td
                  $weight="bold"
                  $display="flex"
                  $justify="center"
                  $gap="05px"
                  $align="center"
                >
                  <Button
                    icon={
                      <BsPencilSquare className="text-black text-center w-12 h-auto" />
                    }
                    onClick={() => edit && edit(item.id)}
                    className="p-1 flex justify-content-center align-items-center text-base font-bold border-round-sm border-none bg-pink-400 hover:text-white hover:bg-pink-500 transition-duration-200"
                  />
                  {!visitante && !item.ID && (
                    <Button
                      icon={
                        <FaRegTrashCan
                          onClick={() => toogleDeleteUser(item.id)}
                          className="text-black text-center w-12 h-auto"
                        />
                      }
                      className="p-1 flex justify-content-center align-items-center text-base font-bold border-round-sm border-none bg-pink-400 hover:text-white hover:bg-pink-500 transition-duration-200"
                    />
                  )}
                  {item.ID && (
                    <Button
                      icon={
                        <FaUnlock
                          onClick={() =>
                            toogleUnlock(
                              typeof item.ID === "string" ? item.ID : ""
                            )
                          }
                          className="text-black text-center w-12 h-auto"
                        />
                      }
                      className="p-1 flex justify-content-center align-items-center text-base font-bold border-round-sm border-none bg-pink-400 hover:text-white hover:bg-pink-500 transition-duration-200"
                    />
                  )}
                  {visitante && (
                    <Button
                      icon={
                        <FaUserLock className="text-black text-center w-12 h-auto" />
                      }
                      onClick={() => blockVisitor(item.id)}
                      className="p-1 flex justify-content-center align-items-center text-base font-bold border-round-sm border-none bg-pink-400 hover:text-white hover:bg-pink-500 transition-duration-200"
                    />
                  )}
                </Td>
              </Tr>
            ))}
        </TBody>
      </Table>
      <Overlay className={toogle ? "active" : ""}>
        <Box
          $w="350px"
          $dir="column"
          $justify="center"
          $p="30px"
          $bg="white"
          $radius="12px"
        >
          <Text $size="28px" $align="center" $color="black">
            Deseja realmente excluir o usuario?
          </Text>
          <Box>
            <Botao
              $size="16px"
              $p="8px"
              $radius="8px"
              $bg="#871003"
              onClick={deletar}
            >
              Sim
            </Botao>
            <Botao
              $size="16px"
              $p="8px"
              $radius="8px"
              $bg="#256565"
              onClick={() => setToogle(false)}
            >
              Não
            </Botao>
          </Box>
        </Box>
      </Overlay>
      <Overlay className={unLock ? "active" : ""}>
        <Box
          $w="350px"
          $dir="column"
          $justify="center"
          $p="30px"
          $bg="white"
          $radius="12px"
        >
          <Text $size="22px" $align="center" $color="black">
            Deseja realmente Liberar o acesso do Visitante??
          </Text>
          <Box>
            <Botao
              $size="16px"
              $p="8px"
              $radius="8px"
              $bg="#871003"
              onClick={unlockVisitor}
            >
              Sim
            </Botao>
            <Botao
              $size="16px"
              $p="8px"
              $radius="8px"
              $bg="#256565"
              onClick={() => setUnlock(false)}
            >
              Não
            </Botao>
          </Box>
        </Box>
      </Overlay>
    </>
  );
};

export default DataTable;
