import { IconLink } from '@tabler/icons-react';
import { Button, Group, Image, List, Text, Timeline, Title } from '@mantine/core';

const workExperience = [
  {
    company: 'Aircash',
    position: 'Software Engineer',
    duration: '2025 - Present',
    bulletPoints: [
      'Development of backend systems and databases using .NET and SQL',
      'Integration with third-party banking services and APIs',
      'Monitoring and logging existing infrastructure using New Relic',
      'Implementing new backend features for iOS and Android applications',
      'Internal tools development using Angular and JavaScript',
    ],
    logoSrc: 'aircash-logo.jpg',
    logoSize: 45,
    location: 'Zagreb, Croatia',
    website: 'https://www.aircash.eu',
  },
  {
    company: 'Infobip',
    position: 'Software Engineer',
    duration: '2022 - 2025',
    bulletPoints: [
      'Development of modern and responsive frontend applications using React, TypeScript, HTML and CSS',
      "Development of RESTful API's using .NET and C#",
      'Deployment of apps using Jenkins, Docker with CI/CD pipelines',
      'Engineering support/bugfixing for customers',
      'Monitoring and logging existing infrastructure using Grafana, Prometheus and Sentry',
      'Implementing new features like Altcha bot prevention',
    ],
    logoSrc: 'infobip-logo.png',
    logoSize: 45,
    location: 'Zagreb, Croatia',
    website: 'https://www.infobip.com',
  },
  {
    company: 'Henkel',
    position: 'Business Automation Intern',
    duration: '2020 - 2022',
    bulletPoints: [
      'SAP and Excel automation',
      'Web application development and integration with external services',
      'Technical assistance in hiring new interns',
      'Development of internal tools for data analysis and reporting using Python',
    ],
    logoSrc: 'henkel-logo.png',
    logoSize: 26,
    location: 'Zagreb, Croatia & Vienna, Austria',
    website: 'https://www.henkel.com',
  },
  {
    company: 'AVL',
    position: 'Productive Tools Trainee',
    duration: '2018 - 2020',
    bulletPoints: [
      'Maintenance of various scripts and plugins for Abaqus using Python',
      'Bug reporting, reproduction and fixing',
      'Post-processing and analysis of FEM simulations',
      'Writing unit tests',
    ],
    logoSrc: 'avl-logo.png',
    logoSize: 45,
    location: 'Zagreb, Croatia',
    website: 'https://www.avl.com',
  },
];

export default function WorkExperience() {
  return (
    <>
      <Title order={2} mb={20}>
        Work experience
      </Title>
      <Timeline bulletSize={55} radius={10} lineWidth={4}>
        {workExperience.map((job, index) => (
          <Timeline.Item
            key={index}
            bullet={<Image radius={5} h={job.logoSize} src={job.logoSrc} />}
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
                  {job.position}
                </Text>
                <Text component="span" w={100} c="dimmed" size="md">
                  ({job.duration})
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
                    onClick={() => window.open(job.website, '_blank')}
                  >
                    Website
                  </Button>
                </Group>
              </>
            }
          >
            <Text size="md" fw={600}>
              {job.company}
            </Text>
            <Text size="sm" fw={300} c="dimmed" mb={10}>
              {job.location}
            </Text>
            <List size="sm" mt={5}>
              {job.bulletPoints.map((point, index) => (
                <List.Item key={index}>{point}</List.Item>
              ))}
            </List>
          </Timeline.Item>
        ))}
      </Timeline>
    </>
  );
}
