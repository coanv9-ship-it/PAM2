import React from 'react';
import { View, ScrollView } from 'react-native';
import Titulo from '../Titulo/index.js';
import ItemCardapio from '../ItemCardapio/index.js';
import estilo from './estilo.js';

export default function ListaCardapioAuto() {
  const itens = [
    { nome: 'Espetinho de Carne', descricao: 'Carne bovina grelhada na brasa', preco: '8,00' },
    { nome: 'Espetinho de Frango', descricao: 'Frango temperado grelhado na brasa', preco: '7,00' },
    { nome: 'Pão de Alho', descricao: 'Pão de alho gratinado', preco: '6,00' },
    { nome: 'Coração de Frango', descricao: 'Coração de frango na brasa', preco: '7,50' },
    { nome: 'Linguiça Toscana', descricao: 'Linguiça artesanal grelhada', preco: '8,00' },
  ];
  return (
    <View style={estilo.container}>
      <Titulo />

      <ScrollView style={estilo.lista}>
        {itens.map((item, index) => (
          <ItemCardapio
            key={index}
            nome={item.nome}
            descricao={item.descricao}
            preco={item.preco}
          />
        ))}
      </ScrollView>
    </View>
  )
}
