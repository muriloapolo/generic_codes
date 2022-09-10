const openCloseFaq = () => {
    const botoes = document.querySelectorAll('.faq-question');
    botoes.forEach((btn) => {
        btn.addEventListener('click', function () {
            let content = this.nextElementSibling;
            let btnIcon = this.querySelector('span');
            btnIcon.classList.toggle('ico-btn-faq')
            content.classList.toggle('d-faq-block')


        })
    })
}
openCloseFaq()