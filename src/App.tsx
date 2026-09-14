import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";

const ComunicaSummit = lazy(() => import("./pages/comunicasummit"));
const Company = lazy(() => import("./pages/company"));
const Features = lazy(() => import("./pages/features"));
const Contact = lazy(() => import("./pages/contact"));
const NotFound = lazy(() => import("./pages/not-found"));

const LoadingPage = () => <div className="min-h-screen bg-white" aria-label="A carregar" />;

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comunicasummit" element={<ComunicaSummit />} />
        <Route path="/company" element={<Company />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
