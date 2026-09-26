// Local examples for the location pickers. "Other city" keeps the preview usable
// even when a smaller city is not listed here.
import type { NGO } from "./types";

export const stateCities: Record<string, readonly string[]> = {
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
  Maharashtra: ["Mumbai", "Nagpur", "Nashik", "Pune", "Thane"],
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

export const states = Object.keys(stateCities).sort((a, b) => a.localeCompare(b));

export function directoryCities(organizations: readonly Pick<NGO, "state" | "cities">[], state: string): string[] {
  if (!state) return [];
  return [...new Set(organizations.filter((ngo) => ngo.state === state).flatMap((ngo) => ngo.cities))]
    .sort((a, b) => a.localeCompare(b));
}