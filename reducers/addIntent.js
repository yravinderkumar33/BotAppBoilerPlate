function addIntent(state, action) {
    return Object.assign({},state,{
        intents: [...state.intents , action.payload.intent]
    })
}

module.exports = addIntent;