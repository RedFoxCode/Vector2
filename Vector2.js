class Vector2 {
	constructor(x, y) {
		this.setPos(x, y);
	}
	setPos(x, y) {
		this.x = x; 
		this.y = y;
	}
	move(x, y) {
		this.setPos(this.x + x, this.y + y);
	}
	smoothMove(x, y, time) {
		let self = this;
		let last = 0;
		let delta = 0;
		let me = Math.floor(Math.random() * 10000);

		const startX = this.x;
		const startY = this.y;
		const endX = this.x + x;
		const endY = this.y + y;
		const speedX = x / time;
		const speedY = y / time;

		this._reqAnimation = me;

		function once() {
			if (self._reqAnimation !== me) return;

			delta = Date.now() - last;
			last = Date.now();

			if (
				(Math.abs(self.x - endX) < 2)
				&& (Math.abs(self.x - endX) < 2)
			) return;

			let dx = speedX * delta;
			let dy = speedY * delta;

			if (dx > 0 ? self.x + dx >= endX : endX >= self.x + dx) dx = endX - self.x;
			if (dy > 0 ? self.y + dy >= endY : endY >= self.y + dy) dy = endY - self.y;

			self.move(dx, dy);

			setTimeout(() => once(), 1);
		}

		last = Date.now() - 4;

		once();
	}
	smoothMoveAbsolute(x, y, time) {
		this.smoothMove(x - this.x, y - this.y, time);
	}
}