import type { Category, PreviewNotification, HelpRequest, NGO, Opportunity } from "./types";

export const categories: Category[] = [
  ["food","Food"],["health","Healthcare"],["education","Education"],["shelter","Shelter"],["clothing","Clothing"],["women","Women’s support"],["children","Child welfare"],["elder","Elder care"],["disability","Disability support"],["animal","Animal rescue"],["disaster","Disaster relief"],["skills","Employment & skills"],["legal","Legal aid"],["environment","Environmental support"]
].map(([id,name]) => ({ id, name }));

export const ngos: NGO[] = [
  { id:"peace-care-foundation", name:"Peace Care Foundation", summary:"Explore care areas for street dogs, children, adults and older people.", description:"Areas shown here include food and veterinary care for street dogs; learning, nutrition and health needs for children; and meals, warmth and health guidance for adults and older people.", categories:["food","health","education","shelter","animal","children","elder"], state:"Maharashtra", cities:["Mumbai","Pune"], contact:"Preview contact desk", email:"preview@peacecare.example", verified:false },
  { id:"ngo-2", name:"Asha Health Trust", summary:"Explore health navigation and wellbeing needs for families and older people.", description:"Health navigation can help people understand their options, find qualified care and access reliable wellbeing information.", categories:["health","elder"], state:"Karnataka", cities:["Bengaluru","Mysuru"], contact:"Preview programme desk", email:"preview@asha.example", verified:false },
  { id:"ngo-3", name:"Udaan Learning", summary:"Explore learning support, digital access and skills pathways.", description:"Education and digital access can open routes to learning, work and greater independence.", categories:["education","skills"], state:"Delhi", cities:["New Delhi"], contact:"Preview coordinator", email:"preview@udaan.example", verified:false },
  { id:"ngo-4", name:"Nayi Disha", summary:"Explore women’s support and access to legal information.", description:"Women may need trusted information about rights, skills and pathways to practical support.", categories:["women","legal"], state:"West Bengal", cities:["Kolkata"], contact:"Preview support desk", email:"preview@dish.example", verified:false }
];

export const requests: HelpRequest[] = [
  { id:"REQ-PREVIEW-104", category:"Animal rescue", summary:"Preview request: help finding safe care for an injured street dog.", location:"Pune, Maharashtra", status:"Under review", date:"12 Jun 2025" },
  { id:"REQ-PREVIEW-087", category:"Education", summary:"Preview request: school materials for a children’s learning circle.", location:"Mumbai, Maharashtra", status:"Shared with NGO", date:"04 Jun 2025" }
];

export const opportunities: Opportunity[] = [
  { id:"opp-1", title:"Learning circle · Preview", ngo:"Peace Care Foundation · example profile", location:"Mumbai · example location", category:"Education", description:"Reading support and creative learning can help children build confidence and curiosity." },
  { id:"opp-2", title:"Street-dog care · Preview", ngo:"Peace Care Foundation · example profile", location:"Pune · example location", category:"Animal rescue", description:"Preparing food and organising a care route are ways volunteers could help street dogs." },
  { id:"opp-3", title:"Health information · Preview", ngo:"Asha Health Trust · example profile", location:"Remote · example location", category:"Healthcare", description:"Clear, reliable health information can help people find appropriate care." }
];

export const notifications: PreviewNotification[] = [
  { id: "notice-preview-1", title: "Preview request update", message: "The illustrative animal-rescue request for an injured street dog is shown as under review.", date: "Today" },
  { id: "notice-preview-2", title: "Preview consent reminder", message: "This prototype never shares a request outside the current browser session.", date: "Yesterday" }
];