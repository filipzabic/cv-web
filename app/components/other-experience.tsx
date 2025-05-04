import { IconLink } from '@tabler/icons-react';
import { Button, Group, Image, List, Text, Timeline, Title } from '@mantine/core';

const otherExperience = [
  {
    company: 'Dubrovnik MarryMe',
    position: 'Website development and maintenance',
    duration: '2020 - 2023',
    bulletPoints: ['Adding new content and improvements'],
    logoSrc: 'dubrovnik-marryme-logo.png',
    logoSize: 30,
    location: 'Zagreb, Croatia',
    website: 'https://dubrovnik-marryme.com',
  },
  {
    company: 'Solarium Suncokret',
    position: 'Website development and maintenance',
    duration: '2014 - 2016',
    bulletPoints: [
      'Initial website development in WordPress',
      'New logo design',
      'Continuous improvement by adding better design and more content',
    ],
    logoSrc: 'suncokret-solarium-logo.png',
    logoSize: 35,
    location: 'Zagreb, Croatia',
    website: 'https://solarijsuncokret.com',
  },
  {
    company: 'Dormitory for high school students A.G.Matoš',
    position: 'Volunteer',
    duration: '2015 - 2016',
    bulletPoints: ['Math and physics tutoring lessons'],
    logoSrc: 'dormitory-logo.png',
    logoSize: 40,
    location: 'Zagreb, Croatia',
    website: 'https://www.gustl.hr',
  },
];

export default function WorkExperience() {
  return (
    <>
      <Title order={2} mb={20}>
        Other work
      </Title>
      <Timeline bulletSize={55} radius={10} lineWidth={0}>
        {otherExperience.map((experience, index) => (
          <Timeline.Item
            key={index}
            bullet={<Image radius={5} h={experience.logoSize} src={experience.logoSrc} />}
            title={
              <>
                <Text
                  fw={800}
                  size="xl"
                  component="span"
                  mr={6}
                  variant="gradient"
                  gradient={{ from: 'blue', to: 'cyan', deg: 78 }}
                >
                  {experience.position}
                </Text>
                <Text component="span" w={100} c="dimmed" size="md">
                  ({experience.duration})
                </Text>
                <Group>
                  <Button
                    justify="center"
                    size="compact-xs"
                    radius="xl"
                    rightSection={
                      <span style={{ marginLeft: -8 }}>
                        <IconLink size={14} />
                      </span>
                    }
                    gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
                    variant="gradient"
                    onClick={() => window.open(experience.website, '_blank')}
                  >
                    Website
                  </Button>
                </Group>
              </>
            }
          >
            <Text size="md" fw={600}>
              {experience.company}
            </Text>
            <Text size="sm" fw={300} c="dimmed" mb={10}>
              {experience.location}
            </Text>
            <List size="sm" mt={5}>
              {experience.bulletPoints.map((point, index) => (
                <List.Item key={index}>{point}</List.Item>
              ))}
            </List>
          </Timeline.Item>
        ))}
      </Timeline>
    </>
  );
}
