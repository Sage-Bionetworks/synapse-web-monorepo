import{U as L}from"./UpsetPlot-DZBdRmRP.js";import{f as u}from"./index-KmlNy5Hl.js";import"./jsx-runtime-t7nzLwR6.js";import"./index-cFSMVzyl.js";import"./iframe-DKD27Aac.js";import"./LargeButton-eRphbSQk.js";import"./DefaultPropsProvider-BUqR-A8n.js";import"./createTheme-BR5rdewz.js";import"./Button-cG6J_qke.js";import"./ButtonBase-DAHKIKHs.js";import"./useTimeout-Bc3Gkepm.js";import"./TransitionGroupContext-CKv4C-Ss.js";import"./useForkRef-BNzkLrh_.js";import"./useIsFocusVisible-D0xbJsl_.js";import"./useEventCallback-C85vUDBQ.js";import"./useFiles-Chac2RhS.js";import"./VerificationSubmission-DeH3Sb8D.js";import"./SynapseConstants-CaV0aczn.js";import"./OrientationBanner-CifHGxH6.js";import"./index-CJHekc_g.js";import"./spreadSx-CwcO6WA9.js";import"./react-OHL4fBky.js";import"./FullWidthAlert-sMrqvYnE.js";import"./Alert-D6XYsjCG.js";import"./resolveComponentProps-CYx1wNx9.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-CopB8Zvr.js";import"./Close-Dzp-VmMJ.js";import"./IconButton-BnC2txGx.js";import"./Paper-D7sTNj9_.js";import"./Stack-q5ZhcqOi.js";import"./getThemeProps-DVXcGSou.js";import"./useTheme-CFHXXkX7.js";import"./Box-DotcFFrl.js";import"./AlertTitle-KdJRXupe.js";import"./Typography-BCNKC2CY.js";import"./useTheme-BxJ7UB_H.js";import"./Grow-C-JXdThM.js";import"./index-CijgDh8G.js";import"./index-Cm204n_1.js";import"./utils-DPdtmkgT.js";import"./ClickAwayListener-ClTYn5DI.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DEo0wzG2.js";import"./index-BMYz7LsA.js";import"./useControlled-Bndl0fHX.js";import"./useId-C8qhAs8K.js";import"./Popper-Bo9vPwbV.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DnD65nWI.js";import"./useQuery-BexgRkXn.js";import"./utils-blHiKMBb.js";import"./Link-C0DicHDj.js";import"./Collapse-CnIdpWtH.js";import"./isNil-DXPfN7iZ.js";import"./_Uint8Array-BwS4hwgo.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CIljAEIO.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-BCshueuy.js";import"./_getTag-BsOLditL.js";import"./tinycolor-Begke6kS.js";import"./Fade-Cq1nCkoD.js";import"./Skeleton-DwACn00x.js";import"./inputBaseClasses-CNGHxOqR.js";import"./calculateFriendlyFileSize-CKIdmAEX.js";import"./CheckCircleTwoTone-D87QIBtx.js";import"./InfoTwoTone-Bqi97e1S.js";import"./useMutation-DSaHpUt5.js";import"./isEqual-Bw_JKzqf.js";import"./dayjs.min-DIt2UEU-.js";import"./chunk-AYJ5UCUI-DQUP4H-R.js";import"./cloneDeep-BnG_5coh.js";import"./_initCloneObject-CUf0bY0V.js";import"./merge-D2TlrVsP.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DMQpCQSh.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Cc3770Ta.js";import"./Backdrop-d9_LJrp6.js";import"./LinearProgress-BvIiFfqg.js";import"./index-BLEWvYga.js";import"./index-xjSl8PDV.js";import"./index-67uRLbr9.js";import"./const-Doag8klc.js";import"./index-DJxj_TVN.js";const Xt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
