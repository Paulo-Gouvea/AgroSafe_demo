import { styled } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #178D40;
    align-items: center;
`;

export const Header = styled.View`
    width: 100%;
    height: 18%;
    flex-direction: column-reverse;
`;

export const HeaderWrapper = styled.View`
    height: 50%;
    width: 63%;
    margin-bottom: 3%;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    padding-left: 3.5%;
`;

export const MenuButton = styled.View`
    height: 90%;
    width: 40%;
    background-color: #10261A;
    align-items: center;
    justify-content: center;
`;

export const MenuButtonTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    color: #FFF;
    font-size: 24px;
`;

export const HeaderLogo = styled.Image`
    height: 100%;
    width: 40%;
`;

export const Separator = styled.View`
    width: 100%;
    height: 4px;
    background-color: #000;
`;

export const Content = styled.View`
    width: 100%;
    height: 68%;
    align-items: center;
    padding-top: 5%;
    padding-left: 1%;
    padding-right: 5%;
`;

export const ContentTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    color: #FFF;
    font-size: 20px;
    margin-bottom: 8%;
`;

export const FunctionalityWrapper = styled.View`
    width: 73%;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10%;
`;

export const Functionality = styled.View`
    width: 120px;
    height: 120px;
    border-radius: 10px;
    background-color: #10261A;
    align-items: center;
    justify-content: center;
`;

export const FunctionalityImageWrapper = styled.View`
    align-items: center;
    justify-content: center;
    height: 70%;
`;

export const FunctionalityTitleWrapper = styled.View`
    width: 100%;
    height: 20px;
    align-items: center;
`;

export const FunctionalityTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    color: #FFF;
    font-size: 16.3px;
`;

export const Footer = styled.View`
    width: 100%;
    height: 14%;
    flex-direction: column-reverse;
    align-items: center;
`;

export const FooterWrapper = styled.View`
    width: 88%;
    height: 90%;
    flex-direction: row;
    justify-content: space-between;
`;

export const PlusButton = styled.View`
    background-color: #10261A;
    height: 70px;
    width: 70px;
    border-radius: 1000px;
    align-items: center;
    justify-content: center;
`;

export const PlusButtonImage = styled.Image`
    width: 46px;
    height: 46px;
`;

export const HelpButton = styled.View`
    height: 70px;
    width: 140px;
    border-radius: 100px;
    background-color: #10261A;
    align-items: center;
    justify-content: center;
`;

export const HelpButtonTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    color: #FFF;
    font-size: 28px;
`;