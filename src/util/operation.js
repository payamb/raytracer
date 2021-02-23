const isEqual = (a, b) => {
  const Epsilon = 0.00001;

  const enteries = Object.entries(a);
  if (enteries.length < 3) {
    return false;
  }

  for (const [key, value] of enteries) {
    if (b[key] === undefined || Math.abs(value - b[key]) > Epsilon) {
      return false;
    }
  }

  return true;
};

const Add = (a, b) => {
  const output = { x: 0, y: 0, z: 0, w: 0 };
  for (const [key, value] of Object.entries(a)) {
    if (b[key] === undefined) {
      throw new Error('Input tuples are invalid');
    }
    output[key] = value + b[key];
  }

  return output;
};

const Subtract = (a, b) => {
  const output = { x: 0, y: 0, z: 0, w: 0 };
  for (const [key, value] of Object.entries(a)) {
    if (b[key] === undefined) {
      throw new Error('Input tuples are invalid');
    }
    output[key] = value - b[key];
  }

  return output;
};

const Negate = (tuple) => {
  const output = { x: 0, y: 0, z: 0, w: 0 };
  for (const [key, value] of Object.entries(tuple)) {
    output[key] = -value;
  }

  return output;
};

const Multiple = (tuple, scale) => {
  const output = { x: 0, y: 0, z: 0, w: 0 };
  for (const [key, value] of Object.entries(tuple)) {
    output[key] = value * scale;
  }

  return output;
};

const Divide = (tuple, scale) => {
  const output = { x: 0, y: 0, z: 0, w: 0 };
  for (const [key, value] of Object.entries(tuple)) {
    output[key] = value / scale;
  }

  return output;
};

const Magnitude = (tuple) => {
  let output = 0;
  for (const [key, value] of Object.entries(tuple)) {
    output += Math.pow(value, 2);
  }

  return Math.sqrt(output);
};

const Normalize = (tuple) => {
  const output = { x: 0, y: 0, z: 0, w: 0 };
  for (const [key, value] of Object.entries(tuple)) {
    output[key] = value / Magnitude(tuple);
  }

  return output;
};

const DotProduct = (a, b) => {
  let output = 0;
  for (const [key, value] of Object.entries(a)) {
    if (b[key] === undefined) {
      throw new Error('Input tuples are invalid');
    }
    output += value * b[key];
  }

  return output;
};

const CrossProduct = (a, b) => {
  return {
    x: a.y * b.z - a.z * b.y,
    y: a.z * b.x - a.x * b.z,
    z: a.x * b.y - a.y * b.x,
    w: 0
  };
};

export {
  isEqual,
  Add,
  Subtract,
  Negate,
  Multiple,
  Divide,
  Magnitude,
  Normalize,
  DotProduct,
  CrossProduct
};
