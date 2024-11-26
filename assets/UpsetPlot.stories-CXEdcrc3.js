import{U as d}from"./UpsetPlot-Cs8K-z4o.js";import"./jsx-runtime-DoxjgJx5.js";import"./index-Cu9bd8lq.js";import"./lz-string-D345GCHL.js";import"./useFiles-DYv-TsLD.js";import"./useQuery-BEUP4ZKU.js";import"./utils-BECe8vEQ.js";import"./OrientationBanner-CW2K3-RQ.js";import"./FullWidthAlert-L3bJILOo.js";import"./Alert-DOXScrWE.js";import"./createTheme-BDTvfUpa.js";import"./index-GEGPABih.js";import"./extends-CF3RwP-h.js";import"./styled-DuixqW8V.js";import"./mergeSlotProps-BRYxW-OX.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-Bm_QQ74L.js";import"./createSvgIcon-L3-Z4vl2.js";import"./Paper-GgpZwKOl.js";import"./IconButton-G5owOEKj.js";import"./ButtonBase-CIP26XmV.js";import"./TransitionGroupContext-C4KIfRep.js";import"./useIsFocusVisible-Lp1_y5xp.js";import"./Stack-BRvuPf6D.js";import"./Box-Bma8Ps0t.js";import"./AlertTitle--w70ZYZx.js";import"./Typography-Jzf0ov00.js";import"./utils-BfTmAAcW.js";import"./index-zcEXKDIA.js";import"./Grow-BlYLCNLi.js";import"./ClickAwayListener-Ba-YFlDA.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-Cao-5103.js";import"./index-Ch2PWkM5.js";import"./useControlled-JEQ1v-P8.js";import"./useId-g68bhPgm.js";import"./Button-DCzP6lNj.js";import"./VerificationSubmission-DL9jxYsQ.js";import"./SynapseConstants-03FNPEMB.js";import"./RegularExpressions-CmcMRs19.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-C3QaTlDw.js";import"./CheckCircleTwoTone-Ctfh99h-.js";import"./calculateFriendlyFileSize-BNaAOc5m.js";import"./Skeleton-DaHZPytj.js";import"./inputBaseClasses-3kXRnYVz.js";import"./Fade-YgxkoC1K.js";import"./Link-CNcyCMpI.js";import"./cloneDeep-BifXcKf5.js";import"./_initCloneObject-CKdTzPLh.js";import"./_baseTimes-36S_kd0L.js";import"./isArray-ggc3KxVp.js";import"./StringUtils-DvLBLCla.js";import"./dayjs.min-D1RcYm3-.js";import"./merge-CCcBxO6N.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-BnNaO_kX.js";import"./react-sizeme-Vw-aaS2E.js";import"./colorPalette-BSrfa2_g.js";import"./LoadingScreen-DHkC6j6Z.js";import"./Backdrop-Dc0v9wgL.js";import"./LinearProgress-DvMiOAtm.js";import"./LargeButton-B_TzE9Hg.js";const fe={title:"Home Page/UpsetPlot",component:d},e={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:o=>{const l={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...o.sets.values()].map(u=>u.name)}]},c=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(l)}`;console.log(c)}}},t={args:{sql:"SELECT files, assay FROM syn51581771",rgbIndex:0,maxBarCount:20,setName:"# Files per data type",combinationName:"# Files",onClick:(o,s)=>{console.log("onClick() has been called with this selection and event",o,s)}}};var i,r,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ke=["Demo","ElitePortalDemo"];export{e as Demo,t as ElitePortalDemo,ke as __namedExportsOrder,fe as default};
