import{gZ as w,r as c,j as n,c2 as L,B as R}from"./iframe-MmUnwf_I.js";import{F as k,C as F}from"./CitationPopoverContent-C-BNGvQH.js";import{u as E,D as h}from"./useDOI-OF67-XbO.js";import{u as G}from"./useEntityBundle-CYL14dsn.js";import{D as U}from"./DropdownSelect-DMXlRZxI.js";import"./index-Chi_LkuB.js";import"./Close-B3vYte_0.js";import"./CopyToClipboardIcon-DuThpcBJ.js";import"./MarkdownSynapse-CVJ0Q6XW.js";import"./SkeletonButton-I9hMZOT-.js";import"./SkeletonInlineBlock-Di0FCUFm.js";import"./SkeletonTable-BLb5k01Q.js";import"./SkeletonParagraph-_n4WmOaG.js";import"./KeyboardArrowDown-D1cw0sXd.js";import"./MenuItem-D3dfLHqd.js";import"./waitForAsyncResult-7dp-BdCi.js";import"./useSuspenseQuery-BiDsxdrf.js";import"./getValidReactChildren-Zl6znZmh.js";function q(t,r,d,s){const a=s&&!s.doiAssociation&&w(s.entity)&&s.entity.isLatestVersion,{data:v}=E({id:t,version:r,type:h.ENTITY},{enabled:!!t&&!!r}),{data:j}=E({id:t,version:void 0,type:h.ENTITY},{enabled:a});return d===t?void 0:v??j}const x=({projectId:t,entityId:r,versionNumber:d})=>{const{data:s,isLoading:a}=G(r,d),[v,j]=c.useState(null),[I,p]=c.useState(void 0),[b,u]=c.useState(null),[S,N]=c.useState(void 0),C=c.useRef(null),T=!!v?"cite-as-popover":void 0,e=q(r,d,t,s),{data:o,isLoading:f}=E({id:t,version:void 0,type:h.ENTITY},{enabled:!!t}),D=o&&e;function V(){return D?"Cite as...":e&&!o?"Cite page":!e&&o?"Cite project":""}const _=V(),O=i=>{e&&!o?(p(e.doiUri),u(i.currentTarget)):!e&&o?(p(o.doiUri),u(i.currentTarget)):j(i.currentTarget)},P=n.jsx(F,{doi:I,anchorEl:b,open:!!b&&!!I,id:T,onClose:()=>{u(null),p(void 0)}}),B=["Cite this Project","Cite only this page"];return!o&&!e?null:a||f?n.jsx(L,{sx:{width:{xs:"100%",sm:"140px"},height:"45px"}}):n.jsxs(n.Fragment,{children:[D?n.jsx(U,{disabled:a&&f,options:B,anchorRef:C,sx:{width:{xs:"100%",sm:"initial"}},buttonText:"Cite as...",variant:"outlined",buttonGroupAriaLabel:"Citation options",selectedIndex:S,setSelectedIndex:i=>{N(i);const A=i===0?o?.doiUri:e?.doiUri;A&&(p(A),u(C.current))}}):n.jsx(R,{onClick:O,disabled:a&&f,sx:{width:{xs:"100%",sm:"initial"}},variant:"outlined",startIcon:n.jsx(k,{width:18,height:18}),children:_}),P]})};try{x.displayName="EntityCitation",x.__docgenInfo={description:"",displayName:"EntityCitation",props:{projectId:{defaultValue:null,description:"",name:"projectId",required:!0,type:{name:"string"}},entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},versionNumber:{defaultValue:null,description:"",name:"versionNumber",required:!1,type:{name:"number"}}}}}catch{}const ct={title:"Synapse/EntityPage/EntityCitation",component:x,parameters:{chromatic:{viewports:[600,1200]}}},l={args:{entityId:"syn66268092",projectId:"syn64042437",versionNumber:1}},m={args:{entityId:"syn66268085",projectId:"syn64042437",versionNumber:void 0}},y={args:{entityId:"syn66268092",projectId:"syn60582629",versionNumber:1}},g={args:{entityId:"syn68236894",projectId:"syn60582629",versionNumber:void 0}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  // Both project and entity have DOI
  args: {
    entityId: 'syn66268092',
    projectId: 'syn64042437',
    versionNumber: 1
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  // Only project has DOI, entity does not
  args: {
    entityId: 'syn66268085',
    projectId: 'syn64042437',
    versionNumber: undefined
  }
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  // entity is versioned, project does not have DOI
  args: {
    entityId: 'syn66268092',
    projectId: 'syn60582629',
    versionNumber: 1
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  // entity is versionless, project does not have DOI
  args: {
    entityId: 'syn68236894',
    projectId: 'syn60582629',
    versionNumber: undefined
  }
}`,...g.parameters?.docs?.source}}};const dt=["ProjectAndEntity","Project","VersionedEntity","VersionlessEntity"];export{m as Project,l as ProjectAndEntity,y as VersionedEntity,g as VersionlessEntity,dt as __namedExportsOrder,ct as default};
