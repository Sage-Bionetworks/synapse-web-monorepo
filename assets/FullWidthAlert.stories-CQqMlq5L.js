import{ax as a,r as i,j as r}from"./iframe-xQMv0B7c.js";import{S as c}from"./SynapseNavDrawer-GcMlA6UJ.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-CkeZMOjV.js";import"./useInfiniteQuery-B0ejREUV.js";import"./useDownloadList-_FD3UT8Z.js";import"./waitForAsyncResult-CzlD3NID.js";import"./useUserBundle-CwvRZ8ZR.js";import"./CreateProjectModal-Mrk-T_8_.js";import"./ConfirmationDialog-Dog3I0Kz.js";import"./DialogBase-BBkRPs_T.js";import"./Close-BXgmGCmp.js";import"./HelpPopover-gF13SbSs.js";import"./MarkdownPopover-B19tLMSb.js";import"./LightTooltip-CxGW4K1V.js";import"./MarkdownSynapse-CaHYMk_z.js";import"./SkeletonButton-BO78PNXN.js";import"./SkeletonInlineBlock-DTwWIKu1.js";import"./SkeletonTable-C8xyrBR9.js";import"./SkeletonParagraph-B_dMNDrm.js";import"./RadioGroup-CgN6Lzx7.js";import"./Radio-D69wXDzv.js";import"./SwitchBase-BC6L5hXz.js";import"./FormGroup-BGkderdo.js";import"./FormControlLabel-GDbx5q6Y.js";import"./Chip-T-Cvxbkm.js";import"./SynapseHomepageNavBar-BktVn6uA.js";import"./SageResourcesPopover-DQRb7vIg.js";import"./Grid-BaquKNQu.js";import"./index-CXBvLS03.js";import"./MenuItem-CFXGxp9X.js";import"./UserBadge-Dy2rNvc3.js";import"./Card-Djer30mf.js";import"./searchDefaults-CLClujsy.js";import"./Slide-Db-lVYWH.js";import"./InputAdornment-DOLEEEIN.js";import"./listItemButtonClasses-AET5PToo.js";import"./Badge-Ch-sNPQP.js";import"./usePreviousProps-vfY-8rpx.js";const M={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const Q=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,e as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,Q as __namedExportsOrder,M as default};
