const INITIAL_STATE = {
  description: 'ler livro',
  list: [
    {
      _id: 1,
      description: 'pagar fatura',
      done: true,
    },
    {
      _id: 2,
      description: 'Reuniao',
      done: false,
    },
    {
      _id: 3,
      description: 'Consulta medica',
      done: false,
    },
  ],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DESCRIPTION_CHANGED':
      return {
        ...state,
        description: action.payload,
      };
    default:
      return state;
  }
};
