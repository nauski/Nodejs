var game = New Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');

game.state.add('Boot', Runner.Boot);
game.state.add('Preload', Runner.Boot);
game.state.start('Boot');