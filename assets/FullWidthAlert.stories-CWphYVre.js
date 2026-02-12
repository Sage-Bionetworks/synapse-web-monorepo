import{az as a,j as r,r as i}from"./iframe-BYI6UvQX.js";import{S as c}from"./SynapseNavDrawer-CVcmZ1T_.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-XSOIRG9C.js";import"./useInfiniteQuery-BV081oyQ.js";import"./useDownloadList-Bi3qtgFE.js";import"./waitForAsyncResult-CvG0t9Gq.js";import"./useUserBundle-Be9uEwgr.js";import"./useSuspenseQuery-CyhHWdVP.js";import"./CreateProjectModal-IkP0-kVE.js";import"./ConfirmationDialog-toxY45nm.js";import"./DialogBase-C1QyiwVh.js";import"./Close-Clh2xDFP.js";import"./HelpPopover-DhAbnR7s.js";import"./MarkdownPopover-B8qxAI9Z.js";import"./LightTooltip-BPs4I3gS.js";import"./MarkdownSynapse-DLgizTv6.js";import"./SkeletonButton-moYwMGBJ.js";import"./SkeletonInlineBlock-CvF0ovYz.js";import"./SkeletonTable-D-cfGk8m.js";import"./SkeletonParagraph-BUXmdzG2.js";import"./SynapseHomepageNavBar-BCPAvOju.js";import"./SageResourcesPopover-CVyAzMCg.js";import"./Grid-L5qrXUIJ.js";import"./index-CWsmnNqr.js";import"./MenuItem-x7kd2x5J.js";import"./UserBadge-C96yZvDg.js";import"./Card-B1HzsQxk.js";import"./Chip-CzyNjUbD.js";import"./searchDefaults-D3w-4tc6.js";import"./Slide-LbcZijI5.js";import"./InputAdornment-DHiOenVW.js";import"./listItemButtonClasses-DiELUu0G.js";import"./Badge-BjwwJrHW.js";import"./usePreviousProps-CE-CeNM-.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
