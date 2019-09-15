import React, { Component } from "react";

import { Header, Footer } from "./components/Layout/";

import Exercises from "./components/Exercises/Exercises";

import { muscles, exercises } from "./store";

export default class extends Component {
  state = {
    exercises,
    muscles,
    category: "",
    exercise: {
      title: "Welcome",
      description: "Select an exercise to see its description!"
    }
  };

  handleCategorySelected = category => {
    this.setState({ category });
  };

  handleExerciseSelected = exercise => {
    this.setState({ exercise });
  };

  handleExerciseCreate = exercise => {
    this.setState((prevState, props) => ({
      exercises: prevState.exercises.concat(exercise)
    }));
  };

  getExercisesByMuscles = () => {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;
        if (exercises[muscles])
          exercises[muscles] = [...exercises[muscles], exercise];
        else exercises[muscles] = [exercise];
        return exercises;
      }, {})
    );
  };

  render() {
    return (
      <>
        <Header
          categories={this.state.muscles}
          handleCreate={this.handleExerciseCreate}
        />
        <Exercises
          category={this.state.category}
          exercise={this.state.exercise}
          clicked={this.handleExerciseSelected}
          exercises={this.getExercisesByMuscles()}
        />
        <Footer
          muscles={muscles}
          category={this.state.category}
          onSelect={this.handleCategorySelected}
        />
      </>
    );
  }
}
