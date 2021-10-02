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

const CharacterComponent = (props) => {
  const {
    character,
    showAnswer,
    setShowAnswer,
    clicked,
    setClicked,
    generateRandomCharacterHandler
  } = props;
  return (
    <div>
      {_.get(character, "name") ? (
        <Card sx={{ maxWidth: 500 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 22 }}
              color="text.secondary"
              component="div"
            >
              Guess the Character
            </Typography>

            {_.get(character, "aliases[0]") ? (
              <Typography>
                Know as : {_.get(character, "aliases[0]")}
              </Typography>
            ) : null}

            {_.get(character, "titles[0]") ? (
              <Typography>Titled : {_.get(character, "titles[0]")}</Typography>
            ) : null}

            {_.get(character, "died") ? (
              <Typography>Died : {_.get(character, "died")}</Typography>
            ) : null}

            {_.get(character, "playedBy[0]") ? (
              <Typography>
                And is played By : {_.get(character, "playedBy[0]")}
              </Typography>
            ) : null}
            {showAnswer && _.get(character, "name") ? (
              <Typography variant="h5">
                The answer is : {_.get(character, "name")}
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
          generateRandomCharacterHandler();
          setClicked(true);
        }}
      >
        New Character
      </Button>
      
    </div>
  );
};

CharacterComponent.prototype = {
    character: PropTypes.objectOf(PropTypes.any),
    showAnswer: PropTypes.bool,
    setShowAnswer: PropTypes.func.isRequired,
    clicked: PropTypes.bool,
    setClicked: PropTypes.func.isRequired,
    generateRandomCharacterHandler: PropTypes.func.isRequired,
    backdropOpen: PropTypes.bool
}

CharacterComponent.defaultProps = {
    character: {},
    showAnswer: false,
    clicked: false,
    backdropOpen: false
}

export default CharacterComponent;