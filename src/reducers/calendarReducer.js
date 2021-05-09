import moment from "moment"
import { types } from "../types/types";

const initialState = {
    events : [{
        title:'Cumpleaños Tavo',
        start: moment().toDate(),
        end: moment().add(2, 'hours').toDate(),
        bgcolor: "#21252",
        user: {
            _id: 123,
            name: 'Said'
        }
    }],
    activeEvent : null

}

export const calendarReducer = (state = initialState, action) =>{

    switch (action.type) {
        case 'hola':
            return {...state}

        default:
            return state;
    }


}