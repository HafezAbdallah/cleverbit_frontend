import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getAllMatches } from '../Apis/apis';

const Home = () => {
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    getAllMatches()
      .then((apiResult) => {
        setMatches(apiResult);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      {matches.map((match: any, index) => {
        return (
          <Card
            sx={{ maxWidth: 275, marginBottom: 10, justifyContent: 'center' }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color='text.secondary'
                gutterBottom>
                winner Name
              </Typography>
              <Typography variant='h5' component='div'>
                {match.winner?.userName || 'still in play'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small'>Learn More</Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};
export default Home;
