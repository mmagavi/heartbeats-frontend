import Slider from "@mui/material/Slider";
import { ReactComponent } from "react-hotkeys";
import {
  Slider_Role,
  Slider_AriaLabel,
} from "../accessibility/Aria";
import { Mark } from "@mui/base";

/**
 * Props for SliderUI: currentVal and setCurrentVal of slider
 */
interface SliderProps {
    currentVal: number;
    setCurrentVal: (data: number) => void;
    id: number;
}

/**
 * Slider component to select a heart rate in range
 * @param props - SliderProps: currentVal & setCurrentVal
 * @constructor
 */
export default function SliderUI(props: SliderProps): ReactComponent {
    let MIN = -1;
    let MAX = -1;
    let DEFAULT = -1;
    let ROLE = "";
    let MARKS: boolean | Mark[] | undefined = [];

  if (props.id == 2) {
    MIN = 55;
    MAX = 100;
    DEFAULT = 70;
    ROLE = "Slider1";
  } if (props.id == 3) {
    MIN = 20;
    MAX = 180;
    DEFAULT = 30;
    ROLE = "Slider2";
  }

  function handleChange(n: number) {
    props.setCurrentVal(n);
  }

  return (
    <div
      className="SliderContainer"
      aria-label={Slider_AriaLabel}
      role={Slider_Role}
      tabIndex={0}
    >
      <Slider
          size="medium"
          sx={{
            '& .MuiSlider-thumb': {
                color: 'rgb(255,65,65)',
                backgroundImage: 'linear-gradient(315deg, #fg0600 0%, #ff0000 74%)',
            },
            '& .MuiSlider-track': {
              color: 'rgb(255,26,26)',
            },
            '& .MuiSlider-active': {
              color: "green"
            },
          color: "white",
              mark: {
                  color: "red"
              },
              fontSize: 14,
          }
          }
          valueLabelDisplay="on"
        // valueLabelDisplay="auto"
        aria-label="custom thumb label"
        defaultValue={DEFAULT}
        role={ROLE}
        onChange={(e, n, _) =>
          typeof n === "number" ? handleChange(n) : handleChange(n[0])
        }
        min={MIN}
        max={MAX}
        // marks={MARKS}
      />
    </div>
  );
}
