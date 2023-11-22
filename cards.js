let container = document.querySelector(".container")
for (var i = 1; i < 26; i++) {
		var cell = document.createElement("div");
		cell.classList.add("cell");
		container.appendChild(cell);
	}

