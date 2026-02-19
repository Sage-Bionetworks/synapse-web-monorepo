import{az as a,j as r,r as i}from"./iframe-C_dryyJN.js";import{S as c}from"./SynapseNavDrawer-CN0NGN1C.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-g6PzE50r.js";import"./useInfiniteQuery-CNeRYV1j.js";import"./useDownloadList-BhZF1e3t.js";import"./waitForAsyncResult-jqZHoy6a.js";import"./useUserBundle-QtzgNDHJ.js";import"./useSuspenseQuery-DbrtCnso.js";import"./CreateProjectModal-_gOyoNCK.js";import"./ConfirmationDialog-DwI3ORsC.js";import"./DialogBase-DK1f3XXS.js";import"./Close-qhBbRzO3.js";import"./HelpPopover-Bv7T8EMS.js";import"./MarkdownPopover-t0Q781ku.js";import"./LightTooltip-kABvS4Wq.js";import"./MarkdownSynapse-63MOCJzX.js";import"./SkeletonButton-DhVxQIGw.js";import"./SkeletonInlineBlock-DprLb70P.js";import"./SkeletonTable-DtAMx_Lr.js";import"./SkeletonParagraph-Me_ye6-N.js";import"./SynapseHomepageNavBar-D9yOHkoS.js";import"./SageResourcesPopover-nTcTG3lt.js";import"./Grid-BY3BZ-52.js";import"./index-ClzeWg2J.js";import"./MenuItem-DGJNpis4.js";import"./UserBadge-DyxfWgNS.js";import"./Card-CVLPxeE5.js";import"./Chip-0QWq_ruD.js";import"./searchDefaults-BfDp7BAk.js";import"./Slide-C3cA31sf.js";import"./InputAdornment-CxE9uA8t.js";import"./listItemButtonClasses-BcTYeMjo.js";import"./Badge-vVTkIWJY.js";import"./usePreviousProps-35wWwmqT.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
