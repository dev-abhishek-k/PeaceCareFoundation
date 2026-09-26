export const impactOptions = [
  { id: "food-water", area: "Street dogs", title: "Food & water", amount: 500, image: "/images/care-food-water.webp" },
  { id: "basic-dog-care", area: "Street dogs", title: "Basic care", amount: 1000, image: "/images/care-basic-dog-care.webp" },
  { id: "dog-health", area: "Street dogs", title: "Health support", amount: 2500, image: "/images/care-dog-health.webp" },
  { id: "foster-essentials", area: "Street dogs", title: "Foster essentials", amount: 4000, image: "/images/care-foster-essentials.webp" },
  { id: "learning-materials", area: "Children", title: "Learning materials", amount: 750, image: "/images/care-learning-materials.webp" },
  { id: "school-essentials", area: "Children", title: "School essentials", amount: 1500, image: "/images/care-school-essentials.webp" },
  { id: "child-nutrition", area: "Children", title: "Nutrition support", amount: 3000, image: "/images/care-child-nutrition.webp" },
  { id: "learning-circle", area: "Children", title: "Learning circle", amount: 5000, image: "/images/care-learning-circle.webp" },
  { id: "warmth-essentials", area: "Adults & elders", title: "Warmth essentials", amount: 1000, image: "/images/care-warmth-essentials.webp" },
  { id: "community-meals", area: "Adults & elders", title: "Community meals", amount: 2000, image: "/images/care-community-meals.webp" },
  { id: "dignity-essentials", area: "Adults & elders", title: "Dignity essentials", amount: 3500, image: "/images/care-dignity-essentials.webp" },
  { id: "wellness-support", area: "Adults & elders", title: "Wellness support", amount: 6000, image: "/images/care-wellness-support.webp" },
] as const;

export type ImpactOption = (typeof impactOptions)[number];

const inrFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export const rupees = (value: number) => inrFormatter.format(value);