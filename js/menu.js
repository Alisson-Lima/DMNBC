(function(){

    // Selecionando buttons e o menu
    const btn = document.querySelector(".btn-menu")
    const menu = document.querySelector(".menu-links")

    // funções de click
    btn.addEventListener("click", ()=>{
        menu.classList.toggle("active")
        btn.classList.toggle("active-btn")
    })

})()