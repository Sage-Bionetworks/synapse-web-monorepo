import{U as d}from"./UpsetPlot-DrXg0aGH.js";import"./jsx-runtime-DoxjgJx5.js";import"./index-Cu9bd8lq.js";import"./lz-string-D345GCHL.js";import"./SynapseClient-BrqMkGUT.js";import"./OrientationBanner-Ct6IgTPI.js";import"./FullWidthAlert-CpohRhD9.js";import"./Alert-DevAguyB.js";import"./createTheme-CFwAOJQC.js";import"./index-GEGPABih.js";import"./styled-uoyYAB-L.js";import"./mergeSlotProps-bXd1ns9H.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-Bm_QQ74L.js";import"./createSvgIcon--fcRVpp9.js";import"./Paper-C3XTRciO.js";import"./IconButton-rjGZl5Ij.js";import"./ButtonBase-CwAnxZmp.js";import"./TransitionGroupContext-C4KIfRep.js";import"./useIsFocusVisible-Lp1_y5xp.js";import"./Stack-BCUKu9qx.js";import"./Box-tOdEuW_y.js";import"./AlertTitle-F01TNSvq.js";import"./Typography-Ctk8_6Bo.js";import"./utils-Cz4ynwjU.js";import"./index-BlO3JfGB.js";import"./Grow-Dczl5MLz.js";import"./ClickAwayListener-Ba-YFlDA.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-Cr4lETRB.js";import"./index-_EfqdWAV.js";import"./useControlled-JEQ1v-P8.js";import"./useId-g68bhPgm.js";import"./Button-BkvFhVsL.js";import"./index-lW5bDacg.js";import"./SynapseConstants-DKOAl3NQ.js";import"./RegularExpressions-B4Jr_WQF.js";import"./useQuery-ChYzlhEH.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-C882d77b.js";import"./CheckCircleTwoTone-nCTn5zJK.js";import"./colorManipulator-CSxSE2hh.js";import"./inputBaseClasses-CcXvGEyU.js";import"./Fade-BXejYtqq.js";import"./dayjs.min-D1RcYm3-.js";import"./index-SDyqs4cU.js";import"./tiny-invariant-CopsF_GD.js";import"./Link-ceK_fu-q.js";import"./_getTag-CC1n5fj9.js";import"./_Map-BfIf8dAI.js";import"./isArray-ggc3KxVp.js";import"./isObject-C3e4t58V.js";import"./StringUtils-DWIjEO6C.js";import"./SqlFunctions-CuNSShAR.js";import"./react-sizeme-CSOwE_ZL.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DeBdHOeH.js";import"./Backdrop-C06rXI7r.js";import"./LinearProgress-CSbg8Hh5.js";import"./LargeButton-eXyOXBMo.js";const Fe={title:"Home Page/UpsetPlot",component:d},e={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:o=>{const l={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...o.sets.values()].map(u=>u.name)}]},c=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(l)}`;console.log(c)}}},t={args:{sql:"SELECT files, assay FROM syn51581771",rgbIndex:0,maxBarCount:20,setName:"# Files per data type",combinationName:"# Files",onClick:(o,s)=>{console.log("onClick() has been called with this selection and event",o,s)}}};var i,r,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
