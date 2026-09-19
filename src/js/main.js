'use strict';
const dialog = document.getElementById('detail-dialog');
const content = {
  about: { number: '01', title: 'The person.', body: '<p>Soy Jhonatan Sánchez Flores, desarrollador backend especializado en Java y Spring Boot, desde Ciudad de México.</p><p>Mi trabajo se centra en APIs REST, microservicios, bases de datos y seguridad. Soy ingeniero en Desarrollo y Gestión de Software.</p>', target: '#sobre-mi', label: 'Más sobre mí ↗' },
  experience: { number: '02', title: 'The journey.', body: '<p>Nfq Advisory Solutions · 2026<br>Clever Cloud · 2025<br>OpenBootcamp · 2024</p><p>Desarrollo backend, integración de servicios, persistencia, pruebas y documentación técnica.</p>', target: '#experiencia', label: 'Explorar experiencia ↗' },
  stack: { number: '03', title: 'The practice.', body: '<p>Java · Spring Boot · JPA / Hibernate<br>Spring Security · JWT · Feign · Eureka<br>MySQL · Oracle · MongoDB<br>JUnit · Mockito · Docker · Git</p><p>Las herramientas con las que diseño, conecto y pruebo servicios.</p>', target: '#tecnologias', label: 'Explorar tecnologías ↗' }
};
let lastTrigger;
document.querySelectorAll('[data-detail]').forEach(button => button.addEventListener('click', () => {
  const data = content[button.dataset.detail];
  lastTrigger = button;
  dialog.querySelector('.dialog-number').textContent = data.number;
  document.getElementById('dialog-title').textContent = data.title;
  document.getElementById('dialog-content').innerHTML = data.body;
  const go = document.getElementById('dialog-go');
  go.textContent = data.label;
  go.onclick = () => { dialog.close(); document.querySelector(data.target).scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'}); };
  dialog.showModal();
}));
document.getElementById('close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); } });
dialog.addEventListener('close', () => lastTrigger?.focus({preventScroll:true}));
document.getElementById('copy-email').addEventListener('click', async () => {
  const email = 'jhonatansanchezflores51@gmail.com';
  const status = document.getElementById('copy-status');
  try { await navigator.clipboard.writeText(email); status.textContent = 'Correo copiado.'; }
  catch { status.textContent = 'Selecciona el correo para copiarlo, o púlsalo para escribir un mensaje.'; }
});
