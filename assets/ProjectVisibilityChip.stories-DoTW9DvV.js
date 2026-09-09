import{o as e}from"./preload-helper-CsHsquCd.js";import{pn as t}from"./TextField-DshmLCH7.js";import{t as n}from"./jsx-runtime-l3w3GfrB.js";import{Ln as r,X as i,t as a}from"./esm-C-mwbP0X.js";import{Zt as o,t as s}from"./dist-C7SMz8Oe.js";import{Ln as c,Vn as l}from"./synapse-client-CnbOkvM7.js";import{Mr as u,Nr as d,cr as f,h as p,lr as m,m as h}from"./esm-CaBxgZW7.js";import{Ai as g,Mi as _,nr as v,r as y}from"./useLogin-Crmy3ajJ.js";import{K as b,W as x,ft as S,mt as C,n as w,pt as T,t as E}from"./iframe-BWhpzZ54.js";import{r as D,t as O}from"./AccessControlListUtils-D2ik-zic.js";function k(e,t){let n=O(e),r=n.find(e=>e.principalId===Number(t.publicGroup))?.accessType??[],i=n.find(e=>e.principalId===Number(t.authenticatedUsers))?.accessType??[],a=r.includes(o.READ),s=i.includes(o.READ),c=i.includes(o.DOWNLOAD);return a&&s&&c?`PUBLIC`:a&&s?`DISCOVERABLE`:`PRIVATE`}var A=e((()=>{s(),D()}));function j({visibility:e}){return(0,N.jsx)(r,{sx:{display:`flex`,padding:`4px 8px`,alignItems:`center`,gap:`6px`,borderRadius:`7px`,width:`fit-content`,backgroundColor:F[e].color,"& .MuiChip-icon":{marginLeft:`0px`,marginRight:`0px`},"& .MuiChip-label":{px:0}},icon:F[e].icon,label:(0,N.jsx)(t,{variant:`body2`,sx:{lineHeight:`12px`,letterSpacing:`-0.06px`},children:F[e].label})})}function M({entityId:e}){let{data:t,isLoading:n,isError:r}=v(e,void 0,{includeBenefactorACL:!0}),{data:a,isLoading:o,isError:s}=_();return r||s?null:n||o?(0,N.jsx)(i,{variant:`rounded`,width:120,height:24}):(0,N.jsx)(j,{visibility:k(t?.benefactorAcl?.resourceAccess??[],a||{})})}var N,P,F,I=e((()=>{g(),a(),y(),A(),p(),d(),m(),N=n(),P={fill:`var(--synapse-gray-900)`,width:`16px`},F={PRIVATE:{label:`Private Project`,color:`#FAC3C3`,icon:(0,N.jsx)(f,{sx:P})},DISCOVERABLE:{label:`Discoverable Project`,color:`#FDEFC1`,icon:(0,N.jsx)(h,{sx:P})},PUBLIC:{label:`Public Project`,color:`#D4EFD4`,icon:(0,N.jsx)(u,{sx:P})}};try{M.displayName=`ProjectVisibilityChip`,M.__docgenInfo={description:``,displayName:`ProjectVisibilityChip`,filePath:`/home/runner/work/synapse-web-monorepo/synapse-web-monorepo/packages/synapse-react-client/src/components/ProjectVisibilityChip/ProjectVisibilityChip.tsx`,methods:[],props:{entityId:{defaultValue:null,declarations:[{fileName:`synapse-react-client/src/components/ProjectVisibilityChip/ProjectVisibilityChip.tsx`,name:`TypeLiteral`}],description:``,name:`entityId`,required:!0,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),L,R,z,B,V;e((()=>{I(),l(),s(),C(),b(),w(),L={title:`Components/ProjectVisibilityChip`,component:M,parameters:{chromatic:{viewports:[600,1200]}}},R={args:{entityId:`syn101`},parameters:{stack:`mock`,msw:{handlers:[x(c,{benefactorAcl:{id:`syn101`,etag:`mock-etag`,resourceAccess:[]}}),...E(c)]}}},z={args:{entityId:`syn102`},parameters:{stack:`mock`,msw:{handlers:[x(c,{benefactorAcl:{id:`syn102`,etag:`mock-etag`,resourceAccess:[{principalId:T,accessType:[o.READ]},{principalId:S,accessType:[o.READ]}]}}),...E(c)]}}},B={args:{entityId:`syn103`},parameters:{stack:`mock`,msw:{handlers:[x(c,{benefactorAcl:{id:`syn103`,etag:`mock-etag`,resourceAccess:[{principalId:T,accessType:[o.READ]},{principalId:S,accessType:[o.READ,o.DOWNLOAD]}]}}),...E(c)]}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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