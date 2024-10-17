import { NavbarConfig } from '@sage-bionetworks/synapse-portal-framework/components/navbar/Navbar'

export const navbarConfig: NavbarConfig = {
  routes: [
    {
      name: 'Home',
      path: '/',
      children: [{ name: 'Listed Challenges', path: '/#Listed Challenges' }],
    },
  ],
}
