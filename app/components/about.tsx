import { Grid, Stack, Text } from '@mantine/core';

export default function About() {
  const calculateAge = () => {
    const birthYear = 1995;
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  };
  return (
    <Grid gutter={30}>
      <Grid.Col span={6}>
        <Text size="md" c="dimmed" mb={20}>
          Mechanical engineer with experience in automation, data science and web development.
        </Text>
      </Grid.Col>

      <Grid.Col span={6}>
        <Stack gap={4} mb={20}>
          <Text size="md">{calculateAge()} years old</Text>
          <Text size="md">Zagreb, Croatia</Text>
          <Text size="md">filip@zabic.net</Text>
        </Stack>
      </Grid.Col>
    </Grid>
  );
}
