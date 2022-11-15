import {
  AppShell,
  Button,
  Group,
  MantineProvider,
  Navbar,
  Stack,
  Text
} from "@mantine/core";
import { IconTriangle } from "@tabler/icons";

function AppShellNavbar() {
  return (
    <Navbar
      sx={{ backgroundColor: "#01001A", borderRight: "none" }}
      width={{ base: 300 }}
    >
      <Stack mt="xl" align="center">
        <IconTriangle />
        <Button>Sign Up</Button>
        <Button variant="light">Log In</Button>
        <Text>Promotions</Text>
        <Text>Tournaments</Text>
        <Text>Responsive Gaming</Text>
      </Stack>
    </Navbar>
  );
}

function AppShellHeader() {
  return <></>;
}

export default function App() {
  return (
    <MantineProvider
      theme={{
        colorScheme: "dark"
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <AppShell
        sx={{ backgroundColor: "#01001A" }}
        padding={0}
        navbar={<AppShellNavbar />}
      >
        <Stack style={{ border: "solid #4EACE8", borderRadius: 10 }} p="sm">
          {Array(40)
            .fill("Page content goes here...")
            .map((str, i) => (
              <div key={i}>{str}</div>
            ))}
        </Stack>
      </AppShell>
    </MantineProvider>
  );
}
