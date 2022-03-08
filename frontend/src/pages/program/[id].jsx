import Footer from "@/components/footer/footer.component";
import Navbar from "@/components/navbar/navbar.component";
import { Container } from "@/components/navbar/navbar.styles";
import ProgramCard from "@/components/program/program-card.component";
import Program from "@/components/program/program.component";
import { ProgramDetailLeft } from "@/components/program/program.styles";
import { ProgramDetailTitle } from "@/components/program/program.styles";
import { ProgramIcon } from "@/components/program/program.styles";
import { ProgramDetailNav } from "@/components/program/program.styles";
import { ProgramDetailNavContent } from "@/components/program/program.styles";
import { ProgramDetailDivider } from "@/components/program/program.styles";
import { ProgramDetailRight } from "@/components/program/program.styles";
import { ProgramDetailFooter } from "@/components/program/program.styles";
import { ProgramDetailHeading } from "@/components/program/program.styles";
import { ProgramDetailNavContentMap } from "@/components/program/program.styles";
import { ProgramDetailNavItem } from "@/components/program/program.styles";
import { ProgramType } from "@/components/program/program.styles";
import { ProgramLocation } from "@/components/program/program.styles";
import { ProgramDetailType } from "@/components/program/program.styles";
import { ProgramDetailContent } from "@/components/program/program.styles";
import { ProgramDetailImage } from "@/components/program/program.styles";
import { ProgramDetailContainer } from "@/components/program/program.styles";
import { useAuth } from "@/hooks/auth";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import _ from 'lodash';

const ProgramDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { user, logout, programDetail, program } = useAuth({ middleware: 'guest', id });
  const [active, setActive] = useState(1);
  const [programs, setPrograms] = useState(1);

  const checkActive = (id) => (active === id ? true : false);

  useEffect(() => {
    setPrograms(_.slice(_.filter(program?.data, (e) => e.id !== id), 0, 3));
  }, [program])

  return (
    <>
      <Head>
        <title>Modal Tani - Program Detail</title>
      </Head>
      <Navbar user={user} logout={logout} />
      <ProgramDetailContainer>
        <Container>
          <ProgramDetailImage src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/images/${programDetail?.image.name}`} />
          <ProgramDetailContent>
            <ProgramDetailLeft>
              <ProgramDetailType>{programDetail?.type}</ProgramDetailType>
              <ProgramDetailTitle>{programDetail?.name}</ProgramDetailTitle>
              <ProgramLocation>
                <ProgramIcon src="/map.png" />
                <ProgramType mb>{programDetail?.location}</ProgramType>
              </ProgramLocation>
              <ProgramDetailNav>
                <ProgramDetailNavItem active={checkActive(1)} onClick={() => setActive(1)}>
                  Deskripsi Program
                </ProgramDetailNavItem>
                <ProgramDetailNavItem active={checkActive(2)} onClick={() => setActive(2)}>
                  Lokasi Program
                </ProgramDetailNavItem>
              </ProgramDetailNav>
              <ProgramDetailNavContent
                active={checkActive(1)}
                dangerouslySetInnerHTML={{
                  __html: programDetail?.description,
                }}
              />
              {
                programDetail && <ProgramDetailNavContentMap
                  active={checkActive(2)}
                  width="100%"
                  height="500"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src={`https://maps.google.com/maps?q=${programDetail.latitude},${programDetail.longitude}&hl=en&z=14&output=embed`}
                />
              }
            </ProgramDetailLeft>
            <ProgramDetailRight>
              <ProgramCard title={programDetail?.name} periode={programDetail?.periode} interest={programDetail?.interest} funded={programDetail?.funded?.toLocaleString("id-ID")} funding={programDetail?.funding?.toLocaleString("id-ID")} type={programDetail?.type} location={programDetail?.location} />
            </ProgramDetailRight>
          </ProgramDetailContent>
          <ProgramDetailDivider />
          <ProgramDetailHeading>Program Terkait</ProgramDetailHeading>
          <ProgramDetailFooter>
            {
              programs?.length > 0 && programs.map(data => <Program
                key={data.id}
                id={data.id}
                image={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/images/${data.image.name}`}
                title={data.name}
                periode={`${data.periode} Bulan`}
                interest={`${data.interest}%`}
                funded={data.funded?.toLocaleString("id-ID")}
                funding={data.funding?.toLocaleString("id-ID")}
                type={data.type}
                location={data.location}
              />)
            }
          </ProgramDetailFooter>
        </Container>
      </ProgramDetailContainer>
      <Footer />
    </>
  );
};

export default ProgramDetail;
