import React from "react";
import { 
    Container, 
    Header,
    HeaderWrapper,
    MenuButton,
    MenuButtonTitle,
    HeaderLogo,
    Separator,
    Content,
    ContentGreetings,
    ContentSecondaryTitle,
    PropertyCardListWrapper,
    PropertyCard,
    PropertyCardImageContainer,
    PropertyCardImage,
    PropertCardImageTitleContainer,
    PropertyCardImageTitle,
    PropertyCardButtonContainer,
    PropertyCardEditButton,
    PropertyCardEditButtonTitle,
    PropertyCardDeleteButton,
    PropertyCardDeleteButtonTitle,
    Footer,
    FooterWrapper,
    PlusButton,
    PlusButtonTitle,
    HelpButton,
    HelpButtonTitle,
} from "./styles";

import logo from '../../utils/images/logo.png';
import caxiasPhoto from '../../utils/images/caxias_do_sul.png';
import rioPhoto from '../../utils/images/rio_de_janeiro.png';
import desiderioPhoto from '../../utils/images/sao_desiderio.png';
 
export function Home(){
    return(
        <Container>
            <Header>
                <HeaderWrapper>
                    <MenuButton>
                        <MenuButtonTitle>
                            Menu
                        </MenuButtonTitle>
                    </MenuButton>

                    <HeaderLogo 
                        source={logo}
                    />
                </HeaderWrapper>
            </Header>

            <Separator />

            <Content>
                <ContentGreetings>
                    Bem-vindo Edivaldo!
                </ContentGreetings>

                <ContentSecondaryTitle>
                    Confira as suas propriedades:
                </ContentSecondaryTitle>

                <PropertyCardListWrapper>
                <PropertyCard>
                        <PropertyCardImageContainer>
                            <PropertyCardImage 
                                source={caxiasPhoto}
                            />
                            <PropertCardImageTitleContainer>
                                <PropertyCardImageTitle>
                                    Caxias do Sul
                                </PropertyCardImageTitle>
                            </PropertCardImageTitleContainer>
                        </PropertyCardImageContainer>

                        <PropertyCardButtonContainer>
                            <PropertyCardEditButton>
                                <PropertyCardEditButtonTitle>
                                    Editar
                                </PropertyCardEditButtonTitle>
                            </PropertyCardEditButton>

                            <PropertyCardDeleteButton>
                                <PropertyCardDeleteButtonTitle>
                                    Excluir
                                </PropertyCardDeleteButtonTitle>
                            </PropertyCardDeleteButton>
                        </PropertyCardButtonContainer>
                    </PropertyCard>

                    <PropertyCard>
                        <PropertyCardImageContainer>
                            <PropertyCardImage 
                                source={rioPhoto}
                            />
                            <PropertCardImageTitleContainer>
                                <PropertyCardImageTitle>
                                    Rio de Janeiro
                                </PropertyCardImageTitle>
                            </PropertCardImageTitleContainer>
                        </PropertyCardImageContainer>

                        <PropertyCardButtonContainer>
                            <PropertyCardEditButton>
                                <PropertyCardEditButtonTitle>
                                    Editar
                                </PropertyCardEditButtonTitle>
                            </PropertyCardEditButton>

                            <PropertyCardDeleteButton>
                                <PropertyCardDeleteButtonTitle>
                                    Excluir
                                </PropertyCardDeleteButtonTitle>
                            </PropertyCardDeleteButton>
                        </PropertyCardButtonContainer>
                    </PropertyCard>

                    <PropertyCard>
                        <PropertyCardImageContainer>
                            <PropertyCardImage 
                                source={desiderioPhoto}
                            />
                            <PropertCardImageTitleContainer>
                                <PropertyCardImageTitle>
                                    São Desidério
                                </PropertyCardImageTitle>
                            </PropertCardImageTitleContainer>
                        </PropertyCardImageContainer>

                        <PropertyCardButtonContainer>
                            <PropertyCardEditButton>
                                <PropertyCardEditButtonTitle>
                                    Editar
                                </PropertyCardEditButtonTitle>
                            </PropertyCardEditButton>

                            <PropertyCardDeleteButton>
                                <PropertyCardDeleteButtonTitle>
                                    Excluir
                                </PropertyCardDeleteButtonTitle>
                            </PropertyCardDeleteButton>
                        </PropertyCardButtonContainer>
                    </PropertyCard>
                </PropertyCardListWrapper>
            </Content>

            <Separator />

            <Footer>
                <FooterWrapper>
                    <PlusButton>
                        <PlusButtonTitle>
                            +
                        </PlusButtonTitle>
                    </PlusButton>

                    <HelpButton>
                        <HelpButtonTitle>
                            Ajuda ?
                        </HelpButtonTitle>
                    </HelpButton>
                </FooterWrapper>
            </Footer>
        </Container>
    );
}