import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from '../view/Home/HomePage'


const routes = (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />




        {/* ROTAS DA HOME PAGE */}
        {/* <Route path="/cardapio" element={<CardapioPage />} />
        <Route path="/contatos" element={<ContatosPage />} />
        <Route path="/sobre" element={<SobrePage />} /> */}

        {/* ROTAS LOGADO */}
        {/* <Route path="/pedidos" element={<PedidosPage />} />
        <Route path="/fazer-pedido" element={<FazerPedidoPage />} />
        <Route path="/vendas" element={<VendasPage />} />
        <Route path="/cadastro" element={<Cadastro />} /> */}



        {/* Adicione rotas para outras páginas aqui */}
      </Routes>
    </BrowserRouter>
  );

export default routes;
