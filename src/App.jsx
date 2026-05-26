import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MarkdownPage from "./pages/MarkdownPage";

import "./App.css";

import resumen from "../docs_urrmat/01_resumen_urrmat.md?raw";
import marco from "../docs_urrmat/02_marco_urrmat.md?raw";
import delitos from "../docs_urrmat/03_delitos_urrmat.md?raw";
import comparacion from "../docs_urrmat/04_comparacion_urrmat.md?raw";
import responsabilidad from "../docs_urrmat/05_responsabilidad_urrmat.md?raw";
import datos from "../docs_urrmat/06_datos_urrmat.md?raw";
import conclusiones from "../docs_urrmat/07_conclusiones_urrmat.md?raw";
import prompts from "../docs_urrmat/08_prompts_urrmat.md?raw";

export default function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <Sidebar />

        <div className="main-content">
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={<Navigate to="/resumen" />}
            />

            <Route
              path="/resumen"
              element={<MarkdownPage content={resumen} />}
            />

            <Route
              path="/marco"
              element={<MarkdownPage content={marco} />}
            />

            <Route
              path="/delitos"
              element={<MarkdownPage content={delitos} />}
            />

            <Route
              path="/comparacion"
              element={<MarkdownPage content={comparacion} />}
            />

            <Route
              path="/responsabilidad"
              element={
                <MarkdownPage content={responsabilidad} />
              }
            />

            <Route
              path="/datos"
              element={<MarkdownPage content={datos} />}
            />

            <Route
              path="/conclusiones"
              element={
                <MarkdownPage content={conclusiones} />
              }
            />

            <Route
              path="/prompts"
              element={<MarkdownPage content={prompts} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
