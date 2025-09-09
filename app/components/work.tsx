import { useEffect, useState } from 'react';
import { IconLink } from '@tabler/icons-react';
import { Button, Center, Group, Image, List, Loader, Text, Timeline, Title } from '@mantine/core';

type WorkExperience = {
  company: string;
  position: string;
  duration: string;
  bulletPoints: string[];
  logoSrc: string;
  logoSize: number;
  location: string;
  website: string;
};

function parseDescription(description: string): string[] {
  // Split by newlines and remove leading '- ' if present
  return description
    .split('\n')
    .map((line) => line.replace(/^- /, '').trim())
    .filter((line) => line.length > 0);
}

export default function WorkExperience() {
  const [workExperience, setWorkExperience] = useState<WorkExperience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://192.168.1.64:1337/api/work-experiences?populate=*')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then((data) => {
        const experiences = data.data.map((item: any) => ({
          company: item.Company,
          position: item.Title,
          duration: item.End ? `${item.Start} - ${item.End}` : `${item.Start} - Present`,
          bulletPoints: parseDescription(item.Description || ''),
          logoSrc: `http://192.168.1.64:1337${item.Logo.url}`,
          logoSize: 40,
          location: item.Location,
          website: item.Website,
        }));
        setWorkExperience(experiences);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  if (error) {
    return (
      <Center>
        <Text c="red">{error}</Text>
      </Center>
    );
  }

  return (
    <>
      <Title order={2} mb={20}>
        Work experience
      </Title>
      <Timeline bulletSize={55} radius={10} lineWidth={4}>
        {workExperience.map((job, index) => (
          <Timeline.Item
            key={index}
            bullet={job.logoSrc ? <Image radius={5} h={job.logoSize} src={job.logoSrc} /> : <></>}
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
              {job.bulletPoints.map((point, idx) => (
                <List.Item key={idx}>{point}</List.Item>
              ))}
            </List>
          </Timeline.Item>
        ))}
      </Timeline>
    </>
  );
}
