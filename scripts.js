let item = 0;
const max = 28;

function proxImagem( img ){
    fetch(`img/${img}.jpg`)
    .then(resp => resp.blob())
    .then(blob => {
        const imageObjectURL = URL.createObjectURL(blob);
        console.log(imageObjectURL);

        const proxImg = document.createElement("img");
        proxImg.src = imageObjectURL;
        document.getElementById("placeholder").appendChild(proxImg);
    })
}
window.onload = function(){
    for (; item < 6; item++){
        proxImagem(item);
    }
}

window.onscroll = function(){
    let altura = document.body.scrollHeight;
    let scrollPoint = window.scrollY + window.innerHeight;
    if (scrollPoint >= altura){
        proxImagem(item++ % max)
    }
}

