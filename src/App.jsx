import { useState } from 'react';
import Restaurante from './assets/hashtaurante.webp';
import './App.css';
import {Navegacao} from './Navegacao';
import { ItemCardapio } from './ItemCardapio';
import {pratosPrincipais, sobremesas, bebidas} from './cardapio'


export function App(){
  const paginaMenu = [pratosPrincipais, sobremesas, bebidas];
  const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0);
  return <>
           <img src = {Restaurante} alt='' className='capa'></img>
           <Navegacao atualizarPaginaSelecionada = {atualizarPaginaSelecionada}/>
           <div className='menu'>
            {paginaMenu[paginaSelecionada].map(item=> <ItemCardapio nome = {item.nome} descricao = {item.descricao} preco = {item.preco} imagem = {item.imagem}/>)}
           </div>

        </> 
}