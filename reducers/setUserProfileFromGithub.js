const setUserProfileFromGithub = (state, action) => {
    return Object.assign({}, state, {
        userProfile: action.payload.profile
    })
}

module.exports = setUserProfileFromGithub;