import {
  View,
  Document,
  Page,
  StyleSheet,
} from "@react-pdf/renderer";
import { useEffect, useState } from "react";
import { API } from "../../services/API";
import { Html } from "react-pdf-html";
import { CONFIGS } from "../../services/axiosHeaders";
interface GenderDB {
  gender: string;
  total: number;
}
interface CityDB {
  city: string;
  total: number;
}
interface StateDB {
  state: string;
  total: number;
}
interface ProfessionDB {
  profession: string;
  total: number;
}
interface ResultsDB {
  gender: Array<GenderDB>,
  city: Array<CityDB>,
  state: Array<StateDB>,
  profession: Array<ProfessionDB>
}
const PDFDocument = (): JSX.Element => {
  const styles = StyleSheet.create({
    container: {
      position: "relative",
    },
    bg_imagem: {
      position: "absolute",
      width: "50%",
      height: "50%",
      objectFit: "contain",
      top: "25%",
      left: "25%",
      opacity: 0.5,
      zIndex: 1,
    },
    main: {
      width: "100%",
      height: "100%",
      padding: "60px",
      position: "absolute",
      zIndex: 2,
      fontSize: "12px",
    },
  });
  const [data, setData] = useState<ResultsDB>();

  const Request = async () => {
    await API.get("/visitor/results", CONFIGS).then((item) => {
      setData(item.data);
    })
  }

 
  
   const table = `
   <div style="width: 100%; max-width: 800px; margin: 0 auto; padding: 20px;">
  <h1 style="text-align: center;">Relatório Gerencial</h1>
  <div style="margin-bottom: 20px;">
    <h5 style="font-size: 16px; color: red; font-weight: bold; margin-bottom: 10px;">Visitantes por gênero:</h5>
    <div style="font-size: 14px; margin-bottom: 5px;">
      <p><strong>Gênero - Total</strong></p>
      ${
        data?.gender.map(item => (
          `<p>${item.gender} - ${item.total}</p>`
        ))
      }
    </div>
  </div>
  <div style="margin-bottom: 20px;">
    <h5 style="font-size: 16px; color: red; font-weight: bold; margin-bottom: 10px;">Visitantes por cidade:</h5>
    <div style="font-size: 14px; margin-bottom: 5px;">
      ${
        data?.city.map(item => (
          `<p>${item.city} - ${item.total}</p>`
        ))
      }
    </div>
  </div>
  <div style="margin-bottom: 20px;">
    <h5 style="font-size: 16px; color: red; font-weight: bold; margin-bottom: 10px;">Visitantes por estado:</h5>
    <div style="font-size: 14px; margin-bottom: 5px;">
      ${
        data?.state.map(item => (
          `<p>${item.state} - ${item.total}</p>`
        ))
      }
    </div>
  </div>
  <div style="margin-bottom: 20px;">
    <h5 style="font-size: 16px; color: red; font-weight: bold; margin-bottom: 10px;">Visitantes por profissão:</h5>
    <div style="font-size: 14px; margin-bottom: 5px;">
      ${
        data?.profession.map(item => (
          `<p>${item.profession} - ${item.total}</p>`
        ))
      }
    </div>
  </div>
</div>

   `;

  useEffect(() => {
    Request();
  }, [data]);

  return (
    <>
      <Document style={styles.container}>
        <Page size={"A4"}>
          <View style={styles.main}>
               <Html>{table}</Html>
          </View>       
        </Page>
      </Document>
    </>
  );
};

export default PDFDocument;
