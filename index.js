const { createCanvas, loadImage } = require("canvas");
const fs = require("fs");

// Image parameters
const width = 800;
const height = 800;

// Create new canvas
const canvas = createCanvas(width, height);
const ctx = canvas.getContext("2d");

// Load background image
loadImage("image.jpg").then((image) => {
	// draw background image
	ctx.drawImage(image, 0, 0, width, height);

	// Set up font and text color
	ctx.font = "bold 100px Arial";
	ctx.fillStyle = "red";
	ctx.textAlign = "left";

	// Set up text
	const dynamicText = "Some Text";
	ctx.fillText(dynamicText, width / 2, height / 2);

	// Save final image
	const buffer = canvas.toBuffer("image/png");
	fs.writeFileSync("output_image.png", buffer);

	console.log("Image created successfully!");
});
