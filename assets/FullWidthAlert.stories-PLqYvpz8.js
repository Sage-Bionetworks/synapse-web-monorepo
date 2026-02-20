import{az as a,j as r,r as i}from"./iframe-4beS0gqZ.js";import{S as c}from"./SynapseNavDrawer-qFBRR9n-.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-CDOZuSkR.js";import"./useInfiniteQuery-BMIQmsjh.js";import"./useDownloadList-thg1TB4A.js";import"./waitForAsyncResult-Vq5YD577.js";import"./useUserBundle-CsgmO8pI.js";import"./useSuspenseQuery-DcbESSKQ.js";import"./CreateProjectModal-DIDGqpOg.js";import"./ConfirmationDialog-DiR-POnZ.js";import"./DialogBase-EyEbalB9.js";import"./Close-Di6LJuIZ.js";import"./HelpPopover-CrWRb3n8.js";import"./MarkdownPopover-DsiU9Oei.js";import"./LightTooltip-Bs_25L1-.js";import"./MarkdownSynapse-D_Ohq5Ke.js";import"./SkeletonButton-C4MVharh.js";import"./SkeletonInlineBlock-DJy2BwKW.js";import"./SkeletonTable-BUzuull8.js";import"./SkeletonParagraph-D8WDF9hI.js";import"./SynapseHomepageNavBar-CUSLIA0f.js";import"./SageResourcesPopover-7awU9LC-.js";import"./Grid-BXs150NI.js";import"./index-CK_NCQ6g.js";import"./MenuItem-rOQE2nSk.js";import"./UserBadge-Owmt2iN0.js";import"./Card-CE7IB0pi.js";import"./Chip-DN1AmnB5.js";import"./searchDefaults-DccA5eS3.js";import"./Slide-cILDnBg5.js";import"./InputAdornment-mvHZWRNu.js";import"./listItemButtonClasses-uayquW46.js";import"./Badge-1k_w-H5A.js";import"./usePreviousProps-BZlmNWgp.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
