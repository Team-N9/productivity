import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#1f1f1f',
			main: 'rgb(15, 15, 15)',
			dark: '#1f1f1f',
			contrastText: '#959b9b',
		},
		secondary: {
			light: '#959b9b',
			main: '#5e3333',
			dark: '#959b9b',
			contrastText: '#959b9b',
		},
	},
})

export default theme;