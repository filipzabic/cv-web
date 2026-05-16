import { IconAward } from '@tabler/icons-react';
import { Group, Text, ThemeIcon, Title } from '@mantine/core';
import { honorsAndAwards } from '../data/cv-data';

export default function HonoursAndAwards() {
  return (
    <>
      <Title order={2} mb={20}>
        Honours and awards
      </Title>
      {honorsAndAwards.map((award) => (
        <Group key={award} gap={10}>
          <ThemeIcon color="blue" size={30} radius="xl">
            <IconAward size={25} stroke={1.2} />
          </ThemeIcon>
          <Text fw={500} size="md">
            {award}
          </Text>
        </Group>
      ))}
    </>
  );
}
