'use client';

import React from 'react';
import { Card, Container, Divider } from '@mantine/core';
import About from './components/about';
import DrivingLicence from './components/driving-licence';
import Education from './components/education';
import { Header } from './components/header';
import HonoursAndAwards from './components/honours-and-awards';
import Interests from './components/interests';
import Languages from './components/languages';
import OtherExperience from './components/other-experience';
import Skills from './components/skills';
import WorkExperience from './components/work';

export default function HomePage() {
  const sections = [
    { component: Skills },
    { component: WorkExperience },
    { component: OtherExperience },
    { component: Education },
    { component: HonoursAndAwards },
    { component: Languages },
    { component: DrivingLicence },
    { component: Interests },
  ];

  return (
    <Container my={50}>
      <Card shadow="md" radius="md" withBorder>
        <Card.Section>
          <Header />
        </Card.Section>

        <Card.Section pl={30} pt={20} pb={20} pr={20}>
          <About />
        </Card.Section>

        {sections.map((section, index) => (
          <React.Fragment key={index}>
            <Divider my="sm" />
            <Card.Section pl={30} pt={20} pb={20} pr={20}>
              <section.component />
            </Card.Section>
          </React.Fragment>
        ))}
      </Card>
    </Container>
  );
}
