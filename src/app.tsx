import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from './routes'
import CadastrarGastos from './pages/cadastrar-gastos';
import CadastrarUsuarios from './pages/cadastrar-usuarios';
import CadastrarVendas from './pages/cadastrar-vendas';
import Login from './pages/login';

export function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/cadastrar-gastos" element={<CadastrarGastos />} />
          <Route path="/cadastrar-usuarios" element={<CadastrarUsuarios />} />
          <Route path="/cadastrar-vendas" element={<CadastrarVendas />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}