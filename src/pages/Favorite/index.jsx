import React from "react";
import {Card,CardContent,CardActionArea,CardMedia,Divider,IconButton,Container,Typography} from "@mui/material";
import {Star,StarBorder} from '@mui/icons-material';
import "./styles.css"
export default function Favorite () {
  const [fav, setFav] = React.useState([]);
  React.useEffect(() => {
    fetch('http://localhost:8000/favoritos')
    .then(res => res.json())
    .then(dados => {
    setFav(dados);
  });
}, []);
  const favProduto = (id) => {fetch(`http://localhost:8000/favoritos/${id}`, {method: 'DELETE'})};
  return (
    <div align="center">
      <h1> 
        <StarBorder/><Star/><StarBorder/> Favoritos <StarBorder/><Star/><StarBorder/>
      </h1>
      <Divider/>
      { fav.map(cadaFav => {
        return (
          <Card className='page-products'>
                <CardActionArea>
                    <CardMedia component="img" height="200" image={cadaFav.foto}/>
                    
                    <CardContent>
                        <Typography variant="h5"><a href="http://localhost:3000/listar">{cadaFav.nome}</a></Typography>
                    </CardContent>
                </CardActionArea>

                <CardContent>
                    <Divider/>
                    <div>
                        <div align="center">
                          <IconButton onClick={() => favProduto(cadaFav.id)} aria-label="Desfavorito" component="label" color="warning" size="large"><Star/></IconButton>
                        </div>
                    </div>
                </CardContent>
            </Card>
        )
        }) 
      }
      
      </div>
    )
}

/*
<div>
            <span><a href="http://localhost:3000/listar">{cadaFav.nome}</a></span>
            <IconButton onClick={() => favProduto(cadaFav.id)} aria-label="Desfavorito" component="label" color="warning" size="large"><Star/></IconButton>
          </div>
*/