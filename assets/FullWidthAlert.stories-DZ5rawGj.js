import{at as g,j as e,r as w}from"./iframe-D6eR7C50.js";import{S as v}from"./SynapseNavDrawer-BHeX3iz6.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-5qN4muQU.js";import"./useInfiniteQuery-CffjsQaC.js";import"./useDownloadList-CHQrkMzU.js";import"./waitForAsyncResult-CvwYCWAb.js";import"./CreateProjectModal-DXiYj4CK.js";import"./ConfirmationDialog-FZZd4L0v.js";import"./DialogBase-CGoUFCyI.js";import"./Close-B4yr33wu.js";import"./HelpPopover-BNtCkWxN.js";import"./MarkdownPopover-Bd8pVsTv.js";import"./LightTooltip-DyvHiMMn.js";import"./MarkdownSynapse-CDGiSRnF.js";import"./SkeletonButton-Btmr7__Y.js";import"./SkeletonInlineBlock-DkWMHFrC.js";import"./SkeletonTable-CT4J_TKG.js";import"./SkeletonParagraph-BWm0oiG8.js";import"./SynapseHomepageNavBar-M0MjOgFY.js";import"./SageResourcesPopover-DXSYun4X.js";import"./Grid-Bakrs6vU.js";import"./index-CabImiDI.js";import"./MenuItem-UfkvjnI3.js";import"./UserBadge-CblOoS-P.js";import"./Card-Bh-PD_aw.js";import"./Chip-Boc7yQYh.js";import"./Slide-BkdKmUC4.js";import"./InputAdornment-CrE8WHFU.js";import"./listItemButtonClasses-BIwRHTid.js";import"./Badge-CTz6YyHh.js";import"./usePreviousProps-CX07kGfA.js";const V={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},r={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...r.args},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),e.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),e.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
