import{aA as a,j as r,r as i}from"./iframe-DATRO4pg.js";import{S as c}from"./SynapseNavDrawer-CZ-zLajX.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-B49QlgXI.js";import"./useInfiniteQuery-BsjpUEc3.js";import"./useDownloadList-DiXm3zrx.js";import"./waitForAsyncResult-D3dzznpQ.js";import"./useUserBundle-B4qTlzlm.js";import"./CreateProjectModal-DWKJehoZ.js";import"./ConfirmationDialog-YayW6Yer.js";import"./DialogBase-C1AukqcU.js";import"./Close-DSBWsbNS.js";import"./HelpPopover-BpoQ9RLF.js";import"./MarkdownPopover-C8lzSMfg.js";import"./LightTooltip-DjHUKC3t.js";import"./MarkdownSynapse-COvAtPgs.js";import"./SkeletonButton-D-kO1kuw.js";import"./SkeletonInlineBlock-BHsC0ZVh.js";import"./SkeletonTable-CwWcK3KH.js";import"./SkeletonParagraph-BO1hpxq5.js";import"./SynapseHomepageNavBar-BXFHf3ve.js";import"./SageResourcesPopover-Bd-m5qp5.js";import"./Grid-vIm1_Lpj.js";import"./index-33OaJtki.js";import"./MenuItem-BO0T4yAa.js";import"./UserBadge-BegEEQMp.js";import"./Card-BQzn9VZu.js";import"./Chip-DWvykSmW.js";import"./searchDefaults-CaCqEZ5O.js";import"./Slide-CB-JbcmU.js";import"./InputAdornment-CiSMUTpz.js";import"./listItemButtonClasses-Dq9rAW8F.js";import"./Badge-2ugoC462.js";import"./usePreviousProps-BAQD5RAb.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const q=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,e as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,q as __namedExportsOrder,U as default};
