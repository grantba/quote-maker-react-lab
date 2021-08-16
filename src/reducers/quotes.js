export default (state = [], action) => {
  let index;
  let quote;

  switch(action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote)

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.quoteId !== action.quoteId)


    case 'UPVOTE_QUOTE':
      // let upvote = state.find(quote => quote.id !== action.id)
      // upvote.totalVotes += 1
      // return [...state]

      index = state.findIndex(quote => quote.quoteId === action.quoteId);
      quote = state[index];

      return [
        ...state.slice(0, index),
        Object.assign({}, quote, { votes: quote.votes += 1 }),
        ...state.slice(index + 1)
      ];

    case 'DOWNVOTE_QUOTE':
      // let downvote = state.find(quote => quote.id !== action.id)
      // downvote.totalVotes -= 1
      // return [...state]

      index = state.findIndex(quote => quote.quoteId === action.quoteId);
      quote = state[index];

      if (quote.votes > 0) {
        return [
          ...state.slice(0, index),
          Object.assign({}, quote, { votes: quote.votes -= 1 }),
          ...state.slice(index + 1)
        ];
      }
      return state;

    default:
      return state
  }
}
