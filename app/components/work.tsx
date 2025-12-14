import { IconLink } from '@tabler/icons-react';
import { Button, Group, Image, List, Text, Timeline, Title } from '@mantine/core';
import workExperience from '../data/work.json';

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
