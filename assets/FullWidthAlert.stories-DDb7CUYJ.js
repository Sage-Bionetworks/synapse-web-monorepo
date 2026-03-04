import{az as a,j as r,r as i}from"./iframe-qVlGQSuu.js";import{S as c}from"./SynapseNavDrawer-dmKAQDa0.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-CXfePdb-.js";import"./useInfiniteQuery-BvxwsDiv.js";import"./useDownloadList-DukEeR-F.js";import"./waitForAsyncResult-BOGARwTt.js";import"./useUserBundle-CxwxuS4g.js";import"./CreateProjectModal-BAExky5Q.js";import"./ConfirmationDialog-Ds9LhYtk.js";import"./DialogBase-zjWOIfZo.js";import"./Close-DTZpuwIC.js";import"./HelpPopover-BHPw_eXc.js";import"./MarkdownPopover-CmvfCcSZ.js";import"./LightTooltip-D3Im4lvV.js";import"./MarkdownSynapse-DTMlkJjz.js";import"./SkeletonButton-BV9DAa_g.js";import"./SkeletonInlineBlock-DBJoLAHS.js";import"./SkeletonTable-bCltNDze.js";import"./SkeletonParagraph-DMHFsIQV.js";import"./SynapseHomepageNavBar-BnOGTdeU.js";import"./SageResourcesPopover-DCxRCMoF.js";import"./Grid-tYZNKxew.js";import"./index-Be9oNlvR.js";import"./MenuItem-DFE2FoA8.js";import"./UserBadge-CuO49o2I.js";import"./Card-CsDbzPNm.js";import"./Chip-BBDwaxyK.js";import"./searchDefaults-CoClpmRG.js";import"./Slide-Xf6eykd7.js";import"./InputAdornment-DQCEf4x8.js";import"./listItemButtonClasses-DuNAD9yD.js";import"./Badge-Bf3mzy0b.js";import"./usePreviousProps-BEDn6Prc.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
