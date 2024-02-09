import { Button } from "primereact/button";
import { TBody, Table, Td, Th, Thead, Tr } from "../../styles/styles";
import { IoNewspaperSharp } from "react-icons/io5";
import { BsPencilSquare } from "react-icons/bs";
import { FaRegTrashCan } from "react-icons/fa6";

type TBody = {
  id: string | number;
  name: string;
  cpf: number | string;
  cargo?: string | undefined;
  cidade?: string | undefined;
  profissao?: string | undefined;
  emmail?: string | undefined;
  genero?: string | undefined;
  estado?: string | undefined;
};

interface Props {
  header: Array<string>;
  body?: Array<TBody>;
  tableColor?: string | undefined;
}

const DataTable = ({ header, body, tableColor }: Props): JSX.Element => {
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
          {body && body.map((item) => (
            <Tr $h="28px">
              <Td $weight="bold">{item.name}</Td>
              <Td $weight="bold">{item.cpf}</Td>
              <Td $weight="bold">{item.cargo || item.cidade}</Td>
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
          ))}
        </TBody>
      </Table>
    </>
  );
};

export default DataTable;
