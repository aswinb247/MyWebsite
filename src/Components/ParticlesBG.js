import particlesConfig from "./Config/ParticleConfig";
import { useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
const ParticlesBG = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (init) {
      return;
    }
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  return (
    <div className="particles-container">
      {init && <Particles options={particlesConfig}></Particles>}
    </div>
  );
};

export default ParticlesBG;
