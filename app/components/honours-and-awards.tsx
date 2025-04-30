import { IconAward } from '@tabler/icons-react';
import { Group, Text, Title } from '@mantine/core';

export default function HonoursAndAwards() {
  return (
    <>
      <Title order={2} mb={20}>
        Honours and awards
      </Title>
      <Group gap={10}>
        <IconAward size={28} stroke={1.5} />
        <Text fw={500} size="md">
          3rd place at a county competition in programming
        </Text>
      </Group>
    </>
  );
}
