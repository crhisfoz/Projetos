import { createTheme} from '@material-ui/core/styles';
import { blackColor, primaryColor, whiteColor } from './colors';


const theme = createTheme({
  palette: {
    primary:{
        main:primaryColor,
        contrastText: whiteColor,
    },
    text: {
        primary: blackColor,
    }
  },
});

export default theme