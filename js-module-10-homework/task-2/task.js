const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    alert(`
     Ширина экрана с учетом полосы прокрутки: ${window.screen.width}
     Высота экрана с учетом полосы прокрутки: ${window.screen.height}
     
     Ширина экрана без учета полосы прокрутки: ${document.documentElement.clientWidth}
     Высота экрана без учета полосы прокрутки: ${document.documentElement.clientHeight}
    `)
});