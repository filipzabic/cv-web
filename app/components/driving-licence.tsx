import { IconCar, IconMotorbike, IconPlane, IconSpeedboat } from '@tabler/icons-react';
import { List, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core';

export default function DrivingLicence() {
  const licences = [
    { name: 'Cars: B', icon: IconCar },
    { name: 'Motorcycles: A', icon: IconMotorbike },
    { name: 'Boats: B', icon: IconSpeedboat },
    { name: 'Airplanes: LAPL (in progress)', icon: IconPlane },
  ];

  return (
    <>
      <Title order={2} mb={20}>
        Driving licences
      </Title>
      <List size="md">
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }}>
          {licences.map((licence, index) => (
            <List.Item
              key={index}
              icon={
                <ThemeIcon color="blue" size={30} radius="xl">
                  <licence.icon size={22} stroke={1.2} />
                </ThemeIcon>
              }
            >
              <Text fw={500} size="md">
                {licence.name}
              </Text>
            </List.Item>
          ))}
        </SimpleGrid>
      </List>
    </>
  );
}
