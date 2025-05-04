import { IconAward } from '@tabler/icons-react';
import { Group, Text, ThemeIcon, Title } from '@mantine/core';

export default function HonoursAndAwards() {
  return (
    <>
      <Title order={2} mb={20}>
        Honours and awards
      </Title>
      <Group gap={10}>
        <ThemeIcon color="blue" size={30} radius="xl">
          <IconAward size={25} stroke={1.2} />
        </ThemeIcon>
        <Text fw={500} size="md">
          3rd place at a county competition in programming
        </Text>
      </Group>
    </>
  );
}
