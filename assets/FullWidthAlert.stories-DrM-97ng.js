import{ax as a,r as i,j as r}from"./iframe-AuqRm6Xj.js";import{S as c}from"./SynapseNavDrawer-CpTSVFvX.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-cXnJ3Rr6.js";import"./useInfiniteQuery-CwU4w13D.js";import"./useDownloadList-CNnr1FS0.js";import"./waitForAsyncResult-C8P-egqI.js";import"./useUserBundle-B1FabnzQ.js";import"./CreateProjectModal-9QEE_k2P.js";import"./ConfirmationDialog-VlIF6_Hw.js";import"./DialogBase-Bp-oXsnD.js";import"./Close-wXc8W0YL.js";import"./HelpPopover-u8xzPavD.js";import"./MarkdownPopover-Dmj83Psx.js";import"./LightTooltip-BMQNdjTq.js";import"./MarkdownSynapse-DiqCpyPK.js";import"./SkeletonButton-De9SiVJE.js";import"./SkeletonInlineBlock-CL4j-wc-.js";import"./SkeletonTable-C0VRg4xn.js";import"./SkeletonParagraph-B6IfoMOd.js";import"./SynapseHomepageNavBar-DMgk3_gX.js";import"./SageResourcesPopover-DJN9hUfN.js";import"./Grid-DZvB9Er5.js";import"./index-D5YJAeH4.js";import"./MenuItem-e1skeM_z.js";import"./UserBadge-94-bM4a7.js";import"./Card-D38Rt5-Y.js";import"./Chip-DC7pM5qx.js";import"./searchDefaults-DNOr6e57.js";import"./Slide-DmJSOYzw.js";import"./InputAdornment-CPdugysm.js";import"./listItemButtonClasses-Bdg07ZGq.js";import"./Badge-B_C92x_j.js";import"./usePreviousProps-CeiRwp8W.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
