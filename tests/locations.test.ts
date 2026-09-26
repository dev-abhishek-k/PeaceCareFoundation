import { describe, expect, it } from "bun:test";
import { citiesForState, stateCities, states } from "../frontend/src/locations";
import { ngos } from "../frontend/src/mockData";

describe("state and city choices", () => {
  it("shows the full available list for a selected state, not just NGO cities", () => {
    expect(citiesForState("")).toEqual([]);
    expect(citiesForState("Maharashtra").length).toBeGreaterThan(100);
    expect(citiesForState("Maharashtra")).toContain("Kolhapur");
    expect(citiesForState("Maharashtra")).toContain("Mumbai");
    expect(citiesForState("Maharashtra")).not.toContain("Bengaluru");
    expect(citiesForState("Karnataka")).toContain("Mysuru");
    expect(citiesForState("Delhi")).not.toContain("Gurugram");
  });

  it("keeps directory examples within their state's location choices", () => {
    for (const ngo of ngos) {
      for (const city of ngo.cities) {
        expect(stateCities[ngo.state]).toContain(city);
      }
    }
    expect(stateCities.Haryana).toContain("Gurugram");
    expect(stateCities.Delhi).not.toContain("Gurugram");
  });

  it("provides distinct city options for each selectable state", () => {
    expect(states.length).toBe(36);
    for (const state of states) {
      const cities = stateCities[state];
      expect(cities.length).toBeGreaterThan(0);
      expect(new Set(cities).size).toBe(cities.length);
    }
  });
});