import Sugerido from "./Sugerido";

export default function Sugeridos() {
  const sugeridos = [{name: "bad.vibes.memes", image: "pictures/sugestoes/sug1.png"}, {name: "bad.vibes.memes", image: "pictures/sugestoes/sug2.png"}, {name: "bad.vibes.memes", image: "pictures/sugestoes/sug3.png"}, {name: "bad.vibes.memes", image: "pictures/sugestoes/sug4.png"}, {name: "bad.vibes.memes", image: "pictures/sugestoes/sug5.png"}];

  return (
    <>
      {sugeridos.map(item => <Sugerido nome={item.name} imagem={item.image} />)}
    </>
  );
}