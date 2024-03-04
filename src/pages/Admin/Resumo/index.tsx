/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  Beetween,
  Box,
  Button,
  Grafic,
  Overlay,
  Text,
  Title,
  WrapContainer,
} from "../../../styles/styles";
import { useEffect, useState } from "react";
import { Chart } from "primereact/chart";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFDocument from "../../../components/PDFDocument";
import { API } from "../../../services/API";
import { CONFIGS } from "../../../services/axiosHeaders";
import Loading from "../../../components/loading";
export interface GenderDB {
  gender: string;
  total: number;
}
export interface CityDB {
  city: string;
  total: number;
}
export interface StateDB {
  state: string;
  total: number;
}
export interface ProfessionDB {
  profession: string;
  total: number;
}
export interface ResultsDB {
  gender: Array<GenderDB>;
  city: Array<CityDB>;
  state: Array<StateDB>;
  profession: Array<ProfessionDB>;
}
const ResumoPage = () => {
  const [dataRequest, setDataRequest] = useState<ResultsDB>();
  const [loading, setLoading] = useState<boolean>(true);

  const Request = async () => {
    await API.get("/visitor/results", CONFIGS)
      .then((item) => {
        setDataRequest(item.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const labelCity = dataRequest?.city.map((item) => item.city);
  const dadosGender = dataRequest?.gender.map((item) => item.total);
  const labelProfession = dataRequest?.profession.map(
    (item) => item.profession
  );
  const dataProfession = dataRequest?.profession.map((item) => item.total);
  const labelState = dataRequest?.state.map((item) => item.state);
  const dataState = dataRequest?.state.map((item) => item.total);

  const gender = {
    labels: ["Masculino", "Feminino", "Outros"],
    datasets: [
      {
        label: "Por Genero",
        data: dadosGender,
        backgroundColor: [
          "rgba(0, 255, 221, 0.2)",
          "rgba(255, 0, 255, 0.2)",
          "rgba(134, 104, 3, 0.2)",
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
  const city = {
    labels: labelCity,
    datasets: [
      {
        label: "Cidade",
        data: dadosGender,
        backgroundColor: [
          "rgba(43, 255, 0, 0.2)",
          "rgba(75, 192, 186, 0.2)",
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
  const profession = {
    labels: labelProfession,
    datasets: [
      {
        //@ts-ignore
        label: "Visitantes por profissão",
        data: dataProfession,
        backgroundColor: [
          "rgba(255, 159, 64, 0.2)",
          "rgba(0, 255, 255, 0.2)",
          "rgba(251, 0, 255, 0.2)",
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
  const optionsProfession = {
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      legend: {
        labels: {
          fontColor: "black",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "black",
          font: {
            weight: 500,
          },
        },
        grid: {
          display: false,
          drawBorder: true,
        },
      },
      y: {
        ticks: {
          color: "black",
        },
        grid: {
          color: "black",
          drawBorder: true,
        },
      },
    },
  };
  const state = {
    labels: labelState,
    datasets: [
      {
        label: "Visitantes por estados",
        data: dataState,
        backgroundColor: [
          "rgba(96, 255, 64, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgb(255, 156, 64)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const optionsState = {
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      tooltips: {
        mode: "index",
        intersect: false,
      },
      legend: {
        labels: {
          color: "red",
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          color: "black",
        },
        grid: {
          color: "gray",
        },
      },
      y: {
        stacked: true,
        ticks: {
          color: "black",
        },
        grid: {
          color: "black",
        },
      },
    },
  };

  useEffect(() => {
    Request();
  }, []);
  return (
    <>
      <WrapContainer>
        <Box $display="flex" $p="0 100px" $w="100%" $wrap="wrap">
          <Box $w="100%" $justify="space-between">
            <Text>Ver Relatorio Detalhado</Text>
            <PDFDownloadLink document={<PDFDocument />}>
              <Button $size="16px" $p="5px 15px" $radius="24px" $color="red">
                Download
              </Button>
            </PDFDownloadLink>
          </Box>
          <Grafic $justify="space-between" $radius="5px">
            <Beetween>
              <Title $color="black" $size="16px" $align="left">
                Visitantes por Profissão
              </Title>
            </Beetween>
            <Box
              $h="100%"
              $p="05px 0"
              $w="100%"
              $justify="center"
              $align="center"
            >
              <Chart
                className=" h-full"
                type="pie"
                data={profession}
                options={optionsProfession}
              />
            </Box>
          </Grafic>

          <Grafic $dir="column" $radius="5px">
            <Title $color="black" $size="16px" $align="left">
              Total de Visitas por Estado
            </Title>
            <Box $w="100%" $h="100%" $justify="space-between">
              <Chart
                className="w-full h-full"
                type="bar"
                data={state}
                options={optionsState}
              />
            </Box>
          </Grafic>

          <Grafic $radius="5px">
            <Title $color="black" $size="16px" $align="left">
              Total de Visitas Por Cidade
            </Title>

            <Chart
              className="w-full h-full"
              type="bar"
              data={city}
              options={{}}
            />
          </Grafic>

          <Grafic $radius="5px">
            <Title $color="black" $size="16px" $align="left">
              Visitantes por Gênero
            </Title>
            <Box $w="80%" $h="100%" $align="center" $justify="space-between">
              <Chart
                className="w-full h-full"
                type="bar"
                data={gender}
                options={{}}
              />
            </Box>
          </Grafic>
        </Box>
        <Overlay>
          <Box>
            <Title>BO da API</Title>
          </Box>
        </Overlay>
        <Loading loading={loading} />
      </WrapContainer>
    </>
  );
};

export default ResumoPage;
