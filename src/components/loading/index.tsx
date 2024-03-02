import { Box, Img, Overlay, Progress, Spinner, Title } from "../../styles/styles";
import mumia from"./assets/mumia.gif"

interface Props {
    loading: boolean;
}
const Loading = (props: Props) => {
    return (
        <>
            <Overlay className={props.loading ? "active" : ""}>
                    <Box $w="100%" $h="100%" $display="flex" $dir="column" $justify="center" $align="center">
                        <Box $w="100%" $h="100%" $display="flex" $dir="column" $justify="center" $align="center" >
                            <Img src={mumia} $w="180px" $h="180px" />
                            <Spinner>
                                <Progress />
                            </Spinner>
                        <Title>Carregando dados...</Title>
                        </Box>
                    </Box>
            </Overlay>
        </>
    );
};

export default Loading;