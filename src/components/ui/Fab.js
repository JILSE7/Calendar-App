//Fab floating action buttoms

import React from 'react'
import { useDispatch } from 'react-redux'
import { OpenM } from '../../actions/ui'

export const ButtomFab = () => {
    const dispatch = useDispatch();
    const modal = ()=>{
        dispatch(OpenM())
    }
    return (
        <button className="btn btn-primary fab"
            onClick={modal}
        >
            <i className="fas fa-plus"></i>
        </button>
    )
}
