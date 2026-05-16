import {
  IconBrandDocker,
  IconBrandMysql,
  IconBrandPython,
  IconBrandReact,
  IconCode,
  IconFileTypeHtml,
  IconFileTypeTs,
  IconTestPipe,
} from '@tabler/icons-react';
import { List, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core';
import { skills as skillNames } from '../data/cv-data';

const skillIcons: Record<string, React.ComponentType<{ size?: number; stroke?: number }>> = {
  React: IconBrandReact,
  '.NET': IconCode,
  Docker: IconBrandDocker,
  SQL: IconBrandMysql,
  'HTML/CSS': IconFileTypeHtml,
  Playwright: IconTestPipe,
  Python: IconBrandPython,
  TypeScript: IconFileTypeTs,
};

export default function Skills() {
  return (
    <>
      <Title order={2} mb={20}>
        Key technologies
      </Title>
      <List size="sm" p={0}>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }} spacing={10}>
          {skillNames.map((name) => {
            const Icon = skillIcons[name];
            return (
              <List.Item
                key={name}
                icon={
                  <ThemeIcon color="blue" size={35} radius="md">
                    {Icon && <Icon size={30} stroke={1} />}
                  </ThemeIcon>
                }
              >
                <Text fw={600}>{name}</Text>
              </List.Item>
            );
          })}
        </SimpleGrid>
      </List>
    </>
  );
}
