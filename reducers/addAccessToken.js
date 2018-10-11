function addAccessToken(state, action) {
    return Object.assign({}, state, {
        accessToken: action.payload.accessToken
    })
    // return {...state,accessToken:action.payload.accessToken};
}

module.exports = addAccessToken;