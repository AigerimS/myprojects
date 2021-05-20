$(document).ready(function () {
	blue = document.createElement('audio');
	blue.setAttribute('src', 'sounds/blue.mp3');

	red = document.createElement('audio');
	red.setAttribute('src', 'sounds/red.mp3');

	green = document.createElement('audio');
	green.setAttribute('src', 'sounds/green.mp3');

	yellow = document.createElement('audio');
	yellow.setAttribute('src', 'sounds/yellow.mp3');

	var start = true;
	
	function lose() {
		$('body').addClass('lose');
		$('h1').html('You are a loser');
		lvl1 = false; lvl2 = false; lvl3 = false; lvl4 = false; lvl5 = false;

	}
	function restartFunction() {
		$('body').addClass('restart');
		$('h1').html('Restart the game');
		lvl1 = false; lvl2 = false; lvl3 = false; lvl4 = false; lvl5 = false;
	}
	function win() {
		$('body').addClass('win');
		$('h1').html('You are the champion');
		lvl1 = false; lvl2 = false; lvl3 = false; lvl4 = false; lvl5 = false;
	}

	$('#cube1').on('click', function () {
		green.play();
		cube1();
		$('#cube1').css({ 'background-image': 'url(picture/\green.png\')' });
		setTimeout(function () { $('#cube1').css({ 'background-image': 'url(\'midorima.jpg\')' }); }, 100);
	});
	$('#cube2').on('click', function () {
		red.play();
		cube2();
		$('#cube2').css({ 'background-image': 'url(picture/\'red.jpg\')' });
		setTimeout(function () { $('#cube2').css({ 'background-image': 'url(\'akashi.jpg\')' }); }, 100);
	});
	$('#cube3').on('click', function () {
		yellow.play();
		cube3();
		$('#cube3').css({ 'background-image': 'url(picture/\'yellow.png\')' });
		setTimeout(function () { $('#cube3').css({ 'background-image': 'url(\'kise.png\')' }); }, 100);
	});
	$('#cube4').on('click', function () {
		blue.play();
		cube4();
		$('#cube4').css({ 'background-image': 'url(picture/\'blue.jpg\')' });
		setTimeout(function () { $('#cube4').css({ 'background-image': 'url(\'kuroko.jpg\'' }); }, 100);
	});



	$('body').keypress(function (e) {
		if (e.keyCode = 13 || e.keyCode==97) { level1(); start = false; }
		else { level1(); restart = false; restartFunction(); }
	});

	var myAns = 0;

	var saved1 = 1;
	var lvl1 = true;
	function level1() {
		$('h1').html('Level 1');
		cube1();
		$('#cube1').on('click', function () {
			if (lvl1) {
				if (saved1 == 1) {

					level2(); lvl1 = false;
				} else lose();
			}


		});
		$('#cube2').on('click', function () {
			if (lvl1) {
				lose();
			}


		});
		$('#cube3').on('click', function () {
			if (lvl1) {
				lose();
			}


		});
		$('#cube4').on('click', function () {
			if (lvl1) {
				lose();
			}


		});
	}

	var lvl2 = true;
	var saved2 = [1, 2, 2];
	function level2() {
		$('h1').html('Level 2');
		setTimeout(cube2, 500);
		setTimeout(cube2, 1500);


		$('#cube1').on('click', function () {
			if (lvl2) {
				if (saved2[0] == 1) {
					saved2.shift();
					if (saved2.length == 0) { level3(); lvl2 = false; }
				} else lose();
			}
		});
		$('#cube2').on('click', function () {
			if (lvl2) {
				if (saved2[0] == 2) {
					saved2.shift();
					if (saved2.length == 0) { level3(); lvl2 = false; }
				} else lose();
			}
		});
		$('#cube3').on('click', function () {
			if (lvl2) {
				if (saved2[0] == 3) {
					saved2.shift();
					if (saved2.length == 0) { level3(); lvl2 = false; }
				} else lose();
			}
		});
		$('#cube4').on('click', function () {
			if (lvl2) {
				if (saved2[0] == 4) {
					saved2.shift();
					if (saved2.length == 0) { level3(); lvl2 = false; }
				} else lose();
			}
		});
	}





	var lvl3 = true;
	var saved3 = [1, 2, 2, 3];
	function level3() {
		$('h1').html('Level 3');
		setTimeout(cube3, 500);


		$('#cube1').on('click', function () {
			if (lvl3) {
				if (saved3[0] == 1) {
					saved3.shift();
					if (saved3.length == 0) { level4(); lvl3 = false; }
				} else lose();
			}


		});
		$('#cube2').on('click', function () {
			if (lvl3) {
				if (saved3[0] == 2) {
					saved3.shift();
					if (saved3.length == 0) { level4(); lvl3 = false; }
				} else lose();
			}


		});
		$('#cube3').on('click', function () {
			if (lvl3) {
				if (saved3[0] == 3) {
					saved3.shift();
					if (saved3.length == 0) { level4(); lvl3 = false; }
				} else lose();
			}


		});
		$('#cube4').on('click', function () {
			if (lvl3) {
				if (saved3[0] == 4) {
					saved3.shift();
					if (saved3.length == 0) { level4(); lvl3 = false; }
				} else lose();
			}


		});

	}

	var lvl4 = true;
	var saved4 = [1, 2, 2, 3, 3, 4];
	function level4() {
		$('h1').html('Level 4');
		setTimeout(cube3, 1000);
		setTimeout(cube4, 1500);

		$('#cube1').on('click', function () {
			if (lvl4) {
				if (saved4[0] == 1) {
					saved4.shift();
					if (saved4.length == 0) { level5(); lvl4 = false; }
				} else lose();
			}
		});
		$('#cube2').on('click', function () {
			if (lvl4) {
				if (saved4[0] == 2) {
					saved4.shift();

					if (saved4.length == 0) { level5(); lvl4 = false; }
				} else lose();
			}
		});
		$('#cube3').on('click', function () {
			if (lvl4) {
				if (saved4[0] == 3) {
					saved4.shift();
					if (saved4.length == 0) { level5(); lvl4 = false; }
				} else lose();
			}
		});
		$('#cube4').on('click', function () {
			if (lvl4) {
				if (saved4[0] == 4) {
					saved4.shift();
					if (saved4.length == 0) { level5(); lvl4 = false; }
				} else lose();
			}
		});

	}

	var lvl5 = true;
	var saved5 = [1, 2, 2, 3, 3, 4, 1, 4];
	function level5() {
		$('h1').html('Level 5');
		setTimeout(cube1, 500);
		setTimeout(cube4, 1000);

		$('#cube1').on('click', function () {
			if (lvl5) {
				if (saved5[0] == 1) {
					saved5.shift();
					if (saved5.length == 0) { level6(); lvl5 = false; }
				} else lose();
			}
		});
		$('#cube2').on('click', function () {
			if (lvl5) {
				if (saved5[0] == 2) {
					saved5.shift();
					if (saved5.length == 0) { level6(); lvl5 = false; }
				} else lose();
			}
		});
		$('#cube3').on('click', function () {
			if (lvl5) {
				if (saved5[0] == 3) {
					saved5.shift();
					if (saved5.length == 0) { level6(); lvl5 = false; }
				} else lose();
			}
		});
		$('#cube4').on('click', function () {
			if (lvl5) {
				if (saved5[0] == 4) {
					saved5.shift();
					if (saved5.length == 0) { level6(); lvl5 = false; }
				} else lose();
			}
		});
	}

	var lvl6 = true;
	var saved6 = [1, 2, 2, 3, 3, 4, 1, 4, 2, 3];
	function level6() {
		$('h1').html('Level 6');
		setTimeout(cube2, 500);
		setTimeout(cube3, 1000);

		$('#cube1').on('click', function () {
			if (lvl6) {
				if (saved6[0] == 1) {
					saved6.shift();
					if (saved6.length == 0) { level7(); lvl6 = false; }
				} else lose();
			}
		});
		$('#cube2').on('click', function () {
			if (lvl6) {
				if (saved6[0] == 2) {
					saved6.shift();
					if (saved6.length == 0) { level7(); lvl6 = false; }
				} else lose();
			}
		});
		$('#cube3').on('click', function () {
			if (lvl6) {
				if (saved6[0] == 3) {
					saved6.shift();
					if (saved6.length == 0) { level7(); lvl6 = false; }
				} else lose();
			}
		});
		$('#cube4').on('click', function () {
			if (lvl6) {
				if (saved6[0] == 4) {
					saved6.shift();
					if (saved6.length == 0) { level7(); lvl6 = false; }
				} else lose();
			}
		});
	}

	var lvl7 = true;
	var saved7 = [1, 2, 2, 3, 3, 4, 1, 4, 2, 3, 2];

	function level7() {
		$('h1').html('Level 7');
		setTimeout(cube2, 500);

		$('#cube1').on('click', function () {
			if (lvl7) {
				if (saved7[0] == 1) {
					saved7.shift();
					if (saved7.length == 0) { level8(); lvl7 = false; }
				} else lose();
			}
		});
		$('#cube2').on('click', function () {
			if (lvl7) {
				if (saved7[0] == 2) {
					saved7.shift();
					if (saved7.length == 0) { level8(); lvl7 = false; }
				} else lose();
			}
		});
		$('#cube3').on('click', function () {
			if (lvl7) {
				if (saved7[0] == 3) {
					saved7.shift();
					if (saved7.length == 0) { level8(); lvl7 = false; }
				} else lose();
			}
		});
		$('#cube4').on('click', function () {
			if (lvl7) {
				if (saved7[0] == 4) {
					saved7.shift();
					if (saved7.length == 0) { level8(); lvl7 = false; }
				} else lose();
			}
		});
	}

	var lvl8 = true;
	var saved8 = [1, 2, 2, 3, 3, 4, 1, 4, 2, 3, 2, 4];

	function level8() {
		$('h1').html('Level 8');
		setTimeout(cube4, 500);

		$('#cube1').on('click', function () {
			if (lvl8) {
				if (saved8[0] == 1) {
					saved8.shift();
					if (saved8.length == 0) { level9(); lvl8 = false; }
				} else lose();
			}
		});
		$('#cube2').on('click', function () {
			if (lvl8) {
				if (saved8[0] == 2) {
					saved8.shift();
					if (saved8.length == 0) { level9(); lvl8 = false; }
				} else lose();
			}
		});
		$('#cube3').on('click', function () {
			if (lvl8) {
				if (saved8[0] == 3) {
					saved8.shift();
					if (saved8.length == 0) { level9(); lvl8 = false; }
				} else lose();
			}
		});
		$('#cube4').on('click', function () {
			if (lvl8) {
				if (saved8[0] == 4) {
					saved8.shift();
					if (saved8.length == 0) { level9(); lvl8 = false; }
				} else lose();
			}
		});
	}

	var lvl9 = true;
	var saved9 = [1, 2, 2, 3, 3, 4, 1, 4, 2, 3, 2, 4, 1, 4];

	function level9() {
		$('h1').html('Level 9');
		setTimeout(cube1, 500);
		setTimeout(cube4, 1000);

		$('#cube1').on('click', function () {
			if (lvl9) {
				if (saved9[0] == 1) {
					saved9.shift();
					if (saved9.length == 0) { level10(); lvl9 = false; }
				} else lose();
			}
		});
		$('#cube2').on('click', function () {
			if (lvl9) {
				if (saved9[0] == 2) {
					saved9.shift();
					if (saved9.length == 0) { level10(); lvl9 = false; }
				} else lose();
			}
		});
		$('#cube3').on('click', function () {
			if (lvl9) {
				if (saved9[0] == 3) {
					saved9.shift();
					if (saved9.length == 0) { level10(); lvl9 = false; }
				} else lose();
			}
		});
		$('#cube4').on('click', function () {
			if (lvl9) {
				if (saved9[0] == 4) {
					saved9.shift();
					if (saved9.length == 0) { level10(); lvl9 = false; }
				} else lose();
			}
		});
	}

	var lvl10 = true;
	var saved10 = [1, 2, 2, 3, 3, 4, 1, 4, 2, 3, 2, 4, 1, 4, 2, 1];

	function level10() {
		$('h1').html('Level 10');
		setTimeout(cube2, 500);
		setTimeout(cube1, 1000);

		$('#cube1').on('click', function () {
			if (lvl10) {
				if (saved10[0] == 1) {
					saved10.shift();
					if (saved10.length == 0) { win(); lvl10 = false; }
				} else lose();
			}
		});
		$('#cube2').on('click', function () {
			if (lvl10) {
				if (saved10[0] == 2) {
					saved10.shift();
					if (saved10.length == 0) { win(); lvl10 = false; }
				} else lose();
			}
		});
		$('#cube3').on('click', function () {
			if (lvl10) {
				if (saved10[0] == 3) {
					saved10.shift();
					if (saved10.length == 0) { win(); lvl10 = false; }
				} else lose();
			}
		});
		$('#cube4').on('click', function () {
			if (lvl10) {
				if (saved10[0] == 4) {
					saved10.shift();
					if (saved10.length == 0) { win(); lvl10 = false; }
				} else lose();
			}
		});
	}

	function cube1() {
		green.play();
		$('#cube1').css({ 'background-image': 'url(\'green.png\')' });
		setTimeout(function () { $('#cube1').css({ 'background-image': 'url(\'midorima.jpg\')' }); }, 500);
	}

	function cube2() {
		red.play();
		$('#cube2').css({ 'background-image': 'url(\'red.jpg\')' });
		setTimeout(function () { $('#cube2').css({ 'background-image': 'url(\'akashi.jpg\')' }); }, 500);
	}
	function cube3() {
		yellow.play();
		$('#cube3').css({ 'background-image': 'url(\'yellow.png\')' });
		setTimeout(function () { $('#cube3').css({ 'background-image': 'url(\'kise.png\')' }); }, 500);
	}
	function cube4() {
		blue.play();
		$('#cube4').css({ 'background-image': 'url(\'blue.jpg\')' });
		setTimeout(function () { $('#cube4').css({ 'background-image': 'url(\'kuroko.jpg\')' }); }, 500);
	}
});

