import{o as e}from"./preload-helper-CsHsquCd.js";import{t}from"./jsx-runtime-l3w3GfrB.js";import{s as n,t as r,u as i}from"./development-d0gZPMR5.js";import{n as a,t as o}from"./RouteErrorBoundary-CWqzmEJv.js";function s(e,t){return i([{path:`/`,element:(0,c.jsx)(`div`,{children:`This should not render`}),errorElement:(0,c.jsx)(o,{icon:t}),loader:()=>{throw e}}])}var c,l,u,d,f,p,m,h,g,_,v;e((()=>{r(),a(),c=t(),l={title:`Components/Error/RouteErrorBoundary`,component:o,parameters:{layout:`fullscreen`}},u={render:()=>(0,c.jsx)(n,{router:s(Error(`Something went wrong while loading the page`))})},d={render:()=>{let e=Error(`Failed to fetch data from the server`);return e.stack=`Error: Failed to fetch data from the server
    at fetchData (http://localhost:3000/src/utils/api.ts:42:15)
    at async loadUserProfile (http://localhost:3000/src/pages/Profile.tsx:23:18)
    at async RouteLoader (http://localhost:3000/node_modules/react-router/index.js:156:5)`,(0,c.jsx)(n,{router:s(e)})}},f={render:()=>{let e=ReferenceError(`Cannot access 'QueryWrapperPlotNav' before initialization`);return e.stack=`ReferenceError: Cannot access 'QueryWrapperPlotNav' before initialization
    at http://localhost:3000/@fs/Users/jhodgson/synapse-web-monorepo/packages/synapse-react-client/src/components/QueryWrapperPlotNav/index.ts?t=1765391879833:2121:16
    at async __vite__moduleInitialize (http://localhost:3000/vite/dist/client/env.mjs:235:5)
    at async __vite__moduleResolver (http://localhost:3000/vite/dist/client/env.mjs:165:7)`,(0,c.jsx)(n,{router:s(e,`https://raw.githubusercontent.com/Sage-Bionetworks/synapse-web-monorepo/main/apps/portals/adknowledgeportal/public/logo.svg`)})}},p={render:()=>(0,c.jsx)(n,{router:s({status:404,statusText:`Not Found`,data:{message:`The page you are looking for does not exist`}})})},m={render:()=>(0,c.jsx)(n,{router:s({status:500,statusText:`Internal Server Error`,data:{message:`An unexpected error occurred on the server`}})})},h={render:()=>(0,c.jsx)(n,{router:s(`An unexpected error occurred`)})},g={render:()=>(0,c.jsx)(n,{router:s({someUnknownError:`weird object`})})},_={render:()=>(0,c.jsx)(n,{router:s(Error(`Something went wrong while loading the page`),`https://raw.githubusercontent.com/Sage-Bionetworks/synapse-web-monorepo/main/apps/portals/adknowledgeportal/public/logo.svg`)})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const router = createErrorRouter(new Error('Something went wrong while loading the page'));
    return <RouterProvider router={router} />;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const error = new Error('Failed to fetch data from the server');
    error.stack = \`Error: Failed to fetch data from the server
    at fetchData (http://localhost:3000/src/utils/api.ts:42:15)
    at async loadUserProfile (http://localhost:3000/src/pages/Profile.tsx:23:18)
    at async RouteLoader (http://localhost:3000/node_modules/react-router/index.js:156:5)\`;
    const router = createErrorRouter(error);
    return <RouterProvider router={router} />;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const error = new ReferenceError("Cannot access 'QueryWrapperPlotNav' before initialization");
    error.stack = \`ReferenceError: Cannot access 'QueryWrapperPlotNav' before initialization
    at http://localhost:3000/@fs/Users/jhodgson/synapse-web-monorepo/packages/synapse-react-client/src/components/QueryWrapperPlotNav/index.ts?t=1765391879833:2121:16
    at async __vite__moduleInitialize (http://localhost:3000/vite/dist/client/env.mjs:235:5)
    at async __vite__moduleResolver (http://localhost:3000/vite/dist/client/env.mjs:165:7)\`;
    const router = createErrorRouter(error, 'https://raw.githubusercontent.com/Sage-Bionetworks/synapse-web-monorepo/main/apps/portals/adknowledgeportal/public/logo.svg');
    return <RouterProvider router={router} />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const router = createErrorRouter({
      status: 404,
      statusText: 'Not Found',
      data: {
        message: 'The page you are looking for does not exist'
      }
    });
    return <RouterProvider router={router} />;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const router = createErrorRouter({
      status: 500,
      statusText: 'Internal Server Error',
      data: {
        message: 'An unexpected error occurred on the server'
      }
    });
    return <RouterProvider router={router} />;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const router = createErrorRouter('An unexpected error occurred');
    return <RouterProvider router={router} />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const router = createErrorRouter({
      someUnknownError: 'weird object'
    });
    return <RouterProvider router={router} />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const router = createErrorRouter(new Error('Something went wrong while loading the page'), 'https://raw.githubusercontent.com/Sage-Bionetworks/synapse-web-monorepo/main/apps/portals/adknowledgeportal/public/logo.svg');
    return <RouterProvider router={router} />;
  }
}`,..._.parameters?.docs?.source}}},v=[`StandardError`,`ErrorWithStackTrace`,`ModuleInitializationErrorWithIcon`,`RouteNotFoundError`,`ServerError`,`StringError`,`UnknownError`,`WithIcon`]}))();export{d as ErrorWithStackTrace,f as ModuleInitializationErrorWithIcon,p as RouteNotFoundError,m as ServerError,u as StandardError,h as StringError,g as UnknownError,_ as WithIcon,v as __namedExportsOrder,l as default};