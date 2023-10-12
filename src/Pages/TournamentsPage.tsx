import React from 'react'
import { useTranslation } from 'react-i18next'

interface ITournamentsPageProps {}

const TournamentsPage:React.FC<ITournamentsPageProps> = () => {
  const { t } = useTranslation("tournaments");
  return (
    <div>{`${t("title")}`}</div>
  )
}

export default TournamentsPage