import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />     

        <Post
        nomeUsuario={'Fofão'}
        fotoUsuario={'http://f.i.uol.com.br/fotografia/2015/11/06/564588-400x600-1.jpeg'}
        fotoPost={'https://pipocamoderna.com.br/wp-content/uploads/2016/10/fofao.jpg'}
        />       

        <Post
        nomeUsuario={'Bozo'}
        fotoUsuario={'http://g1.globo.com/Noticias/PopArte/foto/0,,15014526,00.jpg'}
        fotoPost={'https://static.poder360.com.br/2019/08/bozo-palhaco-868x644.jpg'}
        />
        </div>
            );
  }
}

export default App;
