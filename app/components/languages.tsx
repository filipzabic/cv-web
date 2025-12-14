import Flag from 'react-world-flags';
import { Group, Text, Title } from '@mantine/core';

export default function Languages() {
  const languages = [
    { name: 'Croatian - Native', code: 'HR' },
    { name: 'English - Fluent', code: 'GB' },
    { name: 'German - Basic', code: 'DE' },
  ];
  return (
    <>
      <Title order={2} mb={20}>
        Languages
      </Title>
      {languages.map((language, index) => (
        <Group key={index} mb={10}>
          <Flag code={language.code} width={40} style={{ borderRadius: '4px' }} />
          <Text fw={500} size="md">
            {language.name}
          </Text>
        </Group>
      ))}
    </>
  );
}
