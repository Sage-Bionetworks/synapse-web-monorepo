import Box from '@mui/material/Box'
import { BoxProps } from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { StyledComponent } from '@emotion/styled'

export const FACET_PLOTS_CARD_CLASSNAME = 'FacetPlotsCard'

export const FACET_PLOTS_CARD_TITLE_CONTAINER_CLASSNAME =
  'FacetPlotsCardTitleContainer'

export const FACET_PLOTS_CARD_PLOT_CONTAINER_CLASSNAME =
  'FacetPlotsCardPlotContainer'

export const FacetPlotsCardGridContainer: StyledComponent<BoxProps> = styled(
  Box,
  {
    label: 'FacetPlotsCardGridContainer',
  },
)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  [theme.breakpoints.up('md')]: {
    /* 
    The grid is broken up into cards which have subcomponents that should be aligned
    Ideally we could use CSS Subgrid, but it is not widely supported as of the time of writing
    See https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid

    Instead we will use grid with `display: contents`, and style each section to look like a card.
     */
    display: 'grid',
    gridTemplateRows: '[title] auto [plot0] auto',
    justifyContent: 'center',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    columnGap: '2%',

    [`.${FACET_PLOTS_CARD_CLASSNAME}`]: {
      display: 'contents',
    },

    [`.${FACET_PLOTS_CARD_TITLE_CONTAINER_CLASSNAME}, .${FACET_PLOTS_CARD_PLOT_CONTAINER_CLASSNAME}`]:
      {
        // Since we're using `display:contents`, the card container style will not be displayed.
        // So add box-shadow to each grid item
        boxShadow: '0px 3px 10px 0px #5D69AB1A',
        backgroundColor: theme.palette.background.paper,
      },
    [`.${FACET_PLOTS_CARD_TITLE_CONTAINER_CLASSNAME}`]: {
      gridRow: 'title',
      // For the title portion of the card, use clipPath to hide the box-shadow at the bottom of the section,
      // since the bottom border is adjacent to the rest of the visual card
      clipPath: 'inset(-10px -10px 0px -10px)',
    },

    [`.${FACET_PLOTS_CARD_PLOT_CONTAINER_CLASSNAME}`]: {
      // For the plots section(s), use clipPath to hide the box-shadow at the top and bottom of the section
      clipPath: 'inset(0px -10px 0px -10px)',
    },
    [`.${FACET_PLOTS_CARD_PLOT_CONTAINER_CLASSNAME}:last-of-type`]: {
      // For the last plot section, use clipPath to hide the box-shadow at the top of the section
      // the bottom box-shadow is shown since this is container marks the bottom of the card (visually)
      borderBottom: '1px solid #e8e8e8',
      clipPath: 'inset(0px -10px -10px -10px)',
    },
  },
  [`.${FACET_PLOTS_CARD_PLOT_CONTAINER_CLASSNAME}:last-of-type`]: {
    paddingBottom: theme.spacing(5),
  },
}))

export const FacetPlotsCardTitleContainer: StyledComponent<BoxProps> = styled(
  Box,
  {
    label: 'FacetPlotsCardTitleContainer',
  },
)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  paddingTop: theme.spacing(5),
  paddingLeft: theme.spacing(5),
  paddingRight: theme.spacing(5),
  minHeight: '64px',
}))

export const FacetPlotsCardPlotContainer: StyledComponent<BoxProps> = styled(
  Box,
  {
    label: 'FacetPlotsCardPlotContainer',
  },
)(({ theme }) => ({
  paddingLeft: theme.spacing(5),
  paddingRight: theme.spacing(5),
}))
