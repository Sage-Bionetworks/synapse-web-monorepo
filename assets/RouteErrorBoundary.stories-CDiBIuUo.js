import{kz as V,r as Y,kA as G,j as e,B as v,Y as J,jR as s,jP as K}from"./iframe-DDhTpaiN.js";import"./index-r8ZA1smB.js";const X="_container_1jn5a_1",Z="_errorBox_1jn5a_7",rr="_icon_1jn5a_17",er="_errorTitle_1jn5a_23",or="_errorMessage_1jn5a_30",tr="_detailsContainer_1jn5a_36",nr="_detailsButton_1jn5a_40",sr="_detailsBox_1jn5a_44",ar="_detailsText_1jn5a_53",cr="_reloadButton_1jn5a_61",o={container:X,errorBox:Z,icon:rr,errorTitle:er,errorMessage:or,detailsContainer:tr,detailsButton:nr,detailsBox:sr,detailsText:ar,reloadButton:cr};function x(r){var E;const{icon:n}=r,t=V(),[w,H]=Y.useState(!1);let c,i;G(t)?(c=`${t.status} ${t.statusText}`,i=(E=t.data)==null?void 0:E.message):t instanceof Error?(c=t.message,i=t.stack):typeof t=="string"?c=t:c="An unknown error occurred";const O=()=>{window.location.reload()};return e.jsx("div",{className:o.container,children:e.jsxs("div",{className:o.errorBox,children:[n&&e.jsx("img",{src:n,alt:"Logo",className:o.icon}),e.jsx("h1",{className:o.errorTitle,children:"Something went wrong"}),e.jsx("p",{className:o.errorMessage,children:c}),i&&e.jsxs("div",{className:o.detailsContainer,children:[e.jsxs(v,{variant:"text",onClick:()=>H(!w),className:o.detailsButton,children:[w?"Hide":"Show"," details"]}),e.jsx(J,{in:w,children:e.jsx("div",{className:o.detailsBox,children:e.jsx("pre",{className:o.detailsText,children:i})})})]}),e.jsx(v,{variant:"contained",onClick:O,className:o.reloadButton,children:"Reload Page"})]})})}try{x.displayName="RouteErrorBoundary",x.__docgenInfo={description:`Error boundary component for React Router routes.
This component catches errors that occur during route loading or rendering,
including module initialization errors like circular dependencies.`,displayName:"RouteErrorBoundary",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string"}}}}}catch{}const ur={title:"Components/Error/RouteErrorBoundary",component:x,parameters:{layout:"fullscreen"}};function a(r,n){return K([{path:"/",element:e.jsx("div",{children:"This should not render"}),errorElement:e.jsx(x,{icon:n}),loader:()=>{throw r}}])}const l={render:()=>{const r=a(new Error("Something went wrong while loading the page"));return e.jsx(s,{router:r})}},u={render:()=>{const r=new Error("Failed to fetch data from the server");r.stack=`Error: Failed to fetch data from the server
    at fetchData (http://localhost:3000/src/utils/api.ts:42:15)
    at async loadUserProfile (http://localhost:3000/src/pages/Profile.tsx:23:18)
    at async RouteLoader (http://localhost:3000/node_modules/react-router/index.js:156:5)`;const n=a(r);return e.jsx(s,{router:n})}},d={render:()=>{const r=new ReferenceError("Cannot access 'QueryWrapperPlotNav' before initialization");r.stack=`ReferenceError: Cannot access 'QueryWrapperPlotNav' before initialization
    at http://localhost:3000/@fs/Users/jhodgson/synapse-web-monorepo/packages/synapse-react-client/src/components/QueryWrapperPlotNav/index.ts?t=1765391879833:2121:16
    at async __vite__moduleInitialize (http://localhost:3000/vite/dist/client/env.mjs:235:5)
    at async __vite__moduleResolver (http://localhost:3000/vite/dist/client/env.mjs:165:7)`;const n=a(r,"https://raw.githubusercontent.com/Sage-Bionetworks/synapse-web-monorepo/main/apps/portals/adknowledgeportal/public/logo.svg");return e.jsx(s,{router:n})}},p={render:()=>{const r=a({status:404,statusText:"Not Found",data:{message:"The page you are looking for does not exist"}});return e.jsx(s,{router:r})}},m={render:()=>{const r=a({status:500,statusText:"Internal Server Error",data:{message:"An unexpected error occurred on the server"}});return e.jsx(s,{router:r})}},h={render:()=>{const r=a("An unexpected error occurred");return e.jsx(s,{router:r})}},g={render:()=>{const r=a({someUnknownError:"weird object"});return e.jsx(s,{router:r})}},_={render:()=>{const r=a(new Error("Something went wrong while loading the page"),"https://raw.githubusercontent.com/Sage-Bionetworks/synapse-web-monorepo/main/apps/portals/adknowledgeportal/public/logo.svg");return e.jsx(s,{router:r})}};var j,R,f;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const router = createErrorRouter(new Error('Something went wrong while loading the page'));
    return <RouterProvider router={router} />;
  }
}`,...(f=(R=l.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};var y,S,k;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const error = new Error('Failed to fetch data from the server');
    error.stack = \`Error: Failed to fetch data from the server
    at fetchData (http://localhost:3000/src/utils/api.ts:42:15)
    at async loadUserProfile (http://localhost:3000/src/pages/Profile.tsx:23:18)
    at async RouteLoader (http://localhost:3000/node_modules/react-router/index.js:156:5)\`;
    const router = createErrorRouter(error);
    return <RouterProvider router={router} />;
  }
}`,...(k=(S=u.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var B,N,b;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const error = new ReferenceError("Cannot access 'QueryWrapperPlotNav' before initialization");
    error.stack = \`ReferenceError: Cannot access 'QueryWrapperPlotNav' before initialization
    at http://localhost:3000/@fs/Users/jhodgson/synapse-web-monorepo/packages/synapse-react-client/src/components/QueryWrapperPlotNav/index.ts?t=1765391879833:2121:16
    at async __vite__moduleInitialize (http://localhost:3000/vite/dist/client/env.mjs:235:5)
    at async __vite__moduleResolver (http://localhost:3000/vite/dist/client/env.mjs:165:7)\`;
    const router = createErrorRouter(error, 'https://raw.githubusercontent.com/Sage-Bionetworks/synapse-web-monorepo/main/apps/portals/adknowledgeportal/public/logo.svg');
    return <RouterProvider router={router} />;
  }
}`,...(b=(N=d.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};var P,T,C;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(C=(T=p.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var W,I,z;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(z=(I=m.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var F,M,U;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const router = createErrorRouter('An unexpected error occurred');
    return <RouterProvider router={router} />;
  }
}`,...(U=(M=h.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var A,Q,D;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const router = createErrorRouter({
      someUnknownError: 'weird object'
    });
    return <RouterProvider router={router} />;
  }
}`,...(D=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:D.source}}};var L,$,q;_.parameters={..._.parameters,docs:{...(L=_.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const router = createErrorRouter(new Error('Something went wrong while loading the page'), 'https://raw.githubusercontent.com/Sage-Bionetworks/synapse-web-monorepo/main/apps/portals/adknowledgeportal/public/logo.svg');
    return <RouterProvider router={router} />;
  }
}`,...(q=($=_.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};const dr=["StandardError","ErrorWithStackTrace","ModuleInitializationErrorWithIcon","RouteNotFoundError","ServerError","StringError","UnknownError","WithIcon"];export{u as ErrorWithStackTrace,d as ModuleInitializationErrorWithIcon,p as RouteNotFoundError,m as ServerError,l as StandardError,h as StringError,g as UnknownError,_ as WithIcon,dr as __namedExportsOrder,ur as default};
