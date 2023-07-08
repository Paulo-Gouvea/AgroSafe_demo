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
    ContentTitle,
    FunctionalityWrapper,
    Functionality,
    FunctionalityImageWrapper,
    FunctionalityTitleWrapper,
    FunctionalityTitle,
    Footer,
    FooterWrapper,
    PlusButton,
    PlusButtonImage,
    HelpButton,
    HelpButtonTitle,
} from "./styles";
import { Image } from "react-native";

import logo from '../../utils/images/logo.png';
import forecastImg from '../../utils/images/forecast.png';
import reportImg from '../../utils/images/report.png';
import tutorialImg from '../../utils/images/tutorial.png';
import recommendationImg from '../../utils/images/recommendation.png';
import backImage from '../../utils/images/back.png';

export function Property(){
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
                <ContentTitle>
                    Você está mexendo na propriedade Caxias do Sul!
                </ContentTitle>

                <FunctionalityWrapper>
                    <Functionality>
                        <FunctionalityImageWrapper>
                            <Image 
                                source={forecastImg}
                                style={{ width: 110, height:75 }}
                            />
                        </FunctionalityImageWrapper>
                        
                        <FunctionalityTitleWrapper>
                            <FunctionalityTitle>
                                Previsão
                            </FunctionalityTitle>
                        </FunctionalityTitleWrapper>
                    </Functionality>

                    <Functionality>
                        <FunctionalityImageWrapper>
                            <Image 
                                source={reportImg}
                                style={{ width: 80, height:75 }}
                            />
                        </FunctionalityImageWrapper>
                        
                        <FunctionalityTitleWrapper>
                            <FunctionalityTitle>
                                Relatórios
                            </FunctionalityTitle>
                        </FunctionalityTitleWrapper>
                    </Functionality>
                </FunctionalityWrapper>

                <FunctionalityWrapper>
                    <Functionality>
                        <FunctionalityImageWrapper>
                            <Image 
                                source={tutorialImg}
                                style={{ width: 70, height:75 }}
                            />
                        </FunctionalityImageWrapper>
                        
                        <FunctionalityTitleWrapper>
                            <FunctionalityTitle>
                                Tutorial
                            </FunctionalityTitle>
                        </FunctionalityTitleWrapper>
                    </Functionality>

                    <Functionality>
                        <FunctionalityImageWrapper>
                            <Image 
                                source={recommendationImg}
                                style={{ width: 85, height:75 }}
                            />
                        </FunctionalityImageWrapper>
                        
                        <FunctionalityTitleWrapper>
                            <FunctionalityTitle>
                                Recomendação
                            </FunctionalityTitle>
                        </FunctionalityTitleWrapper>
                    </Functionality>
                </FunctionalityWrapper>
            </Content>

            <Separator />

            <Footer>
                <FooterWrapper>
                    <PlusButton>
                        <PlusButtonImage
                            source={backImage}
                        />
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