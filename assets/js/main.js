const toggle = document.querySelector('.js-toggle');
const header = document.querySelector('.js-header');

toggle.addEventListener('click', e => {
    header.classList.toggle('nav-is-open')
})



// Seleciona todos os elementos com a classe "accordion-item" e armazena em uma variável
const itemsFromAccordion = document.querySelectorAll('.js-item-box');

// Itera sobre todos os itens selecionados
itemsFromAccordion.forEach(item => {
  // Adiciona um evento de clique em cada item
  item.addEventListener('click', event => {
    // Verifica se o item clicado já possui a classe "is-open"
    const isOpen = event.currentTarget.classList.contains('is-open');

    // Se já tiver a classe "is-open", remove-a
    if (isOpen) {
        document.querySelectorAll('.js-item-box').forEach(item=>{
            event.currentTarget.classList.remove('is-open');
        })
      
    } else {
      // Se não tiver a classe "is-open", adiciona-a e remove de todos os outros elementos
      itemsFromAccordion.forEach(otherItem => {
        otherItem.classList.remove('is-open');
      });
      event.currentTarget.classList.add('is-open');
    }
  });
});