
describe("Airport", function() {
  var airport;
  var plane;
  var plane2;

  beforeEach(function () {
    airport = new Airport();
    plane = new Plane();
    plane2 = new Plane();
  });

it("should allow planes to land", function() {
  expect(airport.land(plane)).toEqual(plane)
})

it("should save the plane in a list of planes", function() {
  airport.land(plane)
  expect(airport.planes).toEqual([plane])
})

it("allows specific planes to takeoff", function() {
  airport.land(plane)
  airport.land(plane2)
  airport.takeoff(plane)
  expect(airport.planes).toEqual([plane2])
})

})
