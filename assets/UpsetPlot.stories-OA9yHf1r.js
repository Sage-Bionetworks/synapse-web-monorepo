import{U as d}from"./UpsetPlot-DxMN6oLd.js";import"./jsx-runtime-Du8NFWEI.js";import"./index-Dl6G-zuu.js";import"./lz-string-BoOPuQ6n.js";import"./SynapseClient-Ihq4xrvb.js";import"./index-S3N2_v0E.js";import"./SynapseConstants-BVYQRCsB.js";import"./OrientationBanner-BV5RFxzC.js";import"./FullWidthAlert-xeBFwHL5.js";import"./Alert-HJYNNEvY.js";import"./createTheme-CwlmBDro.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./index-DMoHWj5j.js";import"./styled-OgyJf9MH.js";import"./mergeSlotProps-DHTQkAbv.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CEBgoE3Z.js";import"./createSvgIcon-BYNyJbGL.js";import"./Paper-BWoP1bRz.js";import"./IconButton-CgTC7RgJ.js";import"./ButtonBase-5SeL_6IU.js";import"./TransitionGroupContext-DGN18uA0.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./useIsFocusVisible-DHYsnH_Q.js";import"./Stack-CkbmjR2j.js";import"./Box-DRdN2jdb.js";import"./AlertTitle-DKiwjjrh.js";import"./Typography-B88_J_TK.js";import"./utils-C1pLSGi5.js";import"./index-D1_ZHIBm.js";import"./Grow-DYov3NPi.js";import"./ClickAwayListener-BnMSRy2k.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CYVQ1vhC.js";import"./index-aEXBT5Ni.js";import"./Button-mb55Lwfk.js";import"./getEndpoint-CjoHA800.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-sybcF8uh.js";import"./CheckCircleTwoTone-h9GSy5KG.js";import"./colorManipulator-CXx1BTzE.js";import"./inputBaseClasses-DUreQxsm.js";import"./Fade-BNGotgqy.js";import"./dayjs.min-d18Up55D.js";import"./index-BfyspvgH.js";import"./tiny-invariant-CopsF_GD.js";import"./Link-EkQ0dGSu.js";import"./_getTag-B6zWmB6G.js";import"./_Map-W_LbVzGG.js";import"./isArray-D3Xc0Edl.js";import"./StringUtils-D4kDWP8q.js";import"./SqlFunctions-XONJfa6m.js";import"./RegularExpressions-D_Bl7pBr.js";import"./react-sizeme-D2xKhURL.js";import"./ColorGradient-BJYx2bEb.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Cp1NTgGu.js";import"./Backdrop-BtqnMcmK.js";import"./LinearProgress-CvefknrU.js";import"./LargeButton-DoFTO_gz.js";const Fe={title:"Home Page/UpsetPlot",component:d},e={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:o=>{const l={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...o.sets.values()].map(u=>u.name)}]},c=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(l)}`;console.log(c)}}},t={args:{sql:"SELECT files, assay FROM syn51581771",rgbIndex:0,maxBarCount:20,setName:"# Files per data type",combinationName:"# Files",onClick:(o,s)=>{console.log("onClick() has been called with this selection and event",o,s)}}};var i,r,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)',
    rgbIndex: 0,
    maxBarCount: 20,
    setName: 'Individuals (#) per Assay',
    combinationName: 'Individuals (#)',
    summaryLink: '#',
    summaryLinkText: 'Explore All Of Something',
    onClick: selection => {
      const sets = (selection as any).sets;
      const query: Query = {
        sql: 'select * from syn12345',
        // stub files sql
        selectedFacets: [{
          concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
          columnName: 'Assays',
          facetValues: ([...sets.values()].map((v: any) => v.name) as string[])
        }]
      };
      const url = \`/Explore/Data%20by%20Files?QueryWrapper0=\${JSON.stringify(query)}\`;
      console.log(url);
    }
  }
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT files, assay FROM syn51581771',
    rgbIndex: 0,
    maxBarCount: 20,
    setName: '# Files per data type',
    combinationName: '# Files',
    onClick: (selection, event) => {
      console.log('onClick() has been called with this selection and event', selection, event);
    }
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ie=["Demo","ElitePortalDemo"];export{e as Demo,t as ElitePortalDemo,Ie as __namedExportsOrder,Fe as default};
