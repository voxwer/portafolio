let botones = document.querySelectorAll(".title__network__item");

botones.forEach(function(boton) {
    boton.addEventListener("click", function() {

        document.body.classList.add("blur");

        let url = boton.getAttribute("data-url");

        setTimeout(function() {
            window.open(url, "_blank");
            
            
            setTimeout(function() {
                document.body.classList.remove("blur");
            }, 1000); 
        }, 3000);
    });
});
