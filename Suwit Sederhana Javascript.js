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

function Random() {
  let a = Math.random() * 3;
  let Comp;
  if (a <= 1) {
    Comp = "Batuu";
  } else if (a > 1 && a < 2) {
    Comp = "Guntingg";
  } else {
    Comp = "Kertass";
  }
  return Comp;
}

function Game(Player, Komp) {
  if (Player == Komp) {
    return "SERI";
  } else if (Player == "Batuu") {
    if (Komp == "Guntingg") {
      return "MENANG";
    } else {
      return "KALAH";
    }
  } else if (Player == "Guntingg") {
    if (Komp == "Batuu") {
      return "KALAH";
    } else {
      return "MENANG";
    }
  } else if (Player == "Kertass") {
    if (Komp == "Batuu") {
      return "MENANG";
    } else {
      return "KALAH";
    }
  }
}

let PoinKom = 0;
let poinUser = 0;

Batu.addEventListener("click", function () {
  let Komp = Random();
  let Player = "Batuu";
  let Hasil = Game(Player, Komp);
  FotoUser.src = "Batu.png";
  Teks.textContent = "- - -";
  if (Hasil == "SERI") {
    let sec = 1;
    let pengulangan = setInterval(function () {
      if (sec == 1) {
        FotoKomputer.src = "Batu.png";
      } else if (sec == 2) {
        FotoKomputer.src = "Kertas.png";
      } else if (sec == 3) {
        FotoKomputer.src = "Gunting.png";
      }
      sec++;
      if (sec > 3) {
        sec = 0;
      }
    }, 100);
    setTimeout(function () {
      Teks.textContent = Hasil;
      clearInterval(pengulangan);
    }, 1000);
    setTimeout(function () {
      FotoKomputer.src = "Batu.png";
    }, 1099);
  } else if (Hasil == "MENANG") {
    let Poin = parseInt(PoinUser.textContent);
    let sec = 1;
    let pengulangan = setInterval(function () {
      if (sec == 1) {
        FotoKomputer.src = "Batu.png";
      } else if (sec == 2) {
        FotoKomputer.src = "kertas.png";
      } else if (sec == 3) {
        FotoKomputer.src = "Gunting.png";
      }
      sec++;
      if (sec > 3) {
        sec = 0;
      }
    }, 100);
    setTimeout(function () {
      Teks.textContent = Hasil;
      Poin++;
      PoinUser.innerText = Poin;
      clearInterval(pengulangan);
    }, 1000);
    setTimeout(function () {
      FotoKomputer.src = "Gunting.png";
    }, 1099);
  } else if (Hasil == "KALAH") {
    let Poin = parseInt(PoinKomputer.textContent);
    let sec = 1;
    let pengulangan = setInterval(function () {
      if (sec == 1) {
        FotoKomputer.src = "Batu.png";
      } else if (sec == 2) {
        FotoKomputer.src = "kertas.png";
      } else if (sec == 3) {
        FotoKomputer.src = "Gunting.png";
      }
      sec++;
      if (sec > 3) {
        sec = 0;
      }
    }, 100);
    setTimeout(function () {
      Teks.textContent = Hasil;
      Poin++;
      PoinKomputer.innerText = Poin;
      clearInterval(pengulangan);
    }, 1000);
    setTimeout(function () {
      FotoKomputer.src = "Kertas.png";
    }, 1099);
  }
});

