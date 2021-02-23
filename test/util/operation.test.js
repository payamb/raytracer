import { expect } from 'chai';
import { isEqual, Add, Subtract, Negate, Multiple, Magnitude, Normalize, DotProduct, CrossProduct } from '../../src/util/operation';
import { tuple, point, vector } from '../../src/util/tuple';

describe('Operations', () => {
  it('Equal', () => {
    const tupleA = tuple(3, 2, 1, 0);
    const tupleB = tuple(3.000009, 2, 1.0000001, 0);
    expect(isEqual(tupleA, tupleB)).to.be.true;
  });
  it('Add', () => {
    const tupleA = tuple(3, -2, 5, 1);
    const tupleB = tuple(-2, 3, 1, 0);
    const result = Add(tupleA, tupleB);

    expect(isEqual(result, tuple(1, 1, 6, 1))).to.be.true;
  });
  it('Negate', () => {
    const input = tuple(1, -2, 3, -4);
    expect(Negate(input)).to.be.eqls(tuple(-1, 2, -3, 4));
  });
  describe('Subtract', () => {
    it('Subtract vector from a point', () => {
      const tupleA = point(3, 2, 1);
      const tupleB = point(5, 6, 7);
      const result = Subtract(tupleA, tupleB);

      expect(isEqual(result, vector(-2, -4, -6))).to.be.true;
    });
    it('Subtract two vectors', () => {
      const tupleA = vector(3, 2, 1);
      const tupleB = vector(5, 6, 7);
      const result = Subtract(tupleA, tupleB);

      expect(isEqual(result, vector(-2, -4, -6))).to.be.true;
    });
  });
  describe('Multiplication', () => {
    it('Multiplying a tuple by a scalar', () => {
      const input = tuple(1, -2, 3, -4);
      const result = Multiple(input, 3.5);

      expect(isEqual(result, tuple(3.5, -7, 10.5, -14))).to.be.true;
    });
    it('Multiplying a tuple by a fraction', () => {
      const input = tuple(1, -2, 3, -4);
      const result = Multiple(input, 0.5);

      expect(isEqual(result, tuple(0.5, -1, 1.5, -2))).to.be.true;
    });
  });
  describe('Magnitude', () => {
    it('Compute magnitude of vector(0, 1, 0)', () => {
      const input = vector(0, 1, 0);

      expect(Magnitude(input)).to.be.eq(1);
    });
    it('Compute magnitude of vector(1, 2, 3)', () => {
      const input = vector(1, 2, 3);

      expect(Magnitude(input)).to.be.eq(Math.sqrt(14));
    });
    it('Compute magnitude of vector(-1, -2, -3)', () => {
      const input = vector(1, 2, 3);

      expect(Magnitude(input)).to.be.eq(Math.sqrt(14));
    });
  });
  describe('Normalize', () => {
    it('Normalizing vector (4, 0, 0)', () => {
      const input = vector(4, 0, 0);

      expect(Normalize(input)).to.be.eqls(vector(1, 0, 0));
    });
    it('Normalizing vector (1, 2, 3)', () => {
      const input = vector(1, 2, 3);

      expect(isEqual(Normalize(input), vector(0.26726, 0.53452, 0.80178))).to.be.true;
    });
  });
  it('Dot Product', () => {
    const tupleA = vector(1, 2, 3);
    const tupleB = vector(2, 3, 4);

    expect(DotProduct(tupleA, tupleB)).to.be.eq(20);
  });
  it('Cross Product', () => {
    const tupleA = vector(1, 2, 3);
    const tupleB = vector(2, 3, 4);

    expect(CrossProduct(tupleA, tupleB)).to.be.eqls(vector(-1, 2, -1));
  });
});
