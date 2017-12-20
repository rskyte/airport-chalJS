function Plane() {
  this.isFlying = false
}
Plane.prototype.land = function() {
  if(this.isFlying === false)
    throw new Error("This plane has already landed!")
  this.isFlying = false
}
Plane.prototype.takeoff = function() {
  if(this.isFlying === true)
    throw new Error("This plane is already flying!")
  this.isFlying = true
}
