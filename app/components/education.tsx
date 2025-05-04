import { IconLink } from '@tabler/icons-react';
import { Button, Group, Image, Text, Timeline, Title } from '@mantine/core';

const education = [
  {
    year: '2020 - 2022',
    title: 'MSc in Mechanical engineering',
    institution: 'Faculty of Mechanical Engineering and Naval Architecture',
    logoSrc: 'fsb-logo.png',
    location: 'Zagreb, Croatia',
    website: 'https://www.fsb.unizg.hr',
  },
  {
    year: '2014 - 2020',
    title: 'BSc in Mechanical engineering',
    institution: 'Faculty of Mechanical Engineering and Naval Architecture',
    logoSrc: 'fsb-logo.png',
    location: 'Zagreb, Croatia',
    website: 'https://www.fsb.unizg.hr',
  },
  {
    year: '2010 - 2014',
    title: 'High School',
    institution: 'XV Gymnasium',
    location: 'Zagreb, Croatia',
    logoSrc: 'xv-gymnasium-logo.png',
    website: 'https://www.mioc.hr',
  },
];

function Education() {
  return (
    <>
      <Title order={2} mb={20}>
        Education
      </Title>
      <Timeline bulletSize={55} radius={10} lineWidth={4}>
        {education.map((education, index) => (
          <Timeline.Item
            key={index}
            bullet={<Image src={education.logoSrc} h={50} radius={5} />}
            title={
              <>
                <Text
                  size="xl"
                  fw={800}
                  variant="gradient"
                  mr={6}
                  gradient={{ from: 'blue', to: 'cyan', deg: 78 }}
                  component="span"
                >
                  {education.title}
                </Text>
                <Text component="span" w={100} c="dimmed" size="md">
                  ({education.year})
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
                    onClick={() => window.open(education.website, '_blank')}
                  >
                    Website
                  </Button>
                </Group>
              </>
            }
          >
            <Text size="md" fw={600}>
              {education.institution}
            </Text>
            <Text size="sm" fw={300} c="dimmed">
              {education.location}
            </Text>
          </Timeline.Item>
        ))}
      </Timeline>
    </>
  );
}

export default Education;
