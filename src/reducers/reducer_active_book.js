// State param is the state the is part of the current reducer -> action flow
export default function (state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
            break;
    }

    return state;
}