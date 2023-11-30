import { Grid, Link, Typography } from "@mui/material";
import React from "react";
import { IGroup } from "./types";
import { WideCard } from "../../styles/Card";

interface IGroupsElementProps {
  group: IGroup;
}

const GroupsElement: React.FC<IGroupsElementProps> = ({ group }) => {
  const { group_id, name, description, rating } = group;
  return (
    <WideCard variant="outlined">
      <Link href={`/group/${group_id}`} color="inherit" underline="none">
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid xs={2} item>
            {name}{" "}
          </Grid>
          {rating !== undefined && (
            <Grid xs={2} item>
              <Typography color={rating >= 50 ? "green" : "red"}>
                {`${rating}%`}
              </Typography>
            </Grid>
          )}

          <Grid xs={8} item>
            {description}
          </Grid>
        </Grid>
      </Link>
    </WideCard>
  );
};

export default GroupsElement;
