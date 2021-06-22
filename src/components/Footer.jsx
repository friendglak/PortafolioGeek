import React from 'react';
import { Button } from '../globalStyles'
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import {
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText,
    Form,
    FormInput,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    SocialIcon

} from '../style/FooterStyles';

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterSubscription>
                    <FooterSubHeading>
                        Si está interesado en trabajar conmigo en su próximo proyecto, no dude en ponerse en contacto.
                    </FooterSubHeading>
                    <FooterSubText>
                        Puedes hacerlo, cuando desees.
                    </FooterSubText>
                    <Form>
                        <FormInput name="user" type="name" placeholder="Tú nombre" />
                        <FormInput name="email" type="email" placeholder="Tú correo electrónico" />
                        <Button fontBig>Contáctame</Button>
                    </Form>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to="/inicio">
                                <SocialIcon />
                                GLAK
                            </SocialLogo>
                            <WebsiteRights>CON AMOR ❤ © GLAK 2021</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href='https://www.facebook.com/BlueGlakYeti/' target="blank" aria-label="Facebook">
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink href='https://twitter.com/camilojheans' target="blank" aria-label="Twitter">
                                    <FaTwitter />
                                </SocialIconLink>
                                <SocialIconLink href='https://github.com/FriendGlak' target="blank" aria-label="Github">
                                    <FaGithub />
                                </SocialIconLink>
                                <SocialIconLink href='https://www.linkedin.com/in/juan-camilo-vel%C3%A1squez-amarillo-556115215/' target="blank" aria-label="LinkedIn">
                                    <FaLinkedin />
                                </SocialIconLink>                             
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterSubscription>
            </FooterContainer>

        </>
    )
}


export default Footer;