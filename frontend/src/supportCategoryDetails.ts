import { programFocusAreas } from "./programFocusAreas";
import { supportCategories } from "./supportCategories";

type Focus = { title: string; description: string; image: string };
type CategoryDetail = {
  id: string;
  summary: string;
  description: string;
  tags: readonly string[];
  label: string;
  heroImage?: string;
  focus: readonly Focus[];
};

const focus = (title: string, description: string, image: string): Focus => ({ title, description, image });

export const supportCategoryDetails: Record<(typeof supportCategories)[number]["name"], CategoryDetail> = {
  Education: {
    id: "education",
    summary: "A little support can make room to learn.",
    description: "Study help, school supplies and scholarship access are illustrative possibilities, not confirmed programmes.",
    tags: ["Study support", "School supplies", "Scholarships"],
    label: "For growing minds",
    focus: [
      focus("Learning materials", "Books and supplies that can make learning more accessible.", "/images/care-learning-materials.webp"),
      focus("School essentials", "Everyday items that can help students take part in school.", "/images/care-school-essentials.webp"),
      focus("Learning circles", "Shared reading and group learning as a community idea.", "/images/care-learning-circle.webp"),
      focus("Scholarship access", "Information and guidance around education funding as a possibility.", "/images/learning-moment.jpg"),
    ],
  },
  Healthcare: {
    id: "healthcare",
    summary: "Health support starts with access and understanding.",
    description: "Medical camps, treatment support and health conversations are possible areas of care, not services confirmed here.",
    tags: ["Medical camps", "Treatment support", "Health awareness"],
    label: "For wellbeing",
    focus: [
      focus("Medical camps", "Community health outreach as an illustrative way to improve access.", "/images/health-outreach.jpg"),
      focus("Treatment support", "Guidance toward care and treatment as a possible pathway.", "/images/care-wellness-support.webp"),
      focus("Preventive care", "Early health conversations and check-ups as support ideas.", "/images/category-mental-health.jpg"),
      focus("Health awareness", "Sharing useful health information within a community.", "/images/category-community.jpg"),
    ],
  },
  "Food & Nutrition": {
    id: "food-and-nutrition",
    summary: "Good food can support everyday dignity.",
    description: "Ration, meals and nutrition are examples of possible support, not a report of food programmes delivered.",
    tags: ["Ration", "Meals", "Nutrition"],
    label: "For daily nourishment",
    focus: [
      focus("Ration support", "Everyday food staples as a possible source of household support.", "/images/care-community-meals.webp"),
      focus("Community meals", "Shared meals and connection in an illustrative care model.", "/images/food-sharing.jpg"),
      focus("Child nutrition", "Nutritious food as a possible area of support for children.", "/images/care-child-nutrition.webp"),
      focus("Food access", "Ways to make a reliable meal easier to reach.", "/images/category-homeless.jpg"),
    ],
  },
  "Shelter & Housing": {
    id: "shelter-and-housing",
    summary: "A safe place can make the next step possible.",
    description: "Temporary shelter and housing support are illustrative ideas, not a list of accommodation currently offered.",
    tags: ["Temporary shelter", "Housing support", "Essentials"],
    label: "For safer spaces",
    focus: [
      focus("Temporary shelter", "Short-term safe spaces as an illustrative response to urgent need.", "/images/category-shelter.jpg"),
      focus("Housing support", "Guidance and community connections around stable housing.", "/images/category-rural.jpg"),
      focus("Warmth essentials", "Blankets and seasonal items as possible sources of comfort.", "/images/care-warmth-essentials.webp"),
      focus("Dignity supplies", "Personal-care basics framed around respect and privacy.", "/images/care-dignity-essentials.webp"),
    ],
  },
  "Women Empowerment": {
    id: "women-empowerment",
    summary: "Opportunity grows when skills and support meet.",
    description: "Skills, livelihood pathways and support services are possible themes, not verified activities of the foundation.",
    tags: ["Skills", "Livelihood", "Support services"],
    label: "For greater opportunity",
    focus: [
      focus("Skills workshops", "Practical learning together as one possible route to opportunity.", "/images/category-women.jpg"),
      focus("Livelihood pathways", "Exploring ways to earn and build financial independence.", "/images/category-livelihood.jpg"),
      focus("Support conversations", "A respectful space to discuss needs and available options.", "/images/category-mental-health.jpg"),
      focus("Peer learning", "Women sharing knowledge and encouragement with one another.", "/images/category-community.jpg"),
    ],
  },
  "Child Welfare": {
    id: "children",
    summary: "A little support can make room to learn.",
    description: "Child protection, education and nutrition are possible areas of care. The examples below are illustrative, not a report of activities delivered.",
    tags: ["Child protection", "Education", "Nutrition"],
    label: "For growing minds",
    heroImage: "/images/learning-care.jpg",
    focus: programFocusAreas.children,
  },
  "Elder Care": {
    id: "adults-and-elders",
    summary: "Dignity belongs in every season of life.",
    description: "Meals, warmth, personal care and wellness support are presented as an illustrative care model, not as available services.",
    tags: ["Daily care", "Dignity essentials", "Wellness"],
    label: "For every generation",
    heroImage: "/images/community-care.jpg",
    focus: programFocusAreas["adults-and-elders"],
  },
  "Disability Support": {
    id: "disability-support",
    summary: "Access should be part of everyday life.",
    description: "Accessibility, assistive devices and training are possible areas of support, not confirmed programmes.",
    tags: ["Accessibility", "Assistive devices", "Training"],
    label: "For inclusive spaces",
    focus: [
      focus("Accessible spaces", "Removing physical barriers as a possible community priority.", "/images/category-disability.jpg"),
      focus("Assistive support", "Tools and guidance that can make daily activities easier.", "/images/care-wellness-support.webp"),
      focus("Inclusive skills", "Training opportunities designed with access in mind.", "/images/category-livelihood.jpg"),
      focus("Community access", "Making shared activities easier for everyone to join.", "/images/category-community.jpg"),
    ],
  },
  "Animal Welfare": {
    id: "street-dogs",
    summary: "Care begins with noticing who is often overlooked.",
    description: "Rescue, treatment and adoption pathways are illustrative possibilities. The focus examples below centre on street dogs.",
    tags: ["Rescue", "Treatment", "Adoption pathways"],
    label: "For the ones on the street",
    heroImage: "/images/street-dog-care.jpg",
    focus: programFocusAreas["street-dogs"],
  },
  "Disaster Relief": {
    id: "disaster-relief",
    summary: "In an emergency, timely help matters.",
    description: "Flood, fire and other emergency support are illustrative ideas, not a claim that a relief service is operating.",
    tags: ["Emergency supplies", "Safe shelter", "Recovery"],
    label: "For urgent moments",
    focus: [
      focus("Emergency supplies", "Basic items that may help people through immediate disruption.", "/images/category-disaster.jpg"),
      focus("Food & water", "Essentials that can become especially important in a crisis.", "/images/category-water.jpg"),
      focus("Temporary shelter", "A safe place to rest as a possible emergency response.", "/images/category-shelter.jpg"),
      focus("Recovery support", "Community planning and connections after an emergency.", "/images/category-community.jpg"),
    ],
  },
  Environment: {
    id: "environment",
    summary: "Healthy surroundings support healthy communities.",
    description: "Tree planting and waste management are examples of possible environmental action, not verified projects.",
    tags: ["Tree planting", "Waste management", "Local care"],
    label: "For shared spaces",
    focus: [
      focus("Tree planting", "Growing and caring for trees as a community possibility.", "/images/tree-planting.jpg"),
      focus("Waste management", "Local planning around cleaner surroundings and less waste.", "/images/category-community.jpg"),
      focus("Water stewardship", "Looking after a shared resource with everyday care.", "/images/category-water.jpg"),
      focus("Neighbourhood care", "Residents working together on places they share.", "/images/category-rural.jpg"),
    ],
  },
  "Livelihood & Skills": {
    id: "livelihood-and-skills",
    summary: "Useful skills can open new possibilities.",
    description: "Job training and self-employment are illustrative pathways, not courses or placements currently offered.",
    tags: ["Job training", "Practical skills", "Self-employment"],
    label: "For new pathways",
    focus: [
      focus("Job training", "Learning practical skills that may support work opportunities.", "/images/category-livelihood.jpg"),
      focus("Skills workshops", "Hands-on practice and learning alongside others.", "/images/category-women.jpg"),
      focus("Self-employment", "Exploring small enterprise as a possible livelihood route.", "/images/category-rural.jpg"),
      focus("Work readiness", "Confidence, guidance and community connections around work.", "/images/category-community.jpg"),
    ],
  },
  "Rural Development": {
    id: "rural-development",
    summary: "Local priorities should shape local progress.",
    description: "Basic services and village development are broad possibilities, not verified work in any specific village.",
    tags: ["Basic services", "Village needs", "Local planning"],
    label: "For village communities",
    focus: [
      focus("Basic services", "Community-led thinking about everyday essentials.", "/images/category-rural.jpg"),
      focus("Health access", "Bringing health information and support closer to home.", "/images/health-outreach.jpg"),
      focus("Learning access", "Local spaces and supplies that may help children learn.", "/images/care-learning-circle.webp"),
      focus("Community planning", "Listening to residents about shared priorities.", "/images/category-community.jpg"),
    ],
  },
  "Water & Sanitation": {
    id: "water-and-sanitation",
    summary: "Clean water and hygiene are everyday needs.",
    description: "Safe water, toilets and hygiene are possible areas of support, not facilities confirmed as available.",
    tags: ["Clean water", "Toilets", "Hygiene"],
    label: "For healthier living",
    focus: [
      focus("Clean drinking water", "Reliable access to safe water as a community priority.", "/images/category-water.jpg"),
      focus("Hygiene awareness", "Practical information that can support healthy routines.", "/images/category-community.jpg"),
      focus("Sanitation access", "Better facilities as a possible part of local planning.", "/images/category-rural.jpg"),
      focus("Safe water storage", "Keeping collected water clean for daily use.", "/images/category-disaster.jpg"),
    ],
  },
  "Mental Health": {
    id: "mental-health",
    summary: "Listening can be a meaningful first step.",
    description: "Counselling and awareness are illustrative possibilities, not a claim of clinical or crisis services.",
    tags: ["Counselling", "Awareness", "Peer support"],
    label: "For emotional wellbeing",
    focus: [
      focus("Counselling", "A private, supportive conversation as a possible form of care.", "/images/category-mental-health.jpg"),
      focus("Awareness", "Reducing stigma through accessible community information.", "/images/category-community.jpg"),
      focus("Peer support", "Connection and understanding among people with shared needs.", "/images/community-care.jpg"),
      focus("Finding help", "Guidance toward appropriate professional support when needed.", "/images/care-wellness-support.webp"),
    ],
  },
  "Legal Aid & Rights": {
    id: "legal-aid-and-rights",
    summary: "Understanding rights helps people make informed choices.",
    description: "Legal guidance and rights awareness are illustrative topics, not legal advice or a currently available service.",
    tags: ["Legal guidance", "Rights awareness", "Information"],
    label: "For informed choices",
    focus: [
      focus("Legal guidance", "Finding trustworthy information about possible next steps.", "/images/category-legal-aid.jpg"),
      focus("Rights awareness", "Plain-language conversations about everyday rights.", "/images/category-community.jpg"),
      focus("Document support", "Understanding paperwork and where to seek qualified help.", "/images/category-rural.jpg"),
      focus("Community information", "Sharing reliable resources in accessible ways.", "/images/category-mental-health.jpg"),
    ],
  },
  "Homeless Support": {
    id: "homeless-support",
    summary: "Support should start with dignity.",
    description: "Food, shelter and rehabilitation pathways are possible areas of care, not confirmed services or placements.",
    tags: ["Food", "Shelter", "Rehabilitation"],
    label: "For people without housing",
    focus: [
      focus("Meals", "Food access as an immediate, practical form of support.", "/images/category-homeless.jpg"),
      focus("Safe shelter", "Temporary spaces and connections toward greater stability.", "/images/category-shelter.jpg"),
      focus("Dignity essentials", "Personal-care items offered with respect and privacy.", "/images/care-dignity-essentials.webp"),
      focus("Next steps", "Exploring longer-term pathways through skills and support.", "/images/category-livelihood.jpg"),
    ],
  },
  "Community Development": {
    id: "community-development",
    summary: "Strong communities start with local voices.",
    description: "Local needs and community projects are illustrative possibilities, not verified projects underway.",
    tags: ["Local needs", "Shared projects", "Participation"],
    label: "For stronger communities",
    focus: [
      focus("Local priorities", "Listening first to what residents say their community needs.", "/images/category-community.jpg"),
      focus("Shared meals", "Food and connection as one way neighbours may come together.", "/images/care-community-meals.webp"),
      focus("Community spaces", "Places where people can meet, learn and take part.", "/images/category-rural.jpg"),
      focus("Shared projects", "Neighbours contributing time and ideas to common goals.", "/images/tree-planting.jpg"),
    ],
  },
};