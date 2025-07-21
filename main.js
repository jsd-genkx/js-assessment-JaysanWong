"use strict";
// JS Assessment: Find Your Hat //
import promptSync from "prompt-sync";
import clear from "clear-screen";

const prompt = promptSync({ sigint: true });


const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
	constructor(field = [[]]) {
		this.field = field;

		// Replace with your own code //
		// Set the home position at (0, 0) before the game starts
		this.positionRow = 0;
		this.positionCol = 0;
		this.field[this.positionRow][this.positionCol] = pathCharacter;
	}

	// Print field //
	print() {
		clear();

		// Replace with your own code //
		for (let r= 0; r < this.field.length; r++) {
			// console.log(r);
			let row = "";
			// console.log(row);
			for (let c = 0; c < this.field[r].length; c++) 
				{row += this.field[r][c];}
				console.log(this.field[r]);
		}
		// console.log(this.field); // Please REMOVE this line before you start your code!
	}

	// Your Code //
	move(direction) {
		if (direction === "l") {
			this.moveLeft();
		}
		else if (direction === "r") {
			this.moveRight();}
		else if (direction === "u") {
			this.moveUp();
		}
		else if (direction === "d") {
			this.moveDown();
		}
		else {console.log("Please input 'u', 'd', 'l', 'r', only.");}
	}

	moveLeft() {this.positionCol--;}
	moveRight() {this.positionCol++;}
	moveUp() {this.positionRow--;}
	moveDown() {this.positionRow++;}
	
				// move(direction) {
	// 	// Replace with your own code //
	// 	let newRow = this.positionRow;
	// 	let newCol = this.positionCol;

	// 	switch (direction) {
	// 		case "u": // Up
	// 			newRow--;
	// 			break;
	// 		case "d": // Down
	// 			newRow++;
	// 			break;
	// 		case "l": // Left
	// 			newCol--;
	// 			break;
	// 		case "r": // Right
	// 			newCol++;
	// 			break;
	// 		default:
	// 			console.log("Please input 'u', 'd', 'l', 'r', only.");
	// 			return;
	// 	}

	// 	if (this.isValidMove(newRow, newCol)) {
	// 		this.field[this.positionRow][this.positionCol] = pathCharacter; // Mark old position
	// 		this.positionRow = newRow;
	// 		this.positionCol = newCol;
	// 		this.field[this.positionRow][this.positionCol] = pathCharacter; // Mark new position
	// 	} else {
	// 		console.log("You can't move there!");
	// 	}
		
		// this.print();
		
	}


// Game Mode ON
// Remark: Code example below should be deleted and use your own code.
const newGame = new Field([
	["░", "░", "O"],
	["░", "O", "░"],
	["░", "^", "░"],
]);
newGame.print();
