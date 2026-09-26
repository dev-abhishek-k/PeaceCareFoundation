import { useState } from "react";
import { stateCities, states } from "../locations";

const otherCityValue = "__other_city__";

type StateCityFieldsProps = {
  state: string;
  city: string;
  onStateChange: (state: string) => void;
  onCityChange: (city: string) => void;
  className?: string;
};

export function StateCityFields({
  state,
  city,
  onStateChange,
  onCityChange,
  className = "grid gap-4 sm:grid-cols-2",
}: StateCityFieldsProps) {
  const cities = stateCities[state] ?? [];
  const [otherCity, setOtherCity] = useState(() => Boolean(city && !cities.includes(city)));
  const showOtherCity = otherCity || Boolean(city && !cities.includes(city));

  return (
    <div className={className}>
      <label className="text-sm font-semibold">
        State <span aria-hidden="true">*</span>
        <select
          className="field mt-2"
          required
          value={state}
          onChange={(event) => {
            setOtherCity(false);
            onStateChange(event.target.value);
          }}
        >
          <option value="">Choose a state</option>
          {states.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
      </label>
      <label className="text-sm font-semibold">
        City <span aria-hidden="true">*</span>
        <select
          className="field mt-2"
          required
          disabled={!state}
          value={showOtherCity ? otherCityValue : city}
          onChange={(event) => {
            const value = event.target.value;
            setOtherCity(value === otherCityValue);
            onCityChange(value === otherCityValue ? "" : value);
          }}
        >
          <option value="">{state ? "Choose a city" : "Choose a state first"}</option>
          {cities.map((item) => <option key={item} value={item}>{item}</option>)}
          {state && <option value={otherCityValue}>Other city</option>}
        </select>
      </label>
      {showOtherCity && (
        <label className="text-sm font-semibold sm:col-span-2">
          Enter your city <span aria-hidden="true">*</span>
          <input
            className="field mt-2"
            required
            maxLength={100}
            autoComplete="address-level2"
            value={city}
            onChange={(event) => onCityChange(event.target.value)}
            placeholder="City not in the list"
          />
        </label>
      )}
    </div>
  );
}