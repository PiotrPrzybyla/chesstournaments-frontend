import { Grid } from "@mui/material";
import React from "react";
import { IGroup } from "./types";
import GroupsElement from "./GroupsElement";

interface IGroupsListProps {
  groups: IGroup[];
}

const GroupsList: React.FC<IGroupsListProps> = ({ groups }) => {
  return (
    <Grid container spacing={2}>
      {groups.map((group, index) => (
        <Grid item xs={12} key={index}>
          <GroupsElement group={group} />
        </Grid>
      ))}
    </Grid>
  );
};

export default GroupsList;
