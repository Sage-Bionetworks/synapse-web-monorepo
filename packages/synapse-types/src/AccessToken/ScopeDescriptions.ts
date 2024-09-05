export const scopeDescriptions = {
  openid: {
    displayName: 'OpenID',
    description: 'Access to your Synapse identity and certain user information',
  },
  view: {
    displayName: 'View',
    description: 'Permission to view the content which you can view',
  },
  modify: {
    displayName: 'Modify',
    description:
      'Permission to modify the content which you can modify (create, change, delete)',
  },
  download: {
    displayName: 'Download',
    description: 'Permission to download the content which you can download',
  },
  authorize: {
    displayName: 'Authorize',
    description:
      'Permission to authorize others to access the resources you control',
  },
  offline_access: {
    displayName: 'Offline Access',
    description:
      'Permission to access the resources authorized here when you are not logged in, until you explicitly revoke access',
  },
  email: {
    displayName: 'Email',
    description:
      'Permission to access the email address associated to your account',
  },
  profile: {
    displayName: 'User Profile',
    description: 'Permission to access your user profile information',
  },
}
