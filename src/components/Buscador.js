import React from 'react';

class Buscador extends React.Component {
    render() {
        return (
            <div className='barra-pesquisa'>
                <input type="text" placeholder='Digite o nome do usuário' ref="name" />
                <button className='searchButton'> Pesquisar </button>
            </div>
        );
    }
}

export default Buscador;