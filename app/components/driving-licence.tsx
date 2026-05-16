import { IconCar, IconMotorbike, IconPlane, IconSpeedboat } from '@tabler/icons-react';
import { List, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core';
import { drivingLicences } from '../data/cv-data';

const licenceIcons: Record<string, React.ComponentType<{ size?: number; stroke?: number }>> = {
  'Cars: B': IconCar,
  'Motorcycles: A': IconMotorbike,
  'Boats: B': IconSpeedboat,
  'Airplanes: SRZ and SPL (in progress)': IconPlane,
};

export default function DrivingLicence() {
  return (
    <>
      <Title order={2} mb={20}>
        Driving licences
      </Title>
      <List size="md" p={0}>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }}>
          {drivingLicences.map((name) => {
            const Icon = licenceIcons[name] ?? IconCar;
            return (
              <List.Item
                key={name}
                icon={
                  <ThemeIcon color="blue" size={30} radius="xl">
                    <Icon size={22} stroke={1.2} />
                  </ThemeIcon>
                }
              >
                <Text fw={500} size="md">
                  {name}
                </Text>
              </List.Item>
            );
          })}
        </SimpleGrid>
      </List>
    </>
  );
}
