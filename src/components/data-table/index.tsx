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
import { useForm } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { CONFIGS } from "../../services/axiosHeaders";
import Loading from "../loading";
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
  color?: string;
  tableColor?: string | undefined;
  deleteUser?: (id: string) => Promise<void>;
  visitante?: boolean;
  edit?: (id: string) => void;
  get?: () => Promise<void>;
  loading: boolean;
}

interface Block {
  motivo: string;
}

const DataTable = ({
  header,
  body,
  tableColor,
  deleteUser,
  color,
  visitante,
  edit,
  get,
  loading,
}: Props): JSX.Element => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Block>();

  const blockVisitor = async (data: Block): Promise<void> => {
    await API.post(
      `/visitor/block/${userLock}`,
      {
        id: userLock,
        message: data.motivo,
      },
      CONFIGS
    )
      .then((item) => {
        console.log(item);
        reset();
        setLock(false);
        setConfirmedLock(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [toogle, setToogle] = useState<boolean>(false);
  const [unLock, setUnlock] = useState<boolean>(false);
  const [confirmedLock, setConfirmedLock] = useState<boolean>(false);
  const [confirmedUnlock, setConfirmedUnlock] = useState<boolean>(false);
  const [lock, setLock] = useState<boolean>(false);
  const [userIdToDelete, setUserIdToDelete] = useState<string>("");
  const [userIdTounlock, setUserIdToUnlock] = useState<string>("");
  const [userLock, setUserLock] = useState<string>("");

  const toogleDeleteUser = async (id: string) => {
    setToogle(true);
    setUserIdToDelete(id);
  };

  const lockVisitor = (id: string) => {
    setLock(!lock);
    setUserLock(id);
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
    await API.delete(`/visitor/block/${userIdTounlock}`, CONFIGS)
      .then((item) => {
        setUnlock(false);
        get && get();
        console.log(item.data);
        setConfirmedUnlock(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {loading && <Loading loading={true} />}
      <Table $w="100%" $h="10vh">
        <Thead $h="28px">
          <Tr $color={color} $bg={tableColor}>
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
                {item.role && <Td $weight="bold">{item.email}</Td>}
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
                  {!item.ID && (
                    <Button
                      icon={
                        <BsPencilSquare className="text-black text-center w-12 h-auto" />
                      }
                      onClick={() => edit && edit(item.id)}
                      className="p-1 flex justify-content-center align-items-center text-base font-bold border-round-sm border-none bg-pink-400 hover:text-white hover:bg-pink-500 transition-duration-200"
                    />
                  )}
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
                      onClick={() => lockVisitor(item.id)}
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

      <Overlay className={lock ? "active" : ""}>
        <Box
          $w="350px"
          $dir="column"
          $justify="center"
          $p="30px"
          $bg="white"
          $radius="12px"
        >
          <Text $size="22px" $align="center" $color="black">
            Deseja realmente bloquear o acesso do visitante??
          </Text>
          <InputText
            type="text"
            {...register("motivo", {
              required: true,
            })}
            className="w-full h-3rem border-gray-500 border-round-lg text-sm transition-duration-200 pl-3 focus:border-purple-500"
            placeholder="Informe o motivo"
          />
          {errors.motivo?.type === "required" && (
            <p>É obrigatorio preencher este campo!</p>
          )}
          <Box>
            <Botao
              $size="16px"
              $p="8px"
              $radius="8px"
              $bg="#871003"
              onClick={() => handleSubmit(blockVisitor)()}
            >
              Sim
            </Botao>
            <Botao
              $size="16px"
              $p="8px"
              $radius="8px"
              $bg="#256565"
              onClick={() => setLock(false)}
            >
              Não
            </Botao>
          </Box>
        </Box>
      </Overlay>

      <Overlay
        className={confirmedLock ? "active" : ""}
        onClick={() => setConfirmedLock(false)}
      >
        <Box
          $w="350px"
          $dir="column"
          $justify="center"
          $p="30px"
          $bg="white"
          $radius="12px"
        >
          <Text $size="22px" $align="center" $color="black">
            Visitante Bloqueado com sucesso! ✅
          </Text>
        </Box>
      </Overlay>

      <Overlay
        className={confirmedUnlock ? "active" : ""}
        onClick={() => setConfirmedUnlock(false)}
      >
        <Box
          $w="350px"
          $dir="column"
          $justify="center"
          $p="30px"
          $bg="white"
          $radius="12px"
        >
          <Text $size="22px" $align="center" $color="black">
            Acesso do visitante liberado com sucesso! ✅
          </Text>
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
