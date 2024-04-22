document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('check');
    const openMenu = document.querySelector('.open-menu');
    const closeMenu = document.querySelector('.close-menu');
    const menu = document.querySelector('.menu');

    // Event listener para abrir el menú
    openMenu.addEventListener('click', function() {
        openMenu.style.display = 'none';
        closeMenu.style.display = 'block'; 
        menu.style.display = 'flex'; 
    });

    // Event listener para cerrar el menú
    closeMenu.addEventListener('click', function() {
        openMenu.style.display = 'block'; 
        closeMenu.style.display = 'none'; 
        menu.style.display = 'none'; 
    });
});
