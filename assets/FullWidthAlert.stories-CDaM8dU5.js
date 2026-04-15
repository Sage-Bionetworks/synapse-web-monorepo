import{ax as a,r as i,j as r}from"./iframe-C4gfjmJw.js";import{S as c}from"./SynapseNavDrawer-fL9ImhfI.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-C-OnTG2z.js";import"./useInfiniteQuery-R-HWjYUM.js";import"./useDownloadList-ztbg7PiS.js";import"./waitForAsyncResult-BF5--Pnm.js";import"./useUserBundle-DCmht4A_.js";import"./CreateProjectModal-RV6bDMMC.js";import"./ConfirmationDialog-Cn43g34R.js";import"./DialogBase-B_shssNk.js";import"./Close-DN6bOWfw.js";import"./HelpPopover-COiLoIGR.js";import"./MarkdownPopover-5mB1Kxab.js";import"./LightTooltip-DDJdQBDx.js";import"./MarkdownSynapse-BLr68Dpv.js";import"./SkeletonButton-BIeEptZL.js";import"./SkeletonInlineBlock-BRt0lIXt.js";import"./SkeletonTable-BpAtksSS.js";import"./SkeletonParagraph-C0oOWbiy.js";import"./SynapseHomepageNavBar-B9ZD7K9n.js";import"./SageResourcesPopover-FTNb-Le6.js";import"./Grid-IW5afcOZ.js";import"./index-XCAB_K8P.js";import"./MenuItem-cS-lgy5x.js";import"./UserBadge-dOsih4M-.js";import"./useUserGroupHeader-CjLGfw2Z.js";import"./Card-E7BKmfZX.js";import"./Chip-DjisOeCN.js";import"./searchDefaults-CBzQaRU9.js";import"./Slide-BrjjcbIY.js";import"./InputAdornment-eHNwvKlP.js";import"./listItemButtonClasses-CtCO37B-.js";import"./Badge-DXBJioNK.js";import"./usePreviousProps-DMi3XmsN.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
