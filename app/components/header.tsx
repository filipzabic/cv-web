'use client';

import { createElement } from 'react';
import { IconBrandGithub, IconBrandLinkedin, IconFileTypePdf, IconMoonStars, IconSun } from '@tabler/icons-react';
import {
  ActionIcon,
  BackgroundImage,
  Group,
  Image,
  Loader,
  Title,
  useMantineColorScheme,
} from '@mantine/core';
import { useState } from 'react';

export const Header = () => {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();
  const [pdfLoading, setPdfLoading] = useState(false);

  const handleDownloadPdf = async () => {
    setPdfLoading(true);
    try {
      const { pdf } = await import('@react-pdf/renderer');
      const { CvDocument } = await import('./cv-pdf');

      // Pre-fetch profile image so react-pdf can embed it
      let profileImage: string | undefined;
      try {
        const res = await fetch('/profile-image.jpg');
        const blob = await res.blob();
        profileImage = await new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.readAsDataURL(blob);
        });
      } catch { /* omit image if unavailable */ }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const blob = await pdf(createElement(CvDocument, { profileImage }) as any).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'filip-zabic-cv.pdf';
      a.click();
      URL.revokeObjectURL(url);
    } finally {
      setPdfLoading(false);
    }
  };


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
          aria-label="Download PDF"
          onClick={handleDownloadPdf}
          disabled={pdfLoading}
          className="no-print"
        >
          {pdfLoading ? <Loader size={18} /> : <IconFileTypePdf size={30} stroke={1.5} />}
        </ActionIcon>
        <ActionIcon
          variant="default"
          size="lg"
          radius="sm"
          aria-label="Toggle color scheme"
          onClick={() => toggleColorScheme()}
          className="no-print"
        >
          {colorScheme === 'dark' ? (
            <IconSun size={30} stroke={1.5} />
          ) : (
            <IconMoonStars size={30} stroke={1.5} />
          )}
        </ActionIcon>
      </Group>
      <Group ml={30} mt={15}>
        <Title order={1}>Filip Žabić</Title>
      </Group>
    </>
  );
};
