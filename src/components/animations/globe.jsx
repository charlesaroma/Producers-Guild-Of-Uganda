import createGlobe from "cobe";
import { useEffect, useRef } from "react";

// https://github.com/shuding/cobe

export default function Globe() {
  const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.1, 0.4, 0.8],
      markerColor: [1, 0.5, 0],
      glowColor: [0.1, 0.4, 0.8],
      markers: [
        { location: [0.3136, 32.5811], size: 0.1 }
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      }
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="App">
      <canvas
        ref={canvasRef}
        style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      />
    </div>
  );
}
