const cards = document.querySelectorAll('.card-frame');

cards.forEach(content => {
    const btn = content.querySelector('.card-image');

    btn.addEventListener('click', () => {
        cards.forEach(function (item) {
            if (item !== content) {
                item.classList.remove('show-card-frame');
            }
        })
        content.classList.toggle('show-card-frame');

    })

})
























//funciona para Card individualmente abrindo todos
// const btnShowCard = document.querySelectorAll('.card-image');
// const showCard = () => {


//     btnShowCard.forEach(function (botao) {
//         botao.addEventListener('click', function (el) {
//             let cardFrame = document.querySelectorAll('.card-frame');
//             let cardBody = document.querySelectorAll('.card-body');
//             let contentFrame = botao.previousSibling.parentElement;
//             let contentBody = botao.nextElementSibling;
//             contentFrame.classList.toggle('show-card-frame');
//             contentBody.classList.toggle('show-card-body');
//             console.log(cardBody, cardFrame, contentFrame, contentBody, a1)

//         })
//     });
// }
// showCard()


// Funciona para 1 card

// const showCard = () => {
//     const btnShowCard = document.querySelectorAll('.card-image');
//     const cardFrame = document.querySelector('.card-frame');
//     const cardBody = document.querySelector('.card-body');
//     btnShowCard.addEventListener('click', function (el) {
//         cardFrame.classList.toggle('show-card-frame');
//         cardBody.classList.toggle('show-card-body');
//     })
// }
// showCard()