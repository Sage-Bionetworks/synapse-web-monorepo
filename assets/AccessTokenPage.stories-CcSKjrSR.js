import{Q as p,b as c}from"./iframe-DslgKmO_.js";import{A as i}from"./AccessTokenPage-Cq2VOi07.js";import"./index-r8ZA1smB.js";import"./useInfiniteQuery-DxxIkqas.js";import"./relativeTime-DWzL5P1y.js";import"./WarningDialog-KSKtoYhG.js";import"./ConfirmationDialog-CWzD-n3R.js";import"./DialogBase-Ityd6EiB.js";import"./Close-3QTznoYW.js";import"./HelpPopover-D-66GZ4O.js";import"./MarkdownPopover-Efr0b0ny.js";import"./LightTooltip-DtnUKaEX.js";import"./MarkdownSynapse-BtLlVZBF.js";import"./SkeletonButton-CrnZOVdp.js";import"./SkeletonInlineBlock-iMtCHDfe.js";import"./SkeletonTable-B6rYfEE0.js";import"./SkeletonParagraph-CWIA3BjK.js";import"./Card-CiAcqMR5.js";import"./CopyToClipboardInput-BeeBm_fq.js";import"./ContentCopy-7udDS5wC.js";import"./InputAdornment-B8fX64h3.js";import"./FormControlLabel-BxxRdktG.js";import"./Checkbox-C0eLrhG9.js";import"./SwitchBase-DhgbMpez.js";const M={title:"Synapse/AccessTokenPage",component:i,args:{title:"Personal Access Tokens",body:"Create and manage tokens that can be used to access your Synapse account programmatically."},parameters:{stack:"mock"}},e={parameters:{msw:{handlers:[...p(c)]}}},r={parameters:{msw:{handlers:[...p(c,{results:[]})]}}};var s,o,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [...getPersonalAccessTokenHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var t,m,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [...getPersonalAccessTokenHandlers(MOCK_REPO_ORIGIN, {
        results: []
      })]
    }
  }
}`,...(n=(m=r.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const x=["Demo","NoTokens"];export{e as Demo,r as NoTokens,x as __namedExportsOrder,M as default};
