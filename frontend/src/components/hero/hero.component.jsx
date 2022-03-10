import Link from 'next/link';
import React from 'react'
import { Container, Button } from '../navbar/navbar.styles';
import { HeroContainer, HeroImage, HeroTitle, HeroSub } from './hero.styles';

const Hero = () => {
  return (
    <HeroContainer>
      <Container>
        <HeroImage>
          <HeroTitle>
            Bantu Petani, Pilih Program Pertanian. Modali dan Bagi Hasilnya.
          </HeroTitle>
          <HeroSub>Bantu, modali, bagi hasil.</HeroSub>
          <Link href="/program">
            <Button primary>Mulai Sekarang</Button>
          </Link>
        </HeroImage>
      </Container>
    </HeroContainer>
  );
}

export default Hero;
