import React from 'react';
import { View, Text } from 'react-native';
import ItemCardapio from '../ItemCardapio';
import estilo from './estilo';

export default function CategoriaCardapio(props) {
  return (
    <View style={estilo.secao}>
      <Text style={estilo.tituloSecao}>{props.nome}</Text>

      {props.itens.map((item, index) => (
        <ItemCardapio
          key={index}
          nome={item.nome}
          descricao={item.descricao}
          preco={item.preco}
          imagem={item.imagem}
        />
      ))}
    </View>
  )
}