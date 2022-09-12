const horasTela = document.querySelector('.horas');
const minutosTela = document.querySelector('.minutos');
const segundosTela = document.querySelector('.segundos');
const amPmTela = document.querySelector('.ampm');


const relogio = () => {
    const horas = new Date()
    let h = horas.getHours();
    let m = horas.getMinutes();
    let s = horas.getSeconds();
    let ap = h < 12 ? 'am' : 'pm';

    // h = h < 10 ? '0' + h : h
    // m = m < 10 ? '0' + m : m
    // s = s < 10 ? '0' + s : s

    const formatarUnidades = unidade => unidade < 10 ? '0' + unidade : unidade;

    horasTela.innerText = (formatarUnidades(h) > 12 ? h - 12 : h)
    minutosTela.innerText = formatarUnidades(m)
    segundosTela.innerText = formatarUnidades(s)
    amPmTela.innerText = ap




}
relogio()


setInterval(relogio, 1000)

