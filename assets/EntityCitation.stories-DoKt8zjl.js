import{h1 as J,r as c,j as o,bX as K,B as M}from"./iframe-BnETViYe.js";import{F as Q,C as W}from"./CitationPopoverContent-DIfKUgbc.js";import{u as h,D as E}from"./useDOI-4k6aItF8.js";import{u as Z}from"./useEntityBundle-DZsIq2C9.js";import{D as $}from"./DropdownSelect-koA00LFc.js";import"./index-r8ZA1smB.js";import"./Close-rvN_S8Vv.js";import"./CopyToClipboardIcon-COxrq_5h.js";import"./MarkdownSynapse-Bip7xTA3.js";import"./SkeletonButton-DC6QAxqn.js";import"./SkeletonInlineBlock-CvdUTVnt.js";import"./SkeletonTable-C-IptaAB.js";import"./SkeletonParagraph-Cc0HWYg7.js";import"./MenuItem-BuXD1mJM.js";import"./waitForAsyncResult-DNzRqu8v.js";import"./getValidReactChildren-D91abA9N.js";function ee(n,i,d,s){const a=s&&!s.doiAssociation&&J(s.entity)&&s.entity.isLatestVersion,{data:g}=h({id:n,version:i,type:E.ENTITY},{enabled:!!n&&!!i}),{data:j}=h({id:n,version:void 0,type:E.ENTITY},{enabled:a});return d===n?void 0:g??j}const x=({projectId:n,entityId:i,versionNumber:d})=>{const{data:s,isLoading:a}=Z(i,d),[g,j]=c.useState(null),[I,p]=c.useState(void 0),[b,u]=c.useState(null),[F,G]=c.useState(void 0),C=c.useRef(null),U=!!g?"cite-as-popover":void 0,e=ee(i,d,n,s),{data:t,isLoading:f}=h({id:n,version:void 0,type:E.ENTITY},{enabled:!!n}),D=t&&e;function q(){return D?"Cite as...":e&&!t?"Cite page":!e&&t?"Cite project":""}const Y=q(),X=r=>{e&&!t?(p(e.doiUri),u(r.currentTarget)):!e&&t?(p(t.doiUri),u(r.currentTarget)):j(r.currentTarget)},z=o.jsx(W,{doi:I,anchorEl:b,open:!!b&&!!I,id:U,onClose:()=>{u(null),p(void 0)}}),H=["Cite this Project","Cite only this page"];return!t&&!e?null:a||f?o.jsx(K,{sx:{width:{xs:"100%",sm:"140px"},height:"45px"}}):o.jsxs(o.Fragment,{children:[D?o.jsx($,{disabled:a&&f,options:H,anchorRef:C,sx:{width:{xs:"100%",sm:"initial"}},buttonText:"Cite as...",variant:"outlined",buttonGroupAriaLabel:"Citation options",selectedIndex:F,setSelectedIndex:r=>{G(r);const S=r===0?t==null?void 0:t.doiUri:e==null?void 0:e.doiUri;S&&(p(S),u(C.current))}}):o.jsx(M,{onClick:X,disabled:a&&f,sx:{width:{xs:"100%",sm:"initial"}},variant:"outlined",startIcon:o.jsx(Q,{width:18,height:18}),children:Y}),z]})};try{x.displayName="EntityCitation",x.__docgenInfo={description:"",displayName:"EntityCitation",props:{projectId:{defaultValue:null,description:"",name:"projectId",required:!0,type:{name:"string"}},entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},versionNumber:{defaultValue:null,description:"",name:"versionNumber",required:!1,type:{name:"number"}}}}}catch{}const Ie={title:"Synapse/EntityPage/EntityCitation",component:x,parameters:{chromatic:{viewports:[600,1200]}}},l={args:{entityId:"syn66268092",projectId:"syn64042437",versionNumber:1}},m={args:{entityId:"syn66268085",projectId:"syn64042437",versionNumber:void 0}},y={args:{entityId:"syn66268092",projectId:"syn60582629",versionNumber:1}},v={args:{entityId:"syn68236894",projectId:"syn60582629",versionNumber:void 0}};var N,T,A;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  // Both project and entity have DOI
  args: {
    entityId: 'syn66268092',
    projectId: 'syn64042437',
    versionNumber: 1
  }
}`,...(A=(T=l.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var V,_,O;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  // Only project has DOI, entity does not
  args: {
    entityId: 'syn66268085',
    projectId: 'syn64042437',
    versionNumber: undefined
  }
}`,...(O=(_=m.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var P,B,w;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  // entity is versioned, project does not have DOI
  args: {
    entityId: 'syn66268092',
    projectId: 'syn60582629',
    versionNumber: 1
  }
}`,...(w=(B=y.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var L,R,k;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  // entity is versionless, project does not have DOI
  args: {
    entityId: 'syn68236894',
    projectId: 'syn60582629',
    versionNumber: undefined
  }
}`,...(k=(R=v.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};const fe=["ProjectAndEntity","Project","VersionedEntity","VersionlessEntity"];export{m as Project,l as ProjectAndEntity,y as VersionedEntity,v as VersionlessEntity,fe as __namedExportsOrder,Ie as default};
