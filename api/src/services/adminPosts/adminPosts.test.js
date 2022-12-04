import {
  adminPosts,
  adminPost,
  createPost,
  updatePost,
  deletePost,
} from './adminPosts'

describe('posts', () => {
  scenario('returns all posts for the given user', async () => {
    mockCurrentUser({
      id: 1,
      roles: 'admin',
    })

    const result = await adminPosts()

    expect(result.length).toEqual(1)
  })

  scenario('returns a single post', async (scenario) => {
    mockCurrentUser({
      id: 1,
      roles: 'admin',
    })

    const result = await adminPost({ id: scenario.post.one.id })

    expect(result).toEqual(scenario.post.one)
  })

  scenario('creates a post', async () => {
    mockCurrentUser({
      id: 1,
      roles: 'admin',
    })

    const result = await createPost({
      input: { title: 'String', body: 'String' },
    })

    expect(result.title).toEqual('String')
    expect(result.body).toEqual('String')
  })

  scenario('updates a post', async (scenario) => {
    const original = await adminPost({ id: scenario.post.one.id })
    const result = await updatePost({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a post', async (scenario) => {
    const original = await deletePost({ id: scenario.post.one.id })
    const result = await adminPost({ id: original.id })

    expect(result).toEqual(null)
  })
})
