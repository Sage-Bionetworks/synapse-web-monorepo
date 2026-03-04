import{az as a,j as r,r as i}from"./iframe-DlAeJyvm.js";import{S as c}from"./SynapseNavDrawer-BgEBZjE_.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-DH-gnOIv.js";import"./useInfiniteQuery-DNMsj4KR.js";import"./useDownloadList-Ca5Cw7q1.js";import"./waitForAsyncResult-y1s50yqK.js";import"./useUserBundle-BDeD3kk8.js";import"./CreateProjectModal-WDDEoytd.js";import"./ConfirmationDialog-BREVjTJW.js";import"./DialogBase-BrTsbhWa.js";import"./Close-DIOhH67l.js";import"./HelpPopover-C7aATcX6.js";import"./MarkdownPopover-CipjSExT.js";import"./LightTooltip-D-pIKqvq.js";import"./MarkdownSynapse-DknW4l8A.js";import"./SkeletonButton-BcA4f8OA.js";import"./SkeletonInlineBlock-NsF75vHh.js";import"./SkeletonTable-DPSdTVk3.js";import"./SkeletonParagraph-B7DNR62K.js";import"./SynapseHomepageNavBar-OlZteCHx.js";import"./SageResourcesPopover-aARGRueY.js";import"./Grid-C5BqjR7G.js";import"./index-CRBkYYcS.js";import"./MenuItem-Bx5CSZWI.js";import"./UserBadge-CsA0oRzK.js";import"./Card-CJMqK3BG.js";import"./Chip-CopACKXK.js";import"./searchDefaults-DNrXg_2J.js";import"./Slide-CVZAAF8Y.js";import"./InputAdornment-BcSUicm_.js";import"./listItemButtonClasses-D1HBp4ip.js";import"./Badge-Sx4SQrQl.js";import"./usePreviousProps-0ItZLv7W.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
