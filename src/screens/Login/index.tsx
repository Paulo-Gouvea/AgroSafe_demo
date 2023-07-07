import React from "react";
import { 
    Container, 
    ImageLogo,
    InputWrapper,
    InputContainer,
    InputIcon,
    Input,
    PasswordInputIcon,
    KeepConnectedWrapper,
    KeepConnectedCheck,
    KeepConnectedText,
    LoginButton,
    LoginButtonTitle,
    NormalButtonContainer,
    NormalButton,
    NormalButtonTitle,
} from "./styles";

import logo from '../../utils/images/logo.png';
import mail from '../../utils/images/mailIcon.png';
import lock from '../../utils/images/lock.png';
 
export function Login(){
    return(
        <Container>
            <ImageLogo source={logo} />

            <InputWrapper>
                <InputContainer>
                    <InputIcon source={mail}/>
                    <Input />
                </InputContainer>

                <InputContainer>
                    <PasswordInputIcon source={lock}/>
                    <Input secureTextEntry/>
                </InputContainer>
            </InputWrapper>

            <KeepConnectedWrapper>
                <KeepConnectedCheck />
                <KeepConnectedText>Manter Conectado</KeepConnectedText>
            </KeepConnectedWrapper>

            <LoginButton>
                <LoginButtonTitle>
                    Entrar
                </LoginButtonTitle>
            </LoginButton>

            <NormalButtonContainer>
                <NormalButton>
                    <NormalButtonTitle>
                        Registrar
                    </NormalButtonTitle>
                </NormalButton>

                <NormalButton>
                    <NormalButtonTitle>
                        Ajuda ?
                    </NormalButtonTitle>
                </NormalButton>
            </NormalButtonContainer>
        </Container>
    );
}