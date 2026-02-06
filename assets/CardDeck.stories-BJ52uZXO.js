import{j as e,$ as h,fj as G,fk as c,f9 as Y,a2 as J}from"./iframe-CqOjta_N.js";import{E as X,u as Z}from"./ExpandableContent-zctaei5o.js";import{c as d}from"./index-DbDXKBSr.js";import{L as H}from"./LargeButton-B1Ah6asd.js";import{I as U}from"./ImageFileHandle-BjgAomE3.js";import{u as ee}from"./useEntity-BTY_Vrx_.js";import"./SynapseCardLabel-CaLM3vJi.js";import"./GenericCard-B3HPoYEi.js";import"./HeaderCardV2-DTuoaRd0.js";import{a as ae,b as B}from"./CardUtils-C-O9EKya.js";import"./index-Chi_LkuB.js";import"./index-CKGhrhWB.js";import"./pickBy-DCigQKsA.js";import"./isString-CviB6SVY.js";import"./_baseIteratee-Qgts5el_.js";import"./useQueries-DQ-K6YXz.js";import"./useSuspenseQuery-BD3WNLbV.js";import"./useInfiniteQuery-BaCRejyT.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-D6jYmZmr.js";import"./EntityLink-Dbd66-s9.js";import"./useGetEntityHeaders-CFQZnQLN.js";import"./EntityIcon-BXLjmr0A.js";import"./ErrorChip-CPn8AjKg.js";import"./Chip-9i0QEYWa.js";import"./MarkdownSynapse-D2zbplv6.js";import"./SkeletonButton-BR5YXC6L.js";import"./SkeletonInlineBlock-CN4aVK2u.js";import"./SkeletonTable-BGlGLKIw.js";import"./SkeletonParagraph-B4VFFfOl.js";import"./UserBadge-D2tCEW5C.js";import"./useUserBundle-D8JYfTyv.js";import"./MenuItem-DGqgHDXw.js";import"./Card-qx92vT-y.js";import"./Box-MKJhU7Uq.js";import"./HeaderCard-Bz_p862a.js";import"./index-Cufuki-g.js";import"./Icon-BzzWbxV-.js";import"./mouse-6-XpIdzg.js";import"./SortDown-DJWCtuFq.js";import"./ShowMore-4mXvvU2B.js";import"./SustainabilityScorecard-D18zO-w9.js";import"./Close-B3SqSRyi.js";import"./Dial-g39K4zi6.js";import"./CheckIcon-CdCBtLi0.js";import"./NoContentAvailable-BRO1i6al.js";import"./FileHandleLink-Cf4U74uv.js";import"./IsExternalLink-DeYq7Mrk.js";import"./index-BRBOZzYG.js";function f({title:t,description:r,ctaButtonText:o,ctaButtonURL:n,headerImage:i,titleIcon:l,cardDeckType:a}){return e.jsxs("div",{className:d("CardDeck__Card",a&&`CardDeck__Card--${a}`),children:[e.jsx("div",{className:d("CardDeck__Card__header__image",a&&`CardDeck__Card__header__image--${a}`),children:e.jsx(h,{href:n,children:i})}),e.jsxs("div",{className:d("CardDeck__Card__header",a&&`CardDeck__Card__header--${a}`),children:[e.jsx("div",{className:d("CardDeck__Card__header__icon",a&&`CardDeck__Card__header__icon--${a}`),children:l}),e.jsx("div",{className:"CardDeck__Card__header__info",children:e.jsxs("span",{className:d("CardDeck__Card__header__info__title",a&&`CardDeck__Card__header__info__title--${a}`),children:[" ",["b2ai","b2ai-detail-card"].includes(a??"")?e.jsx(h,{href:n,children:t}):t," "]})})]}),e.jsxs("div",{className:d("CardDeck__Card__summary",a&&`CardDeck__Card__summary--${a}`),children:[e.jsxs("p",{children:[" ",r," "]}),["b2ai","b2ai-detail-card"].includes(a??"")?null:e.jsx(H,{color:"primary",variant:"outlined",href:n,sx:{maxWidth:"200px",fontSize:"14px",boxShadow:"none",borderColor:"primary.main",color:"primary.main"},children:o})]})]})}try{f.displayName="CardDeckDesktop",f.__docgenInfo={description:"",displayName:"CardDeckDesktop",props:{}}}catch{}function x({description:t,title:r,titleIcon:o,ctaButtonText:n,ctaButtonURL:i,cardDeckType:l}){const a=e.jsxs("div",{className:"CardDeck__Mobile__Header",children:[e.jsx("span",{className:"CardDeck__Mobile__Header__icon",children:o}),e.jsxs("span",{className:"CardDeck__Mobile__Header__Title",children:[" ",r," "]})]}),_=e.jsxs("div",{className:"CardDeck__Mobile__Content",children:[e.jsx("p",{children:t}),l==="b2ai"?e.jsx(h,{href:i,underline:"none",children:n}):e.jsx(H,{color:"secondary",variant:"outlined",href:i,sx:{width:"170px",marginLeft:0,fontSize:"14px",boxShadow:"none",color:"primary.main"},children:n})]});return e.jsx(X,{title:a,content:_})}try{x.displayName="CardDeckMobile",x.__docgenInfo={description:"",displayName:"CardDeckMobile",props:{}}}catch{}function k(t){const{cards:r,cardDeckType:o}=t,n=Z(),i=`CardDeck${n?"__Desktop":""}`;return e.jsx("div",{className:d(i,o&&`${i}--${o}`),children:r.map((l,a)=>n?e.jsx(f,{cardDeckType:o,...l},a):e.jsx(x,{cardDeckType:o,...l}))})}try{k.displayName="CardDeck",k.__docgenInfo={description:"UI for a 'deck' of cards.",displayName:"CardDeck",props:{cards:{defaultValue:null,description:"",name:"cards",required:!0,type:{name:"CardDeckCardProps[]"}},cardDeckType:{defaultValue:null,description:"",name:"cardDeckType",required:!1,type:{name:"enum",value:[{value:'"cckp"'},{value:'"b2ai"'},{value:'"b2ai-detail-card"'}]}}}}}catch{}function y(t){const{entityId:r,titleColumnName:o,descriptionColumnName:n,ctaButtonTextColumnName:i,ctaButtonURLColumnName:l,titleIconFileHandleColumnName:a,headerImageFileHandleColumnName:_,cardDeckType:I,linkConfig:j}=t,D=ee(r),v={concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",entityId:r,partMask:Y|J,query:{sql:`select * from ${r}`}},{data:m}=G(v),F=c(o,m),T=c(n,m),w=c(i,m),E=c(l,m),q=c(a,m),M=c(_,m),S=m?.queryResult.queryResults.rows.map(N=>{const s=N.values;s.some(g=>g===null)&&console.warn("Row has null value(s) when no nulls expected");const V=s[F],$=s[T],P=s[w],A=s[E]??"",Q=s[q]??"",K=s[M]??"",b={};m?.queryResult.queryResults.headers.forEach((g,z)=>{b[g.name]=z});const{href:O}=ae(A,j,s,b),R=B(D.data,Q,`syn${N.rowId}`),W=R?e.jsx(U,{fileHandleAssociation:R}):void 0,L=B(D.data,K,`syn${N.rowId}`);return{title:V,description:$,ctaButtonText:P,ctaButtonURL:O,titleIcon:W,headerImage:L?e.jsx(U,{fileHandleAssociation:L}):void 0,cardDeckType:I}});return e.jsx(k,{cards:S||[],cardDeckType:I})}try{y.displayName="TableQueryCardDeck",y.__docgenInfo={description:"Transforms a Synapse table into a card deck.",displayName:"TableQueryCardDeck",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},titleColumnName:{defaultValue:null,description:"",name:"titleColumnName",required:!0,type:{name:"string"}},descriptionColumnName:{defaultValue:null,description:"",name:"descriptionColumnName",required:!0,type:{name:"string"}},ctaButtonTextColumnName:{defaultValue:null,description:"",name:"ctaButtonTextColumnName",required:!0,type:{name:"string"}},ctaButtonURLColumnName:{defaultValue:null,description:"",name:"ctaButtonURLColumnName",required:!0,type:{name:"string"}},titleIconFileHandleColumnName:{defaultValue:null,description:"",name:"titleIconFileHandleColumnName",required:!1,type:{name:"string"}},headerImageFileHandleColumnName:{defaultValue:null,description:"",name:"headerImageFileHandleColumnName",required:!1,type:{name:"string"}},cardDeckType:{defaultValue:null,description:"",name:"cardDeckType",required:!1,type:{name:"enum",value:[{value:'"cckp"'},{value:'"b2ai"'}]}},linkConfig:{defaultValue:null,description:"",name:"linkConfig",required:!0,type:{name:"{ matchColumnName: string; overrideValueWithRowID?: boolean; isMarkdown: false; tooltipText?: string; target?: TargetEnum; } & ({ baseURL: string; URLColumnName: string; wrapValueWithParens?: boolean; resolveEntityName?: boolean; } | { ...; })"}}}}}catch{}const Xe={title:"Home Page/CardDeck",component:y,parameters:{chromatic:{viewports:[600,1200]}}},u={args:{entityId:"syn64943600",titleColumnName:"title",descriptionColumnName:"description",ctaButtonTextColumnName:"ctaButtonText",ctaButtonURLColumnName:"ctaButtonURL",titleIconFileHandleColumnName:"icon",headerImageFileHandleColumnName:"headerImage",cardDeckType:"cckp",linkConfig:{isMarkdown:!1,baseURL:"Explore/CardDeck/DetailsPage",URLColumnName:"title",matchColumnName:"title"}}},p={args:{entityId:"syn65484830",titleColumnName:"title",descriptionColumnName:"description",ctaButtonTextColumnName:"buttonText",ctaButtonURLColumnName:"buttonUrl",titleIconFileHandleColumnName:void 0,headerImageFileHandleColumnName:"headerImage",cardDeckType:"b2ai",linkConfig:{isMarkdown:!1,baseURL:"Explore/CardDeck/DetailsPage",URLColumnName:"title",matchColumnName:"title"}}},C={args:{entityId:"syn65414596",titleColumnName:"title",descriptionColumnName:"description",ctaButtonTextColumnName:"buttonText",ctaButtonURLColumnName:"buttonURL",titleIconFileHandleColumnName:"iconImage",headerImageFileHandleColumnName:"headerImage",linkConfig:{isMarkdown:!1,baseURL:"Explore/CardDeck/DetailsPage",URLColumnName:"title",matchColumnName:"title"}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn64943600',
    titleColumnName: 'title',
    descriptionColumnName: 'description',
    ctaButtonTextColumnName: 'ctaButtonText',
    ctaButtonURLColumnName: 'ctaButtonURL',
    titleIconFileHandleColumnName: 'icon',
    headerImageFileHandleColumnName: 'headerImage',
    cardDeckType: 'cckp',
    linkConfig: {
      isMarkdown: false,
      baseURL: 'Explore/CardDeck/DetailsPage',
      URLColumnName: 'title',
      matchColumnName: 'title'
    }
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn65484830',
    titleColumnName: 'title',
    descriptionColumnName: 'description',
    ctaButtonTextColumnName: 'buttonText',
    ctaButtonURLColumnName: 'buttonUrl',
    titleIconFileHandleColumnName: undefined,
    headerImageFileHandleColumnName: 'headerImage',
    cardDeckType: 'b2ai',
    linkConfig: {
      isMarkdown: false,
      baseURL: 'Explore/CardDeck/DetailsPage',
      URLColumnName: 'title',
      matchColumnName: 'title'
    }
  }
}`,...p.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn65414596',
    titleColumnName: 'title',
    descriptionColumnName: 'description',
    ctaButtonTextColumnName: 'buttonText',
    ctaButtonURLColumnName: 'buttonURL',
    titleIconFileHandleColumnName: 'iconImage',
    headerImageFileHandleColumnName: 'headerImage',
    linkConfig: {
      isMarkdown: false,
      baseURL: 'Explore/CardDeck/DetailsPage',
      URLColumnName: 'title',
      matchColumnName: 'title'
    }
  }
}`,...C.parameters?.docs?.source}}};const Ze=["CCPKResourcesDemo","B2AIDemo","TestOptionalArgsDemo"];export{p as B2AIDemo,u as CCPKResourcesDemo,C as TestOptionalArgsDemo,Ze as __namedExportsOrder,Xe as default};
