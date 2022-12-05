import React from 'react'

import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core'
import { IconArticle } from '@tabler/icons'

import { Link, routes } from '@redwoodjs/router'

function AdminLink({ icon, color, label }) {
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
      })}
    >
      <Link to={routes.posts()}>
        <Group>
          <ThemeIcon color={color} variant="light">
            {icon}
          </ThemeIcon>

          <Text size="sm">{label}</Text>
        </Group>
      </Link>
    </UnstyledButton>
  )
}

const data = [
  {
    icon: <IconArticle size={16} />,
    color: 'blue',
    label: 'Posts',
  },
]

export function AdminLinks() {
  const links = data.map((link) => <AdminLink {...link} key={link.label} />)
  return <div>{links}</div>
}
