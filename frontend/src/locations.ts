// Offline city data plus current names and locations missing from the source.
// The source list is not exhaustive; forms also offer an "Other city" entry.
import cityRecords from "indian-states-cities/src/statescities.json";

const additionalCities: Record<string, readonly string[]> = {
  "Andaman and Nicobar Islands": ["Sri Vijaya Puram"],
  "Andhra Pradesh": ["Guntur", "Vijayawada", "Visakhapatnam"],
  "Arunachal Pradesh": ["Itanagar", "Naharlagun"],
  Assam: ["Dibrugarh", "Guwahati", "Silchar"],
  Bihar: ["Gaya", "Muzaffarpur", "Patna"],
  Chandigarh: ["Chandigarh"],
  Chhattisgarh: ["Bilaspur", "Raipur"],
  "Dadra and Nagar Haveli and Daman and Diu": ["Daman", "Silvassa"],
  Delhi: ["Delhi", "New Delhi"],
  Goa: ["Margao", "Panaji"],
  Gujarat: ["Ahmedabad", "Rajkot", "Surat", "Vadodara"],
  Haryana: ["Faridabad", "Gurugram", "Hisar", "Rohtak"],
  "Himachal Pradesh": ["Dharamshala", "Mandi", "Shimla"],
  "Jammu and Kashmir": ["Jammu", "Srinagar"],
  Jharkhand: ["Dhanbad", "Jamshedpur", "Ranchi"],
  Karnataka: ["Bengaluru", "Hubballi", "Mangaluru", "Mysuru"],
  Kerala: ["Kochi", "Kozhikode", "Thiruvananthapuram"],
  Ladakh: ["Kargil", "Leh"],
  Lakshadweep: ["Kavaratti"],
  "Madhya Pradesh": ["Bhopal", "Gwalior", "Indore", "Jabalpur"],
  Maharashtra: ["Kolhapur", "Mumbai", "Nagpur", "Nashik", "Pune", "Thane"],
  Manipur: ["Imphal"],
  Meghalaya: ["Shillong"],
  Mizoram: ["Aizawl"],
  Nagaland: ["Dimapur", "Kohima"],
  Odisha: ["Bhubaneswar", "Cuttack", "Rourkela"],
  Puducherry: ["Karaikal", "Puducherry"],
  Punjab: ["Amritsar", "Jalandhar", "Ludhiana"],
  Rajasthan: ["Jaipur", "Jodhpur", "Kota", "Udaipur"],
  Sikkim: ["Gangtok"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli"],
  Telangana: ["Hyderabad", "Warangal"],
  Tripura: ["Agartala"],
  "Uttar Pradesh": ["Kanpur", "Lucknow", "Noida", "Prayagraj", "Varanasi"],
  Uttarakhand: ["Dehradun", "Haldwani", "Haridwar"],
  "West Bengal": ["Howrah", "Kolkata", "Siliguri"],
};

const mergedCities: Record<string, string[]> = Object.fromEntries(
  Object.entries(additionalCities).map(([state, cities]) => [state, [...cities]]),
);
for (const { state, city } of cityRecords) {
  const currentState =
    state === "Dadra and Nagar Haveli" || state === "Daman and Diu"
      ? "Dadra and Nagar Haveli and Daman and Diu"
      : state;
  (mergedCities[currentState] ??= []).push(city.trim());
}

export const stateCities: Record<string, readonly string[]> = Object.fromEntries(
  Object.entries(mergedCities).map(([state, cities]) => [
    state,
    [...new Set(cities.filter(Boolean))].sort((a, b) => a.localeCompare(b)),
  ]),
);

export const states = Object.keys(stateCities).sort((a, b) => a.localeCompare(b));

export function citiesForState(state: string): readonly string[] {
  return stateCities[state] ?? [];
}