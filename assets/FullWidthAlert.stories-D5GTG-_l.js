import{ay as a,j as r,r as i}from"./iframe-z21gSILm.js";import{S as c}from"./SynapseNavDrawer-Bg1biH5s.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-CLOO3Awk.js";import"./useInfiniteQuery-DViYzGwW.js";import"./useDownloadList-DnAhLxoa.js";import"./waitForAsyncResult-CVac7f0I.js";import"./useUserBundle-Bi_03OP-.js";import"./useSuspenseQuery-BDbBJqHo.js";import"./CreateProjectModal-BNXQlFIY.js";import"./ConfirmationDialog-C8lFb7mH.js";import"./DialogBase-DQK4XqJC.js";import"./Close-qryw1NjU.js";import"./HelpPopover-Boy-nK2n.js";import"./MarkdownPopover-BmUk5Bqy.js";import"./LightTooltip-S0tAvjiv.js";import"./MarkdownSynapse-DllhcJ_D.js";import"./SkeletonButton-Q38ELWwJ.js";import"./SkeletonInlineBlock-DuFis4qM.js";import"./SkeletonTable-HmkSCDv0.js";import"./SkeletonParagraph-DwVqH0kg.js";import"./SynapseHomepageNavBar-BGH7coQ7.js";import"./SageResourcesPopover-abSKxBRQ.js";import"./Grid-ZG61elFB.js";import"./index-BRmRy84u.js";import"./MenuItem-BqzvmG8S.js";import"./UserBadge-nSpluHjM.js";import"./Card-BBNGqpZ7.js";import"./Chip-rCXgsppD.js";import"./Slide-7X-Z_mtA.js";import"./InputAdornment-eK22iVz-.js";import"./listItemButtonClasses-Oj7JTGQ5.js";import"./Badge-D_z0IhOp.js";import"./usePreviousProps-CKbyNIUV.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
