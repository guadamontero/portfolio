import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Row } from 'react-bootstrap';
import { useThemeContext } from '../../hooks/themeHook';
import { useTranslation } from 'react-i18next';

function Github() {
  const { t } = useTranslation();
  const { dark } = useThemeContext();

  // personalized colors for the
  // contributions calendar
  const colourTheme = dark
    ? // colors for the dark theme
      {
        background: 'transparent',
        text: '#ffffff',
        level4: '#7b52ab',
        level3: '#69419d',
        level2: '#4b2b81',
        level1: '#351c65',
        level0: '#161b22',
      }
    : // colors for the white theme
      {
        background: 'transparent',
        level4: '#351c65',
        level3: '#4b2b81',
        level2: '#69419d',
        level1: '#7b52ab',
        level0: '#ebedf0',
      };

  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '40px' }}>
      <h1
        className="project-heading"
        style={{ paddingBottom: '20px' }}
      >
        <strong className="green">Github</strong> {t('Activity')}
      </h1>

      <GitHubCalendar
        username="guadamontero"
        blockSize={16}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
