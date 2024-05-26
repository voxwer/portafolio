let botones = document.querySelectorAll(".title__network__item");

botones.forEach(function(boton) {
    boton.addEventListener("click", function() {

        document.body.classList.add("blur");

        let url = boton.getAttribute("data-url");

        setTimeout(function() {
            window.open(url, "_blank");1
            
            
            setTimeout(function() {
                document.body.classList.remove("blur");
            }, 1000); 
        }, 3000);
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

