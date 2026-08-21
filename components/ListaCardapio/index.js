import React from 'react';
import { View, ScrollView } from 'react-native';
import Titulo from '../Titulo';
import ItemCardapio from '../ItemCardapio';
import estilo from './estilo.js';

export default function ListaCardapio() {
  return (
    <View style={estilo.container}>
      <Titulo />

      <ScrollView style={estilo.lista}>
        <ItemCardapio nome="Espetinho de Carne" descricao="Carne bovina grelhada na brasa" preco="8,00" />
        <ItemCardapio nome="Espetinho de Frango" descricao="Frango temperado grelhado na brasa" preco="7,00" />
        <ItemCardapio nome="Pão de Alho" descricao="Pão de alho gratinado" preco="6,00" />
        <ItemCardapio nome="Coração de Frango" descricao="Coração de frango na brasa" preco="7,50" />
        <ItemCardapio nome="Linguiça Toscana" descricao="Linguiça artesanal grelhada" preco="8,00" />
      </ScrollView>
    </View>
  )
}
