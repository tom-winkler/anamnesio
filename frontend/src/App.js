import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AnamnesisForm from './pages/AnamnesisForm';
import './styles/custom.css';
import './styles/fonts.css';
import './styles/theme.css';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      <div className="App">
        <div className="language-switcher">
          <button onClick={() => changeLanguage('en')}>EN</button>
          <button onClick={() => changeLanguage('de')}>DE</button>
        </div>
        <Switch>
          <Route path="/anamnesis" component={AnamnesisForm} />
          <Route path="/">
            <header className="App-header">
              <h1 className="welcome">{t('welcome')}</h1>
              <p className="question">{t('question')}</p>
            </header>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;