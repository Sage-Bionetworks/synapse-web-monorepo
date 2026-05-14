import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Fo as n,HS as r,Lo as i,Mx as a,Ro as o,Uv as s,Vb as c,Wo as l,XS as u,ko as d}from"./iframe-8umnNt2a.js";var f,p,m,h,g,_,v,y,b,x,S,C=e((()=>{f=`_container_1jn5a_1`,p=`_errorBox_1jn5a_7`,m=`_icon_1jn5a_17`,h=`_errorTitle_1jn5a_23`,g=`_errorMessage_1jn5a_30`,_=`_detailsContainer_1jn5a_36`,v=`_detailsButton_1jn5a_40`,y=`_detailsBox_1jn5a_44`,b=`_detailsText_1jn5a_53`,x=`_reloadButton_1jn5a_61`,S={container:f,errorBox:p,icon:m,errorTitle:h,errorMessage:g,detailsContainer:_,detailsButton:v,detailsBox:y,detailsText:b,reloadButton:x}}));function w(e){let{icon:t}=e,n=l(),[r,i]=(0,T.useState)(!1),s,u;return o(n)?(s=`${n.status} ${n.statusText}`,u=n.data?.message):n instanceof Error?(s=n.message,u=n.stack):s=typeof n==`string`?n:`An unknown error occurred`,(0,E.jsx)(`div`,{className:S.container,children:(0,E.jsxs)(`div`,{className:S.errorBox,children:[t&&(0,E.jsx)(`img`,{src:t,alt:`Logo`,className:S.icon}),(0,E.jsx)(`h1`,{className:S.errorTitle,children:`Something went wrong`}),(0,E.jsx)(`p`,{className:S.errorMessage,children:s}),u&&(0,E.jsxs)(`div`,{className:S.detailsContainer,children:[(0,E.jsxs)(c,{variant:`text`,onClick:()=>i(!r),className:S.detailsButton,children:[r?`Hide`:`Show`,` details`]}),(0,E.jsx)(a,{in:r,children:(0,E.jsx)(`div`,{className:S.detailsBox,children:(0,E.jsx)(`pre`,{className:S.detailsText,children:u})})})]}),(0,E.jsx)(c,{variant:`contained`,onClick:()=>{window.location.reload()},className:S.reloadButton,children:`Reload Page`})]})})}var T,E,D=e((()=>{s(),T=t(u(),1),d(),C(),E=r();try{w.displayName=`RouteErrorBoundary`,w.__docgenInfo={description:`Error boundary component for React Router routes.
This component catches errors that occur during route loading or rendering,
including module initialization errors like circular dependencies.`,displayName:`RouteErrorBoundary`,filePath:`/home/runner/work/synapse-web-monorepo/synapse-web-monorepo/packages/synapse-react-client/src/components/error/RouteErrorBoundary.tsx`,methods:[],props:{icon:{defaultValue:null,declarations:[{fileName:`synapse-react-client/src/components/error/RouteErrorBoundary.tsx`,name:`TypeLiteral`}],description:``,name:`icon`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}}));function O(e,t){return i([{path:`/`,element:(0,k.jsx)(`div`,{children:`This should not render`}),errorElement:(0,k.jsx)(w,{icon:t}),loader:()=>{throw e}}])}var k,A,j,M,N,P,F,I,L,R,z;e((()=>{d(),D(),k=r(),A={title:`Components/Error/RouteErrorBoundary`,component:w,parameters:{layout:`fullscreen`}},j={render:()=>(0,k.jsx)(n,{router:O(Error(`Something went wrong while loading the page`))})},M={render:()=>{let e=Error(`Failed to fetch data from the server`);return e.stack=`Error: Failed to fetch data from the server
    at fetchData (http://localhost:3000/src/utils/api.ts:42:15)
    at async loadUserProfile (http://localhost:3000/src/pages/Profile.tsx:23:18)
    at async RouteLoader (http://localhost:3000/node_modules/react-router/index.js:156:5)`,(0,k.jsx)(n,{router:O(e)})}},N={render:()=>{let e=ReferenceError(`Cannot access 'QueryWrapperPlotNav' before initialization`);return e.stack=`ReferenceError: Cannot access 'QueryWrapperPlotNav' before initialization
    at http://localhost:3000/@fs/Users/jhodgson/synapse-web-monorepo/packages/synapse-react-client/src/components/QueryWrapperPlotNav/index.ts?t=1765391879833:2121:16
    at async __vite__moduleInitialize (http://localhost:3000/vite/dist/client/env.mjs:235:5)
    at async __vite__moduleResolver (http://localhost:3000/vite/dist/client/env.mjs:165:7)`,(0,k.jsx)(n,{router:O(e,`https://raw.githubusercontent.com/Sage-Bionetworks/synapse-web-monorepo/main/apps/portals/adknowledgeportal/public/logo.svg`)})}},P={render:()=>(0,k.jsx)(n,{router:O({status:404,statusText:`Not Found`,data:{message:`The page you are looking for does not exist`}})})},F={render:()=>(0,k.jsx)(n,{router:O({status:500,statusText:`Internal Server Error`,data:{message:`An unexpected error occurred on the server`}})})},I={render:()=>(0,k.jsx)(n,{router:O(`An unexpected error occurred`)})},L={render:()=>(0,k.jsx)(n,{router:O({someUnknownError:`weird object`})})},R={render:()=>(0,k.jsx)(n,{router:O(Error(`Something went wrong while loading the page`),`https://raw.githubusercontent.com/Sage-Bionetworks/synapse-web-monorepo/main/apps/portals/adknowledgeportal/public/logo.svg`)})},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const router = createErrorRouter(new Error('Something went wrong while loading the page'));
    return <RouterProvider router={router} />;
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const error = new Error('Failed to fetch data from the server');
    error.stack = \`Error: Failed to fetch data from the server
    at fetchData (http://localhost:3000/src/utils/api.ts:42:15)
    at async loadUserProfile (http://localhost:3000/src/pages/Profile.tsx:23:18)
    at async RouteLoader (http://localhost:3000/node_modules/react-router/index.js:156:5)\`;
    const router = createErrorRouter(error);
    return <RouterProvider router={router} />;
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const error = new ReferenceError("Cannot access 'QueryWrapperPlotNav' before initialization");
    error.stack = \`ReferenceError: Cannot access 'QueryWrapperPlotNav' before initialization
    at http://localhost:3000/@fs/Users/jhodgson/synapse-web-monorepo/packages/synapse-react-client/src/components/QueryWrapperPlotNav/index.ts?t=1765391879833:2121:16
    at async __vite__moduleInitialize (http://localhost:3000/vite/dist/client/env.mjs:235:5)
    at async __vite__moduleResolver (http://localhost:3000/vite/dist/client/env.mjs:165:7)\`;
    const router = createErrorRouter(error, 'https://raw.githubusercontent.com/Sage-Bionetworks/synapse-web-monorepo/main/apps/portals/adknowledgeportal/public/logo.svg');
    return <RouterProvider router={router} />;
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const router = createErrorRouter('An unexpected error occurred');
    return <RouterProvider router={router} />;
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    const router = createErrorRouter({
      someUnknownError: 'weird object'
    });
    return <RouterProvider router={router} />;
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const router = createErrorRouter(new Error('Something went wrong while loading the page'), 'https://raw.githubusercontent.com/Sage-Bionetworks/synapse-web-monorepo/main/apps/portals/adknowledgeportal/public/logo.svg');
    return <RouterProvider router={router} />;
  }
}`,...R.parameters?.docs?.source}}},z=[`StandardError`,`ErrorWithStackTrace`,`ModuleInitializationErrorWithIcon`,`RouteNotFoundError`,`ServerError`,`StringError`,`UnknownError`,`WithIcon`]}))();export{M as ErrorWithStackTrace,N as ModuleInitializationErrorWithIcon,P as RouteNotFoundError,F as ServerError,j as StandardError,I as StringError,L as UnknownError,R as WithIcon,z as __namedExportsOrder,A as default};