import{U as L}from"./UpsetPlot-CquK81VZ.js";import{f as u}from"./index-z8r9MBXe.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CF0LrXoQ.js";import"./DefaultPropsProvider-DkJRQOmc.js";import"./createTheme-Bg0JnvG-.js";import"./index-BTX2eULV.js";import"./iframe-CVMtvJ31.js";import"./Button-B7-P1hWd.js";import"./createSimplePaletteValueFilter-B_zFUBoe.js";import"./useTimeout-DyBAzNlF.js";import"./ButtonBase-DKKQqZi5.js";import"./useForkRef-Bz6GVi3q.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BZ-3rWL4.js";import"./useFiles-CpIQf7bR.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-DCuj7v5A.js";import"./OrientationBanner-BhIo1itP.js";import"./index-D6sMuhjc.js";import"./spreadSx-CwcO6WA9.js";import"./react-jWqjiESD.js";import"./FullWidthAlert-DBESnlHJ.js";import"./Alert-B_Lb3ke9.js";import"./useSlot-DJ96S8JZ.js";import"./createSvgIcon-kaLa9Vb4.js";import"./Close-CNSmPYq1.js";import"./IconButton-mOjBei70.js";import"./Paper-BpMud_ox.js";import"./useTheme-D4cJ8PRi.js";import"./useTheme-C7YDFSZ_.js";import"./Stack-B07vM9bz.js";import"./useThemeProps-seSFSWsk.js";import"./getThemeProps-DkOrQpuL.js";import"./extendSxProp-DU89cOAM.js";import"./Box-ZnuoGFaU.js";import"./AlertTitle-CgDFnc1E.js";import"./Typography-DuRdq6Lg.js";import"./index-BIflH0jO.js";import"./ClickAwayListener-DegMn6iM.js";import"./getReactElementRef-CVLdZIi_.js";import"./index-DUzyVIzd.js";import"./index-B3i8jk0i.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BqVF91XP.js";import"./Tooltip-B4Kq9yHi.js";import"./index-iQpWDSyN.js";import"./useControlled-Sbp9FKKD.js";import"./Popper-CX1lmSaJ.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-BS_xL6BT.js";import"./QueryClientProvider-CNvDTIKR.js";import"./Link-BKm2vjdi.js";import"./Collapse-ByANM13v.js";import"./_baseUniq-CqcjZw0e.js";import"./_Uint8Array-Bs5hmJ22.js";import"./isArray-CKHxsLMS.js";import"./_getTag-kUTcptDD.js";import"./isEqual-BQVT-dYG.js";import"./noop-DX6rZLP_.js";import"./merge-BnOw64jq.js";import"./_initCloneObject-CdUFhJ45.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-rzidtFwW.js";import"./inputBaseClasses-DNGH4K0e.js";import"./calculateFriendlyFileSize-AZUrqDHi.js";import"./CheckCircleTwoTone-BOy-Ivpu.js";import"./InfoTwoTone-DZGvo72n.js";import"./useMutation-CqYbiywW.js";import"./dayjs.min-CzGsWT9o.js";import"./chunk-AYJ5UCUI-BJiwWrYx.js";import"./cloneDeep-ztC9flu2.js";import"./Skeleton-Clpsi09M.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CkJbnKon.js";import"./Backdrop-B9d5xTyO.js";import"./LinearProgress-5dwmjWG_.js";import"./index-mQeZu6di.js";import"./index-BAmm0iof.js";import"./index-DVzIBrK5.js";import"./const-BP60AzNb.js";import"./index-DiCN87hq.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Xt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,Xt as __namedExportsOrder,Kt as default};
