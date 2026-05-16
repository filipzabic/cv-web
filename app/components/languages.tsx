import Flag from 'react-world-flags';
import { Group, Text, Title } from '@mantine/core';
import { languages } from '../data/cv-data';

export default function Languages() {
  return (
    <>
      <Title order={2} mb={20}>
        Languages
      </Title>
      {languages.map((language) => (
        <Group key={language.name} mb={10}>
          <Flag code={language.flagCode} width={40} style={{ borderRadius: '4px' }} />
          <Text fw={500} size="md">
            {language.name} - {language.level}
          </Text>
        </Group>
      ))}
    </>
  );
}
