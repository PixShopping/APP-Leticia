function logTestando() {
  localStorage.setItem('notificacao', 'true');
}

// Configurar um loop que executa logTestando a cada 2 segundos
setInterval(logTestando, 2000);
