import{az as a,j as r,r as i}from"./iframe-C-OH83az.js";import{S as c}from"./SynapseNavDrawer-CkXlVTGk.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-DA-rw0Mv.js";import"./useInfiniteQuery-CzECAE9c.js";import"./useDownloadList-l7lwzrou.js";import"./waitForAsyncResult-L4Z6usH9.js";import"./useUserBundle-BCf2iZ1B.js";import"./CreateProjectModal-26E6iEb4.js";import"./ConfirmationDialog-Dh8vuXen.js";import"./DialogBase-BmaLomxP.js";import"./Close-CkkNh_Xs.js";import"./HelpPopover-D09YDRBj.js";import"./MarkdownPopover-CwJ2NCps.js";import"./LightTooltip-Bdkire5h.js";import"./MarkdownSynapse-Fbj0BNYf.js";import"./SkeletonButton-C4_qqbr_.js";import"./SkeletonInlineBlock-Deti-BYJ.js";import"./SkeletonTable-BU7f8Esd.js";import"./SkeletonParagraph-W1N8UnVm.js";import"./SynapseHomepageNavBar-iOK1Cd60.js";import"./SageResourcesPopover-DQVBRP2R.js";import"./Grid-CRh4aExu.js";import"./index-CqzNnuyO.js";import"./MenuItem-CBuyGD8v.js";import"./UserBadge-OIG0vUKz.js";import"./Card-DrWs0ymP.js";import"./Chip-9GXO3NGV.js";import"./searchDefaults-C_F4HNtw.js";import"./Slide-BV3itpNA.js";import"./InputAdornment-DAs_nL6j.js";import"./listItemButtonClasses-By6B-hWh.js";import"./Badge-CvZttUFV.js";import"./usePreviousProps-BxOafh8P.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
