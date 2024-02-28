import {
  Beetween,
  Box,
  Button,
  Circle,
  Grafic,
  Text,
  Title,
  WrapContainer,
} from "../../../styles/styles";
import { useEffect, useState } from "react";
import { Chart } from "primereact/chart";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFDocument from "../../../components/PDFDocument";

const ResumoPage = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const data = {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      datasets: [
        {
          label: "Total de Visitas no mês",
          data: [540, 325, 702, 620],
          backgroundColor: [
            "rgba(255, 159, 64, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgb(255, 159, 64)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
          ],
          borderWidth: 1,
        },
      ],
    };
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);
  return (
    <>
      <WrapContainer>
        <Box $display="flex" $p="0 100px" $w="100%" $wrap="wrap">
          <Box $w="100%" $justify="space-between">
            <Text>Ver Relatorio Detalhado</Text>
            <PDFDownloadLink document={<PDFDocument />}><Button $size="16px" $p="5px 15px" $radius="24px" $color="red">Download</Button></PDFDownloadLink>
          </Box>
          <Grafic $justify="space-between" $radius="5px">
            <Beetween>
              <Title $color="black" $size="16px" $align="left">
                Total de Visitas
              </Title>
              <Box>
                <Title $color="black" $size="16px">
                  Mês
                </Title>
              </Box>
            </Beetween>
            <Box $h="100%" $w="100%" $justify="center" $align="center">
              <Chart
                className="w-full h-full"
                type="bar"
                data={chartData}
                options={chartOptions}
              />
            </Box>
          </Grafic>
          <Grafic $dir="column" $radius="5px">
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

              <Chart
                className="w-full h-full"
                type="doughnut"
                data={chartData}
                options={chartOptions}
              />
            </Box>
          </Grafic>
          <Grafic $radius="5px">
            <Title $color="black" $size="16px" $align="left">
              Total de Visitas
            </Title>

            <Chart
                className="w-full h-full"
                type="polarArea"
                data={chartData}
                options={chartOptions}
              />
          </Grafic>
          <Grafic $radius="5px">
            <Title $color="black" $size="16px" $align="left">
              Visitantes por Gênero
            </Title>
            <Box $w="80%" $h="100%" $align="center" $justify="space-between">
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
              <Chart
                className="w-full h-full"
                type="line"
                data={chartData}
                options={chartOptions}
              />
              <Circle />
            </Box>
          </Grafic>
        </Box>
      </WrapContainer>
    </>
  );
};

export default ResumoPage;
