import{h0 as J,r as c,j as o,bX as K,B as M}from"./iframe-LzC64RFw.js";import{F as Q,C as W}from"./CitationPopoverContent-CTXXcHgW.js";import{u as h,D as E}from"./useDOI-BTfC4iNb.js";import{u as Z}from"./useEntityBundle-CuLoL6_r.js";import{D as $}from"./DropdownSelect-BdXRJFzS.js";import"./index-r8ZA1smB.js";import"./Close-EwtwOLBz.js";import"./CopyToClipboardIcon-DI05w1_N.js";import"./MarkdownSynapse-D64LBLwy.js";import"./SkeletonButton-CdCi0Vv2.js";import"./SkeletonInlineBlock-BId9Rt5h.js";import"./SkeletonTable-B5BlJQjs.js";import"./SkeletonParagraph-ClnTvL1Q.js";import"./KeyboardArrowDown-BZH1jagL.js";import"./MenuItem-D_lpwZtj.js";import"./waitForAsyncResult-ChGWX3Xx.js";import"./getValidReactChildren-Bjpqk_Se.js";function tt(n,i,d,s){const a=s&&!s.doiAssociation&&J(s.entity)&&s.entity.isLatestVersion,{data:g}=h({id:n,version:i,type:E.ENTITY},{enabled:!!n&&!!i}),{data:j}=h({id:n,version:void 0,type:E.ENTITY},{enabled:a});return d===n?void 0:g??j}const x=({projectId:n,entityId:i,versionNumber:d})=>{const{data:s,isLoading:a}=Z(i,d),[g,j]=c.useState(null),[I,p]=c.useState(void 0),[b,u]=c.useState(null),[F,G]=c.useState(void 0),C=c.useRef(null),U=!!g?"cite-as-popover":void 0,t=tt(i,d,n,s),{data:e,isLoading:f}=h({id:n,version:void 0,type:E.ENTITY},{enabled:!!n}),D=e&&t;function q(){return D?"Cite as...":t&&!e?"Cite page":!t&&e?"Cite project":""}const Y=q(),X=r=>{t&&!e?(p(t.doiUri),u(r.currentTarget)):!t&&e?(p(e.doiUri),u(r.currentTarget)):j(r.currentTarget)},z=o.jsx(W,{doi:I,anchorEl:b,open:!!b&&!!I,id:U,onClose:()=>{u(null),p(void 0)}}),H=["Cite this Project","Cite only this page"];return!e&&!t?null:a||f?o.jsx(K,{sx:{width:{xs:"100%",sm:"140px"},height:"45px"}}):o.jsxs(o.Fragment,{children:[D?o.jsx($,{disabled:a&&f,options:H,anchorRef:C,sx:{width:{xs:"100%",sm:"initial"}},buttonText:"Cite as...",variant:"outlined",buttonGroupAriaLabel:"Citation options",selectedIndex:F,setSelectedIndex:r=>{G(r);const S=r===0?e==null?void 0:e.doiUri:t==null?void 0:t.doiUri;S&&(p(S),u(C.current))}}):o.jsx(M,{onClick:X,disabled:a&&f,sx:{width:{xs:"100%",sm:"initial"}},variant:"outlined",startIcon:o.jsx(Q,{width:18,height:18}),children:Y}),z]})};try{x.displayName="EntityCitation",x.__docgenInfo={description:"",displayName:"EntityCitation",props:{projectId:{defaultValue:null,description:"",name:"projectId",required:!0,type:{name:"string"}},entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},versionNumber:{defaultValue:null,description:"",name:"versionNumber",required:!1,type:{name:"number"}}}}}catch{}const ft={title:"Synapse/EntityPage/EntityCitation",component:x,parameters:{chromatic:{viewports:[600,1200]}}},l={args:{entityId:"syn66268092",projectId:"syn64042437",versionNumber:1}},m={args:{entityId:"syn66268085",projectId:"syn64042437",versionNumber:void 0}},y={args:{entityId:"syn66268092",projectId:"syn60582629",versionNumber:1}},v={args:{entityId:"syn68236894",projectId:"syn60582629",versionNumber:void 0}};var N,T,A;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(k=(R=v.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};const ht=["ProjectAndEntity","Project","VersionedEntity","VersionlessEntity"];export{m as Project,l as ProjectAndEntity,y as VersionedEntity,v as VersionlessEntity,ht as __namedExportsOrder,ft as default};
