import{at as g,j as e,r as w}from"./iframe-DPJy_hbO.js";import{S as v}from"./SynapseNavDrawer-DTkBKVkV.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-ffBz6WDC.js";import"./useInfiniteQuery-Ck5_XHem.js";import"./useDownloadList-aID_UYQv.js";import"./waitForAsyncResult-D9N8yoOx.js";import"./CreateProjectModal-CI4q9MCk.js";import"./ConfirmationDialog-Cd5b58FO.js";import"./DialogBase-CqMIgrN_.js";import"./Close-gQOAERxu.js";import"./HelpPopover-DNFxtXl2.js";import"./MarkdownPopover-DONhqIHX.js";import"./LightTooltip-De1krTsk.js";import"./MarkdownSynapse-Cs3_hKdV.js";import"./SkeletonButton-BJjSHTYC.js";import"./SkeletonInlineBlock-By7Wj90y.js";import"./SkeletonTable-BAFcpWV8.js";import"./SkeletonParagraph-Cdg0493c.js";import"./SynapseHomepageNavBar-BsffJ43Q.js";import"./SageResourcesPopover-BauyaT5K.js";import"./Grid-DHEcecnF.js";import"./index-r9LWYNhy.js";import"./MenuItem-a8yMuuEa.js";import"./UserBadge-DJMefXDP.js";import"./Card-C9Wn4h6B.js";import"./Chip-CxgDiEBm.js";import"./Slide-BVBuJkk-.js";import"./InputAdornment-DdcbmahI.js";import"./listItemButtonClasses-B80RmdCM.js";import"./Badge-CSomXHN1.js";import"./usePreviousProps-DgPTI9Ko.js";const V={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},r={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...r.args},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),e.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),e.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    show: true,
    title: 'Package has been downloaded',
    description: 'The files contained in this zip file have been removed from your list.',
    isGlobal: false
  }
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,p,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    show: true,
    title: 'Success',
    description: 'Lorem ipsum dolor sit amet',
    primaryButtonConfig: {
      text: 'Accept and Continue',
      onClick: () => alert('Accepted')
    },
    isGlobal: true,
    onClose: undefined
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,d,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...SuccessAlertWithPrimaryButtonOnly.args
  },
  render: args => <>
      <SynapseNavDrawer initIsOpen={false} gotoPlace={(href: string) => {
      window.alert(\`Nav bar calling back to change route to \${href}\`);
    }} />
      <FullWidthAlert {...args} />
    </>,
  decorators: [Story => {
    useEffect(() => {
      // SWC applies this class when SynapseNavDrawer is visible
      document.body.classList.add('SynapseNavDrawerIsShowing');
      return () => {
        // ...and removes it when SynapseNavDrawer is not visible
        document.body.classList.remove('SynapseNavDrawerIsShowing');
      };
    }, []);
    return <Story />;
  }]
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const X=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,r as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,X as __namedExportsOrder,V as default};
