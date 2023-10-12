import React from 'react'
import { AppBar, Container, Link, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next';
import { INavElement } from './types';

interface INavigationProps {}

const Navigation:React.FC<INavigationProps> = () => {
    const {t} = useTranslation("navigation");
    const pages = t("title");
    console.log(pages)
  return (
    <AppBar position="static">
         <Container maxWidth="xl">
         <Toolbar disableGutters>
         
         <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ChessTournaments
          </Typography>
         
              {JSON.parse(t("pages")).map(({name, link} : INavElement) => (
                <MenuItem key={name} >
                  <Typography   textAlign="center"> <Link href={`/${link}`}>{name}</Link></Typography>
                </MenuItem>
              ))}
         
         </Toolbar>
         </Container>
        </AppBar>
  )
}

export default Navigation