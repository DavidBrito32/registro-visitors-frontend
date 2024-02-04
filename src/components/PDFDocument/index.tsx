import {
  Text,
  View,
  Document,
  Page,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import Logo from "./assets/brasao-do-ceara.png";

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

  return (
    <>
      <Document style={styles.container}>
        <Page size={"A4"}>
          <Image src={Logo} style={styles.bg_imagem} />
          <View style={styles.main}>
            <Text>{"Hello Word"}</Text>
          </View>
        </Page>
      </Document>
    </>
  );
};

export default PDFDocument;
