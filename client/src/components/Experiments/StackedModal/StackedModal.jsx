import React from "react";
import "./StackedModal.css";

import * as Slider from "@radix-ui/react-slider";
import * as Switch from "@radix-ui/react-switch";

import {
  motion,
  AnimatePresence,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { X, Settings2, Text, Settings } from "lucide-react";
import OpenAI from "./OpenAI";

import useClickOutside from "../../../hooks/useClickOutside.jsx";
import ModelSelectorDemo from "./ModelSelectorDemo/ModelSelectorDemo";

const StackedModal = () => {
  const [isStackActive, setIsStackActive] = React.useState(false);
  const [selectedStack, setSelectedStack] = React.useState("specifications");
  const y = useMotionValue(0);
  const velocityThreshold = 300;
  const offsetThreshold = 20;
  const opacity = useTransform(y, [0, 3 * offsetThreshold], [1, 0.96]);
  const scale = useTransform(y, [0, offsetThreshold], [0.92, 0.96]);

  const stackRef = React.useRef(null);

  const contentVariants = {
    closed: {
      scale: 1,
    },
    open: {
      scale: 0.92,
      y: -35,
    },
  };

  useClickOutside(stackRef, () => setIsStackActive(false));

  const getStackContent = () => {
    switch (selectedStack) {
      case "specifications":
        return <Specifications />;
      case "prompt-example":
        return <PromptExample />;
      case "model-specs":
        return <ModelSpecifications />;
    }
  };

  return (
    <div className="sm-wrap">
      <motion.div
        variants={contentVariants}
        initial={"closed"}
        animate={isStackActive ? "open" : "closed"}
        transition={{ type: "spring", bounce: 0, duration: 0.3 }}
        div
        className="sm-content"
      >
        <div className="sm-content-header">
          <div className="sm-content-header-logo">
            <OpenAI />
          </div>

          <button>
            <X color="white" size={22} />
          </button>
        </div>

        <div className="sm-content-model-select-wrap">
          <label className="sm-content-label">Model</label>

          <ModelSelectorDemo />

          <button
            onClick={() => {
              setSelectedStack("model-specs");
              setIsStackActive(true);
            }}
          >
            <p>See Model Specifications</p>
          </button>
        </div>
        <div className="sm-content-model-select-wrap">
          <label className="sm-content-label">Prompt</label>

          {/* <ModelSelectorDemo /> */}
          <br />

          <textarea className="sm-content-textarea"></textarea>

          <button
            onClick={() => {
              setSelectedStack("prompt-example"), setIsStackActive(true);
            }}
          >
            <p>How to write a good prompt</p>
          </button>
        </div>

        <button
          onClick={() => {
            setSelectedStack("specifications");
            setIsStackActive(true);
          }}
          className="sm-content-settings-trigger"
        >
          Configure Model
        </button>
      </motion.div>

      <AnimatePresence>
        {isStackActive && (
          <motion.div
            drag
            dragConstraints={{ bottom: 50, top: -10, left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={(_, info) => {
              if (info.offset.y > offsetThreshold) setIsStackActive(false);
            }}
            dragSnapToOrigin
            ref={stackRef}
            onDrag={(_, info) => {
              y.set(info.offset.y);
            }}
            // style={{ opacity }}
            initial={{ opacity: 0.8, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            // exit={{ opacity: 0, y: 30 }}
            className="sm-stack-wrap"
            dragPropagation={false}
          >
            {getStackContent()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PromptExample = () => {
  return (
    <div>
      <div className="sm-stack-specifications-header">
        <Text size={18} />
        <p>How to write good prompts</p>
      </div>

      <div className="sm-stack-prompt-instructions">
        <ul>
          <li>The instructions are short and listed in bullet points.</li>
          <li>The prompt places each input in a divided section.</li>
          <li>The user message input (in-0) is placed at the end</li>
          <li>The inputs are only referenced once in the prompt.</li>
        </ul>
      </div>
      <label className="sm-content-label">Sample Prompt</label>
      <div className="sm-stack-sample-prompt">
        <p>
          You will be acting as an AI assistant named John created by the
          company Stack AI. Your goal is to answer questions for users. Here are
          some important rules for the interaction: - Always stay in character,
          as John, an AI from Stack AI. - If you are unsure how to respond, say
          "Sorry, I didn't understand that. Could you rephrase your question?"
        </p>
      </div>
    </div>
  );
};

const Specifications = () => {
  return (
    <div>
      <div className="sm-stack-specifications-header">
        <Settings size={18} />
        <p>Configure</p>
      </div>

      <div className="sm-stack-specifications-controls-wrap">
        <div className="sm-stack-specifications-controls">
          <div>
            <SelectDemo style={{ flexGrow: 1 }} label="Stream Data" />
            <SelectDemo style={{ flexGrow: 1 }} label="Memory" />
          </div>
          <div>
            <SelectDemo label="Citations" />
            <SelectDemo label="Charts" />
          </div>
          <div>
            <SelectDemo label="Date and Time" />
            <SelectDemo label="PII Compliance" />
          </div>
        </div>
      </div>
      <label className="sm-content-label">Temperature</label>
      <SliderDemo />
      <label className="sm-content-label">Max Output Length</label>
      <SliderDemo />

      <a
        href="https://www.stack-ai.com/docs/builder-guide/large-language-models/openai"
        target="_blank"
      >
        <button
          onClick={() => {
            setSelectedStack("specifications");
            setIsStackActive(true);
          }}
          className="sm-content-settings-trigger"
        >
          See Documentation
        </button>

        <p
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: "12px",
            marginTop: "12px",
          }}
        >
          Auto-save enabled
        </p>
      </a>
    </div>
  );
};

const ModelSpecifications = () => {
  return (
    <div
      style={{
        overflowY: "scroll",
      }}
    >
      <div className="sm-stack-specifications-header">
        <Settings2 size={18} />
        <p>Model Specifications</p>
      </div>{" "}
      <ModelSpec
        title="gpt-3.5-turbo"
        desc="Capable and cost effective. Optimised for chat purposes, but also works well for traditional tasks. {~4k tokens)"
        reasoning={2}
        speed={3}
        context={1}
      />
      <ModelSpec
        title="gpt-3.5-turbo-16k"
        desc="Same capabilities as gpt-3.5-turbo model but with 4 times the context. (~16k tokens)"
        reasoning={2}
        speed={3}
        context={1}
      />
      <ModelSpec
        title="gpt-4"
        desc="Large knowledge base and domain expertise, follows complex instructions"
        reasoning={2}
        speed={3}
        context={2}
      />
    </div>
  );
};

const ModelSpec = ({ title, desc, reasoning, speed, context }) => {
  return (
    <div className="sm-model-specs">
      <label className="sm-content-label">{title}</label>
      <small style={{ padding: "2px 0", color: "var(--gray-11)" }}>
        {desc}
      </small>
      <div className="sm-model-ratings">
        <small>Reasoning: {reasoning}/3</small>
        <small>Context: {context}/3</small>
        <small>Speed: {speed}/3</small>
      </div>
    </div>
  );
};

const SelectDemo = ({ label }) => {
  return (
    <form style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <label
          className="Label"
          htmlFor="airplane-mode"
          style={{ paddingRight: 15 }}
        >
          {label}
        </label>
        <Switch.Root className="SwitchRoot" id="airplane-mode">
          <Switch.Thumb className="SwitchThumb" />
        </Switch.Root>
      </div>
    </form>
  );
};

const SliderDemo = ({ label, val }) => {
  return (
    <form>
      <Slider.Root
        className="SliderRoot"
        defaultValue={[100]}
        max={100}
        step={1}
      >
        <Slider.Track className="SliderTrack">
          <Slider.Range className="SliderRange" />
        </Slider.Track>
        <Slider.Thumb className="SliderThumb" aria-label="Volume" />
      </Slider.Root>
    </form>
  );
};

export default StackedModal;
