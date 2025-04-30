import { DEFlag, GBFlag, HRFlag } from 'mantine-flagpack';
import { List, Text, Title } from '@mantine/core';

export default function Languages() {
  const languages = [
    { name: 'Croatian - Native', icon: HRFlag },
    { name: 'English - Fluent', icon: GBFlag },
    { name: 'German - Basic', icon: DEFlag },
  ];
  return (
    <>
      <Title order={2} mb={20}>
        Languages
      </Title>
      <List size="md" spacing={10}>
        {languages.map((language, index) => (
          <List.Item key={index} icon={<language.icon w={40} />}>
            <Text fw={500} size="md">
              {language.name}
            </Text>
          </List.Item>
        ))}
      </List>
    </>
  );
}
