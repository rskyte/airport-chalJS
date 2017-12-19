function Airport(weather = new Weather()) {
  this.planes = []
  this.weather = weather
}

Airport.prototype.land = function(plane) {
  this.planes.push(plane)
  return plane
}

Airport.prototype.takeoff = function(plane) {
  if (this.weather.isStormy())
    throw new Error("Too stormy to takeoff!")
  this.planes.pop(plane)
}
