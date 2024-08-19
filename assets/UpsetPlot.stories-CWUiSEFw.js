import{U as d}from"./UpsetPlot-CIh72r4T.js";import"./jsx-runtime-Du8NFWEI.js";import"./index-Dl6G-zuu.js";import"./lz-string-BoOPuQ6n.js";import"./SynapseClient-DE-JFn_p.js";import"./OrientationBanner-D9iiRUAg.js";import"./FullWidthAlert-Q7pb-Dsc.js";import"./Alert-Aa0bm5Nm.js";import"./createTheme-DFSTUSmt.js";import"./index-GEGPABih.js";import"./styled-D9wW3ABP.js";import"./mergeSlotProps-deWJORir.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CEBgoE3Z.js";import"./createSvgIcon-gkOuU5-G.js";import"./Paper-6hBhi2Vr.js";import"./IconButton-CLoAcDX9.js";import"./ButtonBase-BgDXtZj-.js";import"./TransitionGroupContext-B611AcNu.js";import"./useIsFocusVisible-Cwvw9TRl.js";import"./Stack-D3AEdRlD.js";import"./Box-DRYT9rh3.js";import"./AlertTitle-DKLb405u.js";import"./Typography-DgBbIcOX.js";import"./utils-Bdp_oNP4.js";import"./index-B6qzg4VC.js";import"./Grow-lFU1cKdF.js";import"./ClickAwayListener-5odGQiyi.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-Drr3vXNI.js";import"./index-hJhP8EJR.js";import"./Button-CLkrjdQe.js";import"./index-DjsgxyLG.js";import"./SynapseConstants-D3KdaG9T.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-BOGoGeNw.js";import"./CheckCircleTwoTone-U_UPMvHV.js";import"./colorManipulator-2ZEM0eRC.js";import"./inputBaseClasses-ZfVcQiUT.js";import"./Fade-Bhxuafx5.js";import"./EntityTypeUtils-Dx3hzu5j.js";import"./getEndpoint-CjoHA800.js";import"./dayjs.min-d18Up55D.js";import"./index-BfyspvgH.js";import"./tiny-invariant-CopsF_GD.js";import"./Link-Cl5bQMMR.js";import"./_getTag-BK1szWWC.js";import"./_Map-CWVOAJuy.js";import"./isArray-ggc3KxVp.js";import"./StringUtils-D4kDWP8q.js";import"./SqlFunctions-Cbl4YzsF.js";import"./RegularExpressions-C-jKz12Z.js";import"./react-sizeme-BFvsEiDW.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CINnrS9w.js";import"./Backdrop-Cf-zGjSh.js";import"./LinearProgress-CT4xaOaH.js";import"./LargeButton-Bu1pr2ov.js";const xe={title:"Home Page/UpsetPlot",component:d},e={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:o=>{const p={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...o.sets.values()].map(u=>u.name)}]},c=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(p)}`;console.log(c)}}},t={args:{sql:"SELECT files, assay FROM syn51581771",rgbIndex:0,maxBarCount:20,setName:"# Files per data type",combinationName:"# Files",onClick:(o,s)=>{console.log("onClick() has been called with this selection and event",o,s)}}};var i,r,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};var a,m,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const Ce=["Demo","ElitePortalDemo"];export{e as Demo,t as ElitePortalDemo,Ce as __namedExportsOrder,xe as default};
