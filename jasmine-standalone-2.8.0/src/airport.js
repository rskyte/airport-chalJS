function Airport () {
  this.planes = []

}

Airport.prototype.land = function(plane) {
  this.planes.push(plane)
  return plane
}

Airport.prototype.takeoff = function(plane) {
  this.planes.pop(plane)
}
