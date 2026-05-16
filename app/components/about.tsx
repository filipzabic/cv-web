import { Grid, Stack, Text } from '@mantine/core';
import { personalInfo } from '../data/cv-data';

export default function About() {
  const age = new Date().getFullYear() - personalInfo.birthYear;
  return (
    <Grid gutter={30}>
      <Grid.Col span={6}>
        <Text size="md" c="dimmed">
          {personalInfo.about}
        </Text>
      </Grid.Col>

      <Grid.Col span={6}>
        <Stack gap={4}>
          <Text size="md">{age} years old</Text>
          <Text size="md">{personalInfo.location}</Text>
          <Text size="md">{personalInfo.email}</Text>
        </Stack>
      </Grid.Col>
    </Grid>
  );
}
