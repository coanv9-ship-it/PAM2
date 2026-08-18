import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
  boxItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    marginBottom: 10
  },
  nomeItem: {
    fontSize: 18,
    color: '#204550',
    fontWeight: '600',
    marginBottom: 5
  },
  descricaoItem: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5
  },
  precoItem: {
    fontSize: 16,
    color: '#2e7d32',
    fontWeight: '700'
  }
});

export default estilo;
