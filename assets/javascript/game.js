$(document).ready(function(){

	var goodCurrent = 0;
	var badCurrent = 0;
	var header = $("<h2>");
	var currentGoodguy = "";
	var currentBadguy = "";
	var baseAtk = "";

	function fighter(id, name, hp, atk, catk, type, pic){
		this.id = id;
		this.name = name;
		this.hp = hp;
		this.atk = atk;
		this.catk = catk;
		this.type = type;
		this.pic = pic;
	}

		

	fighter.prototype.populate = function() {

		var newImg = $("<img>");
		newImg.attr("src", this.pic);
		newImg.attr("id", this.id);
		newImg.attr("class", "fighterBtn");

		var newDiv = $("<div>");
		newDiv.html("<h2>" + this.name + "<h2>");
		newDiv.append("<h2>" + "Attack Power: " + this.atk + "<h2>");
		newDiv.append("<h2 id=\"" + this.id + "Hp\">" + "Health: " + this.hp + "<h2>");
		newDiv.attr("class", "fighterLabel");
		newDiv.attr("id", this.id + "Label");

		
		if(this.type === 0){
			$("#goodguys").append(newImg);
			$("#goodguys").append(newDiv);
			
		}
		else{
			$("#badguys").append(newImg);
			$("#badguys").append(newDiv);
			
		}
	}

	fighter.prototype.moveToFight = function(){
		console.log("hey got it " + this.id);
		if(this.type === 0 && goodCurrent === 0){
			$('#' + this.id).detach().appendTo("#goodfighter");
			$('#' + this.id + "Label").detach().appendTo("#goodfighter");

			$("#goodHp").html(this.hp);
			currentGoodguy = this.id;
			baseAtk = this.atk;
			goodCurrent = 1;
		}else if(this.type === 1 && badCurrent === 0){
			$('#' + this.id).detach().appendTo("#badfighter");
			$('#' + this.id + "Label").detach().appendTo("#badfighter");
			$("#badHp").html(this.hp);
			currentBadguy = this.id;
			badCurrent = 1;
		}
	}

	function attack(){

		if(goodCurrent === 1 && badCurrent === 1){
			eval(currentGoodguy).hp -= eval(currentBadguy).atk;
			eval(currentBadguy).hp -= eval(currentGoodguy).atk;
			eval(currentGoodguy).atk += baseAtk;

			console.log(eval(currentGoodguy).hp);
			if(eval(currentBadguy).hp <= 0){
				$("#badfighter").empty();
				badCurrent = 0;
			}else if(eval(currentGoodguy).hp <= 0){
				$("#goodfighter").empty();
				$("#goodfighter").html("<h2>You Lose...<h2>");

			}else{
				$("#" + eval(currentGoodguy).id + "Hp").html("Health: " + eval(currentGoodguy).hp);
				$("#" + eval(currentBadguy).id + "Hp").html("Health: " + eval(currentBadguy).hp);
			}
			
		}
	}
	
	var rick = new fighter("rick", "Rick Sanchez", 200, 6, 4, 0, "assets/images/rick.png");
	var bird = new fighter("bird", "Bird Person", 150, 10, 6, 0, "assets/images/bird.jpg");
	var morty = new fighter("morty", "Morty Smith", 300, 3, 2, 0, "assets/images/morty.jpg");	
	var icet = new fighter("icet", "Ice-T", 140, 12, 8, 0, "assets/images/icet.jpg");	
	var abradolf = new fighter("abradolf", "Adbradolf Lincler", 234, 5, 3, 0, "assets/images/linc.jpg");

	var blimblam = new fighter("blimblam", "Blim Blam", 280, 4, 2, 1, "assets/images/blimblam.png");
	var fart = new fighter("fart", "Fart", 180, 50, 6, 1, "assets/images/fart.jpg");
	var scary = new fighter("scary", "Scary Terry", 160, 7, 5, 1, "assets/images/scary.jpg");
	var needfull = new fighter("needfull", "Mr. Lucius Needful", 200, 6, 5, 1, "assets/images/needfull.png");
	var nebulon = new fighter("nebulon", "Prince Nebulon", 220, 4, 3, 1, "assets/images/nebulon.png");


	rick.populate();
	bird.populate();
	morty.populate();
	icet.populate();
	abradolf.populate();
	blimblam.populate();
	fart.populate();
	scary.populate();
	needfull.populate();
	nebulon.populate();
		


	$(".fighterBtn").on("click",function(){
		
		console.log(eval(this.id).name);
		(eval(this.id)).moveToFight();
	})

	$("#attackBtn").on("click",function(){
		attack();

	})

	$("#resetBtn").on("click",function(){
		location.reload();
	})

	
			
	
})