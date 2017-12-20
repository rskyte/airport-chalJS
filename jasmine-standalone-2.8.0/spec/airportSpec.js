
describe("Airport", function() {
  var airport;
  var plane;
  var weather;

  beforeEach(function () {
    plane = jasmine.createSpyObj('plane', ['land', 'takeoff'])
    weather = {
      isStormy: function() {
        return false
      }}
    airport = new Airport(weather);
  });

it("should allow planes to land", function() {
  expect(airport.land(plane)).toEqual(plane)
})

it("should save the plane in a list of planes", function() {
  airport.land(plane)
  expect(airport.planes).toEqual([plane])
})

it("allows planes to takeoff", function() {
  airport.land(plane)
  airport.takeoff(plane)
  expect(airport.planes.length).toEqual(0)
})

it("planes cannot take off when the weather is stormy", function() {
  airport.weather = {
    isStormy: function() {
      return true
    }}
  airport.land(plane)
  var stormyTakeoff = function() {
    airport.takeoff(plane);
  }
  expect(stormyTakeoff).toThrowError("Too stormy to takeoff!")
})

it("planes cannot land if airport is at max capacity", function() {
  for(i=0;i<20;i++) {
    airport.land(plane)
  }
  var fullLanding = function() {
    airport.land(plane);
  }
  expect(fullLanding).toThrowError("Airport too full!")
})

})
