const addConversationalId =(state,action) => {

    return Object.assign({}, state, {
        conversationID: action.payload.conversationID
    })

}

module.exports  = addConversationalId;