import React from 'react';
import { View, Text, Image } from 'react-native';
import estilo from './estilo';

export default function ItemCardapio(props) {
  return (
    <View style={estilo.card}>
      <Image source={{ uri: props.imagem }} style={estilo.imagem} />

      <View style={estilo.info}>
        <Text style={estilo.nome}>{props.nome}</Text>
        <Text style={estilo.descricao}>{props.descricao}</Text>
        <Text style={estilo.preco}>R$ {props.preco}</Text>
      </View>
    </View>
  )
}