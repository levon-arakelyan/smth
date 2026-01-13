export const mainVisibleBox = {
  boxShadow: '0 2px 4px rgba(0,0,0,0.05), 0 8px 16px rgba(0,0,0,0.06), 0 16px 32px rgba(0,0,0,0.04)',
  padding: 2,
  borderRadius: 6,
  width: {xs: '100%', lg: '75%'},
  backgroundColor: 'background.paper'
};

export const centeredModal = {
  outline: 'none',
  border: 'none',
  backgroundClip: 'padding-box',
  WebkitTransform: 'translate(-50%, -50%)',
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: 4,
  boxShadow: 24,
  textAlign: 'center',
  animation: 'pop 0.4s ease-out',
  '@keyframes pop': {
    '0%': { transform: 'translate(-50%, -50%) scale(0.7)', opacity: 0 },
    '100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
  },
}