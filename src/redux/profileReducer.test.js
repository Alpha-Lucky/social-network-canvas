import profileReducer, { addPost } from "./profileReducer";

it('new post shold be added',  () => {
  let action = addPost("hello")
  let state = {
    postMessage: [
        { post: 'it`s my first post', id: 1, like: 13 },
        { post: 'I`m happy', id: 2, like: 123 },
        { post: 'How are you? i`m fine', id: 3, like: 23 }
    ]
}
  let newState =  profileReducer(state, action)

  expect(newState.postMessage.length).toBe(5)
})
