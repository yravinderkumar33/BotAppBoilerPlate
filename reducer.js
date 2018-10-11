const preState = require('./state');
const addMessage = require('./reducers/addMessage');
const addAccessToken = require('./reducers/addAccessToken');
const addIntent = require('./reducers/addIntent');
const addConversationalId = require('./reducers/addConversationalId');
const messageFromBot = require('./reducers/messageFromBot');
const addStatus = require('./reducers/addStatus');
const setUserProfileFromGithub = require('./reducers/setUserProfileFromGithub');

function BotApp(state=preState, action) {
    switch (action.type) {
        case 'SEND_MESSAGE_USER_TO_BOT': {
            return addMessage(state, action);
        }

        case 'SEND_MESSAGE_BOT_TO_USER': {
            return messageFromBot(state, action);
        }

        case 'SET_ACCESS_TOKEN': {
            return addAccessToken(state, action);
        }

        case 'SET_CONVERSATIONAL_ID': {
            return addConversationalId(state, action);
        }

        case 'ADD_INTENT': {
            return addIntent(state, action);
        }

        case 'UPDATE_STATUS' : {
            return addStatus (state,action);
        }

        case 'SET_USER_PROFILE_FROM_GITHUB' : {
            return setUserProfileFromGithub(state,action);
        }

        default: return state;
    }
}

module.exports = BotApp

