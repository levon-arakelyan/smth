import { Box, Card, CardActionArea, CardContent, CardMedia, createTheme, CssBaseline, responsiveFontSizes, ThemeProvider, Typography } from "@mui/material";
import { SEO } from "../shared/Seo/Seo";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { reachTheNumber } from "../../core/constants/activities";
import rtnImg from '/src/assets/images/rtn.png';
import ConstructionIcon from '@mui/icons-material/Construction';
import { LanguageSwitcher } from "../shared/LanguageSwitcher/LanguageSwitcher";
import { styles } from "./styles";

export function ActivitiesList() {
  const { t } = useTranslation();

  const activities: any[] = [
    {
      id: reachTheNumber,
      name: t('rtnTitle'),
      description: t('rtnDescription'),
      path: `/${reachTheNumber}`,
      image: rtnImg
    }
  ];

  const theme = responsiveFontSizes(createTheme());
  return <>
    <CssBaseline />
    <SEO title={t('alTitle')} description={t('alDescription')}>
      <ThemeProvider theme={theme}>
        <Box sx={styles.mainBox}>
          <Box sx={styles.langBox}>
            <LanguageSwitcher isModal={false} />
          </Box>
          <Box sx={styles.titleBox}>
            <Typography variant="h5" sx={styles.titleMiniText}>{t('sitePrefix')}</Typography>
            <Typography variant="h2" sx={styles.titleText}>{t('alTitle')}</Typography>
            <Typography variant="h5" sx={styles.titleMiniText}>{t('sitePostfix')}</Typography>
          </Box>
          <Box sx={styles.activitesBox}>
            {activities.map(activity => (
              <Card key={activity.id}>
                <CardActionArea component={Link} to={activity.path}>
                  <CardMedia
                    sx={styles.activityMedia}
                    component="img"
                    alt={activity.name}
                    image={activity.image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" fontWeight='bold'>
                      {activity.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {activity.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
            <Card>
              <Box sx={styles.underConstructionBox}>
                <ConstructionIcon sx={styles.underConstruction} color='warning'/>
              </Box>
              <CardContent>
                <Typography gutterBottom variant="h5" fontWeight='bold' textAlign='center'>
                  {t('ucTitle')}
                </Typography>
                <Typography variant="body2" color="text.secondary" textAlign='center'>
                  {t('ucDescription')}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </ThemeProvider>
    </SEO>
  </>;
}