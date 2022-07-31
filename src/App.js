import { useState } from "react";

function RoomIcon({ roomIdx, color }) {
  const center = [24];
  const bigCrates = [16, 18, 30, 32];
  const start = [3, 8, 12, 14, 20, 28, 34, 36, 40, 45];

  const className = `material-symbols-outlined prevent-select ${color}`;

  if (center.includes(roomIdx)) {
    return <span className={className}>star</span>;
  }

  if (bigCrates.includes(roomIdx)) {
    return <span className={className}>local_atm</span>;
  }

  if (start.includes(roomIdx)) {
    return <span className={className}>fiber_manual_record</span>;
  }

  return [];
}

function Room({ idx, tool }) {
  const [color, setColor] = useState("grey");

  function handleCheck({ tool }) {
    switch (tool) {
      case "none":
        setColor("grey");
        break;

      default:
        if (tool === color) {
          setColor("grey");
        } else {
          setColor(tool);
        }
        break;
    }
  }

  const childColor = color === "grey" ? "content-white" : "content-black";
  const invisRooms = [
    0,
    1,
    2,
    4,
    5,
    6,
    7,
    13,
    21,
    27,
    35,
    41,
    42,
    43,
    44,
    46,
    47,
    48
  ];

  var className = `room ${color}`;
  if (invisRooms.includes(idx)) className += " invis";

  return (
    <div
      className={className}
      id={`room${idx}`}
      onClick={() => {
        handleCheck({ tool });
      }}
    >
      <RoomIcon roomIdx={idx} color={childColor} />
    </div>
  );
}

function RoomDiv({ tool }) {
  const roomN = 49;
  const final = [];

  for (let i = 0; i < roomN; i++) {
    final.push(<Room key={`room${i}`} idx={i} tool={tool} />);
  }

  return (
    <div className="roomDiv" key="roomDiv">
      {final}
    </div>
  );
}

function ToolButton({ tool, onClick }) {
  return (
    <button
      className={`toolButton ${tool}`}
      onClick={() => {
        onClick({ tool });
      }}
    ></button>
  );
}

function Selections({ onSelectTool }) {
  return (
    <div className="selections">
      <div className="toolBar">
        <ToolButton tool="red" onClick={onSelectTool} />
        <ToolButton tool="orange" onClick={onSelectTool} />
        <ToolButton tool="yellow" onClick={onSelectTool} />
        <ToolButton tool="lime" onClick={onSelectTool} />
        <ToolButton tool="green" onClick={onSelectTool} />
        <ToolButton tool="cyan" onClick={onSelectTool} />
        <ToolButton tool="aqua" onClick={onSelectTool} />
        <ToolButton tool="blue" onClick={onSelectTool} />
        <ToolButton tool="purple" onClick={onSelectTool} />
        <ToolButton tool="pink" onClick={onSelectTool} />
        <ToolButton tool="erase" onClick={onSelectTool} />
        <ToolButton tool="clear" onClick={onSelectTool} />
      </div>
    </div>
  );
}

export default function App() {
  const [selectedTool, setSelectedTool] = useState("none");
  const [dateKey, setDateKey] = useState(Date.now());

  function onSelectTool({ tool }) {
    switch (tool) {
      case "erase":
        setSelectedTool("none");
        break;

      case "clear":
        setDateKey(Date.now());
        setSelectedTool("none");
        break;

      default:
        setSelectedTool(tool);
        return;
    }
  }

  return (
    <div id="app">
      <RoomDiv key={dateKey} tool={selectedTool} />
      <Selections onSelectTool={onSelectTool} />
    </div>
  );
}
