import React from 'react';
import { View, ScrollView } from 'react-native';
import Header from '../Header';
import CategoriaCardapio from '../CategoriaCardapio';
import estilo from './estilo';

export default function ListaCardapio() {
  const cardapio = [
    {
      nome: 'Espetinhos',
      itens: [
        {
          nome: 'Espetinho de Carne',
          descricao: 'Carne bovina grelhada na brasa',
          preco: '8,00',
          imagem: 'https://images.unsplash.com/photo-1767974968707-db3d448d4ef3?w=400&q=60&auto=format&fit=crop'
        },
        {
          nome: 'Espetinho de Frango',
          descricao: 'Frango temperado grelhado na brasa',
          preco: '7,00',
          imagem: 'https://images.unsplash.com/photo-1705359573325-f2006d5e459f?w=400&q=60&auto=format&fit=crop'
        },
        {
          nome: 'Linguiça Toscana',
          descricao: 'Linguiça artesanal grelhada',
          preco: '8,00',
          imagem: 'https://images.unsplash.com/photo-1544536542-85eec703819d?w=400&q=60&auto=format&fit=crop'
        },
      ]
    },
    {
      nome: 'Acompanhamentos',
      itens: [
        {
          nome: 'Pão de Alho',
          descricao: 'Pão de alho gratinado',
          preco: '6,00',
          imagem: 'https://images.unsplash.com/photo-1556008531-57e6eefc7be4?w=400&q=60&auto=format&fit=crop'
        },
        {
          nome: 'Batata Frita',
          descricao: 'Porção de batata frita crocante',
          preco: '5,00',
          imagem: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400&q=60&auto=format&fit=crop'
        },
      ]
    },
    {
      nome: 'Bebidas',
      itens: [
        {
          nome: 'Refrigerante Lata',
          descricao: 'Coca-Cola, Guaraná ou Fanta',
          preco: '6,00',
          imagem: 'https://images.unsplash.com/photo-1649930302517-a06774ae4d3f?w=400&q=60&auto=format&fit=crop'
        },
        {
          nome: 'Suco Natural',
          descricao: 'Laranja, limão ou maracujá',
          preco: '7,00',
          imagem: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&q=60&auto=format&fit=crop'
        },
      ]
    },
  ];

  return (
    <View style={estilo.container}>
      <ScrollView>
        <Header />

        <View style={estilo.conteudo}>
          {cardapio.map((categoria, index) => (
            <CategoriaCardapio
              key={index}
              nome={categoria.nome}
              itens={categoria.itens}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  )
}