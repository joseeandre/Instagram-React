import Story from './Story';

export default function Stories() {
  const stories = [
    { name: "9gag", image: "pictures/stories/st1.png" },
    { name: "meowed", image: "pictures/stories/st2.png" },
    { name: "barked", image: "pictures/stories/st3.png" },
    { name: "nathanwpyle...", image: "pictures/stories/st4.png" },
    { name: "wawawiwac...", image: "pictures/stories/st5.png" },
    { name: "respondeai", image: "pictures/stories/st6.png" },
    { name: "filomoderna", image: "pictures/stories/st7.png" },
    { name: "memeriago", image: "pictures/stories/st8.png" },
  ];

  return (
    <div class="caixa-stories">
      <a href="#">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </a>
      {stories.map(item => <Story imagem={item.image} nome={item.name} />)}
    </div>
  );
}
