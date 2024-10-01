export const formatearNumero = (numero) => {
  const numeroStr = numero.toString();

  if (numeroStr.length === 4) {
    return numeroStr.slice(0, 1) + '.' + numeroStr.slice(1);
  }

  return numero.toLocaleString('es-ES');
};