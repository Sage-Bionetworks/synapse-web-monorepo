import{ay as a,j as r,r as i}from"./iframe-Cj0e1zel.js";import{S as c}from"./SynapseNavDrawer-CwEAklAk.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-Ubrh9GuK.js";import"./useInfiniteQuery-CPI4HKnX.js";import"./useDownloadList-DaWxP8_h.js";import"./waitForAsyncResult-DUIXWeDU.js";import"./useUserBundle-B7cMc4nB.js";import"./CreateProjectModal-DZP82iM-.js";import"./ConfirmationDialog-BOs_vWQu.js";import"./DialogBase-BtW1rv2q.js";import"./Close-B0Ezzxla.js";import"./HelpPopover-vs9IjcEE.js";import"./MarkdownPopover-DANY9xik.js";import"./LightTooltip-GdOigsor.js";import"./MarkdownSynapse-C0Os_jLu.js";import"./SkeletonButton-70dk5TWK.js";import"./SkeletonInlineBlock-ChrVufN-.js";import"./SkeletonTable-CBixK2YG.js";import"./SkeletonParagraph-BiV9WxhL.js";import"./SynapseHomepageNavBar-BvDDvv1t.js";import"./SageResourcesPopover-D-vZMUjD.js";import"./Grid-DBEISHdJ.js";import"./index-ZhGqh7fx.js";import"./MenuItem-BJCMGP6I.js";import"./UserBadge-BbVvVDZB.js";import"./Card-BxbyDLyH.js";import"./Chip-Deb-rO6G.js";import"./searchDefaults-CT_V0V6r.js";import"./Slide-Cs5NVWZB.js";import"./InputAdornment-DEbuiBTq.js";import"./listItemButtonClasses-C4DYsQo7.js";import"./Badge-7J9Xq6fs.js";import"./usePreviousProps-BzH06mOY.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
