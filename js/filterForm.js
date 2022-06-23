const secFilterForm = document.getElementById('secFilterForm');
const iconMenu = document.getElementById('iconMenu');
const btnFilters = document.getElementById('btnFilters');
const cntFilterForm = document.getElementById('cntFilterForm');

let changeClass = true;

iconMenu.addEventListener('click', () => {
  secFilterForm.classList.toggle('secFilterFormBehaviour');
});

btnFilters.addEventListener('click', () => {
  secFilterForm.classList.toggle('secFilterFormBehaviour');
  changeClass = false;
});

cntFilterForm.addEventListener('click', () => {
  changeClass = false;
});

secFilterForm.addEventListener('click', () => {
  if (changeClass) secFilterForm.classList.toggle('secFilterFormBehaviour');
  changeClass = true;
});
