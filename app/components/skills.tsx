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

const skills = [
  { name: 'React', icon: IconBrandReact },
  { name: '.NET', icon: IconCode },
  { name: 'Docker', icon: IconBrandDocker },
  { name: 'SQL', icon: IconBrandMysql },
  { name: 'HTML/CSS', icon: IconFileTypeHtml },
  { name: 'Playwright', icon: IconTestPipe },
  { name: 'Python', icon: IconBrandPython },
  { name: 'TypeScript', icon: IconFileTypeTs },
];

export default function Skills() {
  return (
    <>
      <Title order={2} mb={20}>
        Key technologies
      </Title>
      <List size="sm" p={0}>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }} spacing={10}>
          {skills.map((skill, index) => (
            <List.Item
              key={index}
              icon={
                <ThemeIcon color="blue" size={35} radius="md">
                  <skill.icon size={30} stroke={1} />
                </ThemeIcon>
              }
            >
              <Text fw={600}>{skill.name}</Text>
            </List.Item>
          ))}
        </SimpleGrid>
      </List>
    </>
  );
}
