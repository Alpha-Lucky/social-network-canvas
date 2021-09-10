const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE = 'UPDATE-MESSAGE'

let i = {
    dialogData: [
        { name: 'Michael', id: 1 },
        { name: 'Alex', id: 2 },
        { name: 'Angela', id: 3 },
        { name: 'Alisa', id: 4 },
        { name: 'Helena', id: 5 }
      ],
      messageData: [
        { message: 'Hi', id: 1 },
        { message: 'What did you yestuday?', id: 2 },
        { message: 'How are you?', id: 3 },
        { message: 'Go walk!', id: 4 },
        { message: 'Heooo', id: 5 },
        { message: 'So eazy, i`m leaning fery fast!', id: 6 }
      ],
      updateMessage: 'mess'
}
 const messagesReducer = (state = i, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE: {
            let stateCopy = {...state}
            stateCopy.updateMessage = action.text;
            return stateCopy
        }
        case ADD_MESSAGE: {
            let newMassage = {
                message: state.updateMessage,
                id: 7
              }
              let stateCopy = {...state}
              stateCopy.messageData = [...state.messageData]
              stateCopy.messageData.push(newMassage)
              stateCopy.updateMessage = '';
              return stateCopy
        }
        default: {
            return state
        }
    }
 }
 
 export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
 export const updateMessageActionCreator = (text) => ({type: UPDATE_MESSAGE, text: text})
 

export default messagesReducer