import React, { useState } from 'react';
import Plot from './components/Plot/Plot';
import Mol2Viewer from './components/Mol';

function App() {
  const plots = [0, 5, 10, 15, 20, 25, 30, 40, 50, 60];
  const [openPlotIndex, setOpenPlotIndex] = useState(0);
  const [theta, setTheta] = useState(0); 
  const [phi, setPhi] = useState(0);

  const handleClick = (index, phi) => {
    setPhi(phi);
    setOpenPlotIndex(openPlotIndex === index ? null : index);
  };

  const handlePointClick = (xValue) => {
    setTheta(xValue); 
  };

  const getFilePath = (phi, theta) => {
    return `Dimethyl_Naphthalene_Dicarboximide_Phi_${phi}_Theta_${theta}_Thiophene.mol2`;
  };

  const currentFilePath = openPlotIndex !== null ? getFilePath(plots[openPlotIndex], theta) : '';

  return (
    <div className="App" style={{ marginTop: '50px', marginLeft: '30px' }}>
      <h1 style={{ position: 'fixed', top: '40px', left: '50px', width: '100%', backgroundColor: 'white', zIndex: 1 }}>
        Visualization Tool for Energy Displacement of Electron Delocalization
      </h1>
      <div style={{ marginTop: '150px' }}>
        {plots.map((phi, index) => (
          <div key={phi} style={{ padding: '17px' }}>
            <button onClick={() => handleClick(index, phi)}>Phi = {phi}</button>
            {openPlotIndex === index && <Plot Phi={phi} onPointClick={handlePointClick} />}
          </div>
        ))}
      </div>
      <h3 style={{ position: 'fixed', top: '140px', left: '900px'}}>
           Dimethyl Naphthalene Dicarboximide Thiophene
      </h3>
      <h4 style={{ position: 'fixed', top: '180px', left: '900px'}}>
        Phi= {phi} and Theta= {theta}
      </h4>
      <div style={{ position: 'fixed', top: '240px', left: '900px', border: "2px solid black"}}>
        <Mol2Viewer filePath={currentFilePath}/>
      </div>
    </div>
  );
}

export default App;
