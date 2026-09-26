import type { Category, PreviewNotification, HelpRequest, NGO, Opportunity } from "./types";

export const categories: Category[] = [
  ["food","Food"],["health","Healthcare"],["education","Education"],["shelter","Shelter"],["clothing","Clothing"],["women","Women’s support"],["children","Child welfare"],["elder","Elder care"],["disability","Disability support"],["animal","Animal rescue"],["disaster","Disaster relief"],["skills","Employment & skills"],["legal","Legal aid"],["environment","Environmental support"]
].map(([id,name]) => ({ id, name }));

export const ngos: NGO[] = [
  { id:"peace-care-foundation", name:"Peace Care Foundation", summary:"Fictional example profile showing how a range of community support areas might appear.", description:"Fictional example content for this directory preview. It sketches possible areas such as animal care, learning, food and health support; it does not describe an operating organisation or programme. The locations and contact details below are examples, not real or verified.", categories:["food","health","education","shelter","animal","children","elder"], state:"Maharashtra", cities:["Mumbai","Pune"], contact:"Example contact desk", email:"preview@peacecare.example", verified:false },
  { id:"ngo-2", name:"Asha Health Trust", summary:"Fictional example profile about health information and wellbeing.", description:"Asha Health Trust is a fictional profile created for this directory preview. Its organisation, services, contact details, locations and verification are not real.", categories:["health","elder"], state:"Karnataka", cities:["Bengaluru","Mysuru"], contact:"Example programme desk", email:"preview@asha.example", verified:false },
  { id:"ngo-3", name:"Udaan Learning", summary:"Fictional example profile about learning, digital access and skills.", description:"Udaan Learning is fictional directory content. This profile illustrates how possible support areas and locations could be presented; no organisation, services or locations have been verified.", categories:["education","skills"], state:"Delhi", cities:["New Delhi"], contact:"Example coordinator", email:"preview@udaan.example", verified:false },
  { id:"ngo-4", name:"Nayi Disha", summary:"Fictional example profile about women’s support and legal information.", description:"Nayi Disha is a fictional organisation name included for interface preview only. No services, locations or contact details are real.", categories:["women","legal"], state:"West Bengal", cities:["Kolkata"], contact:"Example support desk", email:"preview@dish.example", verified:false }
];

export const requests: HelpRequest[] = [
  { id:"REQ-PREVIEW-104", category:"Animal rescue", summary:"Sample request: looking for safe care for an injured street dog.", location:"Pune, Maharashtra", status:"Under review", date:"12 Jun 2025" },
  { id:"REQ-PREVIEW-087", category:"Education", summary:"Sample request: school materials for a children’s learning circle.", location:"Mumbai, Maharashtra", status:"Shared with NGO", date:"04 Jun 2025" }
];

export const opportunities: Opportunity[] = [
  { id:"opp-1", title:"Learning circle · Preview", ngo:"Peace Care Foundation · fictional example", location:"Mumbai · example", category:"Education", description:"A fictional example of a learning-support opportunity. This is not a live placement or an invitation to apply." },
  { id:"opp-2", title:"Street-dog care · Preview", ngo:"Peace Care Foundation · fictional example", location:"Pune · example", category:"Animal rescue", description:"A fictional example of a community animal-care opportunity. This is not a live placement or an invitation to apply." },
  { id:"opp-3", title:"Health information caller · Preview", ngo:"Asha Health Trust · fictional example", location:"Remote · example", category:"Healthcare", description:"A fictional example of a health-information role. This is not a live placement or an invitation to apply." }
];

export const notifications: PreviewNotification[] = [
  { id: "notice-preview-1", title: "Sample request status", message: "In this example screen, a fictional animal-rescue request is labelled “Under review”. It is not a real case update.", date: "Sample" },
  { id: "notice-preview-2", title: "Preview reminder", message: "Request details in this prototype are not sent to or shared with an NGO.", date: "Sample" }
];