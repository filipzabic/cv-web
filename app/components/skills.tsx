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

const skillsData = [
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
      <List size="sm">
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }} spacing={18}>
          {skillsData.map((skill, index) => (
            <List.Item
              key={index}
              icon={
                <ThemeIcon color="blue" size={34} radius="lg">
                  <skill.icon size={28} stroke={1.1} />
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
