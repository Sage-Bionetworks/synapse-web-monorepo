import{U as L}from"./UpsetPlot-Atbb7Bjj.js";import{f as u}from"./index-thNU1749.js";import"./jsx-runtime-D-SIz4dp.js";import"./index-BLuaxJdW.js";import"./iframe-CxrlH-UI.js";import"./LargeButton-BFKtiMXv.js";import"./DefaultPropsProvider-BRIp68wO.js";import"./createTheme-S8Q4mGOR.js";import"./Button-BMCKPFxv.js";import"./ButtonBase-Du0xZvK7.js";import"./useTimeout-BHizVNke.js";import"./TransitionGroupContext-CBfo3lPh.js";import"./useForkRef-BZmE9xQ1.js";import"./useIsFocusVisible-C9iDuxMa.js";import"./useEventCallback-7PrR0BNk.js";import"./useFiles-COZ3D8Pb.js";import"./VerificationSubmission-DeH3Sb8D.js";import"./SynapseConstants-D1CsS0Aw.js";import"./OrientationBanner-Bj2dzKdS.js";import"./index-CFpaM8Ff.js";import"./spreadSx-CwcO6WA9.js";import"./react-CHlwk2vY.js";import"./FullWidthAlert-Wy0jujek.js";import"./Alert-C4CDJvJg.js";import"./resolveComponentProps-C8zUe1-b.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-DzOZPvez.js";import"./Close--r-tDnVu.js";import"./IconButton-Dnf2admd.js";import"./Paper-CdNeJFNE.js";import"./Stack-BASWcXp5.js";import"./getThemeProps-BTboRhU5.js";import"./useTheme-DlmvRUoH.js";import"./Box-BOLLHwzU.js";import"./AlertTitle-CFar63C5.js";import"./Typography-CXTgn5CW.js";import"./useTheme-bwhPJ5ej.js";import"./Grow-BdkgkUoo.js";import"./index-BIBC-Xvs.js";import"./index-O_gqoASv.js";import"./utils-DcthfRLI.js";import"./ClickAwayListener-olWHxvjF.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CxJlSVKY.js";import"./index-B3MqhP5R.js";import"./useControlled-DnY_Lsz4.js";import"./useId-iggO9Yr1.js";import"./Popper-CNjlG3Og.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DnD65nWI.js";import"./useQuery-DfcEbLSx.js";import"./utils-C1AHUSnA.js";import"./Link-D2iDHteP.js";import"./Collapse-Ceenf30l.js";import"./isNil-CEqFAbnq.js";import"./_Uint8Array-BQwdA60x.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BA_OKhSB.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-YfFDVDRM.js";import"./_getTag-WASBG7Tx.js";import"./tinycolor-Begke6kS.js";import"./Fade-DdptOtF4.js";import"./Skeleton-B63x20rp.js";import"./inputBaseClasses-Cx4EW-PM.js";import"./calculateFriendlyFileSize-C_g4Kf21.js";import"./CheckCircleTwoTone-B4BK1dw-.js";import"./InfoTwoTone-D4SXfyiz.js";import"./useMutation-DBzjiDwy.js";import"./isEqual-ChwobQoe.js";import"./dayjs.min-DXYVsqcY.js";import"./chunk-AYJ5UCUI-DVkLiOiO.js";import"./cloneDeep-D2vzQCip.js";import"./_initCloneObject-DHyYjQDp.js";import"./merge-s1MKyKKY.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DMQpCQSh.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BsDvqHFv.js";import"./Backdrop-Cqr92DL4.js";import"./LinearProgress-DQ3YJJXm.js";import"./index-wF2HPLBM.js";import"./index-AMr2W5DI.js";import"./index-uC7qZ-0o.js";import"./const-Doag8klc.js";import"./index-knxfktwm.js";const Xt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
