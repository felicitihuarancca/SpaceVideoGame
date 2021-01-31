var gameOver;

var Terminado ={
	preload: function () {

	},

	create: function(){
		juego.stage.backgroundColor="#990000";

		juego.add.text(100,250,"GAME OVER ", {font:"30px Arial", fill: "#FFF"});
	}

};