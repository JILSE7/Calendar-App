import React, { useState } from 'react'
import { Navbar } from '../ui/Navbar'

//Calendar
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { messages } from '../../helpers/calendar-messages-es';

import moment from 'moment';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CalendarEvent } from './CalendarEvent';
import { selectEd, onViewChange } from '../../helpers/events';
import { CalendarModal } from './CalendarModal';
import { useDispatch } from 'react-redux';
import { OpenM } from '../../actions/ui';


moment.locale('es');
const localizer = momentLocalizer(moment)

const eventList = [{
    title:'Cumpleaños Tavo',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: "#21252",
    user: {
        _id: 123,
        name: 'Said'
    }
}]

export const CalendarScreen = () => {
    //Dispatch
    const dispatch = useDispatch();

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



    return (
        <div className="calendar-screen">
            <Navbar/>
            <Calendar
                localizer={localizer}
                events={eventList}
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
                />
                
                <CalendarModal/>
        </div>
    )
}
