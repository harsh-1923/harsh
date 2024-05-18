import React, { useRef, useState } from "react";
import "./AppleNotesMenu.css";
import {
  TextIcon,
  ListBulletIcon,
  TableIcon,
  PlusIcon,
  CameraIcon,
} from "@radix-ui/react-icons";

import BackspaceIcon from "@mui/icons-material/Backspace";
import KeyboardCapslockIcon from "@mui/icons-material/KeyboardCapslock";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

const row1Keys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const row2Keys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const row3Keys = ["Z", "X", "C", "V", "B", "N", "M"];

const AppleNotesMenu = () => {
  const [reveal, setReveal] = useState(false);
  const optionsRef = useState(null);
  const menuRef = useRef(null);

  React.useEffect(() => {
    if (!menuRef.current) return;
    if (reveal) {
      optionsRef.current.style.bottom = "258px";
      optionsRef.current.style.transform = "rotate(-45deg)";
      optionsRef.current.style.color = "var(--gray-8)";
      menuRef.current.style.bottom = "250px";
    } else {
      optionsRef.current.style.bottom = "270px";
      optionsRef.current.style.transform = "rotate(0deg)";
      optionsRef.current.style.color = "orangered";
      menuRef.current.style.bottom = "210px";
    }
  }, [reveal]);
  return (
    <div className="apm-mobile-frame">
      <div className="apm-mobile-frame-app-switcher" />
      <small>Click on the Plus icon at the right.</small>
      <br />

      <small>Icons may differ from iOS icon.</small>

      <br />
      <small>The keyboard is disabled and made with code.</small>
      <p></p>
      <div className="apm-mobile-frame-option-icon" ref={optionsRef}>
        <PlusIcon
          onClick={() => setReveal(!reveal)}
          className="apm-mobile-icon"
        />
      </div>

      <div
        ref={menuRef}
        data-state-reveal={`${reveal ? "true" : "fasle"}`}
        className="apm-mobile-menu"
      >
        <div className="apm-mobile-menu-option">
          <TextIcon className="apm-mobile-option-icon" />
          <ListBulletIcon className="apm-mobile-option-icon" />
          <TableIcon className="apm-mobile-option-icon" />
          <CameraIcon className="apm-mobile-option-icon" />
        </div>
      </div>
      <div className="apm-mobile-frame-keyboard">
        <div className="apm-mobile-frame-keyboard-suggestions-row">
          <div className="apm-mobile-frame-keyboard-suggestion">I</div>
          <div className="apm-mobile-frame-keyboard-suggestion">The</div>
          <div className="apm-mobile-frame-keyboard-suggestion">to</div>
        </div>

        <div className="apm-mobile-frame-keyboard-row keyboard-row-1">
          {row1Keys.map((key, idx) => (
            <Key item={key} key={idx} />
          ))}
        </div>
        <div className="apm-mobile-frame-keyboard-row keyboard-row-2">
          {row2Keys.map((key, idx) => (
            <Key item={key} key={idx} />
          ))}
        </div>
        <div className="apm-mobile-frame-keyboard-row keyboard-row-3">
          <Key width="40px" item={<KeyboardCapslockIcon />} />
          {row3Keys.map((key, idx) => (
            <Key item={key} key={idx} />
          ))}
          <Key width="40px" item={<BackspaceIcon fontSize="small" />} />
        </div>

        <div className="apm-mobile-frame-mic">
          <KeyboardVoiceIcon />
        </div>
        <div className="apm-mobile-frame-emoji">
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  );
};

const Key = ({ item, width = "30px" }) => {
  return (
    <button disabled style={{ width: width }} className="apm-mobile-frame-key">
      {item}
    </button>
  );
};

export default AppleNotesMenu;
