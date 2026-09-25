import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import type { Role } from "./types";
import { Browse, Dashboard, Home, Info, NgoDetail, Register, RequestHelpDemo, Volunteer } from "./pages/PrototypePages";

export default function App() {
  const [role, setRole] = useState<Role>("HELP_SEEKER");
  return <Layout role={role} setRole={setRole}><Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/ngos" element={<Browse/>}/>
    <Route path="/ngos/:id" element={<NgoDetail/>}/>
    <Route path="/request-help" element={<RequestHelpDemo/>}/>
    <Route path="/register-ngo" element={<Register/>}/>
    <Route path="/volunteer" element={<Volunteer/>}/>
    <Route path="/dashboard" element={<Dashboard role={role} setRole={setRole}/>}/>
    <Route path="/about" element={<Info kind="about"/>}/>
    <Route path="/contact" element={<Info kind="contact"/>}/>
    <Route path="/faq" element={<Info kind="faq"/>}/>
    <Route path="/privacy" element={<Info kind="privacy"/>}/>
    <Route path="/terms" element={<Info kind="terms"/>}/>
    <Route path="*" element={<Info kind="about"/>}/>
  </Routes></Layout>;
}