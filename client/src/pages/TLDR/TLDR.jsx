import React from "react";
import "./TLDR.css";
import ExpPageTitle from "../../components/ExpPageTitle/ExpPageTitle.jsx";
import SliderGallery from "../../components/ui/SliderGallery/SliderGallery.jsx";
import DemoPopover from "../../components/DemoPopover/DemoPopover.jsx";
import WordModal from "../../components/Experiments/WordModal/WordModal.jsx";
import { Speech } from "lucide-react";

const TLDR = () => {
  const demoRef = React.useRef(null);
  return (
    <div className="tldr-wrap">
      <ExpPageTitle title="TL;DR" />

      <div className="tldr-content">
        <p>Hi Javi, thanks for taking the time to have a chat.</p>
        <p>
          Most of the projects that I have worked on are owned by the respective
          enterprise and hence I do not have a large full-stack project to share
          with you at the moment. However, here are a few things that I have
          been working on lately. I hope this can give you an insight on my
          approach to coding and solving problems in general.
        </p>
        <p className="tldr-subheader">Currently</p>
        <p>
          I am currently working on this Gallery Interface. When an image is
          clicked, it expands to show the caption and a short note. While
          expanded, you can also drag the image to dismiss it or close the
          fullscreen view. I wanted to see if I could emulate an iOS-like
          flick-to-dismiss interface.
        </p>
        <p>
          The code of the component is present{" "}
          <a
            href="https://github.com/harsh-1923/harsh/blob/main/client/src/components/ui/SliderGallery/SliderGallery.jsx"
            target="_blank"
          >
            here
          </a>
          {". "}
          <br />
          Here is a quick demo highlighting the component features.
        </p>
        <div className="tldr-demo-trigger-wrap">
          <DemoPopover
            src="https://imharsh.s3.eu-north-1.amazonaws.com/F1Gallery.mp4"
            title="Gallery"
          />
        </div>
        <SliderGallery />
        <br />
        <br />
        <p>
          This is still a work in progress, and I haven't shared it with anyone
          yet. I intend to add features like swiping to switch between images
          while they are expanded and to fix some minor issues. I would highly
          appreciate any feedback from you as well.{" "}
        </p>
        <p>
          <a
            href="https://github.com/harsh-1923/harsh/blob/main/client/src/components/DemoPopover/DemoPopover.jsx"
            target="_blank"
          >
            Here
          </a>{" "}
          is how I built the DemoViewer. I tried to create an iOS BottomSheet
          like experience with this.{" "}
        </p>
        <p>
          Oh! I forgot to mention that I am an F1 fan, which influenced my
          choice of images. Fun fact – we are having the Spanish Grand Prix this
          weekend.
        </p>
        <p className="tldr-subheader">Previously</p>
        <p>
          This week, I also explored some popovers for blogs/documentation
          pages. The idea was to create a React component that could attach to a
          word (or any element in general) and display the popovers
          appropriately, without overflows and other hiccups.
        </p>
        <p>
          Here is a short demo. Try clicking on any of the highlighted words to
          quickly preview their meanings.{" "}
        </p>
        <div className="tldr-divider"></div>
        <div style={{ fontStyle: "italic" }} ref={demoRef}>
          In the tranquil embrace of solitude, amidst the verdant{" "}
          <WordModal boundingRef={demoRef} word="tapestry">
            <Dictionary
              word="tapestry"
              pronunciation="/ˈtæpəstri/"
              type="noun"
              meaning="a heavy cloth that has designs or pictures woven into it and that is used for wall hangings, curtains, etc."
              usage="The tapestry on the castle walls depicted scenes from ancient battles."
            />
          </WordModal>{" "}
          of a riverside grove, there sat a soul in{" "}
          <WordModal boundingRef={demoRef} word="poignant">
            <Dictionary
              word="poignant"
              pronunciation="/ˈpɔɪnjənt/"
              type="adjective"
              meaning="evoking a keen sense of sadness or regret"
              usage="His speech left a poignant impression on everyone present."
            />
          </WordModal>{" "}
          contemplation. Here, where the murmurs of the flowing stream whispered
          secrets to the{" "}
          <WordModal boundingRef={demoRef} word="sylvan">
            <Dictionary
              word="sylvan"
              pronunciation="/ˈsɪlvən/"
              type="adjective"
              meaning="relating to or characteristic of woods or forests"
              usage="The sylvan scenery of the national park was breathtaking. \n The sylvan scenery of the national park was breathtaking. "
            />
          </WordModal>{" "}
          sentinels, and where the caress of{" "}
          <WordModal boundingRef={demoRef} word="zephyr">
            <Dictionary
              word="zephyr"
              pronunciation="/ˈzɛfər/"
              type="noun"
              meaning="a gentle, mild breeze"
              usage="The zephyr rustled the leaves in the quiet afternoon."
            />
          </WordModal>{" "}
          carried the fragrant hymns of blossoms in bloom, lingered a man of
          profound introspection. <br />
        </div>
        <div className="tldr-divider"></div>
        <p>
          The code of the component is present{" "}
          <a
            href="https://github.com/harsh-1923/harsh/blob/main/client/src/components/Experiments/WordModal/WordModal.jsx"
            target="_blank"
          >
            here
          </a>
          {". "}
        </p>
        <p>
          I am also exploring ways to show comments, referrences in the
          popovers. I was particularly happy with this component, since popovers
          in general are hard. Google recently came up with the Popover API and
          X struggles with Popovers in its Analytics Screen. So, it was a fun
          experiment for me and a good learning curve.
        </p>{" "}
        {/* <video
          className="tldr-video"
          src={
            "https://imharsh.s3.eu-north-1.amazonaws.com/RPReplay_Final1719010387.mov"
          }
          style={{ maxHeight: "700px" }}
          autoPlay
          loop
          muted
          controlsList="nofullscreen"
          disablePictureInPicture
          playsInline
        /> */}
        <div className="tldr-subheader">Relevant Work Experience</div>
        <p>
          Our conversation on Stack AI's product felt very "known" to me.
          Probably because of my work experience at SlangLabs before I joined
          Airbus.
        </p>
        <p>
          At Slang, I was involved with making the interface for our AI-powered
          Voice Assistant.
        </p>
        <img
          className="tldr-img"
          src="https://imharsh.s3.eu-north-1.amazonaws.com/SlangSurface.jpg"
        />
        <p>
          Along with the interface, I was also heavily involved in building our
          Console - a one stop solutions for Product Managers to carry out core
          functionality of the assistant
        </p>
        <ul>
          <li>Generate API keys, create Assistants for their products </li>

          <li>
            Upload, updatate and manage inventory data to keep the assistant
            trained on the latest inventory
          </li>
          <li>
            Follow up on key engagement metrics to improve performance and
            streamline inventory supply based on demand
          </li>
          <li>
            Allow PMs to create automated workflows using intuitive UI to couple
            backend services - reducing the need for developer involvment for
            quick changes and feature experiments
          </li>
        </ul>
        <p>
          It was thrilling to discuss the work at Stack AI—the possibilities
          seem immensely promising. It certainly is an exhilarating place to be.
        </p>
        <div className="tldr-divider"></div>
        <p>Here are a few other links that could be of your interest:</p>
        <ul>
          <li>
            <a href="https://leetcode.com/u/harsh_ju_sharma/" target="_blank">
              LeetCode Profile
            </a>
          </li>{" "}
          <li>
            <a href="https://github.com/harsh-1923/flint-app" target="_blank">
              Flint App:
            </a>{" "}
            a side project that I built 2 years ago when I started learning
            React, in case you wanted to see how bad I was haha
          </li>{" "}
        </ul>
      </div>

      <div className="filler" />
    </div>
  );
};

const Dictionary = ({ word, pronunciation, type, usage, meaning }) => {
  return (
    <div className="dictionary-wrap">
      <p className="dictionary-word">{word}</p>

      <div className="dictionary-details-bar">
        <Speech size={18} strokeWidth={1.8} />
        <p className="dictionary-pronounciation">{pronunciation}</p>•
        <p className="dictionary-type">{type}</p>
      </div>

      <p className="dictionary-meaning">{meaning}</p>
      {usage && <p className="dictionary-usage">"{usage}"</p>}
    </div>
  );
};
export default TLDR;
