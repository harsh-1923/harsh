import React from "react";
import "./WordModalPage.css";
import ExpPageTitle from "../../../components/ExpPageTitle/ExpPageTitle";
import WordModal from "../../../components/Experiments/WordModal/WordModal";

import { Speech } from "lucide-react";

const WordModalPage = () => {
  const demoRef = React.useRef(null);
  return (
    <div className="word-modal-page">
      <ExpPageTitle title="Word Popup" date="June 2024" />
      <div ref={demoRef} className="word-modal-demo">
        <div>
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
          of a riverside grove, there sat a soul in poignant contemplation.
          Here, where the murmurs of the flowing stream whispered secrets to the{" "}
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
          <br />
          His{" "}
          <WordModal boundingRef={demoRef} word="countenance">
            <Dictionary
              word="countenance"
              pronunciation="/ˈkaʊntənəns/"
              type="noun"
              meaning="a person's face or facial expression"
              usage="Her countenance showed a mixture of surprise and joy."
            />
          </WordModal>{" "}
          , etched with the furrows of unrevealed burdens, bespoke a spirit
          ensnared in the paradox of life's most exquisite gifts. For though the
          tapestry of his existence bore the woven threads of prosperity and
          serendipity, he remained steadfast in resistance, a beacon of defiance
          against the allure of joy untrammeled.
          <br />
          <br />
          In the solace of those hallowed riverbanks, where the cerulean waters
          mirrored the expanse of an azure sky, he wrestled with the{" "}
          <WordModal boundingRef={demoRef} word="verities">
            <Dictionary
              word="verities"
              pronunciation="/ˈvɛrɪtiz/"
              type="noun"
              meaning="the quality or state of being true or real"
              usage="He sought to understand the verities of human existence."
            />
          </WordModal>{" "}
          of fate and fortune. Amidst the ballet of sunlight and shadow, where
          each verdant leaf pirouetted in the gentle choreography of the breeze,
          he found himself ensnared in the throes of ambivalence.
          <br />
          <br />
          For every{" "}
          <WordModal boundingRef={demoRef} word="effulgent">
            <Dictionary
              word="effulgent"
              pronunciation="/ɪˈfʌldʒənt/"
              type="adjective"
              meaning="shining brightly; radiant"
              usage="The effulgent sun cast a warm glow over the meadow."
            />
          </WordModal>{" "}
          dawn that kissed the dew-kissed petals awake, and every dusk that
          draped the world in a tapestry of saffron and gold, he recoiled from
          the embrace of fleeting euphoria. The symphony of birdsong that
          orchestrated the dawn's awakening seemed but a distant echo to his
          ears, dulled by the armor of resilience he clad himself in.
          <br />
          <br />
          In the heart of that idyllic sanctuary, where time flowed as languidly
          as the river's meandering course, he was beset by an inner tempest—a
          tempest that raged against the gilded promises of blissful reprieve.
          Even as the seasons waltzed in their eternal cycle of birth and decay,
          he remained ensconced in a fortress of{" "}
          <WordModal boundingRef={demoRef} word="stoic">
            <Dictionary
              word="stoic"
              pronunciation="/ˈstoʊɪk/"
              type="adjective"
              meaning="enduring pain or hardship without showing one's feelings or complaining"
              usage="She maintained a stoic demeanor throughout the difficult ordeal."
            />
          </WordModal>{" "}
          resolve.
          <br />
          <br />
          Yet, amidst the{" "}
          <WordModal boundingRef={demoRef} word="verdure">
            <Dictionary
              word="verdure"
              pronunciation="/ˈvɜːrdʒər/"
              type="noun"
              meaning="lush green vegetation, especially grass or herbage"
              usage="The rolling hills were covered in verdure after the spring rains."
            />
          </WordModal>{" "}
          that framed his melancholic vigil, there bloomed a perennial hope—an
          incandescent ember that refused to be extinguished. For deep within
          the recesses of his being, beneath the{" "}
          <WordModal boundingRef={demoRef} word="veneer">
            <Dictionary
              word="veneer"
              pronunciation="/vəˈnɪər/"
              type="noun"
              meaning="a thin decorative covering of fine wood applied to coarser wood or other material"
              usage="The furniture had a veneer of mahogany that gave it a rich appearance."
            />
          </WordModal>{" "}
          of adamantine restraint, lay the whispered desire to relinquish the
          shackles of self-imposed restraint.
          <br />
          <br />
          Thus, as the river murmured its eternal lullaby and the stars bore
          witness to the symphony of his inner turmoil, he found himself
          standing at the precipice of revelation. For in the very act of
          resistance, he unearthed the paradox that had eluded him—a revelation
          that the most profound beauty often resides in the surrender to life's{" "}
          <WordModal boundingRef={demoRef} word="ineffable">
            <Dictionary
              word="ineffable"
              pronunciation="/ɪnˈɛfəbəl/"
              type="adjective"
              meaning="too great or extreme to be expressed or described in words"
              usage="The beauty of the sunset was ineffable, leaving us speechless."
            />
          </WordModal>{" "}
          grace.
        </div>
      </div>
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

export default WordModalPage;
