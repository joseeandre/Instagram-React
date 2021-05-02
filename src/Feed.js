import Stories from './Stories';
import Posts from './Posts';
import Perfil from './Perfil';
import Sugeridos from './Sugeridos';

export default function Feed() {
  return (
        <div class="feed">
            <div class="conteudo">
                <div class="caixa-principal">
                    <Stories />
                    <Posts />
                </div>    
                <div class="caixa-sugeridos">
                    <Perfil />
                    <div class="sugestoes-topo">
                        <p class="sugestoes-titulo"><strong>Sugestões para você</strong></p>
                        <p>Ver tudo</p>
                    </div>
                    <Sugeridos />

                    <div class="creditos">
                        <ul>
                            <li><a class="creditos-fonte" href="#">Sobre</a></li>
                            <li><a class="creditos-fonte" href="#">Ajuda</a></li>
                            <li><a class="creditos-fonte" href="#">Impresa</a></li>
                            <li><a class="creditos-fonte" href="#">API</a></li>
                            <li><a class="creditos-fonte" href="#">Carreiras</a></li>
                            <li><a class="creditos-fonte" href="#">Privacidade</a></li>
                            <li><a class="creditos-fonte" href="#">Termos</a></li>
                            <li><a class="creditos-fonte" href="#">Localizações</a></li>
                            <li><a class="creditos-fonte" href="#">Contas mais relevantes</a></li>
                            <li><a class="creditos-fonte" href="#">Hashtags</a></li>
                            <li><a class="creditos-fonte" href="#">Idioma</a></li>
                        </ul>
                        <div class="creditos-fonte">© 2020 INSTAGRAM DO FACEBOOK</div>
                    </div>
                </div>
            </div>
        </div>
  );
}