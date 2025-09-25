function lerNoticias() {
    const container = document.getElementById("container");
    container.innerHTML = "";
    
    dados.forEach(item => {
        const cartao = document.createElement("div");

        cartao.className = "card";

        cartao.innerHTML = `
           <img src="${item.imagem}" alt="${item.titulo}" class="imagem">
           <h2>${item.titulo}</h2>
           <p>${item.categoria} - ${item.data}</p>
           <p>${item.descricao}</p>
           <p>${item.autor}</p>
           <a href="detalhe.html?id=${item.id}">Leia mais</a>
        `;
        
         container.appendChild(cartao);
    }); 
}