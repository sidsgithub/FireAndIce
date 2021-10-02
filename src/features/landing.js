
import { Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Landing = () => {
    return (
        <Card style={{'max-width':'500px'}}>
        <CardContent>
          <Typography sx={{ fontSize: 22 }} color="text.secondary">
            Welcome to the game of Fire and Ice
          </Typography>
          <Typography sx={{ mb: 1.1 }} color="text.secondary">
            Pick one :
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <Link to="/character" style={{ textDecoration: "none", color:'#1E88E5' }}>
              {" "}
              Guess the Characters
            </Link>
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
          OR
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <Link to="/house" style={{ textDecoration: "none", color:'#1E88E5'}}>
              Guess the Houses
            </Link>
          </Typography>
        </CardContent>
        </Card>
    )

}
export default Landing;