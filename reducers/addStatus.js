const addStatus = (state, action) => {
    return Object.assign({}, state, {
        status: action.status
    })
}

module.exports = addStatus;