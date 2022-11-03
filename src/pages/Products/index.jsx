import React from "react";
import {Card,CardContent,CardActionArea,CardMedia,Divider,Button,IconButton,Typography} from "@mui/material";
import {Add,Star,StarBorder} from '@mui/icons-material';
import "./styles.css";
export default function Products() {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    fetch('http://localhost:8000/produtos')
    .then(res => res.json())
    .then(dados => setItems(dados));
            //npx json-server db.json --port 8000
  }, []);
  const addProduto = (nome, valor) => {
    fetch('http://localhost:8000/carrinho', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        nome: nome,
        valor: valor,
        quantidade: 1
      })
    });
  };
    const favProduto = (nome, valor) => {
      fetch('http://localhost:8000/favoritos', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          nome: nome,
          valor: valor,
          quantidade: 1
        })
      });
    };
    const CadaProduto = (props) => {
        return (
            <Card style={{marginTop: '10px'}}>
                <CardActionArea>
                    <CardMedia component="img" height="200" image={props.foto}/>
                    
                    <CardContent>
                        <Typography variant="h5">{props.nome}</Typography>
                    </CardContent>
                </CardActionArea>

                <CardContent>
                    <Divider/>
                    <div style={{display: 'flex', marginTop: 10, justifyContent: 'space-between'}}>
                        <Typography>R$ {props.valor}</Typography>
                        <div align="right">
                          <IconButton onClick={() => addProduto(props.nome, props.valor)} aria-label="Favorito" component="label" color="warning" size="large"><StarBorder/></IconButton>
                          <IconButton onClick={() => favProduto(props.nome, props.valor)} color="success" size="large"><Add/></IconButton>
                        </div>
                    </div>
                </CardContent>
            </Card>
        )
    }

    return (
        <div className="page-products">
            <h2>Quantidade de produtos {items.length}</h2>
            
            <hr/>

            {/* {items.map( p => <CadaProduto nome={p.nome} valor={p.valor} /> )} */}

            {items.map( p => <CadaProduto {...p} /> )}

        </div>
    )
}