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
    description: "Study support, school supplies and scholarship information are ideas to explore—not confirmed programmes or services.",
    tags: ["Study support", "School supplies", "Scholarships"],
    label: "For growing minds",
    focus: [
      focus("Learning materials", "Books and supplies can make learning easier to access.", "/images/care-learning-materials.webp"),
      focus("School essentials", "Everyday items can help students take part in school.", "/images/care-school-essentials.webp"),
      focus("Learning circles", "Shared reading and group learning as a community idea.", "/images/care-learning-circle.webp"),
      focus("Scholarship information", "Information about education funding may help families explore options.", "/images/learning-moment.jpg"),
    ],
  },
  Healthcare: {
    id: "healthcare",
    summary: "Health support starts with access and understanding.",
    description: "Medical camps, help navigating treatment and health conversations are possible areas to explore—not services available through this site.",
    tags: ["Medical camps", "Treatment support", "Health awareness"],
    label: "For wellbeing",
    focus: [
      focus("Medical camps", "Community health outreach is one possible way to bring care closer.", "/images/health-outreach.jpg"),
      focus("Finding treatment", "Help finding suitable care may be one possible pathway.", "/images/care-wellness-support.webp"),
      focus("Preventive care", "Health conversations and check-ups can support early care.", "/images/category-mental-health.jpg"),
      focus("Health information", "Clear, useful health information can help communities make informed choices.", "/images/category-community.jpg"),
    ],
  },
  "Food & Nutrition": {
    id: "food-and-nutrition",
    summary: "Good food can support everyday dignity.",
    description: "Food staples, meals and nutrition are possible areas to explore—not a report of programmes delivered.",
    tags: ["Ration", "Meals", "Nutrition"],
    label: "For daily nourishment",
    focus: [
      focus("Food staples", "Everyday essentials may help households meet food needs.", "/images/care-community-meals.webp"),
      focus("Community meals", "Shared meals and connection in an illustrative care model.", "/images/food-sharing.jpg"),
      focus("Child nutrition", "Nutritious food as a possible area of support for children.", "/images/care-child-nutrition.webp"),
      focus("Finding food", "Exploring ways to make a reliable meal easier to reach.", "/images/category-homeless.jpg"),
    ],
  },
  "Shelter & Housing": {
    id: "shelter-and-housing",
    summary: "A safe place can make the next step possible.",
    description: "Temporary shelter and housing guidance are examples to explore, not accommodation offered through this site.",
    tags: ["Temporary shelter", "Housing support", "Essentials"],
    label: "For safer spaces",
    focus: [
      focus("Temporary shelter", "A short-term safe place may help in an urgent situation.", "/images/category-shelter.jpg"),
      focus("Housing guidance", "Information and community connections may help people explore stable housing.", "/images/category-rural.jpg"),
      focus("Warmth essentials", "Blankets and seasonal items can offer comfort in cold weather.", "/images/care-warmth-essentials.webp"),
      focus("Dignity supplies", "Personal-care basics framed around respect and privacy.", "/images/care-dignity-essentials.webp"),
    ],
  },
  "Women Empowerment": {
    id: "women-empowerment",
    summary: "Opportunity grows when skills and support meet.",
    description: "Skills, livelihood pathways and peer support are possible themes—not verified activities or services.",
    tags: ["Skills", "Livelihood", "Support services"],
    label: "For greater opportunity",
    focus: [
      focus("Skills workshops", "Practical learning can be one route to new opportunities.", "/images/category-women.jpg"),
      focus("Livelihood pathways", "Explore possible ways to earn and build financial independence.", "/images/category-livelihood.jpg"),
      focus("Support conversations", "A respectful conversation can help someone consider their options.", "/images/category-mental-health.jpg"),
      focus("Peer learning", "Women sharing knowledge and encouragement with one another.", "/images/category-community.jpg"),
    ],
  },
  "Child Welfare": {
    id: "children",
    summary: "A little support can make room to learn.",
    description: "Child safety, education and nutrition are possible areas of care. These examples are illustrative, not a report of activities delivered.",
    tags: ["Child protection", "Education", "Nutrition"],
    label: "For growing minds",
    heroImage: "/images/learning-care.jpg",
    focus: programFocusAreas.children,
  },
  "Elder Care": {
    id: "adults-and-elders",
    summary: "Dignity belongs in every season of life.",
    description: "Meals, warmth, personal care and wellbeing are examples of possible support—not services currently available here.",
    tags: ["Daily care", "Dignity essentials", "Wellness"],
    label: "For every generation",
    heroImage: "/images/community-care.jpg",
    focus: programFocusAreas["adults-and-elders"],
  },
  "Disability Support": {
    id: "disability-support",
    summary: "Access should be part of everyday life.",
    description: "Accessibility, assistive tools and inclusive training are possible areas to explore, not confirmed programmes.",
    tags: ["Accessibility", "Assistive devices", "Training"],
    label: "For inclusive spaces",
    focus: [
      focus("Accessible spaces", "Removing physical barriers can be an important community priority.", "/images/category-disability.jpg"),
      focus("Assistive tools", "Tools and guidance may make everyday activities easier.", "/images/care-wellness-support.webp"),
      focus("Inclusive skills", "Training can be designed with access in mind.", "/images/category-livelihood.jpg"),
      focus("Community access", "Making shared activities easier for everyone to join.", "/images/category-community.jpg"),
    ],
  },
  "Animal Welfare": {
    id: "street-dogs",
    summary: "Care begins with noticing who is often overlooked.",
    description: "Rescue, treatment and adoption pathways are examples to explore—not confirmed services. The ideas below focus on street dogs.",
    tags: ["Rescue", "Treatment", "Adoption pathways"],
    label: "For the ones on the street",
    heroImage: "/images/street-dog-care.jpg",
    focus: programFocusAreas["street-dogs"],
  },
  "Disaster Relief": {
    id: "disaster-relief",
    summary: "In an emergency, timely help matters.",
    description: "Support during floods, fires and other emergencies is an illustrative idea—not a claim that a relief service is operating.",
    tags: ["Emergency supplies", "Safe shelter", "Recovery"],
    label: "For urgent moments",
    focus: [
      focus("Emergency essentials", "Basic items may help people through an immediate disruption.", "/images/category-disaster.jpg"),
      focus("Food & water", "Food and clean water can be especially important in a crisis.", "/images/category-water.jpg"),
      focus("Temporary shelter", "A safe place to rest may be part of an emergency response.", "/images/category-shelter.jpg"),
      focus("Recovery support", "Community planning and connections after an emergency.", "/images/category-community.jpg"),
    ],
  },
  Environment: {
    id: "environment",
    summary: "Healthy surroundings support healthy communities.",
    description: "Tree care and waste reduction are possible environmental actions, not verified projects.",
    tags: ["Tree planting", "Waste management", "Local care"],
    label: "For shared spaces",
    focus: [
      focus("Tree planting", "Growing and caring for trees can be a community effort.", "/images/tree-planting.jpg"),
      focus("Waste reduction", "Local planning can help create cleaner surroundings and reduce waste.", "/images/category-community.jpg"),
      focus("Water stewardship", "Everyday care can help communities look after shared water.", "/images/category-water.jpg"),
      focus("Neighbourhood care", "Residents working together on places they share.", "/images/category-rural.jpg"),
    ],
  },
  "Livelihood & Skills": {
    id: "livelihood-and-skills",
    summary: "Useful skills can open new possibilities.",
    description: "Job training and self-employment are possible pathways—not courses, jobs or placements offered here.",
    tags: ["Job training", "Practical skills", "Self-employment"],
    label: "For new pathways",
    focus: [
      focus("Job skills", "Practical learning may help people explore work opportunities.", "/images/category-livelihood.jpg"),
      focus("Skills workshops", "Hands-on practice and learning alongside others.", "/images/category-women.jpg"),
      focus("Self-employment", "Small enterprises can be one possible livelihood route.", "/images/category-rural.jpg"),
      focus("Preparing for work", "Confidence, guidance and community connections may help with next steps.", "/images/category-community.jpg"),
    ],
  },
  "Rural Development": {
    id: "rural-development",
    summary: "Local priorities should shape local progress.",
    description: "Basic services and village development are broad possibilities, not verified work in any particular village.",
    tags: ["Basic services", "Village needs", "Local planning"],
    label: "For village communities",
    focus: [
      focus("Everyday essentials", "Community-led thinking about the services people need.", "/images/category-rural.jpg"),
      focus("Health information", "Bringing useful health information closer to home.", "/images/health-outreach.jpg"),
      focus("Learning access", "Local spaces and supplies may help children learn.", "/images/care-learning-circle.webp"),
      focus("Community planning", "Listening to residents about shared priorities.", "/images/category-community.jpg"),
    ],
  },
  "Water & Sanitation": {
    id: "water-and-sanitation",
    summary: "Clean water and hygiene are everyday needs.",
    description: "Safe water, sanitation and hygiene are possible areas to explore, not facilities confirmed as available.",
    tags: ["Clean water", "Toilets", "Hygiene"],
    label: "For healthier living",
    focus: [
      focus("Safe drinking water", "Reliable access to safe water can be a community priority.", "/images/category-water.jpg"),
      focus("Hygiene information", "Practical guidance can support healthy everyday routines.", "/images/category-community.jpg"),
      focus("Sanitation access", "Improved facilities may be part of local planning.", "/images/category-rural.jpg"),
      focus("Safe water storage", "Clean storage helps keep collected water safer to use.", "/images/category-disaster.jpg"),
    ],
  },
  "Mental Health": {
    id: "mental-health",
    summary: "Listening can be a meaningful first step.",
    description: "Counselling and awareness are ideas to explore—not a claim that clinical or crisis support is available here.",
    tags: ["Counselling", "Awareness", "Peer support"],
    label: "For emotional wellbeing",
    focus: [
      focus("Counselling", "A private, supportive conversation may be one form of care.", "/images/category-mental-health.jpg"),
      focus("Awareness", "Accessible information can help reduce stigma.", "/images/category-community.jpg"),
      focus("Peer support", "People with shared experiences can offer connection and understanding.", "/images/community-care.jpg"),
      focus("Finding professional help", "When needed, qualified professionals can offer appropriate support.", "/images/care-wellness-support.webp"),
    ],
  },
  "Legal Aid & Rights": {
    id: "legal-aid-and-rights",
    summary: "Understanding rights helps people make informed choices.",
    description: "Legal information and rights awareness are topics to explore—not legal advice or services available here.",
    tags: ["Legal guidance", "Rights awareness", "Information"],
    label: "For informed choices",
    focus: [
      focus("Finding legal guidance", "Look for trustworthy information about possible next steps.", "/images/category-legal-aid.jpg"),
      focus("Know your rights", "Plain-language information can make everyday rights easier to understand.", "/images/category-community.jpg"),
      focus("Understanding documents", "Learn what paperwork means and where to seek qualified help.", "/images/category-rural.jpg"),
      focus("Useful resources", "Reliable information is easier to use when it is shared clearly.", "/images/category-mental-health.jpg"),
    ],
  },
  "Homeless Support": {
    id: "homeless-support",
    summary: "Support should start with dignity.",
    description: "Food, shelter and longer-term support are possible areas of care—not confirmed services or placements.",
    tags: ["Food", "Shelter", "Rehabilitation"],
    label: "For people without housing",
    focus: [
      focus("Food access", "A reliable meal can be an immediate, practical form of support.", "/images/category-homeless.jpg"),
      focus("Safe shelter", "Temporary spaces and useful connections may support greater stability.", "/images/category-shelter.jpg"),
      focus("Personal-care essentials", "Everyday items can support comfort, dignity and privacy.", "/images/care-dignity-essentials.webp"),
      focus("Planning next steps", "Explore longer-term possibilities through skills and support.", "/images/category-livelihood.jpg"),
    ],
  },
  "Community Development": {
    id: "community-development",
    summary: "Strong communities start with local voices.",
    description: "Local priorities and community projects are possibilities to explore, not verified projects underway.",
    tags: ["Local needs", "Shared projects", "Participation"],
    label: "For stronger communities",
    focus: [
      focus("Local priorities", "Start by listening to what residents say their community needs.", "/images/category-community.jpg"),
      focus("Shared meals", "Food and connection can bring neighbours together.", "/images/care-community-meals.webp"),
      focus("Community spaces", "Shared places can give people room to meet, learn and take part.", "/images/category-rural.jpg"),
      focus("Shared projects", "Neighbours can bring their time and ideas to common goals.", "/images/tree-planting.jpg"),
    ],
  },
};