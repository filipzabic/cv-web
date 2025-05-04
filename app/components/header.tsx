import { IconBrandGithub, IconBrandLinkedin, IconMoonStars, IconSun } from '@tabler/icons-react';
import {
  ActionIcon,
  BackgroundImage,
  Group,
  Image,
  Title,
  useMantineColorScheme,
} from '@mantine/core';

export const Header = () => {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();

  return (
    <>
      <BackgroundImage src="background-image.jpg" h={220} style={{ backgroundPositionY: '33%' }} />
      <Image
        radius="lg"
        src="profile-image.jpg"
        style={{ border: '4px solid white' }}
        h={180}
        w={180}
        ml={20}
        mt={-130}
      />
      <Group mt={-45} ml={205} gap={5}>
        <ActionIcon
          variant="default"
          size="lg"
          radius="sm"
          aria-label="Github"
          href="https://github.com/filipzabic"
          component="a"
          target="_blank"
        >
          <IconBrandGithub size={30} stroke={1.5} />
        </ActionIcon>
        <ActionIcon
          variant="default"
          size="lg"
          radius="sm"
          aria-label="Linkedin"
          href="https://www.linkedin.com/in/filipzabic/"
          component="a"
          target="_blank"
        >
          <IconBrandLinkedin size={30} stroke={1.5} />
        </ActionIcon>
        <ActionIcon
          variant="default"
          size="lg"
          radius="sm"
          aria-label="Linkedin"
          onClick={() => toggleColorScheme()}
        >
          {colorScheme === 'dark' ? (
            <IconSun size={30} stroke={1.5} />
          ) : (
            <IconMoonStars size={30} stroke={1.5} />
          )}
        </ActionIcon>
      </Group>
      <Group ml={30} mt={10}>
        <Title order={1}>Filip Žabić</Title>
      </Group>
    </>
  );
};
