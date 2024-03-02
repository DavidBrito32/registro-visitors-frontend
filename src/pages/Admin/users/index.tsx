import { Button } from "primereact/button";
import { Box, Overlay, Text, Title, WrapContainer } from "../../../styles/styles";
import { FaPlus, FaSearch } from "react-icons/fa";
import { IoCloseCircleSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import DataTable from "../../../components/data-table";
import { API } from "../../../services/API";
import CreateUser from "./createUser";
import { InputMask } from "primereact/inputmask";
import EditUser from "./editUser";
import { CONFIGS } from "../../../services/axiosHeaders";

interface Tflags {
  search: boolean;
  visible: boolean;
  editUser: boolean;
  complete: boolean;
}

const UsersPage = () => {
  const [flags, setFlags] = useState<Tflags>({
    search: false,
    visible: false,
    editUser: false,
    complete: false,
  });
  const [users, setUsers] = useState([]);
  const [idUser, setIdUser] = useState<string>();
  const [retorno, setRetorno] = useState<string>("");
  const header: Array<string> = ["Nome", "CPF", "Cargo"];

  const getUsers = async () => {
    await API.get("users", CONFIGS).then((item) => {
      setUsers(item.data.usuarios);
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const delUser = async (id: string): Promise<void> => {
    await API.delete(`users/auth/${id}`)
      .then(() => {
        console.log("deletado com sucesso");
        getUsers();
      })
      .catch((e) => {
        console.log(e.message);
        console.log(id);
      });
  };

  const toogleSearch = (): void =>
    setFlags({ ...flags, search: !flags.search });

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
                  className="p-2 flex justify-content-center align-items-center text-base font-bold border-round-sm border-none bg-red-400 hover:text-white hover:bg-red-500 transition-duration-200"
                />
              </Box>
            ) : (
              <Box>
                <Button
                  icon={<FaPlus className={`text-black mr-2 w-1rem h-auto`} />}
                  label="Novo"
                  onClick={toogleVisible}
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
          <DataTable
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
    </>
  );
};

export default UsersPage;
