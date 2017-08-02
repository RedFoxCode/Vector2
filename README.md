# Vector2

Vector2 class for javascript with animation feature.

# Usage

```javascript
const vector = new Vector2(100, 100); // x, y
vector.setPos(10, 10); // Change position to 10;10
vector.move(30, 30); // Move to 40;40
// Move to 90;90 using linear animation
// Notice: no callback when animation ends, and no animation step handler
vector.smoothMove(50, 50, 10000);
// Move to absolute coordinates smoothly
smoothMoveAbsolute(50, 50, 100);
```

# Example with canvas

![](/Example.gif)

```javascript
const canvas = document.getElementById("canvas");

w = canvas.width = 512;
h = canvas.height = 512;

let ctx = canvas.getContext("2d");

const vector = new Vector2(w / 2 - 10, h / 2 - 10);

ctx.shadowBlur = 15;
ctx.shadowColor = "#faa";
ctx.font = "bold 10px Arial";
ctx.textAlign = "center";

function draw() {
	ctx.fillStyle = "#111";
	ctx.fillRect(0, 0, w, h);
	ctx.fillStyle = "#000";
	ctx.fillRect(vector.x, vector.y, 20, 20);
	ctx.fillText(vector.x.toFixed(1) + ";" + vector.y.toFixed(1), vector.x + 10, vector.y - 5);
	
	requestAnimationFrame(draw);
}

function update() {
	const x = Math.floor(Math.random() * w);
	const y = Math.floor(Math.random() * h);
	const time = Math.floor(Math.random() * 900) + 100;

	vector.smoothMoveAbsolute(x, y, time);
}

draw();

setInterval(update, 1000);
```

# Notes

**Position error can variate from 0 to 2**

**Before using in production compile it with babel**

**No animation stop, start and step callbacks**