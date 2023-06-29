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
