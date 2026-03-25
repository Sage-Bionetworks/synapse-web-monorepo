import{ay as a,j as r,r as i}from"./iframe-BnwOOxVB.js";import{S as c}from"./SynapseNavDrawer-BNcL2-kD.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-BZ1mxQnF.js";import"./useInfiniteQuery-1s6_iIB7.js";import"./useDownloadList-KT-aRJfJ.js";import"./waitForAsyncResult-BwMI6IBL.js";import"./useUserBundle-DzFa2F0q.js";import"./CreateProjectModal-DJ-b5ufy.js";import"./ConfirmationDialog-BdmzWONJ.js";import"./DialogBase-Dbn_HhWz.js";import"./Close-DsW9lEMH.js";import"./HelpPopover-f6Y-8lBt.js";import"./MarkdownPopover-dEsnVknt.js";import"./LightTooltip-BKLx-2zI.js";import"./MarkdownSynapse-CudWy8rb.js";import"./SkeletonButton-Cx1YwYzw.js";import"./SkeletonInlineBlock-CZWtZtay.js";import"./SkeletonTable-Dk7rdMrJ.js";import"./SkeletonParagraph-Bx2C1bW5.js";import"./SynapseHomepageNavBar-Phn_VKMb.js";import"./SageResourcesPopover-D8zV9_IL.js";import"./Grid-Dn3yFbHq.js";import"./index-BWFWUV0I.js";import"./MenuItem-DUMDRQOA.js";import"./UserBadge-CqwZjHo1.js";import"./Card-Dxpi6uBT.js";import"./Chip-B5d3JXK1.js";import"./searchDefaults-B80u-UIN.js";import"./Slide-DNt8lHzl.js";import"./InputAdornment-QFRMT8fg.js";import"./listItemButtonClasses-DGgrJKdk.js";import"./Badge-BswequRO.js";import"./usePreviousProps-CVmwG49s.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
