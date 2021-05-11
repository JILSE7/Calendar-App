import React, {  useState } from 'react'
import { Navbar } from '../ui/Navbar'
import {ButtomFab} from '../ui/Fab'
import { OpenM } from '../../actions/ui';
import { eventCleanActive, eventSetActive } from '../../actions/calendar';


//Calendar
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { messages } from '../../helpers/calendar-messages-es';

import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CalendarEvent } from './CalendarEvent';
import {  onViewChange } from '../../helpers/events';
import { CalendarModal } from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteFab } from '../ui/DeleteFab';




moment.locale('es');
const localizer = momentLocalizer(moment)



export const CalendarScreen = () => {
    //Dispatch
    const dispatch = useDispatch();
    //useSelector
    const {events: eventsList, activeEvent} = useSelector(state => state.calendar)
    console.log(activeEvent);

    const eventStyleGetter = (event, start, end, isSelected)=>{
        const style ={
            backgroundColor: '#6616ef',
            borderRadius: "0px",
            display: "block"
        }
        return {style}
    }

    const [lastView, setlastView] = useState(localStorage.getItem('LastView') || 'month')
    console.log(lastView);

    //Dispatch para abrir modal
    const openModal = () =>{
        console.log('abrir modal')
        dispatch(OpenM());
      
      }
    //Dispatch para activar el evento
    const selectEd = (e)=>{

        dispatch(eventSetActive(e))

    }

    const onSelectSlot = (e)=>{
        dispatch(eventCleanActive())
    }



    return (
        <div className="calendar-screen">
            <Navbar/>
         
            <Calendar
                localizer={localizer}
                events={eventsList}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                messages={messages}
                eventPropGetter={eventStyleGetter}
                components={{
                    event: CalendarEvent
                }}
                view={lastView}
                onDoubleClickEvent={openModal}
                onSelectEvent={selectEd}
                onView={(e)=> onViewChange(e,setlastView)}
                onSelectSlot={onSelectSlot}
                selectable={true}
                />
                <ButtomFab/>
                {   activeEvent && <DeleteFab activeEvent={activeEvent} /> }
                
                <CalendarModal/>
        </div>
    )
}
