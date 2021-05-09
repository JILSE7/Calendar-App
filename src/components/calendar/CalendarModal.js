import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {customStyles} from '../../helpers/modal'


import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import Swal from 'sweetalert2';
import { CloseM } from '../../actions/ui';

//Raiz del HTML
Modal.setAppElement('#root');

const nowDate = moment().minutes(0).seconds(0).add(1, 'hours');
const endDate = nowDate.clone().add(1, 'hours');


export const CalendarModal = () => {

  //estado global
  const {openModal} = useSelector(state => state.ui)
  console.log(openModal);
  const dispatch = useDispatch();

    //States
    const [startDate, setStart] = useState(nowDate.toDate());
    const [finishDate, setFinishDate] = useState(endDate.toDate());
    const [titleValid, settitleValid] = useState(true)
    const [formValues, setformValues] = useState({
      title: "Evento",
      notes: "",
      start: nowDate.toDate(),
      finish: endDate.toDate(),

    })

    //Destructuring
    const {title, notes, start, finish}  = formValues;
    const handleformChange = (e)=>{
      setformValues({
        ...formValues,
        [e.target.name] : e.target.value
      })
    }
    
    //Events
    const handleStartDateChange = (e)=>{
      setStart(e);
      setformValues({...formValues, start: e})
    }
    const handleFinishtDateChange = (e)=> {
      setFinishDate(e);
      setformValues({...formValues, finish: e})
    }

    //Submit del formulario
    const handleSubmit = (e)=>{
      e.preventDefault();
      const momentStart = moment(start);
      const momentFinish = moment(finish);
      
      if(momentStart.isSameOrAfter(momentFinish))return Swal.fire("Fechas incorrectas", "La fecha de inicio no puede ser mayor a la fecha de fin", "error");
        
      if(title.trim().length < 2){
        return settitleValid(false)
        
      }

      //todo: realizar la grabacion
      settitleValid(true);
      Swal.fire('Excelente', "Todo correcto", 'success')

    }

    //Dipatch de abrir y cerrar modal
    const closeModal = ()=>{
      dispatch(CloseM())
   }
   

   
  
    return (
        <Modal
        isOpen={openModal}
        //onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className="modal"
        overlayClassName="modal-fondo"
        closeTimeoutMS={200}
        
      >
         <h1> {title} </h1>
<hr />
<form className="container" onSubmit ={handleSubmit} noValidate>

    <div className="form-group"  >
        <label className="text-center w-100">Fecha y hora inicio</label>
        <DateTimePicker
        onChange={handleStartDateChange}
        value={startDate}
        className="form-control datepicker"
        format="dd-MM-y h:mm:ss a"
        amPmAriaLabel="Select AM/PM"
        
      />
    </div>

    <div className="form-group">
        <label className="text-center w-100">Fecha y hora fin</label>
        <DateTimePicker
        onChange={handleFinishtDateChange}
        value={finishDate}
        className="form-control datepicker"
        format="dd-MM-y h:mm:ss a"
        amPmAriaLabel="Select AM/PM"
        minDate={startDate}

      />
    </div>

    <hr />
    <div className="form-group">
        <label className="text-center w-100">Titulo y notas</label>
        <input 
            type="text" 
            className={`form-control ${!titleValid && "is-invalid"}`}
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={title}
            onChange={handleformChange}
            
        />
        {!titleValid && <p>El nombre del evento es muy corto</p>}
        <small id="emailHelp" className="text-center">Una descripción corta</small>
    </div>

    <div className="form-group">
        <textarea 
            type="text" 
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={notes}
            onChange={handleformChange}
        ></textarea>
        <small id="emailHelp" className="form-text text-muted">Información adicional</small>
    </div>

    <button
        type="submit"
        className="btn btn-outline-primary btn-block"
    >
        <i className="far fa-save"></i>
        <span> Guardar</span>
    </button>

</form>
           </Modal>
    )
}
