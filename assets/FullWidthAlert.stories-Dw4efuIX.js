import{ay as a,j as r,r as i}from"./iframe-BE9PbKHz.js";import{S as c}from"./SynapseNavDrawer-Dj492hPn.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-ChTa4R5w.js";import"./useInfiniteQuery-DENunen_.js";import"./useDownloadList-CyixpGaW.js";import"./waitForAsyncResult-QbDQSu-I.js";import"./useGetFeatureFlag-Cr-uZ0jy.js";import"./useUserBundle-CnmcW3Hx.js";import"./useSuspenseQuery-CEXBd55g.js";import"./CreateProjectModal-Cj0vjYbM.js";import"./ConfirmationDialog-BBc5_vLI.js";import"./DialogBase-DZLlSH8O.js";import"./Close-Cz-06mD9.js";import"./HelpPopover-C9q_fGyh.js";import"./MarkdownPopover-BkMntjjk.js";import"./LightTooltip-Dge4KYYp.js";import"./MarkdownSynapse-277_eni0.js";import"./SkeletonButton-DJTXNqO5.js";import"./SkeletonInlineBlock-CIXdsi0t.js";import"./SkeletonTable-BL3DzlJY.js";import"./SkeletonParagraph-Sl7bNyS_.js";import"./SynapseHomepageNavBar-BqmbfNXR.js";import"./SageResourcesPopover-Dqn_IOP8.js";import"./Grid-C8a2DaSn.js";import"./index-Y-POCSpx.js";import"./MenuItem-CzNz3VcW.js";import"./UserBadge-C6jEbLoI.js";import"./Card-Z11x_8d2.js";import"./Chip-TAfdcvOh.js";import"./Slide-DKSepNOh.js";import"./InputAdornment-BXJzzm2s.js";import"./listItemButtonClasses-Bn7ExtEm.js";import"./Badge-BFP9M3TL.js";import"./usePreviousProps-D0pYQqJp.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
