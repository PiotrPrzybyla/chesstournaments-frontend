interface IUserInfoReturnValue {
  username: string;
  name: string;
  surname: string;
  isOrganizer: boolean;
}
export const useUserInfo = (
  user_id: string | undefined
): IUserInfoReturnValue => {
  return {
    username: "Username",
    name: "Name",
    surname: "Surname",
    isOrganizer: false,
  };
};
