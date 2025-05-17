import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from './routes'
import CadastrarVendas from './pages/cadastrar-vendas';

export function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/cadastrar-vendas" element={<CadastrarVendas />} />
        </Routes>
      </div>
    </Router>
  );
}