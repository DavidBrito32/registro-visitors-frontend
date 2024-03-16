import { Button } from "primereact/button";
import { Box, Overlay, Text, Title, WrapContainer } from "../../../styles/styles";
import { useEffect, useState } from "react";
import DataTable from "../../../components/data-table";
import { API } from "../../../services/API";
import CreateUser from "./createUser";
import EditUser from "./editUser";
import { CONFIGS } from "../../../services/axiosHeaders";
import { FaPlus } from "react-icons/fa";

interface Tflags {
  search: boolean;
  visible: boolean;
  editUser: boolean;
  complete: boolean;
  successDel: boolean;
}

const UsersPage = () => {
  const [flags, setFlags] = useState<Tflags>({
    search: false,
    visible: false,
    editUser: false,
    complete: false,
    successDel: false
  });
  const [users, setUsers] = useState([]);
  const [idUser, setIdUser] = useState<string>();
  const [retorno, setRetorno] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const header: Array<string> = ["Nome", "CPF", "E-mail","Cargo"];

  const getUsers = async () => {
    await API.get("users", CONFIGS).then((item) => {
      setUsers(item.data.usuarios);
      setLoading(false);
    }).catch(err => {
      console.log(err)
    });
  };

  useEffect(() => {
      getUsers();
  }, []);

  const delUser = async (id: string): Promise<void> => {
    await API.delete(`users/auth/${id}`, CONFIGS)
      .then(() => {
        console.log("deletado com sucesso");
        getUsers();
        setFlags({...flags, successDel: true});
      })
      .catch((e) => {
        console.log(e.message);
        console.log(id);
      });
  };

  const toogleVisible = (): void => {
    setFlags({ ...flags, visible: !flags.visible });
  };

  const toogleComplete = (): void =>
    setFlags({ ...flags, complete: !flags.complete, visible: !flags.visible });
  const toogleEdit = (id?: string | undefined): void => {
    setFlags({ ...flags, editUser: !flags.editUser });
    setIdUser(id);
  };
  return (
    <>
      <WrapContainer>
        <Box
          $dir="column"
          $p="20px"
          $justify="baseline"
          $align="flex-start"
          $w="100%"
          $h="95%"
          $bg="white"
        >
          <Title $align="left" $color="black">
            Usuarios Cadastrados
          </Title>
          <Box $w="100%" $mt="58px" $justify="space-between">
            <Title $align="left" $color="black" $size="16px">
              Lista de usuarios
            </Title>
              <Box>
                <Button
                  icon={<FaPlus className={`text-black mr-2 w-1rem h-auto`} />}
                  label="Novo"
                  onClick={toogleVisible}
                  className="flex p-2 text-base font-bold border-round-sm border-none bg-pink-400 hover:text-white hover:bg-pink-500 transition-duration-200"
                />
              </Box>
          </Box>
          <DataTable
            loading={loading}
            edit={toogleEdit}
            deleteUser={delUser}
            header={header}
            body={users}
          />
        </Box>
      </WrapContainer>
      <CreateUser
        updateUsers={getUsers}
        toogle={toogleVisible}
        state={flags.visible}
        retorno={setRetorno}
        complete={toogleComplete}
      />
      <EditUser
        updateUsers={getUsers}
        toogle={toogleEdit}
        state={flags.editUser}
        id={idUser}
      />

      <Overlay
        onClick={() => setFlags({...flags, complete: false})}
        className={flags.complete ? "active" : ""}
      >
        <Box
          $w="350px"
          $dir="column"
          $justify="center"
          $p="30px"
          $bg="white"
          $radius="12px"
        >
          <Text $size="28px" $align="center" $color="black">
            {retorno}
          </Text>
        </Box>
      </Overlay>

      <Overlay
        onClick={() => setFlags({...flags, successDel: false})}
        className={flags.successDel ? "active" : ""}
      >
        <Box
          $w="350px"
          $dir="column"
          $justify="center"
          $p="30px"
          $bg="white"
          $radius="12px"
        >
          <Text $size="28px" $align="center" $color="black">
            Usuario Deletado com sucesso! ✅
          </Text>
        </Box>
      </Overlay>
    </>
  );
};

export default UsersPage;
