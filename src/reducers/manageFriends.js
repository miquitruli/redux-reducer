let state = { friends: [] };

export function manageFriends(state, action){
    switch(action.type){
        case 'ADD_FRIEND':
            return (
                {...state, friends: [...state.friends, action.friend] }
            )

        case 'REMOVE_FRIEND':
            let removedFriend = state.friends.findIndex(friend => friend.id === action.id)
            return (
                {...state, friends: [
                    ...state.friends.slice(0, removedFriend),
                    ...state.friends.slice(removedFriend + 1)
                ]
            }
            )
        default:
            return state;
    }
}




