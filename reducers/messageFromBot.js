const messageFromBot = (state, action) => {
    return Object.assign({}, state, {
        memoryHistoryFromBot:
            [...state.memoryHistoryFromBot,
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


module.exports = messageFromBot;