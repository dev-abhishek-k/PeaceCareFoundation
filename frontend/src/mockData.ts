import type { Category, DemoNotification, HelpRequest, NGO, Opportunity } from "./types";

export const categories: Category[] = [
  ["food","Food"],["health","Healthcare"],["education","Education"],["shelter","Shelter"],["clothing","Clothing"],["women","Women’s support"],["children","Child welfare"],["elder","Elder care"],["disability","Disability support"],["animal","Animal rescue"],["disaster","Disaster relief"],["skills","Employment & skills"],["legal","Legal aid"],["environment","Environmental support"]
].map(([id,name]) => ({ id, name }));

export const ngos: NGO[] = [
  { id:"peace-care-foundation", name:"Peace Care Foundation", summary:"Demo profile: Aman’s daily care for street dogs, children, adults and elders.", description:"Peace Care Foundation is a Demo profile inspired by Aman’s care work: street dog feeding and injury response, sterilisation and vaccination, foster and adoption; children’s learning circles, school kits, nutrition and health checks; and night meals, blankets, dignity kits and medical camps for adults and elders. These are sample programme descriptions, not independently verified claims.", categories:["food","health","education","shelter","animal","children","elder"], state:"Maharashtra", cities:["Mumbai","Pune"], contact:"Demo contact desk", email:"demo@peacecare.example", verified:true },
  { id:"ngo-2", name:"Demo Asha Health Trust", summary:"Primary health navigation and wellbeing education for families.", description:"Demo Asha Health Trust is fictional sample content used to preview this directory. Its services, contact details and verification are not real.", categories:["health","elder"], state:"Karnataka", cities:["Bengaluru","Mysuru"], contact:"Demo programme desk", email:"demo@asha.example", verified:true },
  { id:"ngo-3", name:"Demo Udaan Learning", summary:"Learning support, digital access and skills pathways for young people.", description:"Demo Udaan Learning is sample directory content. The profile shows how support areas and service locations may be presented clearly.", categories:["education","skills"], state:"Delhi", cities:["New Delhi","Gurugram"], contact:"Demo coordinator", email:"demo@udaan.example", verified:true },
  { id:"ngo-4", name:"Demo Nayi Disha", summary:"A sample women’s support and legal information collective.", description:"Demo Nayi Disha is a fictional organisation included for interface demonstration only.", categories:["women","legal"], state:"West Bengal", cities:["Kolkata"], contact:"Demo support desk", email:"demo@dish.example", verified:true }
];

export const requests: HelpRequest[] = [
  { id:"REQ-DEMO-104", category:"Animal rescue", summary:"Demo request: help finding safe care for an injured street dog.", location:"Pune, Maharashtra", status:"Under review", date:"12 Jun 2025" },
  { id:"REQ-DEMO-087", category:"Education", summary:"Demo request: school materials for a children’s learning circle.", location:"Mumbai, Maharashtra", status:"Shared with NGO", date:"04 Jun 2025" }
];

export const opportunities: Opportunity[] = [
  { id:"opp-1", title:"Demo Peace Care learning circle", ngo:"Peace Care Foundation · Demo profile", location:"Mumbai · weekends", category:"Education", description:"Support a small group of children with reading and creative learning. This is a sample opportunity, not a live placement." },
  { id:"opp-2", title:"Demo morning street-dog care", ngo:"Peace Care Foundation · Demo profile", location:"Pune · flexible shifts", category:"Animal rescue", description:"Help prepare food and organise a sample street-dog care route. This is fictional demo content." },
  { id:"opp-3", title:"Demo health information caller", ngo:"Demo Asha Health Trust", location:"Remote · 3 hours/week", category:"Healthcare", description:"Share clear, reviewed health-navigation information with callers in this sample role." }
];

export const notifications: DemoNotification[] = [
  { id: "notice-demo-1", title: "Demo request update", message: "Your Demo animal-rescue request for an injured street dog is currently under review.", date: "Today" },
  { id: "notice-demo-2", title: "Demo consent reminder", message: "This prototype never shares a request outside the current browser session.", date: "Yesterday" }
];