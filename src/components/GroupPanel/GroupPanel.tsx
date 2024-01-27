import React from "react";
import { useParams } from "react-router";
import JoinLeaveGenerator from "../Generators/JoinLeaveGenerator";
import { useGroupInfo } from "../../hooks/useGroupInfo";
import LoadingCircle from "../LoadingCIrcle/LoadingCircle";
import { joinGroup, leaveGroup } from "./utils";

interface IGroupPanelProps {}

const GroupPanel: React.FC<IGroupPanelProps> = () => {
  const { group_id } = useParams<{ group_id: string }>();
  const { groupInfo, isMember, isLoading } = useGroupInfo(group_id);
  const { name, description } = groupInfo;
  return isLoading ? (
    <LoadingCircle />
  ) : (
    <JoinLeaveGenerator
      title={name}
      description={description}
      isMember={isMember}
      join={() => joinGroup(group_id)}
      leave={() => leaveGroup(group_id)}
    ></JoinLeaveGenerator>
  );
};

export default GroupPanel;
