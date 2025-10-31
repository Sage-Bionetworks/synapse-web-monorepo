import{gs as K,r as c,j as o,c0 as M,B as Q}from"./iframe-SFoYirDz.js";import{F as W,C as X}from"./CitationPopoverContent-CkRzpkb2.js";import{u as E,D as h}from"./useDOI-S3ieGNrs.js";import{u as Z}from"./useEntityBundle-Dn65PMqz.js";import{D as $}from"./DropdownSelect-DTiqpqO5.js";import"./index-r8ZA1smB.js";import"./Close-BJ49k-BP.js";import"./CopyToClipboardIcon-CDh1nCTj.js";import"./MarkdownSynapse-CC4Dnhut.js";import"./SkeletonButton-Di0Yg_Uv.js";import"./SkeletonInlineBlock-DrZRW3Px.js";import"./SkeletonTable-Drqg7wxh.js";import"./SkeletonParagraph-D_k7-Stv.js";import"./MenuItem-CfJpQ_dM.js";import"./waitForAsyncResult-B0KfBxeI.js";import"./getValidReactChildren-C6cnQHDA.js";function ee(n,i,d,s){const a=s&&!s.doiAssociation&&K(s.entity)&&s.entity.isLatestVersion,{data:v}=E({id:n,version:i,type:h.ENTITY},{enabled:!!n&&!!i}),{data:j}=E({id:n,version:void 0,type:h.ENTITY},{enabled:a});return d===n?void 0:v??j}const x=({projectId:n,entityId:i,versionNumber:d})=>{const{data:s,isLoading:a}=Z(i,d),[v,j]=c.useState(null),[I,p]=c.useState(void 0),[b,u]=c.useState(null),[F,G]=c.useState(void 0),C=c.useRef(null),U=!!v?"cite-as-popover":void 0,e=ee(i,d,n,s),{data:t,isLoading:f}=E({id:n,version:void 0,type:h.ENTITY},{enabled:!!n}),D=t&&e;function q(){return D?"Cite as...":e&&!t?"Cite page":!e&&t?"Cite project":""}const Y=q(),z=r=>{e&&!t?(p(e.doiUri),u(r.currentTarget)):!e&&t?(p(t.doiUri),u(r.currentTarget)):j(r.currentTarget)},H=o.jsx(X,{doi:I,anchorEl:b,open:!!b&&!!I,id:U,onClose:()=>{u(null),p(void 0)}}),J=["Cite this Project","Cite only this page"];return!t&&!e?null:a||f?o.jsx(M,{sx:{width:{xs:"100%",sm:"140px"},height:"45px"}}):o.jsxs(o.Fragment,{children:[D?o.jsx($,{disabled:a&&f,options:J,anchorRef:C,sx:{width:{xs:"100%",sm:"initial"}},buttonText:"Cite as...",variant:"outlined",buttonGroupAriaLabel:"Citation options",selectedIndex:F,setSelectedIndex:r=>{G(r);const S=r===0?t==null?void 0:t.doiUri:e==null?void 0:e.doiUri;S&&(p(S),u(C.current))}}):o.jsx(Q,{onClick:z,disabled:a&&f,sx:{width:{xs:"100%",sm:"initial"}},variant:"outlined",startIcon:o.jsx(W,{width:18,height:18}),children:Y}),H]})};try{x.displayName="EntityCitation",x.__docgenInfo={description:"",displayName:"EntityCitation",props:{projectId:{defaultValue:null,description:"",name:"projectId",required:!0,type:{name:"string"}},entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},versionNumber:{defaultValue:null,description:"",name:"versionNumber",required:!1,type:{name:"number"}}}}}catch{}const Ie={title:"Synapse/EntityPage/EntityCitation",component:x,parameters:{chromatic:{viewports:[600,1200]}}},l={args:{entityId:"syn66268092",projectId:"syn64042437",versionNumber:1}},m={args:{entityId:"syn66268085",projectId:"syn64042437",versionNumber:void 0}},y={args:{entityId:"syn66268092",projectId:"syn60582629",versionNumber:1}},g={args:{entityId:"syn68236894",projectId:"syn60582629",versionNumber:void 0}};var N,T,A;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(w=(B=y.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var L,R,k;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  // entity is versionless, project does not have DOI
  args: {
    entityId: 'syn68236894',
    projectId: 'syn60582629',
    versionNumber: undefined
  }
}`,...(k=(R=g.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};const fe=["ProjectAndEntity","Project","VersionedEntity","VersionlessEntity"];export{m as Project,l as ProjectAndEntity,y as VersionedEntity,g as VersionlessEntity,fe as __namedExportsOrder,Ie as default};
