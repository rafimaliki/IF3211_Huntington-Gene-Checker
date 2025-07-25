/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SecondaryImport } from './routes/_secondary'
import { Route as PrimaryImport } from './routes/_primary'
import { Route as SplatImport } from './routes/$'
import { Route as IndexImport } from './routes/index'
import { Route as SecondaryTeamIndexImport } from './routes/_secondary/team/index'
import { Route as SecondaryCheckerIndexImport } from './routes/_secondary/checker/index'
import { Route as SecondaryAboutIndexImport } from './routes/_secondary/about/index'
import { Route as PrimaryHomeIndexImport } from './routes/_primary/home/index'

// Create/Update Routes

const SecondaryRoute = SecondaryImport.update({
  id: '/_secondary',
  getParentRoute: () => rootRoute,
} as any)

const PrimaryRoute = PrimaryImport.update({
  id: '/_primary',
  getParentRoute: () => rootRoute,
} as any)

const SplatRoute = SplatImport.update({
  id: '/$',
  path: '/$',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SecondaryTeamIndexRoute = SecondaryTeamIndexImport.update({
  id: '/team/',
  path: '/team/',
  getParentRoute: () => SecondaryRoute,
} as any)

const SecondaryCheckerIndexRoute = SecondaryCheckerIndexImport.update({
  id: '/checker/',
  path: '/checker/',
  getParentRoute: () => SecondaryRoute,
} as any)

const SecondaryAboutIndexRoute = SecondaryAboutIndexImport.update({
  id: '/about/',
  path: '/about/',
  getParentRoute: () => SecondaryRoute,
} as any)

const PrimaryHomeIndexRoute = PrimaryHomeIndexImport.update({
  id: '/home/',
  path: '/home/',
  getParentRoute: () => PrimaryRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/$': {
      id: '/$'
      path: '/$'
      fullPath: '/$'
      preLoaderRoute: typeof SplatImport
      parentRoute: typeof rootRoute
    }
    '/_primary': {
      id: '/_primary'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof PrimaryImport
      parentRoute: typeof rootRoute
    }
    '/_secondary': {
      id: '/_secondary'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof SecondaryImport
      parentRoute: typeof rootRoute
    }
    '/_primary/home/': {
      id: '/_primary/home/'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof PrimaryHomeIndexImport
      parentRoute: typeof PrimaryImport
    }
    '/_secondary/about/': {
      id: '/_secondary/about/'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof SecondaryAboutIndexImport
      parentRoute: typeof SecondaryImport
    }
    '/_secondary/checker/': {
      id: '/_secondary/checker/'
      path: '/checker'
      fullPath: '/checker'
      preLoaderRoute: typeof SecondaryCheckerIndexImport
      parentRoute: typeof SecondaryImport
    }
    '/_secondary/team/': {
      id: '/_secondary/team/'
      path: '/team'
      fullPath: '/team'
      preLoaderRoute: typeof SecondaryTeamIndexImport
      parentRoute: typeof SecondaryImport
    }
  }
}

// Create and export the route tree

interface PrimaryRouteChildren {
  PrimaryHomeIndexRoute: typeof PrimaryHomeIndexRoute
}

const PrimaryRouteChildren: PrimaryRouteChildren = {
  PrimaryHomeIndexRoute: PrimaryHomeIndexRoute,
}

const PrimaryRouteWithChildren =
  PrimaryRoute._addFileChildren(PrimaryRouteChildren)

interface SecondaryRouteChildren {
  SecondaryAboutIndexRoute: typeof SecondaryAboutIndexRoute
  SecondaryCheckerIndexRoute: typeof SecondaryCheckerIndexRoute
  SecondaryTeamIndexRoute: typeof SecondaryTeamIndexRoute
}

const SecondaryRouteChildren: SecondaryRouteChildren = {
  SecondaryAboutIndexRoute: SecondaryAboutIndexRoute,
  SecondaryCheckerIndexRoute: SecondaryCheckerIndexRoute,
  SecondaryTeamIndexRoute: SecondaryTeamIndexRoute,
}

const SecondaryRouteWithChildren = SecondaryRoute._addFileChildren(
  SecondaryRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/$': typeof SplatRoute
  '': typeof SecondaryRouteWithChildren
  '/home': typeof PrimaryHomeIndexRoute
  '/about': typeof SecondaryAboutIndexRoute
  '/checker': typeof SecondaryCheckerIndexRoute
  '/team': typeof SecondaryTeamIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/$': typeof SplatRoute
  '': typeof SecondaryRouteWithChildren
  '/home': typeof PrimaryHomeIndexRoute
  '/about': typeof SecondaryAboutIndexRoute
  '/checker': typeof SecondaryCheckerIndexRoute
  '/team': typeof SecondaryTeamIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/$': typeof SplatRoute
  '/_primary': typeof PrimaryRouteWithChildren
  '/_secondary': typeof SecondaryRouteWithChildren
  '/_primary/home/': typeof PrimaryHomeIndexRoute
  '/_secondary/about/': typeof SecondaryAboutIndexRoute
  '/_secondary/checker/': typeof SecondaryCheckerIndexRoute
  '/_secondary/team/': typeof SecondaryTeamIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/$' | '' | '/home' | '/about' | '/checker' | '/team'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/$' | '' | '/home' | '/about' | '/checker' | '/team'
  id:
    | '__root__'
    | '/'
    | '/$'
    | '/_primary'
    | '/_secondary'
    | '/_primary/home/'
    | '/_secondary/about/'
    | '/_secondary/checker/'
    | '/_secondary/team/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  SplatRoute: typeof SplatRoute
  PrimaryRoute: typeof PrimaryRouteWithChildren
  SecondaryRoute: typeof SecondaryRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  SplatRoute: SplatRoute,
  PrimaryRoute: PrimaryRouteWithChildren,
  SecondaryRoute: SecondaryRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/$",
        "/_primary",
        "/_secondary"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/$": {
      "filePath": "$.tsx"
    },
    "/_primary": {
      "filePath": "_primary.tsx",
      "children": [
        "/_primary/home/"
      ]
    },
    "/_secondary": {
      "filePath": "_secondary.tsx",
      "children": [
        "/_secondary/about/",
        "/_secondary/checker/",
        "/_secondary/team/"
      ]
    },
    "/_primary/home/": {
      "filePath": "_primary/home/index.tsx",
      "parent": "/_primary"
    },
    "/_secondary/about/": {
      "filePath": "_secondary/about/index.tsx",
      "parent": "/_secondary"
    },
    "/_secondary/checker/": {
      "filePath": "_secondary/checker/index.tsx",
      "parent": "/_secondary"
    },
    "/_secondary/team/": {
      "filePath": "_secondary/team/index.tsx",
      "parent": "/_secondary"
    }
  }
}
ROUTE_MANIFEST_END */
