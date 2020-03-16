function validate(evt, float = false, separator = '.') {
    let theEvent = evt || window.event;
    // Handle paste
    let key;
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        // Handle key press
        key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    let regex = /[0-9]/;
    if(float === true && separator === '.'){
        regex = /[0-9]|\./;
    } else if(float === true && separator === ','){
        regex = /[0-9]|\,/;
    }
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

function calculate(){
    let horasDiarias = document.getElementById("horas").value.replace(',','.');
    let valorProjeto = document.getElementById("valor").value.replace(',','.');
    const diasEfetivos = document.getElementById("dias").value;
    const diasFerias = document.getElementById("ferias").value;
    // Conta para calcular valor da sua hora no projeto
    // By: danielhe4rt
    let valorHora = (valorProjeto / (diasEfetivos * 4 * horasDiarias) ) + ( ( diasFerias * diasEfetivos * horasDiarias ) );
    //abaixo sugestão correção
    // let valorHora = valorProjeto / ((diasEfetivos * horasDiarias) + ( diasFerias * diasEfetivos * horasDiarias) );

    //tratamentos
    valorHora = valorHora.toFixed(2);
    valorHora = valorHora.toString().replace('.',',');
    document.getElementById("result").innerHTML = 'R$ '+valorHora;
}