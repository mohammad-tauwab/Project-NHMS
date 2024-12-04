// LoaderSpinner.js
import { PuffLoader,BounceLoader } from "react-spinners";

function Spinner({ loading = true, size = 80, color = "#36d7b7" }) {

  return (
    <div className="flex justify-center bg-slate-400">
      {/* <PuffLoader color={color} loading={loading} size={size} /> */}
      <BounceLoader color={color} loading={loading} size={size} speedMultiplier={1}></BounceLoader>
    </div>
  );
}

export default Spinner;

/**
 * 
 * Available Spinners in react-spinners
 * 
PuffLoader

A smooth, puff-like animation.
Ideal for lightweight designs.
Props: size, color, speedMultiplier.
ClipLoader

A spinning circle loader with a minimalistic design.
Props: size, color, loading.
BounceLoader

A bouncing ball animation.
Props: size, color, speedMultiplier.
DotLoader

Three bouncing dots in a smooth loop.
Props: size, color, speedMultiplier.
BarLoader

A sleek, horizontal bar animation.
Props: width, height, color, speedMultiplier.
BeatLoader

A sequence of dots pulsating like a heartbeat.
Props: size, color, margin.
CircleLoader

A rotating, circular animation.
Props: size, color, speedMultiplier.
FadeLoader

A thin line-like loader that fades in and out as it spins.
Props: width, height, radius, color, speedMultiplier.
GridLoader

A grid of dots with a pulsating effect.
Props: size, color, margin.
HashLoader

A rotating hash-like animation.
Props: size, color.
MoonLoader

A crescent moon-shaped spinning animation.
Props: size, color, speedMultiplier.
PacmanLoader

A fun, animated Pac-Man loading animation.
Props: size, color, margin.
PropagateLoader

A propagation effect, where balls ripple outward.
Props: size, color, speedMultiplier.
RingLoader

A spinning ring animation.
Props: size, color, speedMultiplier.
RiseLoader

A rising and falling bar animation.
Props: size, color, margin.
RotateLoader

Bars rotating in a circular motion.
Props: size, color, margin.
ScaleLoader

Lines that scale up and down in a rhythmic pattern.
Props: height, width, radius, margin, color.
SyncLoader

Dots bouncing in sync.
Props: size, color, margin.
 * 
 */