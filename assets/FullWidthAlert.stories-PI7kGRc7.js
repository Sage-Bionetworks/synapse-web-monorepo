import{aA as a,j as r,r as i}from"./iframe-DJOT8ubk.js";import{S as c}from"./SynapseNavDrawer-BXTVuKg3.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-Bu5QACJx.js";import"./useInfiniteQuery-D5oLhJn7.js";import"./useDownloadList-B8w-Vo6K.js";import"./waitForAsyncResult-DpX0JqhD.js";import"./useUserBundle-B3bDvO5I.js";import"./CreateProjectModal-PDOGrF2D.js";import"./ConfirmationDialog-D-4hDJN8.js";import"./DialogBase-C-V5Cw2E.js";import"./Close-DdNyWCxq.js";import"./HelpPopover-Ce02sqI5.js";import"./MarkdownPopover-DiesQhNw.js";import"./LightTooltip-C1GNiWuq.js";import"./MarkdownSynapse-BCTt75oT.js";import"./SkeletonButton-AJ5Zwmr0.js";import"./SkeletonInlineBlock-x0qIf0wc.js";import"./SkeletonTable-DlP5X3HC.js";import"./SkeletonParagraph-COpY1z9l.js";import"./SynapseHomepageNavBar-B2KIejwV.js";import"./SageResourcesPopover-BBBKyFX-.js";import"./Grid-CIa2Y_N7.js";import"./index-C3UiH5jH.js";import"./MenuItem-D1_UwcJ_.js";import"./UserBadge-BlJ5RAMM.js";import"./Card-CGE0J5vP.js";import"./Chip-OZ5AEEU1.js";import"./searchDefaults-Cn9pr5Uj.js";import"./Slide-HyZ_AqXR.js";import"./InputAdornment-BLNpvc8n.js";import"./listItemButtonClasses-ClnhnfoV.js";import"./Badge-F2YST7IW.js";import"./usePreviousProps-BQpd1Tk5.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
