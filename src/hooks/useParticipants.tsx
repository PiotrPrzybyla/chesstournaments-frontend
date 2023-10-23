interface IParticipant {
  user_id: string;
  name: string;
}

interface IUseParticipantsReturnValue {
  participants: IParticipant[];
}
export const useParticipants = (
  tournament_id: string | undefined
): IUseParticipantsReturnValue => {
  return {
    participants: [
      { user_id: "1", name: "name" },
      { user_id: "1", name: "name" },
      { user_id: "1", name: "name" },
      { user_id: "1", name: "name" },
      { user_id: "1", name: "name" },
    ],
  };
};
