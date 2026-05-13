import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ab as n,Ac as r,Di as i,Fo as a,Mv as o,Nb as s,Nu as c,Oc as l,T_ as u,To as d,_ as f,g as p,h as m,jS as h,nu as g,v as _,wi as v,wo as y,zS as b}from"./iframe-CUHaF4Ws.js";function x(e){let{sql:t,href:o,prefixText:l=``,suffixText:u=``,...f}=e,p=r(t),m=a(),{data:h,isLoading:g}=i({concreteType:`org.sagebionetworks.repo.model.table.QueryBundleRequest`,query:{sql:t},entityId:p,partMask:2}),_=h?.queryCount,v=o?.startsWith(`http://`)||o?.startsWith(`https://`),y={};y=v?{href:o,target:`_blank`,rel:`noopener noreferrer`,component:`a`}:m?{to:o,component:d}:{href:o,component:`a`};let b=S.useMemo(()=>{let e=[];return l&&e.push(l),!g&&_!==void 0&&e.push(_.toLocaleString()),u&&e.push(u),e.join(` `)},[l,_,u,g]),x=(0,C.jsx)(s,{sx:{display:`flex`,alignItems:`center`,justifyContent:`center`,backgroundColor:`background.paper`,borderRadius:`50%`,width:24,height:24},children:(0,C.jsx)(c,{sx:{color:`primary.main`,fontSize:20}})});return(0,C.jsx)(n,{...f,...y,endIcon:x,loading:g,children:b})}var S,C,w=e((()=>{v(),u(),l(),o(),g(),S=t(b(),1),y(),C=h();try{x.displayName=`QueryCountButton`,x.__docgenInfo={description:`A button component that displays text with an inline count.
The count is fetched by executing a SQL query against a Synapse table.
Example: "Explore 42 files"`,displayName:`QueryCountButton`,filePath:`/home/runner/work/synapse-web-monorepo/synapse-web-monorepo/packages/synapse-react-client/src/components/QueryCountButton/QueryCountButton.tsx`,methods:[],props:{sql:{defaultValue:null,declarations:[{fileName:`synapse-react-client/src/components/QueryCountButton/QueryCountButton.tsx`,name:`TypeLiteral`}],description:`The SQL query to execute to get the count`,name:`sql`,required:!0,tags:{},type:{name:`string`}},href:{defaultValue:null,declarations:[{fileName:`synapse-react-client/src/components/QueryCountButton/QueryCountButton.tsx`,name:`TypeLiteral`},{fileName:`synapse-web-monorepo/node_modules/.pnpm/@mui+material@7.1.1_@emotion+react@11.14.0_@types+react@19.2.14_react@19.2.5__@emotion+_9381e606d23932360455bd91b363813f/node_modules/@mui/material/Button/Button.d.ts`,name:`ButtonOwnProps`}],description:`The target URL when the button is clicked
The URL to link to when the button is clicked.
If defined, an \`a\` element will be used as the root node.`,name:`href`,required:!1,tags:{},type:{name:`string`}},prefixText:{defaultValue:null,declarations:[{fileName:`synapse-react-client/src/components/QueryCountButton/QueryCountButton.tsx`,name:`TypeLiteral`}],description:`Text to display before the count (e.g., "Explore")`,name:`prefixText`,required:!1,tags:{},type:{name:`string`}},suffixText:{defaultValue:null,declarations:[{fileName:`synapse-react-client/src/components/QueryCountButton/QueryCountButton.tsx`,name:`TypeLiteral`}],description:`Text to display after the count (e.g., "files")`,name:`suffixText`,required:!1,tags:{},type:{name:`string`}},component:{defaultValue:null,declarations:[{fileName:`synapse-web-monorepo/node_modules/.pnpm/@mui+material@7.1.1_@emotion+react@11.14.0_@types+react@19.2.14_react@19.2.5__@emotion+_9381e606d23932360455bd91b363813f/node_modules/@mui/material/Button/Button.d.ts`,name:`TypeLiteral`}],description:``,name:`component`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}}},tags:{}}}catch{}})),T,E,D,O,k,A,j,M,N,P,F;e((()=>{w(),p(),f(),T={title:`UI/QueryCountButton`,component:x,parameters:{stack:`mock`}},E=`syn12345678`,D=`SELECT * FROM ${E}`,O=e=>({concreteType:`org.sagebionetworks.repo.model.table.QueryResultBundle`,queryCount:e,queryResult:{concreteType:`org.sagebionetworks.repo.model.table.QueryResult`,queryResults:{concreteType:`org.sagebionetworks.repo.model.table.RowSet`,tableId:E,etag:`etag`,headers:[],rows:[]}}}),k={args:{sql:D,href:`/explore`,prefixText:`Explore`,suffixText:`files`},loaders:[()=>_({sql:D},O(42))],parameters:{msw:{handlers:m(void 0,E)}}},A={args:{sql:D,href:`/explore`,suffixText:`items available`},loaders:[()=>_({sql:D},O(42))],parameters:{msw:{handlers:m(void 0,E)}}},j={args:{sql:D,href:`/explore`,prefixText:`View`},loaders:[()=>_({sql:D},O(42))],parameters:{msw:{handlers:m(void 0,E)}}},M={args:{sql:D,href:`/explore`},loaders:[()=>_({sql:D},O(42))],parameters:{msw:{handlers:m(void 0,E)}}},N={args:{sql:D,href:`/explore`,prefixText:`Explore`,suffixText:`datasets`,variant:`outlined`},loaders:[()=>_({sql:D},O(42))],parameters:{msw:{handlers:m(void 0,E)}}},P={args:{sql:D,href:`/explore`,prefixText:`Explore`,suffixText:`files`},loaders:[()=>_({sql:D},O(1234567))],parameters:{msw:{handlers:m(void 0,E)}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    sql: MOCK_SQL,
    href: '/explore',
    prefixText: 'Explore',
    suffixText: 'files'
  },
  loaders: [() => registerTableQueryResult({
    sql: MOCK_SQL
  }, createMockQueryResult(42))],
  parameters: {
    msw: {
      handlers: getHandlersForTableQuery(undefined, TABLE_ID)
    }
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    sql: MOCK_SQL,
    href: '/explore',
    suffixText: 'items available'
  },
  loaders: [() => registerTableQueryResult({
    sql: MOCK_SQL
  }, createMockQueryResult(42))],
  parameters: {
    msw: {
      handlers: getHandlersForTableQuery(undefined, TABLE_ID)
    }
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    sql: MOCK_SQL,
    href: '/explore',
    prefixText: 'View'
  },
  loaders: [() => registerTableQueryResult({
    sql: MOCK_SQL
  }, createMockQueryResult(42))],
  parameters: {
    msw: {
      handlers: getHandlersForTableQuery(undefined, TABLE_ID)
    }
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    sql: MOCK_SQL,
    href: '/explore'
  },
  loaders: [() => registerTableQueryResult({
    sql: MOCK_SQL
  }, createMockQueryResult(42))],
  parameters: {
    msw: {
      handlers: getHandlersForTableQuery(undefined, TABLE_ID)
    }
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    sql: MOCK_SQL,
    href: '/explore',
    prefixText: 'Explore',
    suffixText: 'datasets',
    variant: 'outlined'
  },
  loaders: [() => registerTableQueryResult({
    sql: MOCK_SQL
  }, createMockQueryResult(42))],
  parameters: {
    msw: {
      handlers: getHandlersForTableQuery(undefined, TABLE_ID)
    }
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    sql: MOCK_SQL,
    href: '/explore',
    prefixText: 'Explore',
    suffixText: 'files'
  },
  loaders: [() => registerTableQueryResult({
    sql: MOCK_SQL
  }, createMockQueryResult(1234567))],
  parameters: {
    msw: {
      handlers: getHandlersForTableQuery(undefined, TABLE_ID)
    }
  }
}`,...P.parameters?.docs?.source}}},F=[`Default`,`WithoutPrefixText`,`WithoutSuffixText`,`CountOnly`,`WithVariant`,`LargeCount`]}))();export{M as CountOnly,k as Default,P as LargeCount,N as WithVariant,A as WithoutPrefixText,j as WithoutSuffixText,F as __namedExportsOrder,T as default};