DEFAULT_CAPACITY = 20

function Airport(weather = new Weather(), capacity = DEFAULT_CAPACITY) {
  this.planes = []
  this.weather = weather
  this.capacity = capacity
}

Airport.prototype.land = function(plane) {
  if (this.capacity <= this.planes.length)
    throw new Error("Airport too full!")
  this.planes.push(plane)
  plane.land
  return plane
}

Airport.prototype.takeoff = function(plane) {
  if (this.weather.isStormy())
    throw new Error("Too stormy to takeoff!")
  plane.takeoff
  this.planes.pop(plane)
}
