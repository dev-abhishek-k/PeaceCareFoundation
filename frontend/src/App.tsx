import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import type { Role } from "./types";
import { Browse, Dashboard, HomePeace, Info, NgoDetail, PeaceInfo, Programs, Register, RequestHelpDemo } from "./pages/PrototypePages";
import { Volunteer } from "./pages/Volunteer";

export default function App() {
  const [role, setRole] = useState<Role>("HELP_SEEKER");
  return <Layout role={role} setRole={setRole}><Routes>
    <Route path="/" element={<HomePeace/>}/>
    <Route path="/programs" element={<Programs/>}/>
    <Route path="/ngos" element={<Browse/>}/>
    <Route path="/ngos/:id" element={<NgoDetail/>}/>
    <Route path="/request-help" element={<RequestHelpDemo/>}/>
    <Route path="/register-ngo" element={<Register/>}/>
    <Route path="/volunteer" element={<Volunteer/>}/>
    <Route path="/dashboard" element={<Dashboard role={role} setRole={setRole}/>}/>
    <Route path="/about" element={<PeaceInfo kind="about"/>}/>
    <Route path="/contact" element={<PeaceInfo kind="contact"/>}/>
    <Route path="/faq" element={<PeaceInfo kind="faq"/>}/>
    <Route path="/privacy" element={<Info kind="privacy"/>}/>
    <Route path="/terms" element={<Info kind="terms"/>}/>
    <Route path="*" element={<Info kind="not-found"/>}/>
  </Routes></Layout>;
}