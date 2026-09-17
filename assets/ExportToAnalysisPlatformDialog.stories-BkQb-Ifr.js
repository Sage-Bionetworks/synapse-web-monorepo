import{o as e,u as t}from"./preload-helper-CsHsquCd.js";import{t as n}from"./react-BXiJfEW5.js";import{t as r}from"./jsx-runtime-l3w3GfrB.js";import{Ln as i,Vn as a}from"./synapse-client-CMOH3nuP.js";import{Ht as o,Ut as s,n as c,t as l}from"./iframe-BTyo1tQY.js";import{b as u,g as d,h as f,n as p,t as m}from"./QueryWrapper-DFKxQk6V.js";import{n as h,t as g}from"./ExportToAnalysisPlatformDialog-PJ1unkfT.js";function _(){let{isShowingExportToAnalysisPlatformModal:e,setIsShowingExportToAnalysisPlatformModal:t}=u();return(0,v.useEffect)(()=>{e||t(!0)},[e,t]),(0,y.jsx)(y.Fragment,{})}var v,y,b,x,S;e((()=>{f(),m(),o(),c(),a(),v=t(n(),1),h(),y=r(),b={title:`Explore/Send to Analysis Platform Dialog`,component:g,argTypes:{hasRowSelection:{description:`Simulates whether or not the table has row selection enabled.`,control:{type:`boolean`}},unitDescription:{description:`A word describing what each row represents`,control:{type:`text`}}},parameters:{design:{type:`figma`,url:`https://www.figma.com/design/GWQwLZl82ZT75gYonOx8Qf/AMP-ALS-Knowledge-Portal-v1?node-id=234-115477&m=dev`},msw:{handlers:[...l(i)]}}},x={name:`Send to Analysis Platform Dialog`,args:{platformInstructionProps:{cavaticaConnectAccountURL:`https://help.eliteportal.org/help/analysis-environments#IntegrationwithAnalysis&ComputeEnvironments-GainingAccess`},hasRowSelection:!1,unitDescription:`file`},decorators:[(e,t)=>(0,y.jsx)(p,{initQueryRequest:s,children:(0,y.jsxs)(d,{unitDescription:t.unitDescription,isRowSelectionVisible:t.hasRowSelection,enabledExternalAnalysisPlatforms:[`cavatica`,`terra`,`adworkbench`,`pluto`],children:[(0,y.jsx)(_,{}),(0,y.jsx)(e,{})]})})]},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Send to Analysis Platform Dialog',
  args: {
    platformInstructionProps: {
      cavaticaConnectAccountURL: 'https://help.eliteportal.org/help/analysis-environments#IntegrationwithAnalysis&ComputeEnvironments-GainingAccess'
    },
    hasRowSelection: false,
    unitDescription: 'file'
  },
  decorators: [(Story, args) => {
    return <QueryWrapper initQueryRequest={mockQueryBundleRequest}>
          <QueryVisualizationWrapper unitDescription={args.unitDescription} isRowSelectionVisible={args.hasRowSelection} enabledExternalAnalysisPlatforms={['cavatica', 'terra', 'adworkbench', 'pluto']}>
            <ShowModalTrigger />
            <Story />
          </QueryVisualizationWrapper>
        </QueryWrapper>;
  }]
}`,...x.parameters?.docs?.source}}},S=[`Demo`]}))();export{x as Demo,S as __namedExportsOrder,b as default};