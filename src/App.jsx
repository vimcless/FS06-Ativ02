import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from "./components/Navbar"
import Carrinho from "./pages/Carrinho"
import FormEndereco from "./pages/FormEndereco"
import Products from "./pages/Products"
import Favorite from "./pages/Favorite"
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<h1>Ola mundo</h1>} />
          <Route path="/listar" element={<Products/>} />
          <Route path="/endereco" element={<FormEndereco/>} />
          <Route path="/carrinho" element={<Carrinho/>} />
          <Route path="/favoritos" element={<Favorite/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}