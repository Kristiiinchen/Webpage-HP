const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')


openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
   })
})


closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
   })
  })

function openModal(modal){
  if(modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal){
  if(modal == null) return 
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal(modal);
  }
});

if(overlay){
overlay.addEventListener("click", closeModal(modal));
}
sessionStorage.setItem("key", "value");
sessionStorage.getItem("key");



//content generierung


        document.addEventListener('DOMContentLoaded',function(){
          document.getElementById('getContact').onclick= () => {
            fetch('contact.json')
            .then(response => response.json()) 
            .then(data => {
                appendData(data);
            })
            .catch(err =>{
                console.log('error: ' + err);
            });

            
        function appendData(data) {
            var mainContainer = document.getElementById("message");
            for (var i = 0; i < data.length; i++) {
                var div = document.createElement("div");
                div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName + ' '+ data[i].email;
                mainContainer.appendChild(div);
            }
          }
          };
        });
        