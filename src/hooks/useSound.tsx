import { useRef, useCallback } from 'react';

export interface UseSoundOptions {
  volume?: number; // 0 to 1
  loop?: boolean;
}

export function useSound(src: string, options: UseSoundOptions = {}) {
  const { volume = 1, loop = false } = options;
  const audioRef = useRef<HTMLAudioElement | null>(null);

  if (!audioRef.current) {
    const audio = new Audio(src);
    audio.volume = volume;
    audio.loop = loop;
    audioRef.current = audio;
  }

  const play = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    audio.play().catch((err) => console.error('Audio play error:', err));
  }, []);

  const pause = useCallback(() => {
    audioRef.current?.pause();
  }, []);

  const stop = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
  }, []);

  const setVolume = useCallback((vol: number) => {
    if (audioRef.current) audioRef.current.volume = vol;
  }, []);

  return { play, pause, stop, setVolume };
}
