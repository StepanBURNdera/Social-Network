const dialogsReducer = (state, action) => {
    switch (action.type) {

        case 'addMessage': {
            let messageObj = {
                message: state.currentMessage,
                id: state.messagesData.length + 1,
            };
            state.messagesData.push(messageObj);
            state.currentMessage = '';
            return state;
        }
        case 'updateCurrentMessage': {
            state.currentMessage = action.currentMessage;
            return state;
        }
        default:
            return state;
    }
};

export default dialogsReducer;