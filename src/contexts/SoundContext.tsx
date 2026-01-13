import React, { createContext, useContext, useState, useEffect } from 'react';
import { LocalStorageService } from '../core/services/local-storage/local-storage';
import { LocalStorageKey } from '../core/services/local-storage/local-storage-keys';

interface SoundContextType {
  muted: boolean;
  toggleMute: () => void;
}

const SoundContext = createContext<SoundContextType>({
  muted: false,
  toggleMute: () => {},
});

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [muted, setMuted] = useState<boolean>(() => {
    return !!LocalStorageService.get<boolean>(LocalStorageKey.SoundsMuted);
  });

  useEffect(() => {
    LocalStorageService.set(LocalStorageKey.SoundsMuted, muted);
  }, [muted]);

  const toggleMute = () => setMuted(prev => !prev);

  return (
    <SoundContext.Provider value={{ muted, toggleMute }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSoundSettings = () => useContext(SoundContext);
