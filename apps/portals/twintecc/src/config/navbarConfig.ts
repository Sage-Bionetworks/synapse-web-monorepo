import { NavbarConfig } from '@sage-bionetworks/synapse-portal-framework/components/navbar/Navbar'
import { MODELS_EXPLORE_PATH } from './resources'

export const navbarConfig: NavbarConfig = {
  routes: [
    { name: 'Home', path: '/' },
    { name: 'Models', path: MODELS_EXPLORE_PATH },
  ],
  isPortalsDropdownEnabled: false,
}
