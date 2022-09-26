const tombol = document.getElementById('tombol');
tombol.onclick = function(){
    // document.body.style.backgroundColor = 'aquamarine';
    // document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('biru-muda');
}

const tombolRand = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tombolRand.appendChild(teksTombol);
tombolRand.setAttribute('type', 'button');
tombol.after(tombolRand);

tombolRand.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb(' + r + ',r,r)';
});
