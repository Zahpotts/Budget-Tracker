export const initialState = {
    incomes: [],
    expenses: [],
};

export function appReducer(state, action){
    switch (action.type) {
        case 'ADD_INCOME':
            return {
                ...state,
                incomes: [...state.incomes, action.payload]
            };
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            };
        default:
            return state;



        }


}