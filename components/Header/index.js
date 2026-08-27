import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import estilo from './estilo';

export default function Header() {
  return (
    <ImageBackground
    source={{ uri: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=800&q=60&auto=format&fit=crop' }}
      style={estilo.banner}
      resizeMode="cover"
    >
      <View style={estilo.overlay}>
        <Text style={estilo.titulo}>Espetinho do Zé</Text>
        <Text style={estilo.subtitulo}>Cardápio do dia</Text>
      </View>
    </ImageBackground>
  )
}