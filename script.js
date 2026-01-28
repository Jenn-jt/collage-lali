document.addEventListener('DOMContentLoaded', () => {
  const tarjetas = document.querySelectorAll('.tarjeta-volteable');

  tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener('click', () => {
      tarjeta.classList.toggle('volteada');
    });
  });
});
