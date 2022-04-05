const infoBtn = document.querySelector('.fa-question');
const modalShadow = document.querySelector('.modal-shadow');
const closeModalBtn = document.querySelector('.close');


const showModal= () => {
  if(!(modalShadow.style.display === 'block')){
    modalShadow.style.display = 'block';
  } else {
    modalShadow.style.display = 'none'
  };

  modalShadow.classList.toggle('modal-animation');
}



infoBtn.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', showModal)
window.addEventListener('click', e => e.target === modalShadow ? showModal() : false); // ma spowodować że obnojętnie wktórym miejscu się kliknie w oknie to wyłączy popUp
