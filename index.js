const redux = require('redux');
const readLine = require('readline-sync');
const BotApp = require('./reducer');
const inititalState = require('./state');
const store = redux.createStore(BotApp, inititalState);


function messageFromBot(message, to = "user") {
    const action = {
        type: 'SEND_MESSAGE_BOT_TO_USER',
        payload: {
            timeStamp: (new Date()).toDateString(),
            from: "bot",
            to: to,
            message: message
        }
    };
    store.dispatch(action);
}


function messageFromUser(message, from = "user") {

    const action = {
        type: 'SEND_MESSAGE_USER_TO_BOT',
        payload: {
            timeStamp: (new Date()).toDateString(),
            from: from,
            to: "bot",
            message: message
        }
    };
    store.dispatch(action);

}

function setToken(token) {
    const action = {
        type: 'SET_ACCESS_TOKEN',
        payload: {
            "accessToken": token
        }
    }
    store.dispatch(action);
}


function setUserProfileFromGithub() {
    const action = {
        type: "SET_USER_PROFILE_FROM_GITHUB",
        payload: {
            profile: {
                name: "ravinder kumar",
                age: 30,
                organization: "Stackroute"
            }
        }
    }

    store.dispatch(action);
}

function returnCurrentState() {
    return store.getState();
}

function main() {
    messageFromBot("how may i help you");
    messageFromUser("i want to create a repository?");
    if (!returnCurrentState.accessToken) {
        const git = readLine.question("please provide your Github token ?")
        setToken(git);
    }
}
main();
console.log(returnCurrentState());