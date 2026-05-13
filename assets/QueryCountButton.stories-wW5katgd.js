import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ao as n,Bo as r,Fc as i,HS as a,Mi as o,N_ as s,Nc as c,Ru as l,Uv as u,Vb as d,Wb as f,XS as p,_ as m,b as h,ki as g,ko as _,su as v,v as y,y as b}from"./iframe-SO-uJ0YA.js";function x(e){let{sql:t,href:a,prefixText:s=``,suffixText:c=``,...u}=e,p=i(t),m=r(),{data:h,isLoading:g}=o({concreteType:`org.sagebionetworks.repo.model.table.QueryBundleRequest`,query:{sql:t},entityId:p,partMask:2}),_=h?.queryCount,v=a?.startsWith(`http://`)||a?.startsWith(`https://`),y={};y=v?{href:a,target:`_blank`,rel:`noopener noreferrer`,component:`a`}:m?{to:a,component:n}:{href:a,component:`a`};let b=S.useMemo(()=>{let e=[];return s&&e.push(s),!g&&_!==void 0&&e.push(_.toLocaleString()),c&&e.push(c),e.join(` `)},[s,_,c,g]),x=(0,C.jsx)(f,{sx:{display:`flex`,alignItems:`center`,justifyContent:`center`,backgroundColor:`background.paper`,borderRadius:`50%`,width:24,height:24},children:(0,C.jsx)(l,{sx:{color:`primary.main`,fontSize:20}})});return(0,C.jsx)(d,{...u,...y,endIcon:x,loading:g,children:b})}var S,C,w=e((()=>{g(),s(),c(),u(),v(),S=t(p(),1),_(),C=a();try{x.displayName=`QueryCountButton`,x.__docgenInfo={description:`A button component that displays text with an inline count.
The count is fetched by executing a SQL query against a Synapse table.
Example: "Explore 42 files"`,displayName:`QueryCountButton`,filePath:`/home/runner/work/synapse-web-monorepo/synapse-web-monorepo/packages/synapse-react-client/src/components/QueryCountButton/QueryCountButton.tsx`,methods:[],props:{sql:{defaultValue:null,declarations:[{fileName:`synapse-react-client/src/components/QueryCountButton/QueryCountButton.tsx`,name:`TypeLiteral`}],description:`The SQL query to execute to get the count`,name:`sql`,required:!0,tags:{},type:{name:`string`}},href:{defaultValue:null,declarations:[{fileName:`synapse-react-client/src/components/QueryCountButton/QueryCountButton.tsx`,name:`TypeLiteral`},{fileName:`synapse-web-monorepo/node_modules/.pnpm/@mui+material@7.1.1_@emotion+react@11.14.0_@types+react@19.2.14_react@19.2.5__@emotion+_9381e606d23932360455bd91b363813f/node_modules/@mui/material/Button/Button.d.ts`,name:`ButtonOwnProps`}],description:`The target URL when the button is clicked
The URL to link to when the button is clicked.
If defined, an \`a\` element will be used as the root node.`,name:`href`,required:!1,tags:{},type:{name:`string`}},prefixText:{defaultValue:null,declarations:[{fileName:`synapse-react-client/src/components/QueryCountButton/QueryCountButton.tsx`,name:`TypeLiteral`}],description:`Text to display before the count (e.g., "Explore")`,name:`prefixText`,required:!1,tags:{},type:{name:`string`}},suffixText:{defaultValue:null,declarations:[{fileName:`synapse-react-client/src/components/QueryCountButton/QueryCountButton.tsx`,name:`TypeLiteral`}],description:`Text to display after the count (e.g., "files")`,name:`suffixText`,required:!1,tags:{},type:{name:`string`}},component:{defaultValue:null,declarations:[{fileName:`synapse-web-monorepo/node_modules/.pnpm/@mui+material@7.1.1_@emotion+react@11.14.0_@types+react@19.2.14_react@19.2.5__@emotion+_9381e606d23932360455bd91b363813f/node_modules/@mui/material/Button/Button.d.ts`,name:`TypeLiteral`}],description:``,name:`component`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}}},tags:{}}}catch{}})),T,E,D,O,k,A,j,M,N,P,F;e((()=>{w(),y(),b(),T={title:`UI/QueryCountButton`,component:x,parameters:{stack:`mock`}},E=`syn12345678`,D=`SELECT * FROM ${E}`,O=e=>({concreteType:`org.sagebionetworks.repo.model.table.QueryResultBundle`,queryCount:e,queryResult:{concreteType:`org.sagebionetworks.repo.model.table.QueryResult`,queryResults:{concreteType:`org.sagebionetworks.repo.model.table.RowSet`,tableId:E,etag:`etag`,headers:[],rows:[]}}}),k={args:{sql:D,href:`/explore`,prefixText:`Explore`,suffixText:`files`},loaders:[()=>h({sql:D},O(42))],parameters:{msw:{handlers:m(void 0,E)}}},A={args:{sql:D,href:`/explore`,suffixText:`items available`},loaders:[()=>h({sql:D},O(42))],parameters:{msw:{handlers:m(void 0,E)}}},j={args:{sql:D,href:`/explore`,prefixText:`View`},loaders:[()=>h({sql:D},O(42))],parameters:{msw:{handlers:m(void 0,E)}}},M={args:{sql:D,href:`/explore`},loaders:[()=>h({sql:D},O(42))],parameters:{msw:{handlers:m(void 0,E)}}},N={args:{sql:D,href:`/explore`,prefixText:`Explore`,suffixText:`datasets`,variant:`outlined`},loaders:[()=>h({sql:D},O(42))],parameters:{msw:{handlers:m(void 0,E)}}},P={args:{sql:D,href:`/explore`,prefixText:`Explore`,suffixText:`files`},loaders:[()=>h({sql:D},O(1234567))],parameters:{msw:{handlers:m(void 0,E)}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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