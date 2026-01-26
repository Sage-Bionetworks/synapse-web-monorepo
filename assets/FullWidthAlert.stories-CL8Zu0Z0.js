import{ay as a,j as r,r as i}from"./iframe-BZ6Cksnd.js";import{S as c}from"./SynapseNavDrawer-yIcLLsPe.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-BDJFdQUj.js";import"./useInfiniteQuery-Cab2Nvsr.js";import"./useDownloadList-BysABXtR.js";import"./waitForAsyncResult-Cb2vkw9U.js";import"./useGetFeatureFlag-0R-yKBno.js";import"./useUserBundle-B39u_n1H.js";import"./useSuspenseQuery-BArtp2Wi.js";import"./CreateProjectModal-C9CZg8B2.js";import"./ConfirmationDialog-BF42zmYQ.js";import"./DialogBase-DRojLOwK.js";import"./Close-DjUjyOYX.js";import"./HelpPopover-C2Z3UJR4.js";import"./MarkdownPopover-B8e90Ko7.js";import"./LightTooltip-Bs22fiBY.js";import"./MarkdownSynapse-DRGuoN53.js";import"./SkeletonButton-eBqXNQMI.js";import"./SkeletonInlineBlock-CaEvhC-d.js";import"./SkeletonTable-BgNPNqlP.js";import"./SkeletonParagraph-DuP-_ghR.js";import"./SynapseHomepageNavBar-DVW8At4h.js";import"./SageResourcesPopover-CoMpobGR.js";import"./Grid-gDFBYhCk.js";import"./index-DT9MyxYS.js";import"./MenuItem-BRVKaq9N.js";import"./UserBadge-BSz9Rlfd.js";import"./Card-eBY9for1.js";import"./Chip-CRcycbBa.js";import"./Slide-BZD5T69E.js";import"./InputAdornment-b8rmBexF.js";import"./listItemButtonClasses-d2SUOwj6.js";import"./Badge-CJqy-haN.js";import"./usePreviousProps-BOCDsbRu.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
