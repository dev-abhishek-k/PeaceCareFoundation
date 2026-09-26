import type { Category, PreviewNotification, HelpRequest, NGO, Opportunity } from "./types";

export const categories: Category[] = [
  ["food","Food"],["health","Healthcare"],["education","Education"],["shelter","Shelter"],["clothing","Clothing"],["women","Women’s support"],["children","Child welfare"],["elder","Elder care"],["disability","Disability support"],["animal","Animal rescue"],["disaster","Disaster relief"],["skills","Employment & skills"],["legal","Legal aid"],["environment","Environmental support"]
].map(([id,name]) => ({ id, name }));

export const ngos: NGO[] = [
  { id:"peace-care-foundation", name:"Peace Care Foundation", summary:"An illustrative profile focused on street dogs, children, adults and elders.", description:"This preview profile describes possible care areas: street-dog feeding and injury response, sterilisation and vaccination, foster and adoption pathways; children’s learning circles, school kits, nutrition and health checks; and night meals, blankets, dignity kits and medical camps for adults and elders. These programme descriptions are not independently verified.", categories:["food","health","education","shelter","animal","children","elder"], state:"Maharashtra", cities:["Mumbai","Pune"], contact:"Preview contact desk", email:"preview@peacecare.example", verified:false },
  { id:"ngo-2", name:"Asha Health Trust", summary:"Illustrative profile about health navigation and wellbeing education for families.", description:"Asha Health Trust is a fictional profile for this directory preview. Its services, contact details and verification are not real.", categories:["health","elder"], state:"Karnataka", cities:["Bengaluru","Mysuru"], contact:"Preview programme desk", email:"preview@asha.example", verified:false },
  { id:"ngo-3", name:"Udaan Learning", summary:"Illustrative profile about learning support, digital access and skills pathways.", description:"Udaan Learning is fictional directory content. This profile previews how support areas and possible locations could be presented; no services or locations have been verified.", categories:["education","skills"], state:"Delhi", cities:["New Delhi"], contact:"Preview coordinator", email:"preview@udaan.example", verified:false },
  { id:"ngo-4", name:"Nayi Disha", summary:"Illustrative profile about women’s support and legal information.", description:"Nayi Disha is a fictional organisation included for interface preview only.", categories:["women","legal"], state:"West Bengal", cities:["Kolkata"], contact:"Preview support desk", email:"preview@dish.example", verified:false }
];

export const requests: HelpRequest[] = [
  { id:"REQ-PREVIEW-104", category:"Animal rescue", summary:"Preview request: help finding safe care for an injured street dog.", location:"Pune, Maharashtra", status:"Under review", date:"12 Jun 2025" },
  { id:"REQ-PREVIEW-087", category:"Education", summary:"Preview request: school materials for a children’s learning circle.", location:"Mumbai, Maharashtra", status:"Shared with NGO", date:"04 Jun 2025" }
];

export const opportunities: Opportunity[] = [
  { id:"opp-1", title:"Peace Care learning circle · Preview", ngo:"Peace Care Foundation · illustrative profile", location:"Mumbai · illustrative", category:"Education", description:"Imagine helping a small group of children with reading and creative learning. This is a fictional opportunity, not a live placement." },
  { id:"opp-2", title:"Morning street-dog care · Preview", ngo:"Peace Care Foundation · illustrative profile", location:"Pune · illustrative", category:"Animal rescue", description:"Imagine preparing food and organising a street-dog care route. This is fictional preview content, not a live placement." },
  { id:"opp-3", title:"Health information caller · Preview", ngo:"Asha Health Trust · fictional profile", location:"Remote · illustrative", category:"Healthcare", description:"Imagine sharing health-navigation information with callers. This is an illustrative role, not a live placement." }
];

export const notifications: PreviewNotification[] = [
  { id: "notice-preview-1", title: "Preview request update", message: "The illustrative animal-rescue request for an injured street dog is shown as under review.", date: "Today" },
  { id: "notice-preview-2", title: "Preview consent reminder", message: "This prototype never shares a request outside the current browser session.", date: "Yesterday" }
];