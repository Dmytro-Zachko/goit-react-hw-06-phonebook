const deposit = (amount) => {
    return {
        type: 'deposit',
        payload: {amount}
    }
}

function RootReducer(state = 0, action) {
    switch (action.type) {
        case 'deposit':
            return state + action.payload.amount;
            
    
        default:
            return state
            
    }
}

const store = createStore() 