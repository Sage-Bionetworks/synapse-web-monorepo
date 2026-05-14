import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ch as n,HS as r,Uv as i,Vb as a,XS as o,ah as s,el as c,ka as l,my as u,ul as d,wi as f}from"./iframe-CFF1Lvns.js";import{i as p,t as m}from"./useDOI-rMK5njoR.js";import{i as h,n as g,r as _,t as v}from"./CitationPopoverContent-B0K8DVQm.js";import{n as y,t as b}from"./DropdownSelect-7yuAdcTo.js";function x(e,t,r,i){let a=i&&!i.doiAssociation&&d(i.entity)&&i.entity.isLatestVersion,{data:o}=p({id:e,version:t,type:n.ENTITY},{enabled:!!e&&!!t}),{data:s}=p({id:e,version:void 0,type:n.ENTITY},{enabled:a});return r===e?void 0:o??s}var S=e((()=>{m(),c(),s()})),C,w,T,E=e((()=>{o(),h(),i(),m(),f(),s(),g(),C=t(o(),1),S(),y(),w=r(),T=({projectId:e,entityId:t,versionNumber:r})=>{let{data:i,isLoading:o}=l(t,r),[s,c]=(0,C.useState)(null),[d,f]=(0,C.useState)(void 0),[m,h]=(0,C.useState)(null),[g,y]=(0,C.useState)(void 0),S=(0,C.useRef)(null),T=s?`cite-as-popover`:void 0,E=x(t,r,e,i),{data:D,isLoading:O}=p({id:e,version:void 0,type:n.ENTITY},{enabled:!!e}),k=D&&E;function A(){return k?`Cite as...`:E&&!D?`Cite page`:!E&&D?`Cite project`:``}let j=A(),M=e=>{E&&!D?(f(E.doiUri),h(e.currentTarget)):!E&&D?(f(D.doiUri),h(e.currentTarget)):c(e.currentTarget)},N=(0,w.jsx)(v,{doi:d,anchorEl:m,open:!!m&&!!d,id:T,onClose:()=>{h(null),f(void 0)}});return!D&&!E?null:o||O?(0,w.jsx)(u,{sx:{width:{xs:`100%`,sm:`140px`},height:`45px`}}):(0,w.jsxs)(w.Fragment,{children:[k?(0,w.jsx)(b,{disabled:o&&O,options:[`Cite this Project`,`Cite only this page`],anchorRef:S,sx:{width:{xs:`100%`,sm:`initial`}},buttonText:`Cite as...`,variant:`outlined`,buttonGroupAriaLabel:`Citation options`,selectedIndex:g,setSelectedIndex:e=>{y(e);let t=e===0?D?.doiUri:E?.doiUri;t&&(f(t),h(S.current))}}):(0,w.jsx)(a,{onClick:M,disabled:o&&O,sx:{width:{xs:`100%`,sm:`initial`}},variant:`outlined`,startIcon:(0,w.jsx)(_,{width:18,height:18}),children:j}),N]})};try{T.displayName=`EntityCitation`,T.__docgenInfo={description:``,displayName:`EntityCitation`,filePath:`/home/runner/work/synapse-web-monorepo/synapse-web-monorepo/packages/synapse-react-client/src/components/EntityCitation/EntityCitation.tsx`,methods:[],props:{projectId:{defaultValue:null,declarations:[{fileName:`synapse-react-client/src/components/EntityCitation/EntityCitation.tsx`,name:`TypeLiteral`}],description:``,name:`projectId`,required:!0,tags:{},type:{name:`string`}},entityId:{defaultValue:null,declarations:[{fileName:`synapse-react-client/src/components/EntityCitation/EntityCitation.tsx`,name:`TypeLiteral`}],description:``,name:`entityId`,required:!0,tags:{},type:{name:`string`}},versionNumber:{defaultValue:null,declarations:[{fileName:`synapse-react-client/src/components/EntityCitation/EntityCitation.tsx`,name:`TypeLiteral`}],description:``,name:`versionNumber`,required:!1,tags:{},type:{name:`number`}}},tags:{}}}catch{}})),D,O,k,A,j,M;e((()=>{E(),D={title:`Synapse/EntityPage/EntityCitation`,component:T,parameters:{chromatic:{viewports:[600,1200]}}},O={args:{entityId:`syn66268092`,projectId:`syn64042437`,versionNumber:1}},k={args:{entityId:`syn66268085`,projectId:`syn64042437`,versionNumber:void 0}},A={args:{entityId:`syn66268092`,projectId:`syn60582629`,versionNumber:1}},j={args:{entityId:`syn68236894`,projectId:`syn60582629`,versionNumber:void 0}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  // Both project and entity have DOI
  args: {
    entityId: 'syn66268092',
    projectId: 'syn64042437',
    versionNumber: 1
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  // Only project has DOI, entity does not
  args: {
    entityId: 'syn66268085',
    projectId: 'syn64042437',
    versionNumber: undefined
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  // entity is versioned, project does not have DOI
  args: {
    entityId: 'syn66268092',
    projectId: 'syn60582629',
    versionNumber: 1
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  // entity is versionless, project does not have DOI
  args: {
    entityId: 'syn68236894',
    projectId: 'syn60582629',
    versionNumber: undefined
  }
}`,...j.parameters?.docs?.source}}},M=[`ProjectAndEntity`,`Project`,`VersionedEntity`,`VersionlessEntity`]}))();export{k as Project,O as ProjectAndEntity,A as VersionedEntity,j as VersionlessEntity,M as __namedExportsOrder,D as default};