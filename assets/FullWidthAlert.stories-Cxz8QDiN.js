import{ay as a,j as r,r as i}from"./iframe-D6-EgIYn.js";import{S as c}from"./SynapseNavDrawer-B5vJ8de6.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-DQLy7B87.js";import"./useInfiniteQuery-Bac3XvRa.js";import"./useDownloadList-Bth3q4vr.js";import"./waitForAsyncResult-DHwSVMDx.js";import"./useUserBundle-CyWCEqcm.js";import"./useSuspenseQuery-CDWRAkW_.js";import"./CreateProjectModal-BjreWp89.js";import"./ConfirmationDialog-BievdrGA.js";import"./DialogBase-jhwmtm1u.js";import"./Close-CB4RDINp.js";import"./HelpPopover-6jNO7rXC.js";import"./MarkdownPopover-63--326B.js";import"./LightTooltip-ByM4QqbN.js";import"./MarkdownSynapse-BOOvENLm.js";import"./SkeletonButton-BgAZzTmz.js";import"./SkeletonInlineBlock-CkGbAtvq.js";import"./SkeletonTable-Cw1xCxvL.js";import"./SkeletonParagraph-DzfgVu65.js";import"./SynapseHomepageNavBar-D-d2Cuop.js";import"./SageResourcesPopover-ChXJGJWK.js";import"./Grid-Doyl9us1.js";import"./index-BAqH8QUV.js";import"./MenuItem-CdqoCxWB.js";import"./UserBadge-CjWzxbLB.js";import"./Card-dKshTQst.js";import"./Chip-C2QYErxj.js";import"./searchDefaults-DFxcVN9o.js";import"./Slide-rVF7Nw1Y.js";import"./InputAdornment-DnIZLWBQ.js";import"./listItemButtonClasses-Dg5mxcei.js";import"./Badge-D2htXw_2.js";import"./usePreviousProps-BH-KhJ4K.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
