import{az as a,j as r,r as i}from"./iframe-B7KGf7-k.js";import{S as c}from"./SynapseNavDrawer-B45EG1yq.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-Bx4KT_Dg.js";import"./useInfiniteQuery-DoSxFn_y.js";import"./useDownloadList-vUtUOQkK.js";import"./waitForAsyncResult-BR6t2Qc2.js";import"./useUserBundle-Dv5e5E2c.js";import"./CreateProjectModal-DV9PamvH.js";import"./ConfirmationDialog-CfHwuMwA.js";import"./DialogBase-D0__VBEg.js";import"./Close-T1I-2ajn.js";import"./HelpPopover-rsd36_y9.js";import"./MarkdownPopover-CgOyBUHV.js";import"./LightTooltip-BjN2xTIz.js";import"./MarkdownSynapse-1Rv7JxA3.js";import"./SkeletonButton-DY-_GYdD.js";import"./SkeletonInlineBlock-C6U7Upal.js";import"./SkeletonTable-DLLgVxsK.js";import"./SkeletonParagraph-D-OkfrQQ.js";import"./SynapseHomepageNavBar-BitEujZ0.js";import"./SageResourcesPopover-C7nNjhn9.js";import"./Grid-BRTWVYn9.js";import"./index-bUombD9c.js";import"./MenuItem-BFpLBTs1.js";import"./UserBadge-O_YNKCQM.js";import"./Card-FkpFOr7A.js";import"./Chip-BchH_Wga.js";import"./searchDefaults-DN0lOCFJ.js";import"./Slide-aD9ghNJb.js";import"./InputAdornment-MjOZVgFd.js";import"./listItemButtonClasses-DEJZgMDS.js";import"./Badge-BBOZVM0y.js";import"./usePreviousProps-B9gg4R91.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
