import{ay as a,j as r,r as i}from"./iframe-B-rWBBOy.js";import{S as c}from"./SynapseNavDrawer-YN7rK6HM.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-BWm9VIc4.js";import"./useInfiniteQuery-BF0L2vpl.js";import"./useDownloadList-CjjLUFrN.js";import"./waitForAsyncResult-BegINeZL.js";import"./useGetFeatureFlag-xkL9rPzC.js";import"./useUserBundle-rX-QoUXs.js";import"./useSuspenseQuery-BilXPZyB.js";import"./CreateProjectModal-CKF2OQUb.js";import"./ConfirmationDialog-CTssCfny.js";import"./DialogBase-CPTrGtI1.js";import"./Close-CpX3wYP0.js";import"./HelpPopover-q5ekk2th.js";import"./MarkdownPopover-b-Sbeuph.js";import"./LightTooltip-BemyKtyu.js";import"./MarkdownSynapse-CjIEyYww.js";import"./SkeletonButton-C55ygy2r.js";import"./SkeletonInlineBlock-Cpev2ljV.js";import"./SkeletonTable-GTeIPnR6.js";import"./SkeletonParagraph-IppQ387m.js";import"./SynapseHomepageNavBar-BokMpaRH.js";import"./SageResourcesPopover-DA_t98O8.js";import"./Grid-BdoL564Q.js";import"./index-BmrJEvkQ.js";import"./MenuItem-rdxON32h.js";import"./UserBadge-ChgBnm4h.js";import"./Card-D938tlRh.js";import"./Chip-WQPXL1Rn.js";import"./Slide-CZ5x_6DY.js";import"./InputAdornment-EMuIDNUH.js";import"./listItemButtonClasses-Borf8tjx.js";import"./Badge-D7vojiwt.js";import"./usePreviousProps-DVYxLWpq.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
