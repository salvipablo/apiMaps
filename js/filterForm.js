const filterForm = document.getElementById('filterForm');
const iconMenu = document.getElementById('iconMenu');
const btnFilters = document.getElementById('btnFilters');
const cntForm = document.getElementById('cntForm');

let changeClass = true;

iconMenu.addEventListener('click', () => {
  filterForm.classList.toggle('filterFormComp');
});

btnFilters.addEventListener('click', () => {
  filterForm.classList.toggle('filterFormComp');
  changeClass = false;
});

cntForm.addEventListener('click', () => {
  changeClass = false;
});

filterForm.addEventListener('click', () => {
  if (changeClass) filterForm.classList.toggle('filterFormComp');
  changeClass = true;
});