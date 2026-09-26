import { describe, expect, it } from "bun:test";
import { directoryCities, stateCities, states } from "../frontend/src/locations";
import { ngos } from "../frontend/src/mockData";

describe("state and city choices", () => {
  it("only offers directory cities belonging to the selected state", () => {
    expect(directoryCities(ngos, "")).toEqual([]);
    expect(directoryCities(ngos, "Maharashtra")).toEqual(["Mumbai", "Pune"]);
    expect(directoryCities(ngos, "Delhi")).toEqual(["New Delhi"]);
    expect(directoryCities(ngos, "Karnataka")).toEqual(["Bengaluru", "Mysuru"]);
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
    expect(states.length).toBeGreaterThan(4);
    for (const state of states) {
      const cities = stateCities[state];
      expect(cities.length).toBeGreaterThan(0);
      expect(new Set(cities).size).toBe(cities.length);
    }
  });
});