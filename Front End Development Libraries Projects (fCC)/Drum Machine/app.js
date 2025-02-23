const { useState, useEffect } = React;

const drumPads = [
    { key: "Q", sound: "Heater 1", url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3" },
    { key: "W", sound: "Heater 2", url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3" },
    { key: "E", sound: "Heater 3", url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3" },
    { key: "A", sound: "Heater 4", url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3" },
    { key: "S", sound: "Clap", url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3" },
    { key: "D", sound: "Open-HH", url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3" },
    { key: "Z", sound: "Kick-n'-Hat", url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3" },
    { key: "X", sound: "Kick", url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3" },
    { key: "C", sound: "Closed-HH", url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3" }
];

function DrumPad({ pad, onPlay }) {
    const playSound = () => {
        const audio = document.getElementById(pad.key);
        if (audio) {
            audio.currentTime = 0; // Restart sound
            audio.play();
            onPlay(pad.sound);
        }
    };

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key.toUpperCase() === pad.key) {
                playSound();
            }
        };
        document.addEventListener("keydown", handleKeyPress);
        return () => document.removeEventListener("keydown", handleKeyPress);
    }, []);

    return (
        <div className="drum-pad" id={pad.sound} onClick={playSound}>
            {pad.key}
            <audio className="clip" id={pad.key} src={pad.url}></audio>
        </div>
    );
}

function DrumMachine() {
    const [display, setDisplay] = useState("Press a Key");

    return (
        <div id="drum-machine">
            <div id="display">{display}</div>
            <div className="drum-pads">
                {drumPads.map((pad) => (
                    <DrumPad key={pad.key} pad={pad} onPlay={setDisplay} />
                ))}
            </div>
        </div>
    );
}

// Ensure React 18+ rendering works
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DrumMachine />);
