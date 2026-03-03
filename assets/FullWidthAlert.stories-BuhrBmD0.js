import{az as a,j as r,r as i}from"./iframe-Dbbh8EoS.js";import{S as c}from"./SynapseNavDrawer-RCOXGSpJ.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-Dbjm3lOB.js";import"./useInfiniteQuery-DwX98EP2.js";import"./useDownloadList-kymjY56_.js";import"./waitForAsyncResult-DTgU9Rmq.js";import"./useUserBundle-CZY1dyhP.js";import"./CreateProjectModal-Bb0AuY6p.js";import"./ConfirmationDialog-DgOVI2l3.js";import"./DialogBase-DP21qmxt.js";import"./Close-Dh11qsnE.js";import"./HelpPopover-D9KVZzsy.js";import"./MarkdownPopover-BphtwQmM.js";import"./LightTooltip-CYhWOoK6.js";import"./MarkdownSynapse-Na_JpKhK.js";import"./SkeletonButton-BznCZj-O.js";import"./SkeletonInlineBlock-BfsUoAAw.js";import"./SkeletonTable-Cpo7iVUX.js";import"./SkeletonParagraph-DMnuMidF.js";import"./SynapseHomepageNavBar-D-IRckWk.js";import"./SageResourcesPopover-1F1qrq95.js";import"./Grid-CQsegt0C.js";import"./index-C5FBv2d-.js";import"./MenuItem-DT6oAegc.js";import"./UserBadge-ckycABX-.js";import"./Card-DZlEFsDn.js";import"./Chip-D58Qw1vN.js";import"./searchDefaults-alDYg0Wc.js";import"./Slide-CkW-ueK5.js";import"./InputAdornment-SNxRM6VY.js";import"./listItemButtonClasses-BdiprMYh.js";import"./Badge-BjgIpiZw.js";import"./usePreviousProps-5gNaxLyP.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
