import{ay as a,j as r,r as i}from"./iframe-C7rwSIbr.js";import{S as c}from"./SynapseNavDrawer-JwPZxUJx.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-Dxc7Wy7e.js";import"./useInfiniteQuery-B_4JrFtn.js";import"./useDownloadList-CZIvwTwE.js";import"./waitForAsyncResult-BAQUO-Zx.js";import"./useGetFeatureFlag-C-ReQrbs.js";import"./useUserBundle-pxWWzqzb.js";import"./useSuspenseQuery-SFMk3h0j.js";import"./CreateProjectModal-B89Cgdjc.js";import"./ConfirmationDialog-Cjq7hfr8.js";import"./DialogBase-BuNrYOj6.js";import"./Close-DPgD_Lcy.js";import"./HelpPopover-D7lY4hER.js";import"./MarkdownPopover-DNfQ1GsD.js";import"./LightTooltip-CBY_GmRv.js";import"./MarkdownSynapse-C_a4bb2e.js";import"./SkeletonButton-5OEfN7I-.js";import"./SkeletonInlineBlock-9crGgDl7.js";import"./SkeletonTable-Dj6LF7El.js";import"./SkeletonParagraph-DljX6hdA.js";import"./SynapseHomepageNavBar-T0Tw2K_B.js";import"./SageResourcesPopover-Dv8hL7Aa.js";import"./Grid-Chh7U9I0.js";import"./index-Di-Cz18U.js";import"./MenuItem-GxwqXfxd.js";import"./UserBadge-DIVA4wpA.js";import"./Card-B6N2Lo5X.js";import"./Chip-CdXxtxxp.js";import"./Slide-BND41e8Z.js";import"./InputAdornment-CM8vshmv.js";import"./listItemButtonClasses-2rTXFjyQ.js";import"./Badge-BvtMsdy6.js";import"./usePreviousProps-BO04T922.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
