const ADD_POST = 'ADD-POST'
const UPDATE_POST = 'UPDATE-POST'

let i = {
    postMessage: [
        { post: 'it`s my first post', id: 1, like: 13 },
        { post: 'I`m happy', id: 2, like: 123 },
        { post: 'How are you? i`m fine', id: 3, like: 23 }
      ],
      updateTextPost: 'prof'
}

const profileReducer = (state = i, action) => {
    switch (action.type) {
        case UPDATE_POST: {
            let stateCopy = {...state}
            stateCopy.updateTextPost = action.text;
            return stateCopy
        }
        case ADD_POST: {
            let newPost = {
                id: 5,
                post: state.updateTextPost,
                like: 0
              }
              let stateCopy = {...state}
              stateCopy.postMessage = [...state.postMessage]
              stateCopy.postMessage.push(newPost)
              stateCopy.updateTextPost = '';
              return stateCopy
        }
        default: {
            return state
        }

    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updatePostActionCreator = (text) => ({type: UPDATE_POST,text: text})


export default profileReducer