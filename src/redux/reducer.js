import {ADD_FAV, REMOVE_FAV, ORDER_CARDS,FILTER_CARDS} from './action-types'

const initialState = {
    myFavorites : [],
    allCharacters : []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
     
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            }

        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(character => character.id !== action.payload) 
            }
        case FILTER_CARDS:
            const allCharactersFiltered = state.allCharacters.filter((characters)=>characters.gender === action.payload)
            return {
                ...state,
                myFavorites: allCharactersFiltered
            }
        case ORDER_CARDS:
            const allCharactersCopy = [...state.allCharacters];
            return {
                ...state,
                myFavorites:
                action.payload === "A"
                ? allCharactersCopy.sort((a, b)=> a.id - b.id)
                : allCharactersCopy.sort((a, b)=> b.id - a.id)
            }    

        default:
            return {...state}
    }
}


export default reducer;