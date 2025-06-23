import{U as L}from"./UpsetPlot-DtdzA6ox.js";import{f as u}from"./index-y9OrkFGW.js";import"./jsx-runtime-pz7QQOmo.js";import"./index-BkKaf4Ho.js";import"./iframe-N1NjX4sZ.js";import"./LargeButton-C02U5V0Y.js";import"./DefaultPropsProvider-C6A-qVkx.js";import"./createTheme-DuUL91l1.js";import"./Button-Qd13FJKn.js";import"./createSimplePaletteValueFilter-CkIxcuNr.js";import"./useTimeout-BnD3DM9b.js";import"./ButtonBase-DWWY2pSR.js";import"./useForkRef-eaA_P2jt.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D_SqX67-.js";import"./useFiles-BWuLPj2y.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-DqbwpJte.js";import"./OrientationBanner-DLGwKdIZ.js";import"./index-3beyqzOm.js";import"./spreadSx-CwcO6WA9.js";import"./react-C3MJ79ut.js";import"./FullWidthAlert-FMrKqPy0.js";import"./Alert-DZ1-YJ5J.js";import"./useSlot-CseuYiCV.js";import"./createSvgIcon-CKu4rHpW.js";import"./Close-DeVmZdlb.js";import"./IconButton-jzK83RDC.js";import"./Paper-LNXwjcQq.js";import"./useTheme-BDljqhle.js";import"./useTheme-imrqGidV.js";import"./Stack-BBjhye3J.js";import"./extendSxProp-CHVZ7BAY.js";import"./getThemeProps-Co--yioZ.js";import"./Box-6XLjaT8E.js";import"./AlertTitle-DFP-OzT0.js";import"./Typography-BpEg9lnQ.js";import"./index-Dq4jw88k.js";import"./ClickAwayListener-B1qmSzfh.js";import"./getReactElementRef-D4-PQAOY.js";import"./index-BgycnQqH.js";import"./index-BP3TMka1.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D5vDP2u6.js";import"./Tooltip-WBrotzIj.js";import"./index-ClAHp6dc.js";import"./useControlled-DTMPcRAW.js";import"./Popper-CkYnXUnB.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bdqa-HwM.js";import"./useQuery-RMpGeomP.js";import"./utils-BWibdo-S.js";import"./Link-xhuw0OcQ.js";import"./Collapse-B1KAEHuI.js";import"./_baseUniq-BLvPIbux.js";import"./_Uint8Array-7x4Mh3s-.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BuDkcWZ-.js";import"./isArray-Dxzbedgu.js";import"./_getTag-DxNqHPDO.js";import"./isEqual-G1MPuDt_.js";import"./merge-CQYn9gHb.js";import"./_initCloneObject-y7vXpgAY.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-wXtwH8d6.js";import"./inputBaseClasses-BeK6_XdW.js";import"./calculateFriendlyFileSize-BXRB4AoI.js";import"./CheckCircleTwoTone-C1MTqsoH.js";import"./InfoTwoTone-HVwsLyYe.js";import"./useMutation-D2BXtkSL.js";import"./dayjs.min-Z4mswLOl.js";import"./chunk-AYJ5UCUI-DhqXvRZD.js";import"./cloneDeep-DFx8R1y8.js";import"./Skeleton-BYFliYg3.js";import"./SqlFunctions-DPgti-mT.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CRCzuAqQ.js";import"./Backdrop-DPNhB6De.js";import"./LinearProgress-BJ_yftNy.js";import"./index-D9q-vUvi.js";import"./index-CrX21ont.js";import"./index-530-7xe7.js";import"./const-Doag8klc.js";import"./index-BqO5-grX.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
