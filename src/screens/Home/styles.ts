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
`;

export const ContentGreetings = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    color: #FFF;
    font-size: 26px;
`;

export const ContentSecondaryTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    color: #FFF;
    font-size: 20px;
    margin-top: -5px;
`;

export const PropertyCardListWrapper = styled.View`
    width: 95%;
    height: 80%;
    margin-top: 5px;
`;

export const PropertyCard = styled.View`
    width: 100%;
    height: 23%;
    border-radius: 10px;
    background-color: #10261A;
    flex-direction: row;
    align-items: center;
    margin-bottom: 6px;
`;

export const PropertyCardImageContainer = styled.View`
    width: 60%;
    height: 100%;
    border-radius: 12px;
    align-items: center;
    justify-content: center;
    padding-left: 2%;
`;

export const PropertyCardImage = styled.Image`
    width: 100%;
    height: 85%;
    border-radius: 12px;
`;

export const PropertCardImageTitleContainer = styled.View`
    padding-left: 8px;
    padding-right: 8px;
    border-radius: 16px;
    align-items: center;
    justify-content: center;
    height: 20px;
    background-color: #10261A;
    position: absolute;
    top: 0;
    margin-top: 10px;
`

export const PropertyCardImageTitle = styled.Text`
    color: #178D40;
    font-size: 12px;
`;

export const PropertyCardButtonContainer = styled.View`
    width: 40%;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;

export const PropertyCardEditButton = styled.View`
    width: 65px;
    height: 20px;
    border-radius: 20px;
    background-color: #AFF654;
    align-items: center;
    justify-content: center;
`;

export const PropertyCardEditButtonTitle = styled.Text`
    color: #178D40;
    font-size: 14px;
    font-weight: bold;
`;

export const PropertyCardDeleteButton = styled.View`
    width: 65px;
    height: 20px;
    border-radius: 20px;
    background-color: #F29C1C;
    align-items: center;
    justify-content: center;
`;

export const PropertyCardDeleteButtonTitle = styled.Text`
    color: #000;
    font-size: 14px;
    font-weight: bold;
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

export const PlusButtonTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    color: #FFF;
    font-size: 48px;
`

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
`