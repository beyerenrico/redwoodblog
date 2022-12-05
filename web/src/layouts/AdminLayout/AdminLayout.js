import { AppShell, Navbar, Header } from '@mantine/core'

import { AdminLinks } from './_adminLinks'

const AdminLayout = ({ children }) => {
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={500} p="xs">
          <Navbar.Section grow mt="sx">
            <AdminLinks />
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          Admin Dashboard
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  )
}

export default AdminLayout
