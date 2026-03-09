import{az as a,j as r,r as i}from"./iframe-B-ViuSv9.js";import{S as c}from"./SynapseNavDrawer-DwFWK15g.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-C4_vQLqX.js";import"./useInfiniteQuery-vlKUWQr_.js";import"./useDownloadList-DaYIbD7k.js";import"./waitForAsyncResult-R_swx1MY.js";import"./useUserBundle-DKfqKYyl.js";import"./CreateProjectModal-D3dnvR7_.js";import"./ConfirmationDialog-BroakZuT.js";import"./DialogBase-DVpW1cR3.js";import"./Close-CO4GXUb5.js";import"./HelpPopover-DWyQ-DmO.js";import"./MarkdownPopover-DHhlk6vi.js";import"./LightTooltip-Ddo6Mib6.js";import"./MarkdownSynapse-B_4xbq9B.js";import"./SkeletonButton-CG2PHgPV.js";import"./SkeletonInlineBlock-ZpxNiyl4.js";import"./SkeletonTable-DOWE-xYa.js";import"./SkeletonParagraph-XlJifnft.js";import"./SynapseHomepageNavBar-BDUmqlr3.js";import"./SageResourcesPopover-9e23zqnz.js";import"./Grid-BRugVb2B.js";import"./index-N4ikXHAo.js";import"./MenuItem-C3GpEkFh.js";import"./UserBadge-QrYtiTRr.js";import"./Card-BXvSH8NN.js";import"./Chip-CMkns0F1.js";import"./searchDefaults-BJKdaCtk.js";import"./Slide-DP8bNps-.js";import"./InputAdornment-C2WWOWTP.js";import"./listItemButtonClasses-BPaLvI69.js";import"./Badge-Bsa_1dFh.js";import"./usePreviousProps-DTP0SBZy.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
