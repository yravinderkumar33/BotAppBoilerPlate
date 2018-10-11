import { mocha } from 'mocha';
import { createStore } from 'redux';
const chai = require('chai').assert;
const BotApp = require('../reducer');
import deepFreeze from 'deep-freeze';
var expect = require('chai').expect;


describe('BotApp', () => {

    it('should set token', () => {
        const initialState = deepFreeze(require('../state'));
        const store = createStore(BotApp, initialState);
        const action = {
            type: 'SET_ACCESS_TOKEN',
            payload: {
                "accessToken": "34534345345320312"
            }
        }
        store.dispatch(action);
        let after = store.getState();
        expect(after.accessToken).to.be.a('string');
        chai("accessToken" in after, "token property not present inside state");
        chai(after.accessToken === action.payload.accessToken, "correct value not set inside state object");
        console.log(store.getState());

    })

    it('should set conversational Id', () => {
        const initialState = deepFreeze(require('../state'))
        const store = createStore(BotApp, initialState);
        const action = {
            type: 'SET_CONVERSATIONAL_ID',
            payload: {
                "conversationID": "22555"
            }
        }

        store.dispatch(action);
        let after = store.getState();
        chai(typeof after.conversationID === "string", "conversational token should only be a string");
        chai("conversationID" in after, "conversationalId property not present inside state");
        chai(after.conversationID === action.payload.conversationID, "correct value not set inside state object");
        console.log(store.getState());

    })


    it("should send message from user to bot", () => {
        const initialState = deepFreeze(require('../state'))
        const store = createStore(BotApp, initialState);
        const action = {
            type: 'SEND_MESSAGE_USER_TO_BOT',
            payload: {
                timeStamp: (new Date()).toDateString(),
                from: "user",
                to: "bot",
                message: "hey how are you"
            }
        };

        store.dispatch(action);
        const after = store.getState();
        chai("memoryHistoryFromUser" in after, "memoryHistoryFromUser property not present inside the updated state");
        chai(Array.isArray(after.memoryHistoryFromUser), "memoryHistoryFromUser should be of array type");

        after.memoryHistoryFromUser.forEach((property) => {
            expect(property).to.have.all.keys('timeStamp', 'from', 'to', 'message');
            expect(property.timeStamp).to.equal(action.payload.timeStamp);
            expect(property.from).to.equal(action.payload.from);
            expect(property.to).to.equal(action.payload.to);
            expect(property.message).to.equal(action.payload.message);
        });
        console.log(store.getState());
    })



    it("should send message from bot to user", () => {
        const initialState = deepFreeze(require('../state'))
        const store = createStore(BotApp, initialState);
        const action = {
            type: 'SEND_MESSAGE_BOT_TO_USER',
            payload: {
                timeStamp: (new Date()).toDateString(),
                from: "bot",
                to: "user",
                message: "how can i help you?"
            }
        };

        store.dispatch(action);
        const after = store.getState();
        chai("memoryHistoryFromBot" in after, "memoryHistoryFromBot property not present inside the updated state");
        chai(Array.isArray(after.memoryHistoryFromBot), "memoryHistoryFromBot should be of array type");

        after.memoryHistoryFromBot.forEach((property) => {
            expect(property).to.have.all.keys('timeStamp', 'from', 'to', 'message');
            expect(property.timeStamp).to.equal(action.payload.timeStamp);
            expect(property.from).to.equal(action.payload.from);
            expect(property.to).to.equal(action.payload.to);
            expect(property.message).to.equal(action.payload.message);
        });

        console.log(store.getState());
    })




    it("should add intents", () => {
        const initialState = deepFreeze(require('../state'))
        const store = createStore(BotApp, initialState);
        const action = {
            type: 'ADD_INTENT',
            payload: {
                intent: {
                    slug: 'greetings',
                    confidence: 0.99,
                    description: 'Says hello',
                    entities: [1, 2, 3]
                }
            }
        };

        store.dispatch(action);
        let after = store.getState();
        chai(Array.isArray(after.intents), " intents should be of type array");
        after.intents.forEach((object) => {
            expect(object).to.have.all.keys('slug', 'confidence', 'description', 'entities');
            expect(object.entities).to.be.a("array");
            expect(objecpropertyt.slug).to.equal(action.payload.intent.slug);
            expect(object.confidence).to.equal(action.payload.intent.confidence);
            expect(object.description).to.equal(action.payload.intent.description);
            expect(object.entities).to.equal(action.payload.intent.entities);
        })
        console.log(after)
    });


    it("should add a response status ", () => {
        const initialState = deepFreeze(require('../state'))
        const store = createStore(BotApp, initialState);
        const action = {
            type: 'UPDATE_STATUS',
            status: 200
        }
        let before = store.getState();
        store.dispatch(action);
        let after = store.getState();
        chai.notDeepEqual(before, after, "status is not changed on response object");
        console.log(after)

    })


    it("should add user profile from github API", () => {
        const initialState = deepFreeze(require('../state'))
        const store = createStore(BotApp, initialState);
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
        let after = store.getState();
        expect(after.userProfile).to.be.a("object");
        console.log(after);
    })
});



/*
 1 - message sent from the bot and user
 2 - status of the command 
 3-  add missing entities 
 4- deep freezing is required
 5 - type , response property type check ,
 6 - shoulld check whether all the properties got added inside the final state,
 7- bot receives users profile from git

 seneka mesh
*/
