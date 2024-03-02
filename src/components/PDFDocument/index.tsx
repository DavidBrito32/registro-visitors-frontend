import {
  View,
  Document,
  Page,
  StyleSheet,
  Image,
  Text,
} from "@react-pdf/renderer";
import Logo from "./assets/brasao-do-ceara.png";
import { useEffect, useState } from "react";
import { API } from "../../services/API";
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
    await API.get("/visitor/results").then((item) => {
      setData(item.data);
    })
  }

  console.log(data);
  

  useEffect(() => {
    Request();
  }, []);

  return (
    <>
      <Document style={styles.container}>
        <Page size={"A4"}>
          <Image src={Logo} style={styles.bg_imagem} />
          <View style={styles.main}>
                <p >Relatorio de pessoas por cidade:</p>
                { data && data.city.map((item) =>  (<Text color="black" key={item.city}>{item.city}</Text>)) }
          </View>
        </Page>
      </Document>
    </>
  );
};

export default PDFDocument;
