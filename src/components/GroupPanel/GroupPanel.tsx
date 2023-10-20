import React from "react";
import { useParams } from "react-router";
import JoinLeaveGenerator from "../Generators/JoinLeaveGenerator";
import { useGroupInfo } from "../../hooks/useGroupInfo";
import { getIsGroupMember } from "./utils";

interface IGroupPanelProps {}

const GroupPanel: React.FC<IGroupPanelProps> = () => {
  const { group_id } = useParams<{ group_id: string }>();
  const { name, description } = useGroupInfo(group_id);
  const user_id = 1;
  const isMember = getIsGroupMember(group_id, user_id);
  return (
    <JoinLeaveGenerator
      title={name}
      description={description}
      isMember={isMember}
    ></JoinLeaveGenerator>
  );
};

export default GroupPanel;
