import { InputSwitch } from "primereact/inputswitch";
import {
  Beetween,
  Box,
  Circle,
  Grafic,
  Title,
  WrapContainer,
} from "../../../styles/styles";
import { useState } from "react";

const ResumoPage = () => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <>
      <WrapContainer>
        <Grafic>
          <Beetween>
            <Title $color="black" $size="16px" $align="left">
              Total de Visitas
            </Title>
            <Box>
              <Title $color="black" $size="16px" $align="left">
                Dia
              </Title>
              <InputSwitch
                checked={checked}
                onChange={(e) => setChecked(e.value)}
              />
              <Title $color="black" $size="16px">
                Mês
              </Title>
            </Box>
          </Beetween>
        </Grafic>
        <Grafic $dir="column">
          <Title $color="black" $size="16px" $align="left">
            Total de Visitas
          </Title>
          <Box $w="80%" $h="100%" $justify="space-between">
            <Box $mt="28px" $dir="column">
              <Title $size="16px" $color="black">
                Cidade 1
              </Title>
              <Title $size="16px" $color="black">
                Cidade 1
              </Title>
              <Title $size="16px" $color="black">
                Cidade 1
              </Title>
              <Title $size="16px" $color="black">
                Cidade 1
              </Title>
            </Box>

            <Circle />
          </Box>
        </Grafic>
        <Grafic></Grafic>
        <Grafic>
        <Title $color="black" $size="16px" $align="left">
            Visitantes por Gênero
          </Title>
          <Box $w="80%" $h="100%" $justify="space-between">
            <Box $mt="28px" $dir="column">
              <Title $size="16px" $color="black">
                Cidade 1
              </Title>
              <Title $size="16px" $color="black">
                Cidade 1
              </Title>
              <Title $size="16px" $color="black">
                Cidade 1
              </Title>
              <Title $size="16px" $color="black">
                Cidade 1
              </Title>
            </Box>

            <Circle />
          </Box>
        </Grafic>
      </WrapContainer>
    </>
  );
};

export default ResumoPage;
