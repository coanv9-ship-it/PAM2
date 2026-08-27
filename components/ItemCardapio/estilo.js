import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 14,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },
  imagem: {
    width: 100,
    height: 100,
  },
  info: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  nome: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2b2b2b',
    marginBottom: 4,
  },
  descricao: {
    fontSize: 13,
    color: '#777',
    marginBottom: 8,
  },
  preco: {
    fontSize: 15,
    fontWeight: '700',
    color: '#c0392b',
  }
});

export default estilo;