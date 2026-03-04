import{az as a,j as r,r as i}from"./iframe-BoxuKy9E.js";import{S as c}from"./SynapseNavDrawer-Jzk7iIPV.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-DJc-6noa.js";import"./useInfiniteQuery-BcQtjXyf.js";import"./useDownloadList-Ndtb4CEu.js";import"./waitForAsyncResult-CPH2Os32.js";import"./useUserBundle-xbyPhtej.js";import"./CreateProjectModal-CLOvJRuQ.js";import"./ConfirmationDialog-CIPv0_VW.js";import"./DialogBase-D71Bzuhw.js";import"./Close-D2FDtn_Z.js";import"./HelpPopover-D7Iu88Kq.js";import"./MarkdownPopover-4O8M2I8a.js";import"./LightTooltip-DwenlRx7.js";import"./MarkdownSynapse-CBVUbKcu.js";import"./SkeletonButton-BIE6flyK.js";import"./SkeletonInlineBlock-BI06okMA.js";import"./SkeletonTable-BDD50YXU.js";import"./SkeletonParagraph-Cla7VaV-.js";import"./SynapseHomepageNavBar-CKoyEEO2.js";import"./SageResourcesPopover-D8nqaMwY.js";import"./Grid-gldVkERl.js";import"./index-Log0dJvg.js";import"./MenuItem-BGU-QKhy.js";import"./UserBadge-BiME232n.js";import"./Card-BkInqMDB.js";import"./Chip-BVijHoac.js";import"./searchDefaults-B2CcR6gy.js";import"./Slide-Ch7neGYx.js";import"./InputAdornment-CH6yibTW.js";import"./listItemButtonClasses-CvbEJXfZ.js";import"./Badge-D9thJ-YV.js";import"./usePreviousProps-B0CusuoT.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
