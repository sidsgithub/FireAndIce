import React from "react";
import _ from "lodash";
import PropTypes from 'prop-types';
import {
  Box,
  Typography,
  CardContent,
  CardActions,
  Card,
  Button
} from "@mui/material";

const HouseComponent = (props) => {
  const {
    house,
    showAnswer,
    setShowAnswer,
    clicked,
    setClicked,
    generateRandomHouseHandler
  } = props;
  return (
    <div>
      {_.get(house, "name") ? (
        <Card sx={{ maxWidth: 500 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 22 }}
              color="text.secondary"
              component="div"
            >
              Guess the House
            </Typography>

            {_.get(house, "region") ? (
              <Typography>
                It belongs to : {_.get(house, "region")}
              </Typography>
            ) : null}

            {_.get(house, "titles[0]") ? (
              <Typography>Titled : {_.get(house, "titles[0]")}</Typography>
            ) : null}

            {_.get(house, "seats[0]") ? (
              <Typography>One of the seat here is of : {_.get(house, "seats[0]")}</Typography>
            ) : null}
            {showAnswer && _.get(house, "name") ? (
              <Typography variant="h5">
                The answer is : {_.get(house, "name")}
              </Typography>
            ) : null}
          </CardContent>
          <CardActions>
            <Button disabled={showAnswer} onClick={() => setShowAnswer(true)}>
              Show Answer
            </Button>
          </CardActions>
        </Card>
      ) : (
        clicked && (
          <Box
            sx={{
              width: 120,
              height: 20,
              color: "white",
              background: "grey",
            }}
          >
            {" "}
            Try again please !
          </Box>
        )
      )}
      <Button
        onClick={() => {
          generateRandomHouseHandler();
          setClicked(true);
        }}
      >
        New House
      </Button>
    </div>
  );
};

HouseComponent.prototype = {
    house: PropTypes.objectOf(PropTypes.any),
    showAnswer: PropTypes.bool,
    setShowAnswer: PropTypes.func.isRequired,
    clicked: PropTypes.bool,
    setClicked: PropTypes.func.isRequired,
    generateRandomHouseHandler: PropTypes.func.isRequired,
    backdropOpen: PropTypes.bool
}

HouseComponent.defaultProps = {
    house: {},
    showAnswer: false,
    clicked: false,
    backdropOpen: false
}

export default HouseComponent;