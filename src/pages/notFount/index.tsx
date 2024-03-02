import { Link } from "react-router-dom";
import { Container, GlassContainer, Text, Title } from "../../styles/styles";
import bg from "./assets/bg.jpg";

const NotFoundPage = (): JSX.Element => {
    return (
        <>
            <Container $img={bg} $radius="24px" $display="flex" $justify="center" $align="center">
                <GlassContainer $w="700px" $radius="24px" $p="40px" $blur="8px" $bg="#FDFDA266">
                    <Title $color="black" $size="28px">Desculpe, Infelizmente esta pagina está em manutenção ou não existe</Title>
                    <Text $align="center" $mt="20px" $size="20px">Nesta pagina, não podemos garantir sua segurança!</Text>
                    <Text $align="center" $mt="20px" $size="20px">Volte para a segurança clicando <Link className="text-red-500 hover:text-400" to={"/"}>Aqui</Link></Text>
                </GlassContainer>
            </Container>
        </>
    );
};

export default NotFoundPage;
