export const impactOptions = [
  { id: "food-water", area: "Street dogs", title: "Food & water", amount: 500 },
  { id: "basic-dog-care", area: "Street dogs", title: "Basic care", amount: 1000 },
  { id: "dog-health", area: "Street dogs", title: "Health support", amount: 2500 },
  { id: "foster-essentials", area: "Street dogs", title: "Foster essentials", amount: 4000 },
  { id: "learning-materials", area: "Children", title: "Learning materials", amount: 750 },
  { id: "school-essentials", area: "Children", title: "School essentials", amount: 1500 },
  { id: "child-nutrition", area: "Children", title: "Nutrition support", amount: 3000 },
  { id: "learning-circle", area: "Children", title: "Learning circle", amount: 5000 },
  { id: "warmth-essentials", area: "Adults & elders", title: "Warmth essentials", amount: 1000 },
  { id: "community-meals", area: "Adults & elders", title: "Community meals", amount: 2000 },
  { id: "dignity-essentials", area: "Adults & elders", title: "Dignity essentials", amount: 3500 },
  { id: "wellness-support", area: "Adults & elders", title: "Wellness support", amount: 6000 },
] as const;

export type ImpactOption = (typeof impactOptions)[number];

const inrFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export const rupees = (value: number) => inrFormatter.format(value);