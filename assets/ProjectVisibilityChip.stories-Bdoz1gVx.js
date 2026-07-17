import{o as e}from"./preload-helper-CsHsquCd.js";import{pn as t}from"./TextField-DshmLCH7.js";import{t as n}from"./jsx-runtime-l3w3GfrB.js";import{B as r,Tn as i,t as a}from"./esm-CeuVXgHQ.js";import{Xt as o,t as s}from"./dist-DyN41VtP.js";import{Tn as c,kn as l}from"./synapse-client-SWrWebbD.js";import{Jn as u,Yn as d,_r as f,gr as p,h as m,m as h}from"./esm-CWFbt2PX.js";import{Jn as g,fi as _,mi as v,r as y}from"./useLogin-Bv14npR9.js";import{L as b,at as x,it as S,n as C,rt as w,t as T,z as E}from"./iframe-CDzcF1wi.js";import{r as D,t as O}from"./AccessControlListUtils-D2ik-zic.js";function k(e,t){let n=O(e),r=n.find(e=>e.principalId===Number(t.publicGroup))?.accessType??[],i=n.find(e=>e.principalId===Number(t.authenticatedUsers))?.accessType??[],a=r.includes(o.READ),s=i.includes(o.READ),c=i.includes(o.DOWNLOAD);return a&&s&&c?`PUBLIC`:a&&s?`DISCOVERABLE`:`PRIVATE`}var A=e((()=>{s(),D()}));function j({visibility:e}){return(0,N.jsx)(i,{sx:{display:`flex`,padding:`4px 8px`,alignItems:`center`,gap:`6px`,borderRadius:`7px`,width:`fit-content`,backgroundColor:F[e].color,"& .MuiChip-icon":{marginLeft:`0px`,marginRight:`0px`},"& .MuiChip-label":{px:0}},icon:F[e].icon,label:(0,N.jsx)(t,{variant:`body2`,sx:{lineHeight:`12px`,letterSpacing:`-0.06px`},children:F[e].label})})}function M({entityId:e}){let{data:t,isLoading:n,isError:i}=g(e,void 0,{includeBenefactorACL:!0}),{data:a,isLoading:o,isError:s}=v();return i||s?null:n||o?(0,N.jsx)(r,{variant:`rounded`,width:120,height:24}):(0,N.jsx)(j,{visibility:k(t?.benefactorAcl?.resourceAccess??[],a||{})})}var N,P,F,I=e((()=>{_(),a(),y(),A(),m(),f(),d(),N=n(),P={fill:`var(--synapse-gray-900)`,width:`16px`},F={PRIVATE:{label:`Private Project`,color:`#FAC3C3`,icon:(0,N.jsx)(u,{sx:P})},DISCOVERABLE:{label:`Discoverable Project`,color:`#FDEFC1`,icon:(0,N.jsx)(h,{sx:P})},PUBLIC:{label:`Public Project`,color:`#D4EFD4`,icon:(0,N.jsx)(p,{sx:P})}};try{M.displayName=`ProjectVisibilityChip`,M.__docgenInfo={description:``,displayName:`ProjectVisibilityChip`,filePath:`/home/runner/work/synapse-web-monorepo/synapse-web-monorepo/packages/synapse-react-client/src/components/ProjectVisibilityChip/ProjectVisibilityChip.tsx`,methods:[],props:{entityId:{defaultValue:null,declarations:[{fileName:`synapse-react-client/src/components/ProjectVisibilityChip/ProjectVisibilityChip.tsx`,name:`TypeLiteral`}],description:``,name:`entityId`,required:!0,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),L,R,z,B,V;e((()=>{I(),l(),s(),x(),E(),C(),L={title:`Components/ProjectVisibilityChip`,component:M,parameters:{chromatic:{viewports:[600,1200]}}},R={args:{entityId:`syn101`},parameters:{stack:`mock`,msw:{handlers:[b(c,{benefactorAcl:{id:`syn101`,etag:`mock-etag`,resourceAccess:[]}}),...T(c)]}}},z={args:{entityId:`syn102`},parameters:{stack:`mock`,msw:{handlers:[b(c,{benefactorAcl:{id:`syn102`,etag:`mock-etag`,resourceAccess:[{principalId:S,accessType:[o.READ]},{principalId:w,accessType:[o.READ]}]}}),...T(c)]}}},B={args:{entityId:`syn103`},parameters:{stack:`mock`,msw:{handlers:[b(c,{benefactorAcl:{id:`syn103`,etag:`mock-etag`,resourceAccess:[{principalId:S,accessType:[o.READ]},{principalId:w,accessType:[o.READ,o.DOWNLOAD]}]}}),...T(c)]}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn101'
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [getEntityBundleHandler(MOCK_REPO_ORIGIN, {
        benefactorAcl: {
          id: 'syn101',
          etag: 'mock-etag',
          resourceAccess: []
        }
      }), ...getHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn102'
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [getEntityBundleHandler(MOCK_REPO_ORIGIN, {
        benefactorAcl: {
          id: 'syn102',
          etag: 'mock-etag',
          resourceAccess: [{
            principalId: MOCK_PUBLIC_PRINCIPAL_ID,
            accessType: [ACCESS_TYPE.READ]
          }, {
            principalId: MOCK_AUTHENTICATED_PRINCIPAL_ID,
            accessType: [ACCESS_TYPE.READ]
          }]
        }
      }), ...getHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn103'
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [getEntityBundleHandler(MOCK_REPO_ORIGIN, {
        benefactorAcl: {
          id: 'syn103',
          etag: 'mock-etag',
          resourceAccess: [{
            principalId: MOCK_PUBLIC_PRINCIPAL_ID,
            accessType: [ACCESS_TYPE.READ]
          }, {
            principalId: MOCK_AUTHENTICATED_PRINCIPAL_ID,
            accessType: [ACCESS_TYPE.READ, ACCESS_TYPE.DOWNLOAD]
          }]
        }
      }), ...getHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...B.parameters?.docs?.source}}},V=[`Private`,`Discoverable`,`Public`]}))();export{z as Discoverable,R as Private,B as Public,V as __namedExportsOrder,L as default};