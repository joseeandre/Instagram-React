export default function Topo() {
    return (
    <div class="caixa-topo">
        <div class="topo">
            <div class="caixa-logo">
                <figure>
                    <a href="#">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                </figure>
                <div class="separador-vertical"></div>
                <img src="pictures/logo.png" alt="Logo Instagram" />
            </div>
            <input type="text" placeholder="Pesquisar" />
            <div class="caixa-icons">
                <a href="#">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </a>
                <a href="#">
                    <ion-icon name="compass-outline"></ion-icon>
                </a>
                <a href="#">
                    <ion-icon name="heart-outline"></ion-icon>
                </a>
                <a href="#">
                    <ion-icon name="person-outline"></ion-icon>
                </a>
            </div>
        </div>
        <div class="topo-mobile">
            <a href="#">
                <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="index.html"><img src="pictures/logo.png" alt="" class="logo-mobile" /></a>
            <a href="#">
                <ion-icon name="paper-plane-outline"></ion-icon>
            </a>
        </div>
    </div>
    );
}