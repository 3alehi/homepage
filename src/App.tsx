import React from 'react';
import Header from './pages/Header';
import Card from './pages/Card';
import Poster from './pages/Poster';
import Footer from './pages/Footer';
import SelectedExperiences from './pages/SelectedExperiences';

const App: React.FC = () => {
  return (
    <div className='font-estedad'>
   <Header/>
   <Card/>
   <Poster img={1} title='حجاب دژ و قلعه ای برای' title2='پاسداری از گوهر عفاف است.'/>
   <SelectedExperiences/>
   <Poster img={2} title='حجاب صدف است که از گوهر' title2='وجودی زن محافظت می کند.'/>
   <Footer/>
    </div>
  );
};

export default App;