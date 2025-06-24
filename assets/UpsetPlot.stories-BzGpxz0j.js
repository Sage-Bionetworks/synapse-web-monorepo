import{U as L}from"./UpsetPlot-B0vVFXfi.js";import{f as u}from"./index-Y3FyikYE.js";import"./jsx-runtime-CZ-P0Vjv.js";import"./index-C4Fi1pAs.js";import"./iframe-Koc7BFGs.js";import"./LargeButton-BudQdGVg.js";import"./DefaultPropsProvider-OcgzDlh7.js";import"./createTheme-Pfm42aaM.js";import"./Button-CDdf0vOZ.js";import"./createSimplePaletteValueFilter-DGPSZqjl.js";import"./useTimeout-C9iOfSED.js";import"./ButtonBase-xVyG4oXo.js";import"./useForkRef-C-1ViZON.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-pnY37-5c.js";import"./useFiles-vBmvy1ft.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-dSGc59R9.js";import"./OrientationBanner-cB4es885.js";import"./index-Ckb68Z0P.js";import"./spreadSx-CwcO6WA9.js";import"./react-Dsci1Yfs.js";import"./FullWidthAlert-B28dz7bv.js";import"./Alert-DT0y7Huo.js";import"./useSlot-CpoW8DzU.js";import"./createSvgIcon-DNx6f_Fe.js";import"./Close-BdQ8c5bL.js";import"./IconButton-DXhED_gi.js";import"./Paper-BWbRaQ_u.js";import"./useTheme-Dz2vRP3-.js";import"./useTheme-n--CwuBn.js";import"./Stack-CyzEoByu.js";import"./extendSxProp-D9LHU2Zk.js";import"./getThemeProps-VTW_6ELV.js";import"./Box-n44yzzBn.js";import"./AlertTitle-aQu6mHLO.js";import"./Typography-DGvGyeZV.js";import"./index-DoTrjxQ-.js";import"./ClickAwayListener-BJe4E2J3.js";import"./getReactElementRef-CuHV4Mzs.js";import"./index-_lJiG1XM.js";import"./index-BdlcXU9Q.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Dgm9McM3.js";import"./Tooltip-BMVGmNhW.js";import"./index-CCKAUiEv.js";import"./useControlled-CCoPgmrJ.js";import"./Popper-pvLZE-n8.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bdqa-HwM.js";import"./useQuery-ijGxTtYu.js";import"./utils-C0Oop7FQ.js";import"./Link-B3vwTO54.js";import"./Collapse-B3Qrznse.js";import"./_baseUniq-CuOqpNrs.js";import"./_Uint8Array-BIpPbEf-.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BC62RGFU.js";import"./isArray-Dxzbedgu.js";import"./_getTag-Bi5T7cOI.js";import"./isEqual-cSw6jV_8.js";import"./merge-CWKsu3Bx.js";import"./_initCloneObject-BOHxA6hK.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DCmrao4r.js";import"./inputBaseClasses-Rtxrzi46.js";import"./calculateFriendlyFileSize-CWxmrkXY.js";import"./CheckCircleTwoTone-Clqxfo1a.js";import"./InfoTwoTone-rEsoljy-.js";import"./useMutation-bKFnuzpB.js";import"./dayjs.min-CC1L6vxl.js";import"./chunk-AYJ5UCUI-ueBj9L5G.js";import"./cloneDeep-Bk1WlZC-.js";import"./Skeleton-DvLxauL3.js";import"./SqlFunctions-DPgti-mT.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-B9TNaEVa.js";import"./Backdrop-CpcT1Aac.js";import"./LinearProgress-BTtvJ9Rq.js";import"./index-Bq4gMmK3.js";import"./index-D0bE5LSB.js";import"./index-DUDKV-Me.js";import"./const-Doag8klc.js";import"./index--zmJcsFx.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
