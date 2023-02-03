import * as React from 'react'
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom'
import CardContainerLogicDemo from './CardContainerLogicDemo'
import ModalDownloadDemo from './ModalDownloadDemo'
import FormServicesIntegrationDemo from './FormServicesIntegrationDemo'
import { WidgetDemo } from './WidgetDemo'
import { AccessRequirementDemo } from './AccessRequirementDemo'
import TemplateComponentDemo from './TemplateComponentDemo'
import Resources from '../../../src/lib/containers/home_page/resources/Resources'
import { SynapsePlotDemo } from './SynapsePlotDemo'
import { ExternalFileHandleLink } from '../../../src/lib/containers/ExternalFileHandleLink'
import ColorPaletteInspector from './ColorPaletteInspector'

/**
 * Demo of features that can be used from src/demo/utils/SynapseClient
 * module
 */
const App = () => {
  const { url } = useRouteMatch()
  return (
    <div>
      <h2>Links to components under development </h2>
      <ul>
        <li>
          <Link to={`${url}/ColorPalette`}>Inspect Color Palette</Link>
        </li>
        <li>
          <Link to={`${url}/CardContainerLogicDemo`}>
            CardContainerLogicDemo
          </Link>
        </li>
        <li>
          <Link to={`${url}/FormServicesIntegrationDemo`}>
            FormServicesIntegrationDemo
          </Link>
        </li>
        <li>
          <Link to={`${url}/ModalDownloadDemo`}>ModalDownload</Link>
        </li>
        <li>
          <Link to={`${url}/WidgetDemo`}>WidgetDemo</Link>
        </li>
        <li>
          <Link to={`${url}/AccessRequirementDemo`}>AccessRequirementDemo</Link>
        </li>
        <li>
          <Link to={`${url}/TemplateComponentDemo`}>TemplateComponentDemo</Link>
        </li>
        <li>
          <Link to={`${url}/SynapsePlotDemo`}>SynapsePlotDemo</Link>
        </li>
        <li>
          <Link to={`${url}/ExternalFileHandleLink`}>
            ExternalFileHandleLink
          </Link>
        </li>
      </ul>

      <Switch>
        <Route exact={true} path={`${url}/CardContainerLogicDemo`}>
          <CardContainerLogicDemo />
        </Route>

        <Route exact={true} path={`${url}/FormServicesIntegrationDemo`}>
          <FormServicesIntegrationDemo />
        </Route>
        <Route
          exact={true}
          path={`${url}/ModalDownloadDemo`}
          component={() => <ModalDownloadDemo />}
        ></Route>

        <Route exact={true} path={`${url}/WidgetDemo`}>
          <WidgetDemo />
        </Route>

        <Route exact={true} path={`${url}/AccessRequirementDemo`}>
          <AccessRequirementDemo />
        </Route>

        <Route exact={true} path={`${url}/TemplateComponentDemo`}>
          <TemplateComponentDemo />
        </Route>

        <Route exact={true} path={`${url}/SynapsePlotDemo`}>
          <SynapsePlotDemo />
        </Route>

        <Route exact={true} path={`${url}/ResourcesDemo`}>
          <div className="container">
            <Resources entityId="syn22311127" />
          </div>
        </Route>

        <Route exact={true} path={`${url}/ExternalFileHandleLink`}>
          <ExternalFileHandleLink synId={'syn22276050'} />
        </Route>

        <Route exact={true} path={`${url}/ColorPalette`}>
          <ColorPaletteInspector />
        </Route>
      </Switch>
    </div>
  )
}

export default App
