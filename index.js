const body = document.body


input.addEventListener('change',(e)=>{
    body.style.backgroundColor=e.target.value

    if (e.target.value==='') {
        throw console.error('ment');
    }
    else{
        body.style.backgroundColor=e.target.value
    }
})