import React, {useEffect} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { observer } from 'mobx-react';
import {
  Link
} from "react-router-dom";
import NewStore from '../mobx/NewStore';




const Home = observer (() => {
  useEffect(() => {
    NewStore.getNewsAsync();
  },[])

  const homeState = NewStore.newData
  console.log(homeState, 'home')

  return (
    <div className='Home'>
     { homeState.map(news=> (
     <div className='Home_Card'>
      <Card sx={{ maxWidth: 545 , mt: 5, ml: 50,}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={news.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {news.author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {news.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to='/detail' className="btn" style={{textDecoration: 'none'}}><Button size="small" style={{fill: "white"}}>Learn More</Button></Link>
      </CardActions>
     </Card>
     </div>
     ))}
    </div>
  );
})
export default Home;