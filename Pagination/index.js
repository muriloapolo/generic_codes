//Array de itens para paginação
//Para adicionar mais itens à lista, crie mais um objeto para preencher a lista
const itensLoja = [{
    titulo: "Nome do Item",
    imagem: "./img/1.jpg",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, vel!"
},
{
    titulo: "Nome do Item",
    imagem: "./img/2.jpg",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, vel!"
},
{
    titulo: "Nome do Item",
    imagem: "./img/3.jpg",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, vel!"
},
{
    titulo: "Nome do Item",
    imagem: "./img/4.jpg",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, vel!"
},
{
    titulo: "Nome do Item",
    imagem: "./img/5.jpg",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, vel!"
},
{
    titulo: "Nome do Item",
    imagem: "./img/6.jpg",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, vel!"
},
{
    titulo: "Nome do Item",
    imagem: "./img/7.jpg",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, vel!"
},
{
    titulo: "Nome do Item",
    imagem: "./img/8.jpg",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, vel!"
},



]
const data = itensLoja.map(((item) => `<h2>${item.titulo}</h2> <img class="imgList" src="${item.imagem}" alt=""> <p class="descricaoItem">${item.descricao}</p>`));




/* 
    Criar o banco de dados com os mesmos campos poupará trabalho desnecessário.
    A função 'populate list faz o trabalho semelhante ao fetch()/resolve/reject etc.
*/
//Criar lista na página //DOM

//function populateList() {
/* MAP */
//Gera a lista de itens do array principal e os imprime na página para gerar a lista de produtos
//const data = itensLoja.map(((item) => `<div class="item"> <h2>${item.titulo}</h2> <img class="imgList" src="${item.imagem}" alt=""> <p class="descricaoItem">${item.descricao}</p></div>`));

//Captura as divs necessárias para inserir na página
//const list = document.querySelector('#paginate .list');
//.join("") Apenas para corrigir possíveis erros
//list.innerHTML = data.join("");

//}
// populateList()
/*========Fim Backend========*/



//Estado da aplicação
let perPage = 6
const state = {
    page: 1,
    //Saber a quantidade do array
    perPage,
    //Quantidade total de itens // Substituir pelo retorno do banco de dados
    totalPage: Math.ceil(itensLoja.length / perPage),
    maxVisibleButtons: 3
}
//Captura dados do HTML/DOM
const html = {
    get(element) {
        return document.querySelector(element);
    }
}

// Criando controles de paginação
//Funções dentro de um objeto para organizar melhor
const controls = {
    next() {
        state.page++
        //Definindo última página

        if (state.page > state.totalPage) {
            state.page--
        }
    },
    prev() {
        state.page--
        if (state.page < 1) {
            state.page++
        }
    },
    goTo(page) {
        /*
        Quando a página solicitada for menor que a primeira página = ela não existe e será tratado como a primeira página.
        - Última página não deve ser maior que o total do array.
        */
        if (page < 1) {
            page = 1
        }
        state.page = +page;
        if (page > state.totalPage) {
            state.page = state.totalPage;
        }
    },
    createListeners() {
        //Botão da primeira página
        html.get('.first').addEventListener('click', () => {
            controls.goTo(1)
            update()
        });
        //Botão da última página
        html.get('.last').addEventListener('click', () => {
            controls.goTo(state.totalPage)
            update()
        });
        //NEXT
        html.get('.next').addEventListener('click', () => {
            controls.next()
            update()
        });
        //Prev
        html.get('.prev').addEventListener('click', () => {
            controls.prev()
            update()
        });
    }
};
// Capturando e preenchendo a lista
const list = {
    create(item) {
        const div = document.createElement('div');
        div.classList.add('item');
        div.innerHTML = item;
        html.get('.list').appendChild(div);
    },
    update() {
        html.get('.list').innerHTML = "";
        let page = state.page - 1;
        let start = page * state.perPage;
        let end = start + state.perPage
        const paginatedItems = data.slice(start, end)
        paginatedItems.forEach(list.create)
    }
}
//Botões de navegação
const buttons = {
    element: html.get('.pagination .numbers'),
    create(number) {
        const button = document.createElement('div');
        button.innerHTML = number;
        //Adicionar marcação de página atual 
        if (state.page == number) {
            button.classList.add('active');
        }
        //Adicionar evento de click nos botões
        button.addEventListener('click', (e) => {
            const page = e.target.innerText;
            controls.goTo(page);
            update();
        })
        buttons.element.appendChild(button);
    },
    update() {
        buttons.element.innerHTML = "";
        const {
            maxLeft,
            maxRight
        } = buttons.calculateMaxVisible();
        console.log(maxLeft, maxRight);
        for (let page = maxLeft; page <= maxRight; page++) {
            buttons.create(page)
        }

    },
    //Botões visíveis
    calculateMaxVisible() {
        //Desestuturação do maxvisible buttons que recebe o STATE
        const {
            maxVisibleButtons
        } = state;
        let maxLeft = (state.page - Math.floor(maxVisibleButtons / 2));
        let maxRight = (state.page + Math.floor(maxVisibleButtons / 2));

        if (maxLeft < 1) {
            maxLeft = 1;
            maxRight = maxVisibleButtons;
        }
        if (maxRight > state.totalPage) {
            maxLeft = state.totalPage - (maxVisibleButtons - 1);
            maxRight = state.totalPage;

            if (maxLeft < 1) maxLeft = 1;

        }
        return {
            maxLeft,
            maxRight
        }
    }
}

function update() {
    list.update()
    buttons.update()
}

function init() {
    update()
    controls.createListeners()
}
init()