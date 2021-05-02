export default function Post(post) {
  return (
    <div class="post">
      <div class="topo-post">
        <div class="nome">
          <img src={post.imagemUsuario} alt={post.nome} />
          <p>{post.nome}</p>
        </div>
        <a href="#">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </a>
      </div>
      <div class="foto-post">
        <img src={post.imagemPost} />
      </div>
      <div class="icones-post">
        <div>
          <a href="#">
            <ion-icon name="heart-outline"></ion-icon>
          </a>
          <a href="#">
            <ion-icon name="chatbubble-outline"></ion-icon>
          </a>
          <a href="#">
            <ion-icon name="paper-plane-outline"></ion-icon>
          </a>
        </div>
        <div>
          <a href="#">
            <ion-icon name="bookmark-outline"></ion-icon>
          </a>
        </div>
      </div>
      <div class="like">
        <img src={post.curtidas[0].image} alt={post.curtidas[0].name} />
        <p>
          Curtido por <strong>{post.curtidas[0].name}</strong> e{" "}
          <strong>outras {post.curtidas.length - 1} pessoas</strong>
        </p>
      </div>
      <div class="comentarios">
        <div>
          <a href="#">
            <p>
              <strong>{post.nome}</strong>
            </p>
          </a>
          <p>{post.legenda}</p>
        </div>
        <div class="mais-comentarios">
          <a href="#">Ver todos os {post.comentarios.length - 1} comentários</a>
        </div>
        <div class="comentario">
          <a href="#">
            <p>
              <strong>{post.comentarios[0].name}</strong>
            </p>
          </a>
          <p>{post.comentarios[0].data}</p>
          <ion-icon name="heart-outline"></ion-icon>
        </div>
        <div class="mais-comentarios hora">
          <a href="#">Há 30 minutos</a>
        </div>
      </div>
      <div class="comentar">
        <div>
          <a href="#">
            <ion-icon name="happy-outline"></ion-icon>
          </a>
          <input type="text" placeholder="Adicione um comentário" />
        </div>
        <a href="#">
          <p class="publicar">Publicar</p>
        </a>
      </div>
    </div>
  );
}
