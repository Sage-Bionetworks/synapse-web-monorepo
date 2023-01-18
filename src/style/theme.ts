import { createTheme, Theme } from "@mui/material";

// agendel TODO: remove this file if it's not needed for control customization
const theme: Theme = createTheme({

    components: {
        MuiCssBaseline: {
        },

        MuiButton: {
            styleOverrides: {


            },
        }
    }
})

export default theme
