export default function Story(usuario) {
  return (
    <div class="story">
      <a href="#" class="foto-stories">
        <img src={usuario.imagem} alt={usuario.nome} />
      </a>
      <div class="nome-stories">{usuario.nome}</div>
    </div>
  );
}
