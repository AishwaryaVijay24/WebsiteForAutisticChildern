//import React from 'react';
//import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FooterContainer, FooterWrap,FooterLinksContainer,
FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,
FooterLink} from './FooterElements';


const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle> About Us</FooterLinkTitle>
                        <FooterLink to='/about'>Our Story</FooterLink>
                        <FooterLink to='/about'>Vision</FooterLink>
                        <FooterLink to='/tnc'>Terms and Conditions</FooterLink>
                </FooterLinkItems>


                <FooterLinkItems>
                <FooterLinkTitle> Social Media</FooterLinkTitle>
                        <FooterLink to='/help'>Email</FooterLink>
                        <FooterLink to='/help'>Instagram</FooterLink>
                        <FooterLink to='/help'>Facebook</FooterLink>
                        <FooterLink to='/help'>Twitter</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
            <FooterLinkItems>
                    <FooterLinkTitle>Company</FooterLinkTitle>
                        <FooterLink to='/signin'>Work</FooterLink>
                        <FooterLink to='/discover'>Community</FooterLink>
                        <FooterLink to='/privacy'>Privacy Policy</FooterLink>
                </FooterLinkItems>
                        
                
                <FooterLinkItems>
                <FooterLinkTitle> Contact Us</FooterLinkTitle>
                        <FooterLink to='/help'>Contact</FooterLink>
                        <FooterLink to='/help'>Support</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
        
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;
