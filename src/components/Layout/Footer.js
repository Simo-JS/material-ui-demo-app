import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";

export default props => {
  const tempIndex = props.muscles.findIndex(
    category => category === props.category
  );
  const index = tempIndex < 0 ? 0 : tempIndex + 1;
  return (
    <Paper>
      <Tabs
        value={index}
        onChange={(e, index) => {
          if (index === 0) props.onSelect("");
          else props.onSelect(props.muscles[index - 1]);
        }}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab key="All" label="All" />
        {props.muscles.map(muscle => (
          <Tab key={muscle} label={muscle} />
        ))}
      </Tabs>
    </Paper>
  );
};
