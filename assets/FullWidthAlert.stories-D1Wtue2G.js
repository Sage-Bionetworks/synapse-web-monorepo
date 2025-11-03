import{ay as g,j as e,r as w}from"./iframe-Dz8P-dI2.js";import{S as v}from"./SynapseNavDrawer-D4gBChQT.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-zKhVUd_P.js";import"./useInfiniteQuery-C8P6ajVv.js";import"./useDownloadList-S6dDdLkl.js";import"./waitForAsyncResult-Cy3-jJC8.js";import"./CreateProjectModal-Db59kdpf.js";import"./ConfirmationDialog-DvlZtFFP.js";import"./DialogBase-GK7w3r0y.js";import"./Close-BWrQ-snO.js";import"./HelpPopover-CJRWDTvc.js";import"./MarkdownPopover-7Q79L-1x.js";import"./LightTooltip-DgOc2Xfz.js";import"./MarkdownSynapse-9b0IyTJh.js";import"./SkeletonButton-2qZCOB9B.js";import"./SkeletonInlineBlock-DU5NVTXg.js";import"./SkeletonTable-s01CyjIZ.js";import"./SkeletonParagraph-DjiISGk9.js";import"./SynapseHomepageNavBar-D1Ts-KHm.js";import"./SageResourcesPopover-Di7YYJry.js";import"./Grid-D6P_m0Xy.js";import"./index-BXaeJfK5.js";import"./MenuItem-MnHW3c-e.js";import"./UserBadge-Bv1QVAAu.js";import"./Card-BxGgGoYt.js";import"./Chip-Cj9us3E8.js";import"./Slide-BDvsz1fa.js";import"./InputAdornment-BjtOApjz.js";import"./listItemButtonClasses-D2LV-GJ_.js";import"./Badge-c6IOdIQS.js";import"./usePreviousProps-oI6DtAo-.js";const V={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},r={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...r.args},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),e.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),e.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    show: true,
    title: 'Package has been downloaded',
    description: 'The files contained in this zip file have been removed from your list.',
    isGlobal: false
  }
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,p,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,d,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const X=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,r as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,X as __namedExportsOrder,V as default};
