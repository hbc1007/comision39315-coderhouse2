window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("abajo", this.window.scrollY > 0);
})

// let header = document.querySelector('header');
// header.classList.toggle('down',window.scrollY > 0);
