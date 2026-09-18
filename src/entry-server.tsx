import { renderToString } from 'react-dom/server'
import { JapaTechServerApp } from './apps/japa-tech/JapaTechApp'
export { publicRoutes } from './apps/japa-tech/config/routes'
export { notFoundPage } from './apps/japa-tech/content/pages'
export function render(pathname: string) { return renderToString(<JapaTechServerApp pathname={pathname} />) }
