document.addEventListener('DOMContentLoaded', function (event) {
    const menuHorizontal = document.querySelector('.navegacao-menu');
    const openMenu = document.querySelector(".btn-responsivo-open");
    // const closeMenu = document.querySelector(".btn-responsivo-close");

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
        removeOnClickPage() { }
    }

    button.openAndClose()
    button.removeOnSize()




















}
)