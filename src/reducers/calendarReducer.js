import moment from "moment"
import { types } from "../types/types";

const initialState = {
    events : [{
        id: Date.now(),
        title:'Cumpleaños Said',
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
        case types.eventSetActive:
            return {
                ...state,
                activeEvent: action.payload
            }
        case types.eventAddNew: 
        return{
            ...state,
            events: [...state.events, action.payload]
        }
        case types.eventCleanActive: 
        return{
            ...state,
            activeEvent: null
        }
        case types.eventUpdate:
            return{
                ...state,   
                //se itera el arreglo y se hace una condicion si el evento es igual al evento payload regresa el payload y lo actualiza
                //si no es regresa el evento
                events: state.events.map( e=> (e.id === action.payload.id) ? action.payload : e)
            }
        case types.eventDeleted:
            return{
                ...state,
                // si el evento que queremos eliminar es e igual a la nota activa entonces lo eliminar y regresa la nota activa como null
                events: state.events.filter(e => e.id !== state.activeEvent.id),
                activeEvent: null
            }

        default:
            return state;
    }


}