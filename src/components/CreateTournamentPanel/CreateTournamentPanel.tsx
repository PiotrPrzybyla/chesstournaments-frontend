import { Button, Container } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  CenterWideFormControl,
  FormTextField,
  FormTitle,
} from "../../styles/Form";
import { formatDate } from "../../utils/formatDate";
import { fetchHandler } from "../../utils/fetchHandler";
import { BASE_BACKEND_URL } from "../../utils/consts";
import { useNavigate } from "react-router-dom";

interface ICreateTournamentPanelProps {}

const CreateTournamentPanel: React.FC<ICreateTournamentPanelProps> = () => {
  const { t } = useTranslation("createTournament");
  const [name, setName] = React.useState("");
  const [city, setCity] = React.useState("");
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  const [participants, setParticipants] = React.useState(0);
  const [description, setDescription] = React.useState("");
  const navigate = useNavigate();
  const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleCityInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };
  const handleDateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(formatDate(event.target.value));
  };
  const handleTimeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(event.target.value);
  };
  const handleParticipantsInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setParticipants(parseInt(event.target.value));
  };
  const handleDescriptionInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };
  const goodCallback = async (response: Response) => {
    const data = await response.json();
    navigate(`/tournament/${data.tournamentId}`);
  };
  const submitForm = () => {
    fetchHandler({
      url: `${BASE_BACKEND_URL}/api/tournament`,
      method: "POST",
      body: {
        name: name,
        address: city,
        date: `${date} ${time}`,
        description: description,
        participantsAmount: participants,
      },
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      goodCallback: goodCallback,
    });
  };
  return (
    <Container maxWidth="sm">
      <CenterWideFormControl>
        <FormTitle>{`${t("title")}`}</FormTitle>
        <FormTextField
          onChange={handleNameInput}
          type="text"
          variant="outlined"
          label={`${t("name")}`}
        />
        <FormTextField
          onChange={handleCityInput}
          type="text"
          variant="outlined"
          label={`${t("city")}`}
        />
        <FormTextField onChange={handleDateInput} type="date" />
        <FormTextField onChange={handleTimeInput} type="time" />
        <FormTextField
          onChange={handleParticipantsInput}
          type="number"
          variant="outlined"
          label={`${t("participants")}`}
        />
        <FormTextField
          onChange={handleDescriptionInput}
          type="text"
          variant="outlined"
          multiline
          rows={8}
          label={`${t("description")}`}
        />
        <Button onClick={submitForm}>{`${t("title")}`}</Button>
      </CenterWideFormControl>
    </Container>
  );
};

export default CreateTournamentPanel;
