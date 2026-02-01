import React, { createContext, useContext } from 'react';
import { LocalStorageKey } from '../core/services/local-storage/local-storage-keys';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface SoundContextType {
  muted: boolean;
  toggleMute: () => void;
}

const SoundContext = createContext<SoundContextType>({
  muted: false,
  toggleMute: () => {},
});

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [muted, setMuted] = useLocalStorage<boolean>(LocalStorageKey.SoundsMuted, false);

  const toggleMute = () => setMuted(!muted);

  return (
    <SoundContext.Provider value={{ muted, toggleMute }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSoundSettings = () => useContext(SoundContext);
