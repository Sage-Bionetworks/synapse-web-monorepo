import{ay as a,j as r,r as i}from"./iframe-DUgvw_e1.js";import{S as c}from"./SynapseNavDrawer-bH7aWZry.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-CsqvUA3v.js";import"./useInfiniteQuery-DR51fsMw.js";import"./useDownloadList-DdAUwSiR.js";import"./waitForAsyncResult-_thx4bZ_.js";import"./useUserBundle-DplDm6GV.js";import"./useSuspenseQuery-ox9OnZJk.js";import"./CreateProjectModal--nSY7vM6.js";import"./ConfirmationDialog-Bvq2Xms7.js";import"./DialogBase-0-bDisQA.js";import"./Close-BEr3H63z.js";import"./HelpPopover-BS0U5Svz.js";import"./MarkdownPopover-8PnwzX9y.js";import"./LightTooltip-pkrnltrn.js";import"./MarkdownSynapse-C3JndqNi.js";import"./SkeletonButton-CHYteE0_.js";import"./SkeletonInlineBlock-C0f092qz.js";import"./SkeletonTable-wy_brudp.js";import"./SkeletonParagraph-zF20ua7-.js";import"./SynapseHomepageNavBar-DcqpDskI.js";import"./SageResourcesPopover-CG04QTJz.js";import"./Grid-CBalzoNK.js";import"./index-D5BySe1V.js";import"./MenuItem-DFV-o_UX.js";import"./UserBadge-D8J1ZLdA.js";import"./Card-BDbGewBq.js";import"./Chip-D6AY4yga.js";import"./searchDefaults-CttpI5t1.js";import"./Slide-B5etTIyV.js";import"./InputAdornment-BWCAJJLH.js";import"./listItemButtonClasses-S1QST8yn.js";import"./Badge-uH7PPswi.js";import"./usePreviousProps-DoM5V-Eb.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
