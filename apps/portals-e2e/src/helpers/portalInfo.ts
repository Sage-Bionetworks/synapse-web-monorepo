import { expect } from '@playwright/test'
import { Portal } from '../configs/routesConfig'

export const getPortal = () => {
  expect(process.env.PORTAL).not.toBeUndefined()
  return process.env.PORTAL! as Portal
}

export const getPortalTitle = () => {
  expect(process.env.VITE_PORTAL_NAME).not.toBeUndefined()
  return process.env.VITE_PORTAL_NAME!
}

export const getPortalDescription = () => {
  expect(process.env.VITE_PORTAL_DESCRIPTION).not.toBeUndefined()
  return process.env.VITE_PORTAL_DESCRIPTION!
}
