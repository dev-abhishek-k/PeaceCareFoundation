export type Role = "HELP_SEEKER" | "NGO_REP" | "ADMIN";
export type Category = { id: string; name: string };
export type NGO = { id: string; name: string; summary: string; description: string; categories: string[]; state: string; cities: string[]; contact: string; email: string; verified: boolean; };
export type HelpRequest = { id: string; category: string; summary: string; location: string; status: "Submitted" | "Under review" | "Shared with NGO" | "In progress"; date: string; };
export type Opportunity = { id: string; title: string; ngo: string; location: string; category: string; description: string; };
export type DemoNotification = { id: string; title: string; message: string; date: string; };