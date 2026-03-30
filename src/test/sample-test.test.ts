import { describe, expect, test } from "vitest";

const person = {
  isActive: true,
  age: true,
};

describe("person", () => {
  test("person is defined", () => {
    expect(person).toBeDefined();
  });

  test("is active", () => {
    expect(person.isActive).toBeTruthy();
  });

  test("age is number", () => {
    expect(typeof person.age).toBe("number");
  });
});
