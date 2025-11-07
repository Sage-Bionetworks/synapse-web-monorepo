import{jz as n,n as a,cn as p,jA as d,H as o,jB as l,co as S,jC as O,j as f,b as _}from"./iframe-CeAgldvM.js";import{M as T}from"./MarkdownGithub-D1BVhi2V.js";import"./index-r8ZA1smB.js";import"./SkeletonButton-BvXrs4_f.js";import"./SkeletonInlineBlock-n6Wdtn3U.js";import"./SkeletonTable-D9BGXwSf.js";import"./SkeletonParagraph-DsPtfc6R.js";import"./MarkdownSynapse-Dy8cp58X.js";import"./Container-CV0j3PaI.js";const v={termsOfServiceUrl:"https://gh.com/tos.md",latestTermsOfServiceVersion:"1.0.0",currentRequirement:{requirementDate:"2024-11-01T00:00:00Z",minimumTermsOfServiceVersion:"0.0.0"}},h={userId:"12345",lastAgreementDate:null,lastAgreementVersion:null,userCurrentTermsOfServiceState:n.MUST_AGREE_NOW};n.MUST_AGREE_NOW;n.MUST_AGREE_SOON;n.UP_TO_DATE;const g=(e=p(S.REPO_ENDPOINT),r=h)=>[a.get(`${e}${d}`,()=>o.json(r,{status:201})),a.get(`${e}${l}`,()=>o.json(v,{status:201}))];function s(e){const{data:r}=O(),u=r==null?void 0:r.latestTermsOfServiceVersion;return f.jsx(T,{...e,tagName:u})}try{s.displayName="GovernanceMarkdownGithub",s.__docgenInfo={description:"Loads the version of the Governance Github Markdown file that the Synapse backend determines is the current version",displayName:"GovernanceMarkdownGithub",props:{repoOwner:{defaultValue:null,description:"",name:"repoOwner",required:!0,type:{name:"string"}},repoName:{defaultValue:null,description:"",name:"repoName",required:!0,type:{name:"string"}},filePath:{defaultValue:null,description:"",name:"filePath",required:!0,type:{name:"string"}},showDownloadButton:{defaultValue:null,description:"",name:"showDownloadButton",required:!1,type:{name:"boolean"}}}}}catch{}const j={title:"Markdown/GovernanceMarkdownGithub",component:s},t={args:{repoOwner:"Sage-Bionetworks",repoName:"Sage-Governance-Documents",filePath:"Terms.md"},parameters:{stack:"mock",msw:{handlers:[...g(_)]}}};var i,m,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    repoOwner: 'Sage-Bionetworks',
    repoName: 'Sage-Governance-Documents',
    filePath: 'Terms.md'
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getTermsOfServiceHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const y=["TermsOfServiceDemo"];export{t as TermsOfServiceDemo,y as __namedExportsOrder,j as default};
