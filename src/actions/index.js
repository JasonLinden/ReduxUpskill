export function selectBook(book) {
    // SelectBook is an action creator, which returns an action -> an object with a type property.
    // An action returns a type and (sometimes) a payload
    return {
        type: 'BOOK_SELECTED', // <-- usually uppercase
        payload: book
    };
}