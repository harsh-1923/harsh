import React from "react";
import "./WordModalPage.css";
import ExpPageTitle from "../../../components/ExpPageTitle/ExpPageTitle";
import WordModal from "../../../components/Experiments/WordModal/WordModal";

const WordModalPage = () => {
  const demoRef = React.useRef(null);
  return (
    <div className="word-modal-page">
      <ExpPageTitle title="Word Modal" date="June 2024" />
      <div ref={demoRef} className="word-modal-demo">
        <div>
          In the{" "}
          <WordModal word="countenance" boundingRef={demoRef}>
            <Dictionary />
          </WordModal>{" "}
          embrace of solitude, amidst the verdant tapestry of a riverside grove,
          there sat a <WordModal word="soul"></WordModal> in poignant
          contemplation. Here, where the{" "}
          <WordModal word="countenance" boundingRef={demoRef}></WordModal> of
          the flowing{" "}
          <WordModal word="countenance" boundingRef={demoRef}></WordModal>
          whispered secrets to the sylvan sentinels, and where the caress of
          <WordModal word="countenance" boundingRef={demoRef}></WordModal>{" "}
          carried the fragrant hymns of blossoms in bloom, lingered a man of
          profound introspection.
          <br />
          <br />
          His <WordModal word="countenance" boundingRef={demoRef}></WordModal>,
          etched with the furrows of unrevealed burdens, bespoke a spirit
          ensnared in the paradox of life's most{" "}
          <WordModal word="countenance" boundingRef={demoRef}></WordModal>{" "}
          gifts. For though the tapestry of his existence bore the woven threads
          of prosperity and{" "}
          <WordModal word="countenance" boundingRef={demoRef}></WordModal>, he
          remained steadfast in resistance, a beacon of{" "}
          <WordModal word="countenance" boundingRef={demoRef}></WordModal>{" "}
          against the allure of joy untrammeled.
          <br />
          <br />
          In the solace of those hallowed{" "}
          <WordModal word="countenance" boundingRef={demoRef}></WordModal>,
          where the cerulean waters mirrored the expanse of an azure sky, he
          wrestled with the verities of fate and fortune. Amidst the ballet of
          sunlight and shadow, where each verdant leaf pirouetted in the gentle{" "}
          <WordModal word="countenance" boundingRef={demoRef}></WordModal> of
          the breeze, he found himself ensnared in the throes of ambivalence.
          <br />
          <br /> For every{" "}
          <WordModal word="countenance" boundingRef={demoRef}></WordModal> dawn
          that kissed the dew-kissed petals awake, and every{" "}
          <WordModal word="countenance" boundingRef={demoRef}></WordModal> that
          draped the world in a tapestry of saffron and gold, he recoiled from
          the embrace of fleeting euphoria. The symphony of{" "}
          <WordModal word="countenance" boundingRef={demoRef}></WordModal> that
          orchestrated the dawn's awakening seemed but a distant echo to his
          ears, dulled by the armor of resilience he clad himself in.
          <br />
          <br />
          In the heart of that idyllic sanctuary, where time flowed as languidly
          as the river's meandering course, he was beset by an inner tempest—a
          tempest that{" "}
          <WordModal word="countenance" boundingRef={demoRef}></WordModal>{" "}
          against the gilded promises of blissful{" "}
          <WordModal word="countenance" boundingRef={demoRef}></WordModal>. Even
          as the seasons waltzed in their eternal cycle of birth and decay, he
          remained{" "}
          <WordModal word="countenance" boundingRef={demoRef}></WordModal> in a
          fortress of stoic resolve.
          <br />
          <br />
          Yet, amidst the verdure that framed his{" "}
          <WordModal word="countenance" boundingRef={demoRef}></WordModal>{" "}
          vigil, there bloomed a perennial hope—an incandescent ember that
          refused to be
          <WordModal word="countenance" boundingRef={demoRef}></WordModal>. For
          deep within the recesses of his being, beneath the veneer of
          adamantine restraint, lay the whispered desire to relinquish the{" "}
          <WordModal word="countenance" boundingRef={demoRef}></WordModal> of
          self-imposed restraint.
          <br />
          <br />
          Thus, as the river{" "}
          <WordModal word="countenance" boundingRef={demoRef}></WordModal> its
          eternal{" "}
          <WordModal word="countenance" boundingRef={demoRef}></WordModal> and
          the stars bore witness to the symphony of his inner turmoil, he found
          himself standing at the precipice of revelation. For in the very act
          of resistance, he unearthed the paradox that had eluded him—a
          revelation that the most{" "}
          <WordModal word="countenance" boundingRef={demoRef}></WordModal>{" "}
          beauty often resides in the surrender to life's{" "}
          <WordModal word="countenance" boundingRef={demoRef}></WordModal>{" "}
          grace.
        </div>
      </div>
    </div>
  );
};

const Dictionary = ({
  word = "Harsh",
  pronounciation = "s",
  type = "s",
  usage = "ssdfaksgfas kldjhfljashdflhasdlfhslkjdhfkj uhs ldiufhlHsild ushd lfuihSD LFHLsh  SHILD",
}) => {
  return (
    <span className="dictionary-wrap">
      <small className="dictionary-word">{word}</small>

      <small className="dictionary-pronounciation">{pronounciation}</small>

      <small className="dictionary-type">{type}</small>
      <small className="dictionary-usage">{usage}</small>
    </span>
  );
};

export default WordModalPage;
