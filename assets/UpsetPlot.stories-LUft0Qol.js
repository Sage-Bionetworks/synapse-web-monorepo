import{U as L}from"./UpsetPlot-B-0Sjtyo.js";import{f as u}from"./index-CJ89ZlxW.js";import"./jsx-runtime-v-CcEzRb.js";import"./index-DF-TOXwj.js";import"./iframe-Ck7IJ420.js";import"./LargeButton-D3N6Emjr.js";import"./DefaultPropsProvider-CLNAjcgO.js";import"./createTheme-CKxaABez.js";import"./Button-GBwXY7dn.js";import"./ButtonBase-D1FCadF9.js";import"./useTimeout-DSwRVM_E.js";import"./TransitionGroupContext-CqGhktck.js";import"./useForkRef-HrLZAw1Q.js";import"./useIsFocusVisible-ClFSTf5X.js";import"./useEventCallback-Dqg8r-2E.js";import"./useFiles-Dg22cr_p.js";import"./VerificationSubmission-DeH3Sb8D.js";import"./SynapseConstants-BL46kxFd.js";import"./OrientationBanner-DaBQ1wQC.js";import"./index-BhZra2zu.js";import"./spreadSx-CwcO6WA9.js";import"./react-DY4l1kQF.js";import"./FullWidthAlert-B7z3Zpcy.js";import"./Alert-CGNd2cjt.js";import"./resolveComponentProps-Dbo3c2Rm.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-DLcyUkBI.js";import"./Close-DESapESh.js";import"./IconButton-Czp9fOJS.js";import"./Paper-CxulbT0O.js";import"./Stack-C-5_NicX.js";import"./getThemeProps-Cz1tfoEg.js";import"./useTheme-Cw717heW.js";import"./Box-C151VSyT.js";import"./AlertTitle-CDDM5S7t.js";import"./Typography-Dv8d3d0K.js";import"./useTheme-CXQbBQv0.js";import"./Grow-DA-uXJ7J.js";import"./index-DLrHSQNQ.js";import"./index-BrGjyCPj.js";import"./utils-C_Khsrsh.js";import"./ClickAwayListener-BkV76s-w.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BGEWhPhD.js";import"./index-CdC_zZ47.js";import"./useControlled-Du8O03uu.js";import"./useId-C-ekwKxL.js";import"./Popper-DrxS9Kfi.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DnD65nWI.js";import"./useQuery-cmgOgxs2.js";import"./utils-D3V1hKlA.js";import"./Link-Ck5KtLZ5.js";import"./Collapse-DWBJ_Cvl.js";import"./isNil-DFyqHzIg.js";import"./_Uint8Array-Du7czIyf.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-KhxvdvDF.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-Dx1pfhTR.js";import"./_getTag-D6cd-bWi.js";import"./tinycolor-Begke6kS.js";import"./Fade-BLBjHFS9.js";import"./Skeleton-Cfx67XJi.js";import"./inputBaseClasses-B_9PRdoJ.js";import"./calculateFriendlyFileSize-D9eWZJY0.js";import"./CheckCircleTwoTone-CiPdEZmI.js";import"./InfoTwoTone-GTYfYWDz.js";import"./useMutation-B9X43rdd.js";import"./isEqual-9ljHnP7Y.js";import"./dayjs.min-BolHz43I.js";import"./chunk-AYJ5UCUI-CKomAHZY.js";import"./cloneDeep-CLjt8ka6.js";import"./_initCloneObject-CnDAhYwq.js";import"./merge-BZOFHhHs.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DMQpCQSh.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-qw5S2H8E.js";import"./Backdrop-sUPWTmHp.js";import"./LinearProgress-Cc28IbrV.js";import"./index-vUz4E1Qj.js";import"./index-D28oM5Dw.js";import"./index-SkBok1aW.js";import"./const-Doag8klc.js";import"./index-Be8X9NSM.js";const Xt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
          facetValues: [...sets.values()].map((v: any) => v.name) as string[]
        }]
      };
      const url = \`/Explore/Data%20by%20Files?QueryWrapper0=\${JSON.stringify(query)}\`;
      console.log(url);
    }
  }
}`,...(a=(e=t.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};var s,n,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL',
    rgbIndex: 0,
    maxBarCount: 10,
    setName: 'Set size',
    combinationName: 'Intersection size',
    onClick: fn()
  }
}`,...(m=(n=o.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var p,l,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL',
    maxBarCount: 10,
    setName: 'Set size',
    combinationName: 'Intersection size',
    variant: 'ampals',
    onClick: fn()
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Zt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,Zt as __namedExportsOrder,Xt as default};
