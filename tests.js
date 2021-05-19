const { expect } = require("chai");
const { binarySearchRecursive, binarySearchIterative } = require("./script");

describe("binary search recursive", () => {
  const testCase = [1, 3, 16, 22, 31, 33, 34];

  it("should find the proper values", () => {
    expect(binarySearchRecursive(testCase, 34)).equals(6);
    expect(binarySearchRecursive(testCase, 16)).equals(2);
    expect(binarySearchRecursive(testCase, 22)).equals(3);
    expect(binarySearchRecursive(testCase, 31)).equals(4);
  });
  it("should return null if the number is not found", () => {
    expect(binarySearchRecursive(testCase, 99)).equals(null);
  });
  it("should return null if no array is given", () => {
    expect(binarySearchRecursive()).equals(null);
  });
});
describe("binary search iterative", () => {
  const testCase = [1, 3, 16, 22, 31, 33, 34];

  it("should find the proper values", () => {
    expect(binarySearchIterative(testCase, 34)).equals(6);
    expect(binarySearchIterative(testCase, 16)).equals(2);
    expect(binarySearchIterative(testCase, 22)).equals(3);
    expect(binarySearchIterative(testCase, 31)).equals(4);
  });
  it("should return null if the number is not found", () => {
    expect(binarySearchIterative(testCase, 99)).equals(null);
  });
  it("should return null if no array is given", () => {
    expect(binarySearchIterative()).equals(null);
  });
});
