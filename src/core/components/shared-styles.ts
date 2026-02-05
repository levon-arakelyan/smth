export const mainVisibleBox = {
  boxShadow: '0 2px 4px rgba(0,0,0,0.05), 0 8px 16px rgba(0,0,0,0.06), 0 16px 32px rgba(0,0,0,0.04)',
  padding: 2,
  borderRadius: 6,
  width: {xs: '100%', lg: '75%'},
  backgroundColor: 'background.paper'
};

export const colorAnimatedText = (colors: string[]) => ({
  fontWeight: 'bold',
  background: `linear-gradient(270deg, ${colors.join(', ')})`,
  backgroundSize: '400% 400%',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  animation: 'textGradient 10s ease infinite',
  '@keyframes textGradient': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
})