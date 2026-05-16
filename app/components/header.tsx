'use client';

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
    const { toPng } = await import('html-to-image');
    const { default: jsPDF } = await import('jspdf');

    const element = document.getElementById('cv-content');
    if (!element) return;

    // Snapshot current color scheme and force light mode for PDF
    const root = document.documentElement;
    const prevScheme = root.getAttribute('data-mantine-color-scheme');
    root.setAttribute('data-mantine-color-scheme', 'light');

    // Wait one frame for styles to apply
    await new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));

    // Ensure all <img> elements in the CV are fully loaded
    await Promise.all(
      Array.from(element.querySelectorAll('img')).map(
        (img) =>
          img.complete
            ? Promise.resolve()
            : new Promise<void>((resolve) => {
                img.onload = () => resolve();
                img.onerror = () => resolve();
              }),
      ),
    );

    const captureOptions = {
      cacheBust: true,
      pixelRatio: 2,
      width: element.offsetWidth,
      height: element.offsetHeight,
    };

    // html-to-image fetches external resources async on first call;
    // calling twice ensures images are in its cache for the real capture.
    await toPng(element, captureOptions);
    const dataUrl = await toPng(element, captureOptions);

    // Restore original color scheme
    if (prevScheme) {
      root.setAttribute('data-mantine-color-scheme', prevScheme);
    } else {
      root.removeAttribute('data-mantine-color-scheme');
    }

    const img = document.createElement('img');
    img.src = dataUrl;
    await new Promise<void>((resolve) => { img.onload = () => resolve(); });

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgHeight = (img.height * pageWidth) / img.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(dataUrl, 'PNG', 0, position, pageWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(dataUrl, 'PNG', 0, position, pageWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save('filip-zabic-cv.pdf');
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
