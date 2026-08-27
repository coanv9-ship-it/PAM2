import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
  banner: {
    width: '100%',
    height: 180,
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.45)',
    padding: 16,
  },
  titulo: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
  },
  subtitulo: {
    fontSize: 14,
    color: '#f0e6d6',
    marginTop: 2,
  }
});

export default estilo;