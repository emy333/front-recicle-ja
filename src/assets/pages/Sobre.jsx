import React from "react";
import MainLayout from "../layouts/main";
import MapView from "../components/MapView/main";
import Search from "../components/Search/main";

function Sobre() {
    return (
        <MainLayout>
            <div className="text-center py-8">
                <h1 className="text-3xl font-bold mb-4">Sobre o Nosso Sistema</h1>
                <p className="mb-6 text-lg">
                    Nosso sistema foi desenvolvido para ajudar você a localizar os ecopontos mais próximos de acordo com a sua localização. Com ele, você pode facilmente encontrar pontos de coleta de materiais recicláveis, promovendo a sustentabilidade e o cuidado com o meio ambiente.
                </p>
                <p className="mb-6 text-lg">
                    Basta permitir o acesso à sua localização e nosso sistema mostrará as opções mais próximas para que você possa descartá-los corretamente.
                </p>
              
            </div>
        </MainLayout>
    );
}

export default Sobre;
