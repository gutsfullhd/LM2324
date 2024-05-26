document.addEventListener('DOMContentLoaded', function () {
    const seleccionarBtn = document.getElementById('seleccionarBtn');
    const limpiarBtn = document.getElementById('limpiarBtn');
    const carrito = document.getElementById('carrito');
    const datos = document.getElementById('datos');
  
    seleccionarBtn.addEventListener('click', function () {
      const fentrada = document.getElementById('fentrada').value;
      const fsalida = document.getElementById('fsalida').value;
      const adultos = document.getElementById('adultos').value;
      const niños = document.getElementById('niños').value;
      const tipohabitacion = document.getElementById('tipohabitacion').value;
  
      if (fentrada === '' || fsalida === '') {
        alert('Por favor, selecciona las fechas de entrada y salida.');
        return;
      }
  
      const reserva = {
        fentrada,
        fsalida,
        adultos,
        niños,
        tipohabitacion
      };
  
      const reservaItem = document.createElement('li');
      reservaItem.textContent = `Entrada: ${reserva.fentrada}, Salida: ${reserva.fsalida}, Adultos: ${reserva.adultos}, Niños: ${reserva.niños}, Habitación: ${reserva.tipohabitacion}`;
      carrito.appendChild(reservaItem);
  
      datos.textContent = `Fecha de entrada: ${reserva.fentrada}, Fecha de salida: ${reserva.fsalida}, Adultos: ${reserva.adultos}, Niños: ${reserva.niños}, Tipo de habitación: ${reserva.tipohabitacion}`;
    });
  
    limpiarBtn.addEventListener('click', function () {
      document.getElementById('fentrada').value = '';
      document.getElementById('fsalida').value = '';
      document.getElementById('adultos').value = '1';
      document.getElementById('niños').value = '0';
      document.getElementById('tipohabitacion').value = 'Individual';
      carrito.innerHTML = '';
      datos.textContent = '';
    });
  });
  