import { AudioClip } from '../audioClipData';

interface DrumProps {
  audioClip: AudioClip;
}

const Drum = ({ audioClip }: DrumProps) => {
  const playSound = (clip: AudioClip) => {
    (document.getElementById(clip.key) as HTMLAudioElement)
      .play()
      .catch((e) => console.error(e));

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById('display')!.innerText = clip.description;
  };

  return (
    <button
      className="drum-pad"
      id={`drum-${audioClip.key}`}
      onClick={() => playSound(audioClip)}
    >
      <audio src={audioClip.url} id={audioClip.key} className="clip" />
      {audioClip.key}
    </button>
  );
};

export default Drum;
