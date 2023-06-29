class Empleados {
    constructor(Nombre, Apellido, Sexo, Fecha_nac, Fecha_Ingre, Salario,Nivel, Estudios, Universidad){
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Sexo = Sexo;
        this.Fecha_nac = Fecha_nac;
        this.Fecha_Ingre = Fecha_Ingre;
        this.Salario = Salario;
        this.Nivel = Nivel;
        this.Estudios = Estudios;
        this.Universidad = Universidad; 
    }
    verNombre(){
        return (this.Nombre = document.getElementById("nombre").value);
    }

    verApellido(){
        return (this.Apellido = document.getElementById("Apellido").value);
    }
    verSexo(){
      return (this.Sexo = document.getElementById("sexo").value);
    }
    verFecha_nac(){
            return (this.Fecha_nac = document.getElementById("Fecha_nac").value);
        }
     verFecha_Ingre(){
            return (this.Fecha_Ingre = document.getElementById("Fecha_Ingre").value);
        }
    verSalario(){
        return (this.Salario = parseFloat(
            document.getElementById("sal").innerHTML
          ));
    }
    verNivel() {
      return (this.Nivel = document.getElementById("Niveles").value);
    }
  
    verCarrera() {
      return (this.Instituto = document.getElementById("carrera").value);
    }
  
    verUniversidad() {
      return (this.Titulo = document.getElementById("universidad").value);
    }

    calcuEdad() {
        let CalcularEd = document.getElementById("Fecha_nac").value;
        if (CalcularEd <= 0 || CalcularEd.length == 0) {
          alert("fecha de nacimiento mal ingresada porfavor corregir");
          return 0;
        } else {
          let año = parseInt(CalcularEd.substr(6, 4));
          let edadTot = 2023 - año;
          return edadTot;
        }
      }

      calcuAntigu() {
        let CalcularAnt = document.getElementById("Fecha_Ingre").value;
        if (CalcularAnt <= 0 || CalcularAnt.length == 0) {
          alert("fecha de ingreso mal ingresada porfavor corregir");
          return 0;
        } else {
          let añoIngre = parseInt(CalcularAnt.substr(6, 4));
          let antigu = 2023 - añoIngre;
          return antigu;
        }
      }
      
        prestacione() {
          let salarioEmple = document.getElementById("sal").innerHTML;
          let IngreEmp = document.getElementById("Fecha_Ingre").value;
      
          if (
            salarioEmple <= 0 || salarioEmple.length == 0  || IngreEmp== 0
          ) {
            alert("Salario incorrecto");
            return 0;
          } else {
            let salari = this.verSalario();
            let antiguedaad = this.calcuAntigu();
            let prestaciones = (antiguedaad * salari) / 12;
          return prestaciones.toFixed(3);
          }
        }  
        
        calJub(){
          let calcujub = document.getElementById ("sexo").value;
          if(calcujub == document.getElementById ("M").value){
            let primero = this.calcuEdad();
            let result = (62 - primero);
            if (result <= 0){
              return 0;
            } else{
            return result;
          }
          } 

          else {
            let primeroo = this.calcuEdad();
            let result2 = (57 - primeroo);
            if (result2 <= 0){
              return 0;
            } else{
            return result2;
          }
          }
          
        }
        calSem(){
          let sem = this.calcuAntigu();
          let resultSem= 1300 - (sem * 52);
          if (resultSem <= 0){
            return 0;
          } else{
          return resultSem;
        }
      
      }
    
}


function modificar() {
    let newSalario = new Empleados();
  let newSalariom = prompt("Ingrese su nuevo salario $ ");

  if (newSalariom <= 0 || newSalariom.length == 0) {
    alert("Salario invalido");
  } else {
    newSalario.verSalario(newSalariom);
    document.getElementById("sal").innerHTML = newSalariom;
  }
  }

function calcularedad(){
    let edadEmpleado = new Empleados();
    let EdadActual = edadEmpleado.calcuEdad();
    document.getElementById("cedad").innerHTML = EdadActual + " Años";
}
function calcularantiguedad(){
let Antigueda = new Empleados();
let AntiguedaActual = Antigueda.calcuAntigu();
document.getElementById ("cantiguedad").innerHTML = AntiguedaActual + " Años";
}

function calcularPres() {
  let prest = new Empleados();
  let prestacionesTotal = prest.prestacione();
  document.getElementById("cpres").innerHTML = prestacionesTotal;
}
function op1() {
  var op = document.getElementById("adicionaal");
  if (op.style.display === "none") {
    op.style.display = "block";
  } else {
    op.style.display = "none";
  }
}

function mostrarInformacion() {
  var ver = document.getElementById("infoo");
  if (ver.style.display === "none") {
    ver.style.display = "block";
  } 

  let nombreE = document.getElementById("nombre").value;
  let apellidoE = document.getElementById("Apellido").value;
  let sexemp = document.getElementById("sexo").value
  let fechaNaci= document.getElementById("Fecha_nac").value;
  let fechaIngree = document.getElementById("Fecha_Ingre").value;
  let salariom = document.getElementById("sal").innerHTML;
  let nivelEst = document.getElementById("Niveles").value;
  let institutoEst = document.getElementById("carrera").value;
  let tituloEst = document.getElementById("universidad").value;

  if (
    nombreE.length == 0 ||apellidoE.length == 0 ||sexemp == 0 ||fechaNaci.length == 0 ||fechaIngree.length == 0 ||
    salariom == 0 ||nivelEst == 0 ||
    institutoEst.length == 0 ||
    tituloEst.length == 0
  ) {
    alert("Existen campos vacios o erroneos, verifique");
  } else {
    let informacioon = new Empleados();
    let name = informacioon.verNombre();
    let ape = informacioon.verApellido();
    let sexoemp = informacioon.verSexo();
    let fnac =informacioon.verFecha_nac();
    let fing = informacioon.verFecha_Ingre();
    let sali = informacioon.verSalario();
    let prep = informacioon.prestacione();
    let niv = informacioon.verNivel();
    let nomcc = informacioon.verCarrera();
    let nomuu= informacioon.verUniversidad();
    document.getElementById("nam").innerHTML = name;
    document.getElementById("ape").innerHTML = ape;
    document.getElementById("sex").innerHTML = sexoemp;
    document.getElementById("fchnac").innerHTML = fnac;
    document.getElementById("feching").innerHTML = fing;
    document.getElementById("salf").innerHTML = sali;
    document.getElementById("prestar").innerHTML = prep;
    document.getElementById("nivelf").innerHTML = niv;
    document.getElementById("nomc").innerHTML = nomcc;
    document.getElementById("nomu").innerHTML = nomuu;
  }

}

function cerrar(){
  var cerr = document.getElementById("infoo");
  cerr.style.display = "none";
  var ceerr = document.getElementById("adicionaal");
  ceerr.style.display = "none";

}
function op2() {
  var opj = document.getElementById("jubilacion");
  if (opj.style.display === "none") {
    opj.style.display = "block";
  } else {
    opj.style.display = "none";
  }
}
function Calcular(){
  let jubfinal = new Empleados();
  let reltfinal = jubfinal.calJub();
  document.getElementById("jub").innerHTML = reltfinal + " años Faltantes";

} 

function Calcular2(){
  let jubsem = new Empleados();
  let reltfinalSem = jubsem.calSem();
  document.getElementById("jubsem").innerHTML = reltfinalSem + " semanas faltantes";

}

function cerrar2(){
  var cerr = document.getElementById("jubilacion");
  cerr.style.display = "none";

}