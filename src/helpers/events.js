
const selectEd = (e)=>{
    // console.log(e);
}

const onViewChange = (e, setState) =>{

    setState(e);
    localStorage.setItem('LastView', e);
}

export {
    selectEd,
    onViewChange
}