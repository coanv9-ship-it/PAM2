import React from 'react';
import { View, Text } from 'react-native';
import estilo from './estilo';

export default function ItemCardapio(props) {
  return (
    <View style={estilo.boxItem}>
      <Text style={estilo.nomeItem}>
        {props.nome}
      </Text>

      <Text style={estilo.descricaoItem}>
        {props.descricao}
      </Text>

      <Text style={estilo.precoItem}>
        R$ {props.preco}
      </Text>
    </View>
  )
}
