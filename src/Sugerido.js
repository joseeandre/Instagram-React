export default function Story(usuario) {
  return (
    <div class="perfis-sugeridos">
      <div class="perfil-sugerido">
        <a href="#">
          <img src={usuario.imagem} alt={usuario.nome} />
        </a>
        <div>
          <p>{usuario.nome}</p>
          <p class="sugestoes-titulo">Segue você</p>
        </div>
      </div>
      <a href="#">
        <p class="azul">Seguir</p>
      </a>
    </div>
  );
}
