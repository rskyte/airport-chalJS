
describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function () {
    airport = new Airport();
    plane = new Plane();
  });

it("should allow planes to land", function() {
  expect(airport.land(plane)).toEqual(plane)
})
})
