document.addEventListener('DOMContentLoaded', function (event) {
    const menuHorizontal = document.querySelector('.navegacao-menu');
    const openMenu = document.querySelector(".btn-responsivo-open");



    const button = {
        openAndClose() {
            openMenu.addEventListener('click', () => {
                menuHorizontal.classList.toggle('active-menu-resposive');
                openMenu.innerHTML = '<i class="fa-solid fa-xmark"></i>';
                if (!menuHorizontal.classList.contains('active-menu-resposive')) {
                    openMenu.innerHTML = '<i class="fa-solid fa-bars"></i>'
                }
            })
        },
        removeOnSize() {
            window.onresize = function () {
                if (menuHorizontal.classList.contains('active-menu-resposive') ? menuHorizontal.classList.remove('active-menu-resposive') : openMenu.innerHTML = '<i class="fa-solid fa-bars"></i>');
            }
        },
        removeOnClickPage() {
            const documento = document.querySelector('.container');

            documento.addEventListener('click', () => {

                if (menuHorizontal.classList.contains('active-menu-resposive')) {
                    menuHorizontal.classList.remove('active-menu-resposive');
                    openMenu.innerHTML = '<i class="fa-solid fa-bars"></i>';
                }
            })
        },
        closeMenuOnClick() {
            const linksOnMenu = document.querySelectorAll('.link-menu-a')
            linksOnMenu.forEach(link => {
                link.addEventListener('click', function () {
                    linksOnMenu.forEach(btnLink => btnLink.classList.remove('active-link-menu-a'));
                    this.classList.add('active-link-menu-a');
                    menuHorizontal.classList.remove('active-menu-resposive');
                    openMenu.innerHTML = '<i class="fa-solid fa-bars"></i>';
                });

            });

        }
    }
    button.openAndClose()
    button.removeOnSize()
    button.removeOnClickPage()
    button.closeMenuOnClick()




















}
)