Gunting.addEventListener("click", function () {
  let Komp = Random();
  let Player = "Guntingg";
  let Hasil = Game(Player, Komp);
  FotoUser.src = "Gunting.png";
  Teks.textContent = "- - -";
  if (Hasil == "SERI") {
    let sec = 1;
    let pengulangan = setInterval(function () {
      if (sec == 1) {
        FotoKomputer.src = "Batu.png";
      } else if (sec == 2) {
        FotoKomputer.src = "Kertas.png";
      } else if (sec == 3) {
        FotoKomputer.src = "Gunting.png";
      }
      sec++;
      if (sec > 3) {
        sec = 0;
      }
    }, 100);
    setTimeout(function () {
      Teks.textContent = Hasil;
      clearInterval(pengulangan);
    }, 1000);
    setTimeout(function () {
      FotoKomputer.src = "Gunting.png";
    }, 1099);
  } else if (Hasil == "MENANG") {
    let Poin = parseInt(PoinUser.textContent);
    let sec = 1;
    let pengulangan = setInterval(function () {
      if (sec == 1) {
        FotoKomputer.src = "Batu.png";
      } else if (sec == 2) {
        FotoKomputer.src = "kertas.png";
      } else if (sec == 3) {
        FotoKomputer.src = "Gunting.png";
      }
      sec++;
      if (sec > 3) {
        sec = 0;
      }
    }, 100);
    setTimeout(function () {
      Teks.textContent = Hasil;
      Poin++;
      PoinUser.innerText = Poin;
      clearInterval(pengulangan);
    }, 1000);
    setTimeout(function () {
      FotoKomputer.src = "Kertas.png";
    }, 1099);
  } else if (Hasil == "KALAH") {
    let Poin = parseInt(PoinKomputer.textContent);
    let sec = 1;
    let pengulangan = setInterval(function () {
      if (sec == 1) {
        FotoKomputer.src = "Batu.png";
      } else if (sec == 2) {
        FotoKomputer.src = "kertas.png";
      } else if (sec == 3) {
        FotoKomputer.src = "Gunting.png";
      }
      sec++;
      if (sec > 3) {
        sec = 0;
      }
    }, 100);
    setTimeout(function () {
      Teks.textContent = Hasil;
      Poin++;
      PoinKomputer.innerText = Poin;
      clearInterval(pengulangan);
    }, 1000);
    setTimeout(function () {
      FotoKomputer.src = "Batu.png";
    }, 1099);
  }
});

Kertas.addEventListener("click", function () {
  let Komp = Random();
  let Player = "Kertass";
  let Hasil = Game(Player, Komp);
  FotoUser.src = "Kertas.png";
  Teks.textContent = "- - -";
  if (Hasil == "SERI") {
    let sec = 1;
    let pengulangan = setInterval(function () {
      if (sec == 1) {
        FotoKomputer.src = "Batu.png";
      } else if (sec == 2) {
        FotoKomputer.src = "Kertas.png";
      } else if (sec == 3) {
        FotoKomputer.src = "Gunting.png";
      }
      sec++;
      if (sec > 3) {
        sec = 0;
      }
    }, 100);
    setTimeout(function () {
      Teks.textContent = Hasil;
      clearInterval(pengulangan);
    }, 1000);
    setTimeout(function () {
      FotoKomputer.src = "Kertas.png";
    }, 1099);
  } else if (Hasil == "MENANG") {
    let Poin = parseInt(PoinUser.textContent);
    let sec = 1;
    let pengulangan = setInterval(function () {
      if (sec == 1) {
        FotoKomputer.src = "Batu.png";
      } else if (sec == 2) {
        FotoKomputer.src = "kertas.png";
      } else if (sec == 3) {
        FotoKomputer.src = "Gunting.png";
      }
      sec++;
      if (sec > 3) {
        sec = 0;
      }
    }, 100);
    setTimeout(function () {
      Teks.textContent = Hasil;
      Poin++;
      PoinUser.innerText = Poin;
      clearInterval(pengulangan);
    }, 1000);
    setTimeout(function () {
      FotoKomputer.src = "Batu.png";
    }, 1099);
  } else if (Hasil == "KALAH") {
    let Poin = parseInt(PoinKomputer.textContent);
    let sec = 1;
    let pengulangan = setInterval(function () {
      if (sec == 1) {
        FotoKomputer.src = "Batu.png";
      } else if (sec == 2) {
        FotoKomputer.src = "kertas.png";
      } else if (sec == 3) {
        FotoKomputer.src = "Gunting.png";
      }
      sec++;
      if (sec > 3) {
        sec = 0;
      }
    }, 100);
    setTimeout(function () {
      Teks.textContent = Hasil;
      Poin++;
      PoinKomputer.innerText = Poin;
      clearInterval(pengulangan);
    }, 1000);
    setTimeout(function () {
      FotoKomputer.src = "Gunting.png";
    }, 1099);
  }
});

Reset.addEventListener('click',function(){
  FotoKomputer.src = "Komputer.avif";
  FotoUser.src = "User3.jpg";
  PoinUser.innerText = 0;
  PoinKomputer.innerText = 0;
  Teks.textContent = "- - -";
})
