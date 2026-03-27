import{ay as a,j as r,r as i}from"./iframe-k6B4MjXD.js";import{S as c}from"./SynapseNavDrawer-CIHy6ILp.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-BSKNIhCV.js";import"./useInfiniteQuery-CFREU8Pv.js";import"./useDownloadList-wG2PFdeR.js";import"./waitForAsyncResult-VxUG6_F-.js";import"./useUserBundle-9_lecAHf.js";import"./CreateProjectModal-RzxxWWNI.js";import"./ConfirmationDialog-QQIwXsjr.js";import"./DialogBase-Ccfo_49T.js";import"./Close-DOldyZv5.js";import"./HelpPopover-t1MsDT6m.js";import"./MarkdownPopover-D-j3as32.js";import"./LightTooltip-D4E2KaZT.js";import"./MarkdownSynapse-EyuM-I29.js";import"./SkeletonButton-DUY-d9ph.js";import"./SkeletonInlineBlock-DCdHLNp-.js";import"./SkeletonTable-DolM1Kfd.js";import"./SkeletonParagraph-B7V0f3GA.js";import"./SynapseHomepageNavBar-D5JhXDRz.js";import"./SageResourcesPopover-Cnmbw60b.js";import"./Grid-0yqev7cN.js";import"./index-WOehqnwl.js";import"./MenuItem-DIdsJc7D.js";import"./UserBadge-CTPE8I7e.js";import"./Card-BYlpnDBX.js";import"./Chip-ClQuTivw.js";import"./searchDefaults-D9K-2IVY.js";import"./Slide-CSmYZSnW.js";import"./InputAdornment-heMVe1bs.js";import"./listItemButtonClasses-C21jZuS6.js";import"./Badge-DYw4_THJ.js";import"./usePreviousProps-TBUXOJTu.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
