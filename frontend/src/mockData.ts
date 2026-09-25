import type { Category, DemoNotification, HelpRequest, NGO, Opportunity } from "./types";

export const categories: Category[] = [
  ["food","Food"],["health","Healthcare"],["education","Education"],["shelter","Shelter"],["clothing","Clothing"],["women","Women’s support"],["children","Child welfare"],["elder","Elder care"],["disability","Disability support"],["animal","Animal rescue"],["disaster","Disaster relief"],["skills","Employment & skills"],["legal","Legal aid"],["environment","Environmental support"]
].map(([id,name]) => ({ id, name }));

export const ngos: NGO[] = [
  { id:"ngo-1", name:"Demo Seva Collective", summary:"Community food access and family support in urban neighbourhoods.", description:"Demo Seva Collective works with local partners to make essential food support easier to find. This sample profile demonstrates how an independent NGO could describe its work.", categories:["food","shelter"], state:"Maharashtra", cities:["Mumbai","Pune"], contact:"Demo contact desk", email:"demo@seva.example", verified:true },
  { id:"ngo-2", name:"Demo Asha Health Trust", summary:"Primary health navigation and wellbeing education for families.", description:"Demo Asha Health Trust is a fictional sample organisation used to preview the NGO Help Network directory. Its services, contact details and verification are not real.", categories:["health","elder"], state:"Karnataka", cities:["Bengaluru","Mysuru"], contact:"Demo programme desk", email:"demo@asha.example", verified:true },
  { id:"ngo-3", name:"Demo Udaan Learning", summary:"Learning support, digital access and skills pathways for young people.", description:"Demo Udaan Learning is sample directory content. The profile shows how support areas and service locations may be presented clearly.", categories:["education","skills"], state:"Delhi", cities:["New Delhi","Gurugram"], contact:"Demo coordinator", email:"demo@udaan.example", verified:true },
  { id:"ngo-4", name:"Demo Nayi Disha", summary:"A sample women’s support and legal information collective.", description:"Demo Nayi Disha is a fictional organisation included for interface demonstration only.", categories:["women","legal"], state:"West Bengal", cities:["Kolkata"], contact:"Demo support desk", email:"demo@dish.example", verified:true }
];

export const requests: HelpRequest[] = [
  { id:"REQ-DEMO-104", category:"Healthcare", summary:"Help finding a nearby clinic and transport options.", location:"Pune, Maharashtra", status:"Under review", date:"12 Jun 2025" },
  { id:"REQ-DEMO-087", category:"Education", summary:"School materials for two children.", location:"New Delhi", status:"Shared with NGO", date:"04 Jun 2025" }
];

export const opportunities: Opportunity[] = [
  { id:"opp-1", title:"Demo weekend learning mentor", ngo:"Demo Udaan Learning", location:"New Delhi · weekends", category:"Education", description:"Support a small group of learners with reading and digital basics. This is a sample opportunity." },
  { id:"opp-2", title:"Demo community food packing", ngo:"Demo Seva Collective", location:"Mumbai · flexible shifts", category:"Food", description:"Help prepare and organise community food parcels with the sample NGO team." },
  { id:"opp-3", title:"Demo health information caller", ngo:"Demo Asha Health Trust", location:"Remote · 3 hours/week", category:"Healthcare", description:"Share clear, reviewed health-navigation information with callers in this sample role." }
];

export const notifications: DemoNotification[] = [
  { id: "notice-demo-1", title: "Demo request update", message: "Your Demo healthcare request is currently under review.", date: "Today" },
  { id: "notice-demo-2", title: "Demo consent reminder", message: "This prototype never shares a request outside the current browser session.", date: "Yesterday" }
];