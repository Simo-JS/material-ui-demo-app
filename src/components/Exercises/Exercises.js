import React, { Fragment } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

const styles = {
  padding: 10,
  marginTop: 10,
  marginBottom: 10,
  height: 500,
  overflowY: "auto"
};

export default props => {
  return (
    <Grid container>
      <Grid item sm>
        <Paper style={styles}>
          {props.exercises.map(([muscles, exercises]) =>
            props.category === "" || muscles === props.category ? (
              <Fragment key={muscles}>
                <Typography variant="h5">{muscles}</Typography>
                <List component="ul">
                  {exercises.map(exercise => (
                    <ListItem
                      key={exercise.id}
                      onClick={() => props.clicked(exercise)}
                      button
                    >
                      <ListItemText primary={exercise.title} />
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            ) : null
          )}
        </Paper>
      </Grid>

      <Grid item sm>
        <Paper style={styles}>
          <Typography style={{ marginTop: 10 }} variant="h4">
            {props.exercise.title}
          </Typography>
          <Typography style={{ marginTop: 10 }} variant="body1">
            {props.exercise.description}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};
