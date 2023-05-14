// Komputer
let Komputer = document.querySelector(".Komputer");
let FotoKomputer = document.querySelector(".FotoKomputer");

// Teks Tengah
let Teks = document.querySelector(".Teks");

// User
let User = document.querySelector(".User");
let FotoUser = document.querySelector(".FotoUser");

// Batu
let Batu = document.querySelector(".Batu");
let FotoBatu = document.querySelector(".FotoBatu");

// Gunting
let Gunting = document.querySelector(".Gunting");
let FotoGunting = document.querySelector(".FotoGunting");

// Kertas
let Kertas = document.querySelector(".Kertas");
let FotoKertas = document.querySelector(".FotoKertas");

// Poin dan Reset
let PoinKomputer = document.querySelector(".PoinK");
let PoinUser = document.querySelector(".PoinU");
let Reset = document.querySelector(".Reset");

function Game() {
  function Random() {
    let a = Math.random() * 3;
    if (a <= 1) {
      let Comp = Batu;
    } else if (a >= 1 && a <= 2) {
      let Comp = Gunting;
    } else {
      let Comp = Kertas;
    }
    return Comp;
  }

  Batu.addEventListener("click", function(){
    FotoUser.src = "Batu2.jpg";
    if(Random() == Batu){
        FotoKomputer.src="Batu2.jpg";
        Teks.textContent="SERI"
        
    }
  });
  

}

Batu.addEventListener("click", Game());
Gunting.addEventListener("click", Game());
Kertas.addEventListener("click", Game());
