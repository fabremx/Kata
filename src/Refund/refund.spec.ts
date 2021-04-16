import { Change, computeRefund } from "./refund";

describe("Refund", () => {
  it("should return 0-0-0 when refund is equal to 0", () => {
    expect(computeRefund(0)).toEqual(new Change(0, 0, 0));
  });

  it("should return undefined when refund is equal to 1", () => {
    expect(computeRefund(1)).toBe(undefined);
  });

  it("should return 2-0-0 when refund is equal to 2", () => {
    expect(computeRefund(2)).toEqual(new Change(1, 0, 0));
  });

  it("should return undefined when refund is equal to 3", () => {
    expect(computeRefund(3)).toEqual(undefined);
  });

  it("should return 2-0-0 when refund is equal to 4", () => {
    expect(computeRefund(4)).toEqual(new Change(2, 0, 0));
  });

  it("should return 0-1-0 when refund is equal to 5", () => {
    expect(computeRefund(5)).toEqual(new Change(0, 1, 0));
  });

  it("should return 3-0-0 when refund is equal to 6", () => {
    expect(computeRefund(6)).toEqual(new Change(3, 0, 0));
  });

  it("should return 1-1-0 when refund is equal to 7", () => {
    expect(computeRefund(7)).toEqual(new Change(1, 1, 0));
  });

  it("should return 2-1-0 when refund is equal to 9", () => {
    expect(computeRefund(9)).toEqual(new Change(2, 1, 0));
  });

  it("should return 0-0-1 when refund is equal to 10", () => {
    expect(computeRefund(10)).toEqual(new Change(0, 0, 1));
  });

  it("should return 3-1-0 when refund is equal to 11", () => {
    expect(computeRefund(11)).toEqual(new Change(3, 1, 0));
  });

  it("should return 1-0-1 when refund is equal to 12", () => {
    expect(computeRefund(12)).toEqual(new Change(1, 0, 1));
  });

  it("should return 4-1-0 when refund is equal to 13", () => {
    expect(computeRefund(13)).toEqual(new Change(4, 1, 0));
  });

  it("should return 2-0-1 when refund is equal to 14", () => {
    expect(computeRefund(14)).toEqual(new Change(2, 0, 1));
  });

  it("should return 0-1-1 when refund is equal to 15", () => {
    expect(computeRefund(15)).toEqual(new Change(0, 1, 1));
  });

  it("should return 3-0-1 when refund is equal to 16", () => {
    expect(computeRefund(16)).toEqual(new Change(3, 0, 1));
  });

  it("should return 1-1-1 when refund is equal to 17", () => {
    expect(computeRefund(17)).toEqual(new Change(1, 1, 1));
  });

  it("should return 4-0-1 when refund is equal to 18", () => {
    expect(computeRefund(18)).toEqual(new Change(4, 0, 1));
  });

  it("should return 2-1-1 when refund is equal to 19", () => {
    expect(computeRefund(19)).toEqual(new Change(2, 1, 1));
  });

  it("should return 1-1-4 when refund is equal to 47", () => {
    expect(computeRefund(47)).toEqual(new Change(1, 1, 4));
  });
});
