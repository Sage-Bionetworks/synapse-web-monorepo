import{ax as a,r as i,j as r}from"./iframe-DIHutOM2.js";import{S as c}from"./SynapseNavDrawer-BV6o2IpN.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-CZYn-Z73.js";import"./useInfiniteQuery-DBeYwuV2.js";import"./useDownloadList-DT4yK-dM.js";import"./waitForAsyncResult-C_euaM8d.js";import"./useUserBundle-C5_SG0-L.js";import"./CreateProjectModal-C7Se12OJ.js";import"./ConfirmationDialog-PWqiGP-s.js";import"./DialogBase-BFJUh7rx.js";import"./Close-66Wa0jNb.js";import"./HelpPopover-Em0_eBy5.js";import"./MarkdownPopover-WQLNFQ0C.js";import"./LightTooltip-BMq0VrbL.js";import"./MarkdownSynapse-8m84fN3d.js";import"./SkeletonButton-zFoMoYHg.js";import"./SkeletonInlineBlock-CxHTYkDw.js";import"./SkeletonTable-C4N-t1H3.js";import"./SkeletonParagraph-BIGOfadt.js";import"./RadioGroup-YxUeEFrK.js";import"./Radio-CDYPZbnQ.js";import"./SwitchBase-GpXGIWUe.js";import"./FormGroup-CsaqhiB_.js";import"./FormControlLabel-D-4Nscdf.js";import"./Chip-BE1NWb4W.js";import"./SynapseHomepageNavBar-DrFP-Qi-.js";import"./SageResourcesPopover-xjr1wr6_.js";import"./Grid-BawCSdC7.js";import"./index-C9LEM1Gs.js";import"./MenuItem-DK0615By.js";import"./UserBadge-F-3JUNkT.js";import"./useUserGroupHeader-DQOVdta_.js";import"./Card-BmTXRzNL.js";import"./searchDefaults-C3U3nggo.js";import"./Slide-C2Ib00w4.js";import"./InputAdornment-BViqjaeh.js";import"./listItemButtonClasses-4A0QUsPX.js";import"./Badge-BqqK7TI6.js";import"./usePreviousProps-DeB1hVtp.js";const Q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const V=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,e as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,V as __namedExportsOrder,Q as default};
