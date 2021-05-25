import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#EDE7E3', // balta
      main: '#D3D3D3', // melyna
      dark: '#FFFFF', // juoda
      contrastText: '#000000', // geltona
      // #44AABB sviesiai melyna;
    },
    secondary: {
      light: '#D3D3D3',
      main: '#D3D3D3',
      dark: '#EEBB44',
      contrastText: '#131B23',
    }
  },
  overrides: {
    MuiButton: {
      text: {
        'text-transform': 'none',
      },
    },
  },
});

export default theme;