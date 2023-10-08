import React,{useState} from 'react';
import Video from '../videos/video.mp4';
import { Button } from '../ButtonElement';
import { HeroContainer,HeroBg,VideoBg,HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight } from './HeroElements';





const HeroSection = () => {
    const [hover, setHover]= useState(false)

    const onHover = () =>{
        setHover(!hover)
    }
  return (
    <HeroContainer >
      <HeroBg>
        <VideoBg autoPlay loop muted>
            <source src={Video} type='video/mp4' />
        </VideoBg>
      </HeroBg>
      <HeroContent>
      <HeroH1>Inclusive Minds: Empowering the Autism Community</HeroH1>
      <HeroP>
      Register for a new account today to expand your knowledge and gain 
      valuable insights into the community.
      </HeroP>
      <HeroBtnWrapper>
        <Button to='/signin' onMouseEnter={onHover} onMouseLeave={onHover}>
            Get started { hover ? <ArrowForward />: <ArrowRight/>}
        </Button>
      </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;
