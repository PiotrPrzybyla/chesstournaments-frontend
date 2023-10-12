import React from 'react'
import { useTranslation } from 'react-i18next'
import UIGenerator from '../components/UIGenerator/UIGenerator';

interface ITournamentsPageProps {}

const TournamentsPage:React.FC<ITournamentsPageProps> = () => {
  const { t } = useTranslation("tournaments");
  return (
    <UIGenerator>{`${t("title")}`}</UIGenerator>
  )
}

export default TournamentsPage