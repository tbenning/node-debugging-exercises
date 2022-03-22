module.exports = function add(...myNumbers) {
  let counter = 0;
  myNumbers.forEach((number) => {
    if (typeof number === "string") {
      throw new Error("Cannot call add with string");
    }
    counter += number;
  });
  return counter;
};
