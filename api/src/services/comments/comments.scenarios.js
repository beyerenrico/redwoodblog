export const standard = defineScenario({
  comment: {
    jane: {
      data: {
        name: 'Jane Doe',
        body: 'I like trees',
        post: {
          create: {
            title: 'Redwood Leaves',
            body: 'The quick brown fox jumped over the lazy dog.',
            user: {
              create: {
                id: 1,
                name: 'String',
                email: 'mock+test1@email.com',
                hashedPassword: 'String',
                roles: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
    john: {
      data: {
        name: 'John Doe',
        body: 'Hug a tree today',
        post: {
          create: {
            title: 'Root Systems',
            body: 'The five boxing wizards jump quickly.',
            user: {
              create: {
                id: 2,
                name: 'String',
                email: 'mock+test2@email.com',
                hashedPassword: 'String',
                roles: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
  },
})

export const postOnly = defineScenario({
  post: {
    bark: {
      data: {
        title: 'Bark',
        body: "A tree's bark is worse than its bite",
        user: {
          create: {
            id: 1,
            name: 'String',
            email: 'mock+test1@email.com',
            hashedPassword: 'String',
            roles: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})
