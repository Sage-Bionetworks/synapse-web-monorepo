import{o as e,u as t}from"./preload-helper-CsHsquCd.js";import{t as n}from"./react-BXiJfEW5.js";import{t as r}from"./jsx-runtime-l3w3GfrB.js";import{B as i,ln as a,t as o}from"./esm-CeuVXgHQ.js";import{q as s,t as c}from"./dist-BmpJ4c_X.js";import{Ht as l,Xn as u}from"./useLogin-C3isYBpC.js";import{M as d,x as f}from"./StringUtils-DMcXAJq8.js";import{i as p,t as m}from"./useDOI-BuoZlJ7X.js";import{i as h,n as g,r as _,t as v}from"./CitationPopoverContent-B2WVUhb3.js";import{n as y,t as b}from"./DropdownSelect-Cr5E-VDe.js";function x(e,t,n,r){let i=r&&!r.doiAssociation&&d(r.entity)&&r.entity.isLatestVersion,{data:a}=p({id:e,version:t,type:s.ENTITY},{enabled:!!e&&!!t}),{data:o}=p({id:e,version:void 0,type:s.ENTITY},{enabled:i});return n===e?void 0:a??o}var S=e((()=>{m(),f(),c()})),C,w,T,E,D=e((()=>{n(),h(),o(),m(),l(),c(),g(),C=t(n(),1),S(),y(),w=r(),T=`10px 12px`,E=({projectId:e,entityId:t,versionNumber:n})=>{let{data:r,isLoading:o}=u(t,n),[c,l]=(0,C.useState)(null),[d,f]=(0,C.useState)(void 0),[m,h]=(0,C.useState)(null),[g,y]=(0,C.useState)(void 0),S=(0,C.useRef)(null),E=c?`cite-as-popover`:void 0,D=x(t,n,e,r),{data:O,isLoading:k}=p({id:e,version:void 0,type:s.ENTITY},{enabled:!!e}),A=O&&D;function j(){return A?`Cite as...`:D&&!O?`Cite page`:!D&&O?`Cite project`:``}let M=j(),N=e=>{D&&!O?(f(D.doiUri),h(e.currentTarget)):!D&&O?(f(O.doiUri),h(e.currentTarget)):l(e.currentTarget)},P=(0,w.jsx)(v,{doi:d,anchorEl:m,open:!!m&&!!d,id:E,onClose:()=>{h(null),f(void 0)}});return!O&&!D?null:o||k?(0,w.jsx)(i,{sx:{width:{xs:`100%`,sm:`140px`},height:`45px`}}):(0,w.jsxs)(w.Fragment,{children:[A?(0,w.jsx)(b,{disabled:o&&k,options:[`Cite this Project`,`Cite only this page`],anchorRef:S,sx:{width:{xs:`100%`,sm:`initial`},"& .MuiButtonGroup-firstButton":{borderTopLeftRadius:`6px`,borderBottomLeftRadius:`6px`,padding:T},"& .MuiButtonGroup-lastButton":{borderTopRightRadius:`6px`,borderBottomRightRadius:`6px`},"& .MuiButton-root":{fontWeight:540}},buttonText:`Cite as...`,variant:`outlined`,buttonGroupAriaLabel:`Citation options`,selectedIndex:g,setSelectedIndex:e=>{y(e);let t=e===0?O?.doiUri:D?.doiUri;t&&(f(t),h(S.current))}}):(0,w.jsx)(a,{onClick:N,disabled:o&&k,sx:{width:{xs:`100%`,sm:`initial`},borderRadius:`6px`,fontWeight:540,padding:T},variant:`outlined`,startIcon:(0,w.jsx)(_,{width:18,height:18}),children:M}),P]})};try{E.displayName=`EntityCitation`,E.__docgenInfo={description:``,displayName:`EntityCitation`,filePath:`/home/runner/work/synapse-web-monorepo/synapse-web-monorepo/packages/synapse-react-client/src/components/EntityCitation/EntityCitation.tsx`,methods:[],props:{projectId:{defaultValue:null,declarations:[{fileName:`synapse-react-client/src/components/EntityCitation/EntityCitation.tsx`,name:`TypeLiteral`}],description:``,name:`projectId`,required:!0,tags:{},type:{name:`string`}},entityId:{defaultValue:null,declarations:[{fileName:`synapse-react-client/src/components/EntityCitation/EntityCitation.tsx`,name:`TypeLiteral`}],description:``,name:`entityId`,required:!0,tags:{},type:{name:`string`}},versionNumber:{defaultValue:null,declarations:[{fileName:`synapse-react-client/src/components/EntityCitation/EntityCitation.tsx`,name:`TypeLiteral`}],description:``,name:`versionNumber`,required:!1,tags:{},type:{name:`number`}}},tags:{}}}catch{}})),O,k,A,j,M,N;e((()=>{D(),O={title:`Synapse/EntityPage/EntityCitation`,component:E,parameters:{chromatic:{viewports:[600,1200]}}},k={args:{entityId:`syn66268092`,projectId:`syn64042437`,versionNumber:1}},A={args:{entityId:`syn66268085`,projectId:`syn64042437`,versionNumber:void 0}},j={args:{entityId:`syn66268092`,projectId:`syn60582629`,versionNumber:1}},M={args:{entityId:`syn68236894`,projectId:`syn60582629`,versionNumber:void 0}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  // Both project and entity have DOI
  args: {
    entityId: 'syn66268092',
    projectId: 'syn64042437',
    versionNumber: 1
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  // Only project has DOI, entity does not
  args: {
    entityId: 'syn66268085',
    projectId: 'syn64042437',
    versionNumber: undefined
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  // entity is versioned, project does not have DOI
  args: {
    entityId: 'syn66268092',
    projectId: 'syn60582629',
    versionNumber: 1
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  // entity is versionless, project does not have DOI
  args: {
    entityId: 'syn68236894',
    projectId: 'syn60582629',
    versionNumber: undefined
  }
}`,...M.parameters?.docs?.source}}},N=[`ProjectAndEntity`,`Project`,`VersionedEntity`,`VersionlessEntity`]}))();export{A as Project,k as ProjectAndEntity,j as VersionedEntity,M as VersionlessEntity,N as __namedExportsOrder,O as default};