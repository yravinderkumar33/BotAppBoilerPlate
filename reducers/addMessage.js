function addMessage(state, action) {


    return Object.assign({}, state, {
        memoryHistoryFromUser:
            [...state.memoryHistoryFromUser,
            {
                timeStamp: action.payload.timeStamp,
                from: action.payload.from,
                to: action.payload.to,
                message: action.payload.message
            }
            ]
    }
    )
}
module.exports = addMessage;