import { createTheme, PaletteMode, responsiveFontSizes } from '@mui/material';

export function createAppTheme(mode: PaletteMode) {
  return responsiveFontSizes(
    createTheme({
      palette: {
        mode,
        primary: { main: '#6c0000' },
        secondary: { main: '#d0ad16' },
        ...(mode === 'dark'
          ? {
              background: {
                default: '#141f29',
                paper: '#151f28',
              },
            }
          : {}),
      },
    }),
  );
}
