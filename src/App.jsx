import React, { useState } from 'react';
import { Suspense } from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei';
import Earth from '../public/Earth.jsx';
import Satellite from '../public/Satellite.jsx';
import Satellite1 from '../public/Satellite1.jsx';
import Footer from './Footer.jsx';
import Tool from './components/Tool'; // Importazione corretta di Tool

function App() {
  const [showDiv, setShowDiv] = useState(false);

  return (
    <>
      <Canvas>
        {/* Luci e controlli per la scena */}
        <ambientLight />
        <OrbitControls enableZoom={false} />

        {/* Terra */}
        <Suspense fallback={null}>
          <Earth />
        </Suspense>

        {/* Primo Satellite sopra la Terra */}
        <Suspense fallback={null}>
          <Satellite position={[3, 1.5, 0]} />
        </Suspense>

        {/* Secondo Satellite sopra la Terra */}
        <Suspense fallback={null}>
          <Satellite1 position={[0, 0, 0]} />
        </Suspense>

        {/* Tool aggiunto */}
        <Suspense fallback={null}>
          <Tool position={[0, 0, 0]} />
        </Suspense>

        {/* Ambiente e ombre */}
        <Environment preset="sunset" />
        <ContactShadows position={[0, -3, 0]} opacity={0.5} scale={15} blur={1} far={10} resolution={256} />
      </Canvas>

      <div className='container'>
        <h1 onMouseEnter={() => setShowDiv(true)} onMouseLeave={() => setShowDiv(false)}>
          La Terra
        </h1>
        {showDiv && (
          <div className="hover-content">
            <h2>GODITI I SATELLITI CHE STANNO IN ORBITA!</h2>
          </div>
        )}

        <p>
          La Terra è il terzo pianeta del nostro sistema solare, situato a una distanza media di circa 149,6 milioni di chilometri (93 milioni di miglia) dal Sole...
        </p>
      </div>

      <Footer />
    </>
  );
}

export default App;
