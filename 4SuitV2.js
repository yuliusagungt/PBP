function getPilihanKomputer() {
  const komp = Math.random();

  if (komp < 0.34) return "gajah";
  if (komp >= 0.34 && komp < 0.67) return "orang";
  return "semut";
}

function getHasil(komp, player) {
  if (player == komp) return "SERI!";
  if (player == "gajah") return komp == "orang" ? "MENANG!" : "KALAH!";
  if (player == "orang") return komp == "gajah" ? "KALAH!" : "MENANG!";
  if (player == "semut") return komp == "orang" ? "KALAH" : "MENANG!";
}

function putar(){
    const imgKom = document.querySelector('.img-komputer');
    const gambar = ['gajah','semut','orang'];
    let i = 0;
    const awal = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - awal > 1000) {clearInterval; return;}
        imgKom.setAttribute('src', 'Suit/' + gambar[i++] + '.png');
        if(i == gambar.length) i=0;
    }, 100)
}



const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilKom = getPilihanKomputer();
    const pilPlay = pil.className;
    const hasil = getHasil(pilKom, pilPlay);

    putar();

    setTimeout(function(){
        const imgKom = document.querySelector(".img-komputer");
        imgKom.setAttribute("src", "Suit/" + pilKom + ".png");
    
        const info = document.querySelector(".ingfo");
        info.innerHTML = hasil;
    }, 1000);

  });
});

// const pGajah = document.querySelector('.gajah');
//     pGajah.addEventListener('click', function(){
//     const pilKom = getPilihanKomputer();
//     const pilPlay = pGajah.className;
//     const hasil = getHasil(pilKom, pilPlay);

//     const imgKom = document.querySelector('.img-komputer');
//     imgKom.setAttribute('src', 'Suit/' + pilKom + '.png');

//     const info = document.querySelector('.ingfo');
//     info.innerHTML=hasil;
// });

// const pOrang = document.querySelector('.orang');
//     pOrang.addEventListener('click', function(){
//     const pilKom = getPilihanKomputer();
//     const pilPlay = pOrang.className;
//     const hasil = getHasil(pilKom, pilPlay);

//     const imgKom = document.querySelector('.img-komputer');
//     imgKom.setAttribute('src', 'Suit/' + pilKom + '.png');

//     const info = document.querySelector('.ingfo');
//     info.innerHTML=hasil;
// });

// const pSemut = document.querySelector('.semut');
//     pSemut.addEventListener('click', function(){
//     const pilKom = getPilihanKomputer();
//     const pilPlay = pSemut.className;
//     const hasil = getHasil(pilKom, pilPlay);

//     const imgKom = document.querySelector('.img-komputer');
//     imgKom.setAttribute('src', 'Suit/' + pilKom + '.png');

//     const info = document.querySelector('.ingfo');
//     info.innerHTML=hasil;
// });
