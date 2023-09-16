import audioClipData, { AudioClip } from './audioClipData';
import Drum from './components/Drum';

function App() {
  const playAudio = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const clip = audioClipData.find(
      (clip: AudioClip) => clip.key === e.key.toUpperCase()
    );
    if (!clip) return;
    (document.getElementById(clip.key) as HTMLAudioElement)
      .play()
      .catch((e) => console.error(e));

    document.getElementById('drum-' + clip.key)?.focus();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById('display')!.innerText = clip.description;
  };

  return (
    <>
      <div className="app-container" id="drum-machine" onKeyDown={playAudio}>
        <h1>FCC Drum Machine</h1>
        <div className="wholeDrum">
          {audioClipData.map((clip: AudioClip) => (
            <Drum audioClip={clip} key={clip.key} />
          ))}
        </div>
        <div id="display"></div>
      </div>
    </>
  );
}

export default App;
