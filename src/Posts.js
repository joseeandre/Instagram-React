import Post from "./Post";

export default function Posts() {
  const curtida = [{name: "respondeai", image: "pictures/stories/st6.png"}, {name: "respondeai", image: "pictures/stories/st6.png"}, {name: "respondeai", image: "pictures/stories/st6.png"}, {name: "respondeai", image: "pictures/stories/st6.png"}, {name: "respondeai", image: "pictures/stories/st6.png"}, {name: "respondeai", image: "pictures/stories/st6.png"}];
  const comentario = [{name: "Gato", data: "catioro de boas mesmo"}, {name: "Gato", data: "catioro de boas mesmo"}, {name: "Gato", data: "catioro de boas mesmo"}, {name: "Gato", data: "catioro de boas mesmo"}, {name: "Gato", data: "catioro de boas mesmo"}];

  const posts = [
    { name: "meowed", image: "pictures/stories/st2.png", url: "pictures/posts/post1.png", comments: comentario, likes: curtida, subtitle: "Catioro de boas"},
    { name: "9gag", image: "pictures/stories/st1.png", url: "pictures/posts/post2.png", comments: comentario, likes: curtida, subtitle: "Catioro de boas"},
    { name: "9gag", image: "pictures/stories/st1.png", url: "pictures/posts/post3.png", comments: comentario, likes: curtida, subtitle: "Catioro de boas"},
    { name: "9gag", image: "pictures/stories/st1.png", url: "pictures/posts/post4.png", comments: comentario, likes: curtida, subtitle: "Catioro de boas"},
  ];

  return (
    <>
      {posts.map((item) => (
        <Post
          imagemUsuario={item.image}
          nome={item.name}
          imagemPost={item.url}
          comentarios={item.comments}
          curtidas={item.likes}
          legenda={item.subtitle}
        />
      ))}
    </>
  );
}
