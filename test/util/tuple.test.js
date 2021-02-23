import { expect } from 'chai';
import { tuple, point, vector } from '../../src/util/tuple';

describe('Util', () => {
  it('Tuple', () => {
    expect(tuple(4.3, -4.2, 3.1, 1.0)).to.be.eqls({
      x: 4.3,
      y: -4.2,
      z: 3.1,
      w: 1.0
    });
  });
  it('Point', () => {
    expect(point(4, -4, 3)).to.be.eqls({
      x: 4,
      y: -4,
      z: 3,
      w: 1.0
    });
  });
  it('Vector', () => {
    expect(vector(4, -4, 3)).to.be.eqls({
      x: 4,
      y: -4,
      z: 3,
      w: 0
    });
  });
});
