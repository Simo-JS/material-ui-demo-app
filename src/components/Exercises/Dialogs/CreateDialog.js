import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/styles";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Fab,
  TextField,
  FormControl,
  MenuItem,
  InputLabel
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Select from "@material-ui/core/Select";

const styles = {
  FormControl: {
    width: 500
  }
};

class CreateDialog extends Component {
  state = {
    open: false,
    exercise: {
      id: "",
      title: "",
      description: "",
      muscles: ""
    }
  };
  handleToggle = () => {
    this.setState({ open: !this.state.open });
  };

  handleChange = (e, name) => {
    this.setState({
      exercise: {
        ...this.state.exercise,
        [name]: e.target.value
      }
    });
  };

  handleSubmit = () => {
    const { exercise } = this.state;
    exercise.id = exercise.title.toLowerCase().replace(/ /g, "-");
    this.props.handleCreate(exercise);
    this.setState({
      open: false,
      exercise: {
        id: "",
        title: "",
        description: "",
        muscles: ""
      }
    });
  };

  render() {
    const {
      exercise: { title, description, muscles }
    } = this.state;
    const { categories, classes } = this.props;
    return (
      <Fragment>
        <Fab color="primary" size="medium" onClick={this.handleToggle}>
          <AddIcon />
        </Fab>
        <Dialog open={this.state.open} onClose={this.handleToggle}>
          <DialogTitle id="form-dialog-title">Create new exercise</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill in the bellow form to add a new exercise.
            </DialogContentText>
            <form>
              <TextField
                className={classes.FormControl}
                label="Title"
                value={title}
                onChange={e => this.handleChange(e, "title")}
                margin="normal"
              />
              <br />
              <FormControl>
                <InputLabel htmlFor="muscles">Muscles</InputLabel>
                <Select
                  className={classes.FormControl}
                  value={muscles}
                  onChange={e => this.handleChange(e, "muscles")}
                >
                  {categories.map(category => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <br />
              <TextField
                className={classes.FormControl}
                label="Description"
                multiline
                rowsMax="4"
                value={description}
                onChange={e => this.handleChange(e, "description")}
                margin="normal"
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button
              color="primary"
              variant="contained"
              onClick={this.handleSubmit}
            >
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

export default withStyles(styles)(CreateDialog);
