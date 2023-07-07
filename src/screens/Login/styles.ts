import { styled } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    padding-top: 50px;
    background-color: #178D40;
    align-items: center;
`;

export const ImageLogo = styled.Image`
    width: 300px;
    height: 200px;
`;

export const InputWrapper = styled.View`
    height: 170px;
    justify-content: space-between;
`

export const InputContainer = styled.View`
    width: 350px;
    height: 73px;

    flex-direction: row;
    align-items: center;

    padding-left: 10px;
    padding-top: 5px;

    background-color: white;

    border-radius: 100px;
    border-width: 6px;
    border-style: solid;
    border-color: black;
`; 

export const InputIcon = styled.Image`
    width: 60px;
    height: 40px;
    margin-bottom: 5px;
`;

export const Input = styled.TextInput`
    width: 190px;
    height: 50px;
    font-size: 22px;
    padding-left: 15px;
    color: #178D40;
    text-align: center;
    font-family: ${({ theme }) => theme.FONTS.TEXT};
`;

export const PasswordInputIcon = styled.Image`
    width: 40px;
    height: 30px;
    margin-bottom: 5px;
    margin-left: 10px;
`;

export const KeepConnectedWrapper = styled.View`
    margin-top: 13px;
    width: 315px;
    flex-direction: row;
    align-items: center;
`

export const KeepConnectedCheck = styled.View`
    width: 30px;
    height: 30px;
    background-color: white;

    border-width: 3px;
    border-style: solid;
    border-color: black;
`

export const KeepConnectedText = styled.Text`
    color: white;
    margin-left: 12px;
    font-family: ${({ theme }) => theme.FONTS.TEXT};
`;

export const LoginButton = styled.View`
    margin-top: 30px;

    width: 150px;
    height: 65px;
    border-radius: 100px;
    background-color: #A3D921;

    align-items: center;
    justify-content: center;
`

export const LoginButtonTitle = styled.Text`
    color: #178D40;
    font-size: 26px;
    font-family: ${({ theme }) => theme.FONTS.TEXT};
`;

export const NormalButtonContainer = styled.View`
    width: 350px;
    margin-top: 45px;
    flex-direction: row;
    justify-content: space-between;
`;

export const NormalButton = styled.View`
    width: 150px;
    height: 65px;
    border-radius: 100px;
    background-color: #10261A;

    align-items: center;
    justify-content: center;
`;

export const NormalButtonTitle = styled.Text`
    color: #ffffff;
    font-size: 26px;
    font-family: ${({ theme }) => theme.FONTS.TEXT};
`;