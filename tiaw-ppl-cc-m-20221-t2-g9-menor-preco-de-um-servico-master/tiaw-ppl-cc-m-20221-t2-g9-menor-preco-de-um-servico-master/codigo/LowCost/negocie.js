let loadMore3 = document.querySelector('#carrega-noti');
let noti = document.querySelector('#noticias');

loadMore3.onclick = () => {
  const row = document.createElement('div');
  row.innerHTML = '<div class="row"> <div class="col-12 col-sm-12 col-md-6 col-lg-4"><div class="card"><div class="card-body"><h5 class="card-title">Notícia</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p><a href="saibamais.html" class="btn botao-padrao">Saiba mais</a></div></div></div><div class="col-12 col-sm-12 col-md-6 col-lg-4"><div class="card"><div class="card-body"><h5 class="card-title">Notícia</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p><a href="saibamais.html" class="btn botao-padrao">Saiba mais</a></div></div></div><div class="col-12 col-sm-12 col-md-6 col-lg-4"><div class="card"><div class="card-body"><h5 class="card-title">Notícia</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p><a href="saibamais.html" class="btn botao-padrao">Saiba mais</a></div></div></div> </div>';
  noti.appendChild(row);
}
