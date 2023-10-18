interface IuseTournamentInfoReturnValue {
  tournament_id: number;
  title: string;
  location: string;
  date: string;
  time: string;
  description: string;
}
const useTournamentInfo = (
  tournament_id: string | undefined
): IuseTournamentInfoReturnValue => {
  return {
    tournament_id: 1,
    title: "Event title",
    location: "Wrocław",
    date: "23.11.2023",
    time: "12:00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc.",
  };
};

export default useTournamentInfo;
