function verTipo(parameter1){

if(typeof parameter1 === 'number'){

  return tipoNumero();
}
  else if(typeof parameter1 === 'boolean'){

    return tipoBoleano();
  }
  else if(typeof parameter1 === 'string'){

    return tipoString()
  }
}

function tipoNumero(){

    console.log("isso é um numero");
}

function tipoBoleano(){

  console.log("isso é um boleano");
}

function tipoString(){

  console.log('isso é uma string');
}
 
verTipo(5);
verTipo('ola');
verTipo(true);