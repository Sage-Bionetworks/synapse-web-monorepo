import{U as d}from"./UpsetPlot-BCSfbJ-n.js";import"./jsx-runtime-DoxjgJx5.js";import"./index-Cu9bd8lq.js";import"./lz-string-D345GCHL.js";import"./useFiles-IgffOyoL.js";import"./useQuery-BEUP4ZKU.js";import"./utils-BECe8vEQ.js";import"./OrientationBanner-CtCcd4b5.js";import"./FullWidthAlert-CME48zOF.js";import"./Alert-B_MCCiJI.js";import"./createTheme-BJ_1npSs.js";import"./index-GEGPABih.js";import"./styled-D9q5EqxT.js";import"./mergeSlotProps-CPIGGwa7.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-Bm_QQ74L.js";import"./createSvgIcon-WkAWHJz7.js";import"./Paper-B-RKd0p3.js";import"./IconButton-CLlNv19f.js";import"./ButtonBase-BH4d2aSg.js";import"./TransitionGroupContext-C4KIfRep.js";import"./useIsFocusVisible-Lp1_y5xp.js";import"./Stack-ERnuki-b.js";import"./Box-BXEUN41W.js";import"./AlertTitle-BMewjDNd.js";import"./Typography-BmBIKDjf.js";import"./utils-Dbx_liB_.js";import"./index-BlO3JfGB.js";import"./Grow-DXf4-ciu.js";import"./ClickAwayListener-Ba-YFlDA.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DkphrB3H.js";import"./index-BBhqBz5p.js";import"./useControlled-JEQ1v-P8.js";import"./useId-g68bhPgm.js";import"./Button-BfexmcsD.js";import"./index-BNbykmw2.js";import"./SynapseConstants-CHG9bpgq.js";import"./RegularExpressions-B4RNwTAQ.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-UBO-Myga.js";import"./CheckCircleTwoTone-4o0y_0yc.js";import"./Skeleton-Bkch6hEL.js";import"./inputBaseClasses-i-NnmgRC.js";import"./Fade-DsJosqMx.js";import"./Link-D8sP8KOh.js";import"./cloneDeep-B67xjGGL.js";import"./_initCloneObject-CKdTzPLh.js";import"./_baseTimes-36S_kd0L.js";import"./isArray-ggc3KxVp.js";import"./StringUtils-lZs4Nsmk.js";import"./dayjs.min-D1RcYm3-.js";import"./index-SDyqs4cU.js";import"./tiny-invariant-CopsF_GD.js";import"./merge-CCcBxO6N.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-C8Jmet2C.js";import"./react-sizeme-CSOwE_ZL.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-C7dbrVc-.js";import"./Backdrop-Cy71n5DS.js";import"./LinearProgress-hMFQ5X94.js";import"./LargeButton-Ppu318hP.js";const ke={title:"Home Page/UpsetPlot",component:d},e={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:o=>{const l={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...o.sets.values()].map(u=>u.name)}]},c=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(l)}`;console.log(c)}}},t={args:{sql:"SELECT files, assay FROM syn51581771",rgbIndex:0,maxBarCount:20,setName:"# Files per data type",combinationName:"# Files",onClick:(o,s)=>{console.log("onClick() has been called with this selection and event",o,s)}}};var i,r,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const qe=["Demo","ElitePortalDemo"];export{e as Demo,t as ElitePortalDemo,qe as __namedExportsOrder,ke as default};
