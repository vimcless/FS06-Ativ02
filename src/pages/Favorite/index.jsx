import React from "react";
import {Divider} from "@mui/material";
import {Star,StarBorder} from '@mui/icons-material';
import "./styles.css"
export default function Favorite () {
  const [items, setItems] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  React.useEffect(() => {
    fetch('http://localhost:8000/favoritos')
    .then(res => res.json())
    .then(dados => {
    setItems(dados);
  });
}, []);
  return (
    <div align="center">
      <h1> 
        - <Star/> Favoritos -
      </h1>
      <Divider/>
      { items.map(cadaItem => {
        return (
          <div>
            <span>{cadaItem.nome}</span>
            <span>R$ {cadaItem.valor}</span>
          </div>
        )
        }) 
      }
      </div>
    )
}