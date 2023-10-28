const swicher = document.querySelector('.btn')

swicher.addEventListener('click', function(){
    document.body.classList.toggle('darck-theme') //dusamos toggle para alternar o tema

    var clasName = document.body.className
    if( clasName == "light-theme")
        this.textContent = "Darck"
    else
        //troca o texto do botao quando trocamos os tema
        this.textContent = "Light"

    console.log('nome atual da class: ' + clasName)
})