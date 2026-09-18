import { BrowserRouter, Route, Routes, StaticRouter } from 'react-router-dom'
import { Analytics } from './analytics/Analytics'
import { publicRoutes } from './config/routes'
import { notFoundPage } from './content/pages'
import { BrowserMetadataRenderer } from '../../engine/BrowserMetadataRenderer'
import type { Page } from '../../domain/pages/Page'
import { DesignSystemPreview } from './design-system/DesignSystemPreview'

function PageView({ page }: { page: Page }) { return <main id="conteudo-principal"><BrowserMetadataRenderer metadata={page.metadata} /><h1>{page.heading}</h1><p>{page.summary}</p></main> }
function TechnicalPreview() { return <><BrowserMetadataRenderer metadata={{ title: 'Design System Preview | JAPA TECH', description: 'Preview técnico interno do Design System da JAPA TECH.', locale: 'pt-BR', siteName: 'JAPA TECH', robots: { index: false, follow: false } }} /><DesignSystemPreview /></> }
function Shell() { return <div className="japa-app"><a className="skip-link" href="#conteudo-principal">Ir para o conteúdo principal</a><header><strong>JAPA TECH</strong></header><Analytics /><Routes><Route path="/__design-system" element={<TechnicalPreview />} />{publicRoutes.map(({ pathname, page }) => <Route key={pathname} path={pathname} element={<PageView page={page} />} />)}<Route path="*" element={<PageView page={notFoundPage} />} /></Routes><footer>JAPA TECH</footer></div> }
export function JapaTechApp() { return <BrowserRouter basename={import.meta.env.BASE_URL}><Shell /></BrowserRouter> }
export function JapaTechServerApp({ pathname }: { pathname: string }) { return <StaticRouter location={pathname}><Shell /></StaticRouter> }
