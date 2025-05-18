import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from './routes'
import CadastrarGastos from './pages/cadastrar-gastos';
import CadastrarVendas from './pages/cadastrar-vendas';

export function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/cadastrar-gastos" element={<CadastrarGastos />} />
          <Route path="/cadastrar-vendas" element={<CadastrarVendas />} />

        </Routes>
      </div>
    </Router>
  );
}