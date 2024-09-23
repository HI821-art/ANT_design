import { Routes, Route } from 'react-router-dom';
import Pyramid from './GreatPyramid';
import ZeusStatue from './StatueOfZeus';
import HangingGardens from './HangingGardens';
import TempleOfArtemis from './TempleOfArtemis';
import Mausoleum from './MausoleumAtHalicarnassus';
import ColossusOfRhodes from './ColossusOfRhodes';
import LighthouseOfAlexandria from './LighthouseOfAlexandria';

const AppRoutes = () => {
  return ( 
    <Routes>
      <Route path="/pyramid" element={<Pyramid />} />
      <Route path="/zeus-statue" element={<ZeusStatue />} />
      <Route path="/hanging-gardens" element={<HangingGardens />} />
      <Route path="/temple-of-artemis" element={<TempleOfArtemis />} />
      <Route path="/mausoleum" element={<Mausoleum />} />
      <Route path="/colossus-of-rhodes" element={<ColossusOfRhodes />} />
      <Route path="/lighthouse-of-alexandria" element={<LighthouseOfAlexandria />} />
    </Routes>
  );
};

export default AppRoutes;
