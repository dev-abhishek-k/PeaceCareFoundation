import { expect, test } from "bun:test";
import { fixedAmounts } from "../frontend/src/donationOptions";

test("the Donate page offers 12 fixed amounts from ₹500 to ₹1,00,000", () => {
  expect(fixedAmounts).toEqual([
    500, 1_000, 2_500, 5_000,
    10_000, 15_000, 20_000, 30_000,
    40_000, 50_000, 75_000, 100_000,
  ]);
});