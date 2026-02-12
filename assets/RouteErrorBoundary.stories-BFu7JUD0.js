import{kD as f,r as R,kE as y,j as e,B as E,Z as S,jV as s,jT as k}from"./iframe-Es1qDbGP.js";import"./index-Chi_LkuB.js";const B="_container_1jn5a_1",N="_errorBox_1jn5a_7",b="_icon_1jn5a_17",P="_errorTitle_1jn5a_23",T="_errorMessage_1jn5a_30",C="_detailsContainer_1jn5a_36",W="_detailsButton_1jn5a_40",I="_detailsBox_1jn5a_44",z="_detailsText_1jn5a_53",F="_reloadButton_1jn5a_61",o={container:B,errorBox:N,icon:b,errorTitle:P,errorMessage:T,detailsContainer:C,detailsButton:W,detailsBox:I,detailsText:z,reloadButton:F};function x(r){const{icon:n}=r,t=f(),[w,v]=R.useState(!1);let c,i;y(t)?(c=`${t.status} ${t.statusText}`,i=t.data?.message):t instanceof Error?(c=t.message,i=t.stack):typeof t=="string"?c=t:c="An unknown error occurred";const j=()=>{window.location.reload()};return e.jsx("div",{className:o.container,children:e.jsxs("div",{className:o.errorBox,children:[n&&e.jsx("img",{src:n,alt:"Logo",className:o.icon}),e.jsx("h1",{className:o.errorTitle,children:"Something went wrong"}),e.jsx("p",{className:o.errorMessage,children:c}),i&&e.jsxs("div",{className:o.detailsContainer,children:[e.jsxs(E,{variant:"text",onClick:()=>v(!w),className:o.detailsButton,children:[w?"Hide":"Show"," details"]}),e.jsx(S,{in:w,children:e.jsx("div",{className:o.detailsBox,children:e.jsx("pre",{className:o.detailsText,children:i})})})]}),e.jsx(E,{variant:"contained",onClick:j,className:o.reloadButton,children:"Reload Page"})]})})}try{x.displayName="RouteErrorBoundary",x.__docgenInfo={description:`Error boundary component for React Router routes.
This component catches errors that occur during route loading or rendering,
including module initialization errors like circular dependencies.`,displayName:"RouteErrorBoundary",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string"}}}}}catch{}const D={title:"Components/Error/RouteErrorBoundary",component:x,parameters:{layout:"fullscreen"}};function a(r,n){return k([{path:"/",element:e.jsx("div",{children:"This should not render"}),errorElement:e.jsx(x,{icon:n}),loader:()=>{throw r}}])}const l={render:()=>{const r=a(new Error("Something went wrong while loading the page"));return e.jsx(s,{router:r})}},u={render:()=>{const r=new Error("Failed to fetch data from the server");r.stack=`Error: Failed to fetch data from the server
    at fetchData (http://localhost:3000/src/utils/api.ts:42:15)
    at async loadUserProfile (http://localhost:3000/src/pages/Profile.tsx:23:18)
    at async RouteLoader (http://localhost:3000/node_modules/react-router/index.js:156:5)`;const n=a(r);return e.jsx(s,{router:n})}},d={render:()=>{const r=new ReferenceError("Cannot access 'QueryWrapperPlotNav' before initialization");r.stack=`ReferenceError: Cannot access 'QueryWrapperPlotNav' before initialization
    at http://localhost:3000/@fs/Users/jhodgson/synapse-web-monorepo/packages/synapse-react-client/src/components/QueryWrapperPlotNav/index.ts?t=1765391879833:2121:16
    at async __vite__moduleInitialize (http://localhost:3000/vite/dist/client/env.mjs:235:5)
    at async __vite__moduleResolver (http://localhost:3000/vite/dist/client/env.mjs:165:7)`;const n=a(r,"https://raw.githubusercontent.com/Sage-Bionetworks/synapse-web-monorepo/main/apps/portals/adknowledgeportal/public/logo.svg");return e.jsx(s,{router:n})}},p={render:()=>{const r=a({status:404,statusText:"Not Found",data:{message:"The page you are looking for does not exist"}});return e.jsx(s,{router:r})}},m={render:()=>{const r=a({status:500,statusText:"Internal Server Error",data:{message:"An unexpected error occurred on the server"}});return e.jsx(s,{router:r})}},h={render:()=>{const r=a("An unexpected error occurred");return e.jsx(s,{router:r})}},g={render:()=>{const r=a({someUnknownError:"weird object"});return e.jsx(s,{router:r})}},_={render:()=>{const r=a(new Error("Something went wrong while loading the page"),"https://raw.githubusercontent.com/Sage-Bionetworks/synapse-web-monorepo/main/apps/portals/adknowledgeportal/public/logo.svg");return e.jsx(s,{router:r})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const router = createErrorRouter(new Error('Something went wrong while loading the page'));
    return <RouterProvider router={router} />;
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const error = new Error('Failed to fetch data from the server');
    error.stack = \`Error: Failed to fetch data from the server
    at fetchData (http://localhost:3000/src/utils/api.ts:42:15)
    at async loadUserProfile (http://localhost:3000/src/pages/Profile.tsx:23:18)
    at async RouteLoader (http://localhost:3000/node_modules/react-router/index.js:156:5)\`;
    const router = createErrorRouter(error);
    return <RouterProvider router={router} />;
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const error = new ReferenceError("Cannot access 'QueryWrapperPlotNav' before initialization");
    error.stack = \`ReferenceError: Cannot access 'QueryWrapperPlotNav' before initialization
    at http://localhost:3000/@fs/Users/jhodgson/synapse-web-monorepo/packages/synapse-react-client/src/components/QueryWrapperPlotNav/index.ts?t=1765391879833:2121:16
    at async __vite__moduleInitialize (http://localhost:3000/vite/dist/client/env.mjs:235:5)
    at async __vite__moduleResolver (http://localhost:3000/vite/dist/client/env.mjs:165:7)\`;
    const router = createErrorRouter(error, 'https://raw.githubusercontent.com/Sage-Bionetworks/synapse-web-monorepo/main/apps/portals/adknowledgeportal/public/logo.svg');
    return <RouterProvider router={router} />;
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const router = createErrorRouter('An unexpected error occurred');
    return <RouterProvider router={router} />;
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const router = createErrorRouter({
      someUnknownError: 'weird object'
    });
    return <RouterProvider router={router} />;
  }
}`,...g.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const router = createErrorRouter(new Error('Something went wrong while loading the page'), 'https://raw.githubusercontent.com/Sage-Bionetworks/synapse-web-monorepo/main/apps/portals/adknowledgeportal/public/logo.svg');
    return <RouterProvider router={router} />;
  }
}`,..._.parameters?.docs?.source}}};const Q=["StandardError","ErrorWithStackTrace","ModuleInitializationErrorWithIcon","RouteNotFoundError","ServerError","StringError","UnknownError","WithIcon"];export{u as ErrorWithStackTrace,d as ModuleInitializationErrorWithIcon,p as RouteNotFoundError,m as ServerError,l as StandardError,h as StringError,g as UnknownError,_ as WithIcon,Q as __namedExportsOrder,D as default};
