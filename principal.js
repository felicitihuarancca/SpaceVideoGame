window.PhaserGlobal = {
    disableWebAudio: true
};

var juego = new Phaser.Game(400, 540, Phaser.CANVAS, 'bloque_juego');

//Agregando los estados del juego
juego.state.add('Juego', Juego);
juego.state.add('Juego2', Juego2);
juego.state.add('Terminado', Terminado);
juego.state.add('Ganado', Ganado);

//Inicializamos juego en el estado Juego
juego.state.start('Juego');