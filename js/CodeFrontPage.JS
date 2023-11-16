function showMessage() {alert("Mensaje de presión de botón");}

function validarFormulario() 
{
var txtNombre = document.getElementById('NombreInput1').value;
var cmbSelector = document.getElementById('Selector').selectedIndex;
var chkEstado = document.getElementById('checkBox');

if(txtNombre == null || txtNombre.lenght == 0) 
{ alert('Error: Nombre vacío'); return false;}

if(cmbSelector == null || cmbSelector == 0) 
{ alert('Error: Animal no selecionado'); return false;}

if(!chkEstado.checked)
{alert('Error: casilla de verificación no seleccionada'); return false; }

alert('Datos Correctos'); return true;


}