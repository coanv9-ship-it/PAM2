import React from 'react';
import ListaCardapio from './components/ListaCardapio';
import ListaCardapioAuto from './components/ListaCardapioAuto';

export default function App() {
  return (
    // Escolha qual componente você quer renderizar, ListaCardapio ou ListaCardapioAuto
    // É só comentar o que não quer usar e descomentar o que quer usar
    <ListaCardapio />
    // <ListaCardapioAuto />
  );
}
