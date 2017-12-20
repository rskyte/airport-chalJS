describe("Plane", function(){
  var plane

  beforeEach(function() {
    plane = new Plane();
  })
  it("should be flying when it is taken off", function() {
    plane.takeoff()
    expect(plane.isFlying).toBeTruthy()
  })

  it("should not be flying when it is landed", function() {
    plane.takeoff()
    plane.land()
    expect(plane.isFlying).toBeFalsy()
  })

  it("cannot land if already landed", function() {
    plane.takeoff()
    plane.land()
    var secondLanding = function() {
      plane.land()
    }
    expect(secondLanding).toThrowError("This plane has already landed!")
  })

  it("cannot take off if already in the air", function() {
    plane.takeoff()
    var secondTakeoff = function() {
      plane.takeoff()
    }
    expect(secondTakeoff).toThrowError("This plane is already flying!")
  })
})
