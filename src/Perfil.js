export default function Perfil() {
  const perfil = {
    name: "Catana",
    userName: "catanacomics",
    image: "pictures/perfil.png",
  };
  return (
    <div class="perfil">
      <a href="#">
        <img src={perfil.image} alt={perfil.name} />
      </a>
      <div>
        <p>{perfil.userName}</p>
        <p class="perfil-nome">{perfil.name}</p>
      </div>
    </div>
  );
}
