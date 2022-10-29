const formulario = document.getElementById('formulario');
const inputs= document.querySelectorAll('#formulario input');

const expresiones = {
  
	Nombre:/^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	Apellidos: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 7 a 18 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	Numero: /^\d{7,14}$/ // 8 a 12 numeros.
}
const campos ={
    Nombre:false,
    Apellidos:false,
    Correo:false,
    Password:false
    }
    const validacionformulario = (e) => {
        switch (e.target.name){
            case "Nombre":
                validacionCampo(expresiones.Nombre, e.target, 'Nombre');
            break;
            case "Apellidos":
                validacionCampo (expresiones.Apellidos, e.target, 'Apellidos');
            break;
            case "correo":
        validacionCampo(expresiones.correo, e.target,'correo');
        break; 
        
            case "password":
                validacionCampo(expresiones.password, e.target, 'password');
                validacionPassword2();
            break;
            case "Password2":
                validacionPassword2();
            break;
        }
    }

    
    const validacionCampo = (expresion, input, campo) => {
        if(expresion.test(input.value)){
            document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
            document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
            document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
            document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
            document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
            campos[campo] = true;
           } else {
            
            document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
            document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
            document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
            document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
            document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
            campos[campo] = false;
           }    
        }
        
        const validacionPassword2 = () => {
            const inputPassword1 = document.getElementById('password');
            const inputPassword2 = document.getElementById('password2');
        
            if(inputPassword1.value !== inputPassword2.value){
                document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
                document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
                document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
                document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
                document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
                campos['password'] = false;
            }  else {
                document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
                document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
                document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
                document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
                document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
                campos['password'] = true;
            }
        }
    inputs.forEach((input) => {
        input.addEventListener('keyup', validacionformulario); 
        input.addEventListener('blur', validacionformulario);
    
    });
    formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    
    
    const terminos = document.getElementById('terminos')
    if(campos.Nick && campos.Nombre && campos.Apellidos && campos.Numero && campos.correo &&  campos.juego  && campos.password && terminos.checked ){
        formulario.reset();
    
        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito')
        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito')
    }, 5000); 
    document.querySelectorAll('formulario__grupo-correcto').forEach((icono) => {
        icono.classList.remove('formulario__grupo-correcto');
    });
    }else{
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
    });