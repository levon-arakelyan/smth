import { useRef, useCallback, useEffect } from 'react';
import { useSoundSettings } from '../contexts/SoundContext';

export interface UseAudioOptions {
  volume?: number;
  loop?: boolean;
}

export function useAudio(src: string, options: UseAudioOptions = {}) {
  const { volume = 1, loop = false } = options;
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { muted } = useSoundSettings();

  if (!audioRef.current) {
    const audio = new Audio(src);
    audio.volume = volume;
    audio.loop = loop;
    audioRef.current = audio;
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = muted;
      if (muted) {
        stop();
      }
    }
  }, [muted]);

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
