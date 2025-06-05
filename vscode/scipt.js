function toggleMode() {
  const html = document.documentElement

    html.classList.toggle('light')

 const img = document.querySelector("#profile img")

  if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute('alt', 'Mayk Brito usando óculos escuros e jaketa preta, com fundo roxo e azul')
  }else{
    img.setAttribute('src', './assets/avatar.png')
  }
}