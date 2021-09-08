const ADD_POST = 'ADD-POST'
const UPDATE_POST = 'UPDATE-POST'

let i = {
    postMessage: [
        { post: 'it`s my first post', id: 1, like: 13 },
        { post: 'I`m happy', id: 2, like: 123 },
        { post: 'How are you? i`m fine', id: 3, like: 23 }
      ],
      updateTextPost: ''
}

const profileReducer = (state = i, action) => {
    switch (action.type) {
        case UPDATE_POST: {
            state.updateTextPost = action.text;
            return state
        }
        case ADD_POST: {
            let newPost = {
                id: 5,
                post: state.updateTextPost,
                like: 0
              }
              state.postMessage.push(newPost)
              state.updateTextPost = '';
              return state
        }
        default: {
            return state
        }

    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updatePostActionCreator = (text) => ({type: UPDATE_POST,text: text})


export default profileReducer