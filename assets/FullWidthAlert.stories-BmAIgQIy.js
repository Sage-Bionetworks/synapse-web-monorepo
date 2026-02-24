import{ay as a,j as r,r as i}from"./iframe-BQS6qtw3.js";import{S as c}from"./SynapseNavDrawer-C3xkK9Zw.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-dMOniu9Q.js";import"./useInfiniteQuery-CbIRomxB.js";import"./useDownloadList-DOlDmrpb.js";import"./waitForAsyncResult-CzrTa_vM.js";import"./useUserBundle-BrF0shF6.js";import"./useSuspenseQuery-z742AnhG.js";import"./CreateProjectModal-D2pu6PwP.js";import"./ConfirmationDialog-ycX2jcUO.js";import"./DialogBase-BFxYZZoa.js";import"./Close-DNav6fH0.js";import"./HelpPopover-qCLkd-Tk.js";import"./MarkdownPopover-DTfEgFmO.js";import"./LightTooltip-CsVEpTPe.js";import"./MarkdownSynapse-DVax0Jmd.js";import"./SkeletonButton-Cq3ID3gv.js";import"./SkeletonInlineBlock-D36uEl4g.js";import"./SkeletonTable-EcKAjw5h.js";import"./SkeletonParagraph-C3oZhxG8.js";import"./SynapseHomepageNavBar-FPlCLW1s.js";import"./SageResourcesPopover-kCzNMTek.js";import"./Grid-3RO3DzDO.js";import"./index-DIRtHi4A.js";import"./MenuItem-C3kzUxKu.js";import"./UserBadge-CNqK9ajB.js";import"./Card-OQD5P-Gx.js";import"./Chip-ecDlwPeu.js";import"./searchDefaults-CqNKRnp6.js";import"./Slide-D7Ozcp65.js";import"./InputAdornment-BbhrgGW0.js";import"./listItemButtonClasses-B9xhDk9q.js";import"./Badge-Etq9ls7t.js";import"./usePreviousProps-C6Ae5BQU.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
