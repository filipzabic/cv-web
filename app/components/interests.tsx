import {
  IconChartBar,
  IconCode,
  IconMountain,
  IconPencil,
  IconPlane,
  IconRun,
  IconSettings,
  IconSnowflake,
} from '@tabler/icons-react';
import { List, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core';

export default function Interests() {
  const interests = [
    { name: 'Technology', icon: IconCode },
    { name: 'Engineering', icon: IconSettings },
    { name: 'Design', icon: IconPencil },
    { name: 'Economics', icon: IconChartBar },
    { name: 'Skiing', icon: IconSnowflake },
    { name: 'Running', icon: IconRun },
    { name: 'Hiking', icon: IconMountain },
    { name: 'Flying', icon: IconPlane },
  ];

  return (
    <>
      <Title order={2} mb={20}>
        Interests
      </Title>
      <List size="md" mb={20} p={0}>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }}>
          {interests.map((interest, index) => (
            <List.Item
              key={index}
              icon={
                <ThemeIcon color="blue" size={30} radius="xl">
                  <interest.icon size={20} stroke={1.2} />
                </ThemeIcon>
              }
            >
              <Text fw={500} size="md">
                {interest.name}
              </Text>
            </List.Item>
          ))}
        </SimpleGrid>
      </List>
    </>
  );
}
