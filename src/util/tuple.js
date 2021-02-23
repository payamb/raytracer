const tuple = (x, y, z, w = 1.0) => {
  return {
    x: x,
    y: y,
    z: z,
    w: w
  };
};

const point = (x, y, z) => {
  return tuple(x, y, z, 1.0);
};

const vector = (x, y, z) => {
  return tuple(x, y, z, 0.0);
};

export {
  tuple,
  point,
  vector
};
