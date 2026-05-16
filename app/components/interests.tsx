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
import { interests as interestNames } from '../data/cv-data';

const interestIcons: Record<string, React.ComponentType<{ size?: number; stroke?: number }>> = {
  Technology: IconCode,
  Engineering: IconSettings,
  Design: IconPencil,
  Economics: IconChartBar,
  Skiing: IconSnowflake,
  Running: IconRun,
  Hiking: IconMountain,
  Flying: IconPlane,
};

export default function Interests() {
  return (
    <>
      <Title order={2} mb={20}>
        Interests
      </Title>
      <List size="md" mb={20} p={0}>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }}>
          {interestNames.map((name) => {
            const Icon = interestIcons[name] ?? IconCode;
            return (
              <List.Item
                key={name}
                icon={
                  <ThemeIcon color="blue" size={30} radius="xl">
                    <Icon size={20} stroke={1.2} />
                  </ThemeIcon>
                }
              >
                <Text fw={500} size="md">
                  {name}
                </Text>
              </List.Item>
            );
          })}
        </SimpleGrid>
      </List>
    </>
  );
}
