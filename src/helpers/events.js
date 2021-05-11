
const onViewChange = (e, setState) =>{

    setState(e);
    localStorage.setItem('LastView', e);
}

export {
    onViewChange
}