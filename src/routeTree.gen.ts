// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SponsorsPageImport } from './routes/sponsorsPage'
import { Route as AboutUsImport } from './routes/aboutUs'
import { Route as TeamPageImport } from './routes/TeamPage'
import { Route as AuthUIImport } from './routes/AuthUI'
import { Route as AuthPageImport } from './routes/AuthPage'
import { Route as IndexImport } from './routes/index'
import { Route as ProfilePageProfileIdImport } from './routes/profilePage.$profileId'
import { Route as AthletePageEditAthleteIdImport } from './routes/athletePageEdit.$athleteId'
import { Route as AthletePageAthleteIdImport } from './routes/athletePage.$athleteId'
import { Route as AdminPageAthleteIdImport } from './routes/adminPage.$athleteId'

// Create/Update Routes

const SponsorsPageRoute = SponsorsPageImport.update({
  path: '/sponsorsPage',
  getParentRoute: () => rootRoute,
} as any)

const AboutUsRoute = AboutUsImport.update({
  path: '/aboutUs',
  getParentRoute: () => rootRoute,
} as any)

const TeamPageRoute = TeamPageImport.update({
  path: '/TeamPage',
  getParentRoute: () => rootRoute,
} as any)

const AuthUIRoute = AuthUIImport.update({
  path: '/AuthUI',
  getParentRoute: () => rootRoute,
} as any)

const AuthPageRoute = AuthPageImport.update({
  path: '/AuthPage',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProfilePageProfileIdRoute = ProfilePageProfileIdImport.update({
  path: '/profilePage/$profileId',
  getParentRoute: () => rootRoute,
} as any)

const AthletePageEditAthleteIdRoute = AthletePageEditAthleteIdImport.update({
  path: '/athletePageEdit/$athleteId',
  getParentRoute: () => rootRoute,
} as any)

const AthletePageAthleteIdRoute = AthletePageAthleteIdImport.update({
  path: '/athletePage/$athleteId',
  getParentRoute: () => rootRoute,
} as any)

const AdminPageAthleteIdRoute = AdminPageAthleteIdImport.update({
  path: '/adminPage/$athleteId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/AuthPage': {
      preLoaderRoute: typeof AuthPageImport
      parentRoute: typeof rootRoute
    }
    '/AuthUI': {
      preLoaderRoute: typeof AuthUIImport
      parentRoute: typeof rootRoute
    }
    '/TeamPage': {
      preLoaderRoute: typeof TeamPageImport
      parentRoute: typeof rootRoute
    }
    '/aboutUs': {
      preLoaderRoute: typeof AboutUsImport
      parentRoute: typeof rootRoute
    }
    '/sponsorsPage': {
      preLoaderRoute: typeof SponsorsPageImport
      parentRoute: typeof rootRoute
    }
    '/adminPage/$athleteId': {
      preLoaderRoute: typeof AdminPageAthleteIdImport
      parentRoute: typeof rootRoute
    }
    '/athletePage/$athleteId': {
      preLoaderRoute: typeof AthletePageAthleteIdImport
      parentRoute: typeof rootRoute
    }
    '/athletePageEdit/$athleteId': {
      preLoaderRoute: typeof AthletePageEditAthleteIdImport
      parentRoute: typeof rootRoute
    }
    '/profilePage/$profileId': {
      preLoaderRoute: typeof ProfilePageProfileIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  AuthPageRoute,
  AuthUIRoute,
  TeamPageRoute,
  AboutUsRoute,
  SponsorsPageRoute,
  AdminPageAthleteIdRoute,
  AthletePageAthleteIdRoute,
  AthletePageEditAthleteIdRoute,
  ProfilePageProfileIdRoute,
])
