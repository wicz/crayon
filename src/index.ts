export * from './platform/router'
export * from './platform/mount'
export * from './platform/history'
export * from './platform/locator'
export * from './platform/route-map'
export * from './platform/shared-state'
export * from './platform/router'
export * from './sdk'

import { create, group } from './sdk'
import { 
  Router as OGRouter, 
  Group as OGGroup,
} from './platform/router'

export const crayon = {
  create, 
  group
}

export declare module crayon {
  export type Router = OGRouter
  export type Group = OGGroup
}

export default crayon
