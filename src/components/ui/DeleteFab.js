import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { eventDeleted } from '../../actions/calendar'
import Swal from 'sweetalert2';

export const DeleteFab = ({activeEvent}) => {
    const dispatch = useDispatch()
    const handleDeleteEvent = () =>{
        dispatch(eventDeleted());
        Swal.fire('Excelente', `Evento: ${activeEvent.title} fue eliminado `, 'success')
    }
    return (
        <button className="btn btn-danger fab-danger" onClick={handleDeleteEvent}>
            <i className="fas fa-trash"></i>
            <span>Borrar evento</span> 
        </button>
    )
}
