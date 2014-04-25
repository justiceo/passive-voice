var passive = require('../passive');

describe('passive', function () {

  it('should detect passive voice', function () {
    expect(passive('He was judged.')).toEqual([{ index: 3, offset: 10 }]);
  });

  it('should detect passive voice with irregular verbs', function () {
    expect(passive('She was given an apple.')).toEqual([{ index: 4, offset: 9 }]);
  });

});
