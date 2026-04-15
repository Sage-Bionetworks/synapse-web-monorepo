import{ax as a,r as i,j as r}from"./iframe-tHCTQw-h.js";import{S as c}from"./SynapseNavDrawer-CulVZYDQ.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-Bs7X62f4.js";import"./useInfiniteQuery-Cgi0zhhX.js";import"./useDownloadList-D0aQL3Fb.js";import"./waitForAsyncResult-fpn6ZG4t.js";import"./useUserBundle-CFNqkFnY.js";import"./CreateProjectModal-DfW1kKAE.js";import"./ConfirmationDialog-C90g-TxX.js";import"./DialogBase-D_uLDI_-.js";import"./Close-Dj2GQFLf.js";import"./HelpPopover-BHHwi799.js";import"./MarkdownPopover-k7QQPJgm.js";import"./LightTooltip-Gqj5iP9g.js";import"./MarkdownSynapse-BjOJoB34.js";import"./SkeletonButton-COGIamRT.js";import"./SkeletonInlineBlock-BcgTDPGl.js";import"./SkeletonTable-DF9YBfOn.js";import"./SkeletonParagraph-ltGtfGmy.js";import"./SynapseHomepageNavBar-CIQaEDtE.js";import"./SageResourcesPopover-BiEKUkdD.js";import"./Grid-CPdt3ktR.js";import"./index-BusyTjH4.js";import"./MenuItem-EF7hTZ7c.js";import"./UserBadge-Bmg1fZEL.js";import"./useUserGroupHeader-DDShxnvZ.js";import"./Card-DmjFo3eO.js";import"./Chip-BPZys9eM.js";import"./searchDefaults-Z82mWxCd.js";import"./Slide-N8yrWCN0.js";import"./InputAdornment-CktD7me5.js";import"./listItemButtonClasses-BiiA09ac.js";import"./Badge-JTfima-9.js";import"./usePreviousProps-DdRbQRXC.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    show: true,
    title: 'Package has been downloaded',
    description: 'The files contained in this zip file have been removed from your list.',
    isGlobal: false
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const H=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,e as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,H as __namedExportsOrder,q as default};
