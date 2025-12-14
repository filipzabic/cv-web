import { IconLink } from '@tabler/icons-react';
import { Button, Group, Image, Text, Timeline, Title } from '@mantine/core';
import educationJson from '../data/education.json';

type EducationItem = {
  year: string;
  title: string;
  institution: string;
  logoSrc?: string;
  location?: string;
  website?: string;
};

const education: EducationItem[] = educationJson as EducationItem[];

function Education() {
  return (
    <>
      <Title order={2} mb={20}>
        Education
      </Title>
      <Timeline bulletSize={55} radius={10} lineWidth={4}>
        {education.map((edu, index) => (
          <Timeline.Item
            key={index}
            bullet={edu.logoSrc ? <Image src={edu.logoSrc} h={46} radius={5} /> : undefined}
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
                  {edu.title}
                </Text>
                <Text component="span" w={100} c="dimmed" size="md">
                  ({edu.year})
                </Text>
                <Group>
                  {edu.website && (
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
                      onClick={() => window.open(edu.website, '_blank')}
                    >
                      Website
                    </Button>
                  )}
                </Group>
              </>
            }
          >
            <Text size="md" fw={600}>
              {edu.institution}
            </Text>
            {edu.location && (
              <Text size="sm" fw={300} c="dimmed">
                {edu.location}
              </Text>
            )}
          </Timeline.Item>
        ))}
      </Timeline>
    </>
  );
}

export default Education;
