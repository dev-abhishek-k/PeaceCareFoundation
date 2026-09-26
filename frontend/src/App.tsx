import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { Browse, HomePeace, Info, NgoDetail, PeaceInfo, Programs, Register, RequestHelpPreview } from "./pages/PrototypePages";
import { Volunteer } from "./pages/Volunteer";
import { Donate } from "./pages/Donate";
import { BecomePartner } from "./pages/BecomePartner";
import { About } from "./pages/About";

export default function App() {
  return <Layout><Routes>
    <Route path="/" element={<HomePeace/>}/>
    <Route path="/programs" element={<Programs/>}/>
    <Route path="/donate" element={<Donate/>}/>
    <Route path="/ngos" element={<Browse/>}/>
    <Route path="/ngos/:id" element={<NgoDetail/>}/>
    <Route path="/request-help" element={<RequestHelpPreview/>}/>
    <Route path="/register-ngo" element={<Register/>}/>
    <Route path="/volunteer" element={<Volunteer/>}/>
    <Route path="/become-a-partner" element={<BecomePartner/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<PeaceInfo kind="contact"/>}/>
    <Route path="/faq" element={<PeaceInfo kind="faq"/>}/>
    <Route path="/privacy" element={<Info kind="privacy"/>}/>
    <Route path="/terms" element={<Info kind="terms"/>}/>
    <Route path="*" element={<Info kind="not-found"/>}/>
  </Routes></Layout>;
}