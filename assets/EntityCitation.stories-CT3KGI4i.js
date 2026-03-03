import{gK as w,r as c,j as n,bR as L,B as R}from"./iframe-BPIYH1oT.js";import{F as k,C as F}from"./CitationPopoverContent-COKaWB7I.js";import{u as E,D as h}from"./useDOI-DkhYr9_4.js";import{u as G}from"./useEntityBundle-DLQmS3vZ.js";import{D as U}from"./DropdownSelect-C9Pm7aR_.js";import"./index-Chi_LkuB.js";import"./Close-DUKe32AS.js";import"./CopyToClipboardIcon-CvQ9gI6B.js";import"./MarkdownSynapse-B95PEuB_.js";import"./SkeletonButton-BzOCV9D1.js";import"./SkeletonInlineBlock-BqdJTX4s.js";import"./SkeletonTable-DGggFpSD.js";import"./SkeletonParagraph-CVXQh454.js";import"./KeyboardArrowDown-DGJh_oT-.js";import"./MenuItem-B9zWTbwn.js";import"./waitForAsyncResult-D2S7oeqa.js";import"./getValidReactChildren-CTaZijRj.js";function q(t,r,d,s){const a=s&&!s.doiAssociation&&w(s.entity)&&s.entity.isLatestVersion,{data:v}=E({id:t,version:r,type:h.ENTITY},{enabled:!!t&&!!r}),{data:j}=E({id:t,version:void 0,type:h.ENTITY},{enabled:a});return d===t?void 0:v??j}const x=({projectId:t,entityId:r,versionNumber:d})=>{const{data:s,isLoading:a}=G(r,d),[v,j]=c.useState(null),[I,p]=c.useState(void 0),[b,u]=c.useState(null),[S,N]=c.useState(void 0),C=c.useRef(null),T=!!v?"cite-as-popover":void 0,e=q(r,d,t,s),{data:o,isLoading:f}=E({id:t,version:void 0,type:h.ENTITY},{enabled:!!t}),D=o&&e;function V(){return D?"Cite as...":e&&!o?"Cite page":!e&&o?"Cite project":""}const _=V(),O=i=>{e&&!o?(p(e.doiUri),u(i.currentTarget)):!e&&o?(p(o.doiUri),u(i.currentTarget)):j(i.currentTarget)},P=n.jsx(F,{doi:I,anchorEl:b,open:!!b&&!!I,id:T,onClose:()=>{u(null),p(void 0)}}),B=["Cite this Project","Cite only this page"];return!o&&!e?null:a||f?n.jsx(L,{sx:{width:{xs:"100%",sm:"140px"},height:"45px"}}):n.jsxs(n.Fragment,{children:[D?n.jsx(U,{disabled:a&&f,options:B,anchorRef:C,sx:{width:{xs:"100%",sm:"initial"}},buttonText:"Cite as...",variant:"outlined",buttonGroupAriaLabel:"Citation options",selectedIndex:S,setSelectedIndex:i=>{N(i);const A=i===0?o?.doiUri:e?.doiUri;A&&(p(A),u(C.current))}}):n.jsx(R,{onClick:O,disabled:a&&f,sx:{width:{xs:"100%",sm:"initial"}},variant:"outlined",startIcon:n.jsx(k,{width:18,height:18}),children:_}),P]})};try{x.displayName="EntityCitation",x.__docgenInfo={description:"",displayName:"EntityCitation",props:{projectId:{defaultValue:null,description:"",name:"projectId",required:!0,type:{name:"string"}},entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},versionNumber:{defaultValue:null,description:"",name:"versionNumber",required:!1,type:{name:"number"}}}}}catch{}const at={title:"Synapse/EntityPage/EntityCitation",component:x,parameters:{chromatic:{viewports:[600,1200]}}},l={args:{entityId:"syn66268092",projectId:"syn64042437",versionNumber:1}},m={args:{entityId:"syn66268085",projectId:"syn64042437",versionNumber:void 0}},y={args:{entityId:"syn66268092",projectId:"syn60582629",versionNumber:1}},g={args:{entityId:"syn68236894",projectId:"syn60582629",versionNumber:void 0}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const ct=["ProjectAndEntity","Project","VersionedEntity","VersionlessEntity"];export{m as Project,l as ProjectAndEntity,y as VersionedEntity,g as VersionlessEntity,ct as __namedExportsOrder,at as default};
