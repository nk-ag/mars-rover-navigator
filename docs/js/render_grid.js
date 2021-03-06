jQuery(document).ready(function () {
	grid = document.getElementById("grid");
	ctx = grid.getContext("2d");
	ctx.lineWidth = 1;
	ctx.strokeStyle = "black";
	ctx.translate(0.5, 0.5);
	// grid_area=document.getElementById("grid-area");
	// console.log("Grid Area : width = "+grid_area.offsetWidth+" , height = "+grid_area.offsetHeight);
	// console.log("Grid : width = "+grid.width+" , height = "+grid.height);
	// for (x = 0; x < 50; x++) {
	// 	ctx.beginPath();
	// 	ctx.moveTo(0, x * sz);
	// 	ctx.lineTo(grid.width, x * sz);
	// 	ctx.stroke();
	// }
	// for (x = 0; x < 50; x++) {
	// 	ctx.beginPath();
	// 	ctx.moveTo(x * sz, 0);
	// 	ctx.lineTo(x * sz, grid.height);
	// 	ctx.stroke();
	// }
	for (x = 0; x < rows; x++) {
		for (y = 0; y < cols; y++) {
			ctx.strokeRect(x * sz, y * sz, sz, sz);
		}
	}


	img = new Image();
	img.onload = function () {
		grid.addEventListener("dragstart", function (e) {

			e.dataTransfer.setDragImage(img, -2000, 2000);

		}, false);

	}
	img.src = "http://placehold.it/75/ffffff/ffffff?text=f";
	img.setAttribute('width', '10px');
	img.setAttribute('height', '10px');
});

function getXY(pixelx, pixely) {
	grid = document.getElementById("grid");
	grid_area = document.getElementById("grid-area");
	divide_by = sz * grid_area.offsetHeight / grid.height;
	X = pixelx / divide_by;
	Y = pixely / divide_by;
	X = ~~X;
	Y = ~~Y;
	return [X, Y];
}

function markStartEnd(event) {
	// console.log(event);
	var checked = document.querySelector('input[name="blocktype"]:checked').value;
	if (!(checked == "start" || checked == "end")) {
		return;
	}
	var x = event.clientX, y = event.clientY;
	coord = getXY(x, y);
	x = coord[0];
	y = coord[1];
	// console.log(x,y);
	grid = document.getElementById("grid");
	ctx = grid.getContext("2d");
	if (checked == "start") {
		if (startPos[0] != -1) {
			matrix[startPos[0]][startPos[1]] = '.';
			ctx.clearRect(startPos[0] * sz, startPos[1] * sz, sz, sz);
			ctx.strokeRect(startPos[0] * sz, startPos[1] * sz, sz, sz);
		}
		startPos = [x, y];
		matrix[x][y] = 'S';
		ctx.fillStyle = "#65DE17";
		ctx.fillRect(x * sz, y * sz, sz, sz);
	} else if (checked === "end") {
		if (endPos[0] != -1) {
			matrix[endPos[0]][endPos[1]] = '.';
			ctx.clearRect(endPos[0] * sz, endPos[1] * sz, sz, sz);
			ctx.strokeRect(endPos[0] * sz, endPos[1] * sz, sz, sz);
		}
		endPos = [x, y];
		matrix[x][y] = 'E';
		ctx.fillStyle = "#EE4523";
		ctx.fillRect(x * sz, y * sz, sz, sz);
	}
}


function markWall(event) {
	var checked = document.querySelector('input[name="blocktype"]:checked').value;
	if (!(checked == "wall1" || checked == "wall2")) {
		return;
	}
	var x = event.clientX, y = event.clientY;
	coord = getXY(x, y);
	x = coord[0];
	y = coord[1];
	if (x === 0 && y === 0) {
		return;
	}
	if (matrix[x][y] == 'S' || matrix[x][y] == 'E') {
		return;
	}
	grid = document.getElementById("grid");
	ctx = grid.getContext("2d");
	if (checked == "wall1") {
		matrix[x][y] = '#';
		ctx.fillStyle = "black";
		ctx.fillRect(x * sz, y * sz, sz, sz);
	} else if (checked == "wall2") {
		matrix[x][y] = '*';
		ctx.fillStyle = "#808080";
		ctx.fillRect(x * sz, y * sz, sz, sz);
	}
}

function resetGrid(event) {
	grid = document.getElementById("grid");
	ctx = grid.getContext("2d");
	ctx.strokeStyle = "black";
	ctx.clearRect(0, 0, grid.width, grid.height);
	for (x = 0; x < rows; x++) {
		for (y = 0; y < cols; y++) {
			ctx.strokeRect(x * sz, y * sz, sz, sz);
		}
	}
}



function fun1() {
	var var2 = document.querySelector('input[name="blocktype"]:checked').value;
	//	console.log(var2);
}
