document.addEventListener('DOMContentLoaded', function () {
    const seleccionarBtn = document.getElementById('seleccionarBtn');
    const limpiarBtn = document.getElementById('limpiarBtn');
    const carrito = document.getElementById('carrito');
    const datos = document.getElementById('datos');
    const fentradaInput = document.getElementById('fentrada');
    const fsalidaInput = document.getElementById('fsalida');
  
    // Establecer la fecha mínima para la fecha de entrada
    const today = new Date().toISOString().split('T')[0];
    fentradaInput.setAttribute('min', today);
  
    // Cargar reservas guardadas en localStorage al iniciar
    if (localStorage.getItem('reservas')) {
      const reservasGuardadas = JSON.parse(localStorage.getItem('reservas'));
      reservasGuardadas.forEach(reserva => {
        const reservaItem = document.createElement('li');
        reservaItem.textContent = `Entrada: ${reserva.fentrada}, Salida: ${reserva.fsalida}, Adultos: ${reserva.adultos}, Niños: ${reserva.niños}, Habitación: ${reserva.tipohabitacion}`;
        carrito.appendChild(reservaItem);
      });
    }
  
    fentradaInput.addEventListener('change', function () {
      // Establecer la fecha mínima de salida según la fecha de entrada seleccionada
      fsalidaInput.setAttribute('min', fentradaInput.value);
    });
  
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
  
      if (new Date(fsalida) <= new Date(fentrada)) {
        alert('La fecha de salida debe ser posterior a la fecha de entrada.');
        return;
      }
  
      const reserva = {
        fentrada,
        fsalida,
        adultos,
        niños,
        tipohabitacion
      };
  
      // Añadir la reserva al carrito visual
      const reservaItem = document.createElement('li');
      reservaItem.textContent = `Entrada: ${reserva.fentrada}, Salida: ${reserva.fsalida}, Adultos: ${reserva.adultos}, Niños: ${reserva.niños}, Habitación: ${reserva.tipohabitacion}`;
      carrito.appendChild(reservaItem);
  
      // Guardar reserva en localStorage
      let reservas = [];
      if (localStorage.getItem('reservas')) {
        reservas = JSON.parse(localStorage.getItem('reservas'));
      }
      reservas.push(reserva);
      localStorage.setItem('reservas', JSON.stringify(reservas));
  
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
  
      // Limpiar localStorage
      localStorage.removeItem('reservas');
    });
  });
  
  
  