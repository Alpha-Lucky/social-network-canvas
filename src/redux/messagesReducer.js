const ADD_MESSAGE = 'ADD-MESSAGE'

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
    ]
}
const messagesReducer = (state = i, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMassage = action.newMessageBody
            return {
                ...state,
                messageData: [...state.messageData, { message: newMassage, id: 7 }],
            }
        }
        default: {
            return state
        }
    }
}

export const addMessageActionCreator = (newMessageBody) => ({ type: ADD_MESSAGE, newMessageBody })


export default messagesReducer