import{jn as t,s as a,jo as m,H as o,jp as c,c5 as u,c6 as p,jq as d,j as l,b as S}from"./iframe-BwdMKcfW.js";import{M as O}from"./MarkdownGithub-CQHl09Ss.js";import"./index-Chi_LkuB.js";import"./SkeletonButton-DUX7R0sB.js";import"./SkeletonInlineBlock-CGQ5Gfg-.js";import"./SkeletonTable-O-mI3Ojq.js";import"./SkeletonParagraph-CepsPnNp.js";import"./MarkdownSynapse-N8osBNe-.js";import"./Container-CHd8kwVg.js";const f={termsOfServiceUrl:"https://gh.com/tos.md",latestTermsOfServiceVersion:"1.0.0",currentRequirement:{requirementDate:"2024-11-01T00:00:00Z",minimumTermsOfServiceVersion:"0.0.0"}},_={userId:"12345",lastAgreementDate:null,lastAgreementVersion:null,userCurrentTermsOfServiceState:t.MUST_AGREE_NOW};t.MUST_AGREE_NOW;t.MUST_AGREE_SOON;t.UP_TO_DATE;const T=(e=u(p.REPO_ENDPOINT),n=_)=>[a.get(`${e}${m}`,()=>o.json(n,{status:201})),a.get(`${e}${c}`,()=>o.json(f,{status:201}))];function s(e){const{data:n}=d(),i=n?.latestTermsOfServiceVersion;return l.jsx(O,{...e,tagName:i})}try{s.displayName="GovernanceMarkdownGithub",s.__docgenInfo={description:"Loads the version of the Governance Github Markdown file that the Synapse backend determines is the current version",displayName:"GovernanceMarkdownGithub",props:{repoOwner:{defaultValue:null,description:"",name:"repoOwner",required:!0,type:{name:"string"}},repoName:{defaultValue:null,description:"",name:"repoName",required:!0,type:{name:"string"}},filePath:{defaultValue:null,description:"",name:"filePath",required:!0,type:{name:"string"}},showDownloadButton:{defaultValue:null,description:"",name:"showDownloadButton",required:!1,type:{name:"boolean"}}}}}catch{}const R={title:"Markdown/GovernanceMarkdownGithub",component:s},r={args:{repoOwner:"Sage-Bionetworks",repoName:"Sage-Governance-Documents",filePath:"Terms.md"},parameters:{stack:"mock",msw:{handlers:[...T(S)]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const D=["TermsOfServiceDemo"];export{r as TermsOfServiceDemo,D as __namedExportsOrder,R as default};
