import{U as L}from"./UpsetPlot-CHm-ebpq.js";import{f as u}from"./index-Dd0HXqrn.js";import"./jsx-runtime-DBMcmXCa.js";import"./index-DBlnVwD8.js";import"./iframe-D_N6e9gY.js";import"./LargeButton-C4-AjugL.js";import"./DefaultPropsProvider-DuMbHCRm.js";import"./createTheme-BZ2zgW4D.js";import"./Button-CNqVIcaA.js";import"./ButtonBase-nKx8H8dx.js";import"./useTimeout-6iW9qGJp.js";import"./TransitionGroupContext-C0reZBPa.js";import"./useForkRef-Dc8viUTi.js";import"./useIsFocusVisible-CMn0OAnJ.js";import"./useEventCallback-D9ysatRx.js";import"./useFiles-BCC9o9bm.js";import"./VerificationSubmission-B0kBNeMy.js";import"./SynapseConstants-D6yJoWPV.js";import"./OrientationBanner-D1D6xyRZ.js";import"./index-C2tCeSSv.js";import"./spreadSx-CwcO6WA9.js";import"./react-qszGcZP5.js";import"./FullWidthAlert-C1aLdWsG.js";import"./Alert-Dn4rajYU.js";import"./resolveComponentProps-Dtpa_tS3.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-CSOVfYb_.js";import"./Close-DWBR5p3C.js";import"./IconButton-C200dxKl.js";import"./Paper-DaOo4yHe.js";import"./Stack-SvfrxjIC.js";import"./getThemeProps-BtMaQYIh.js";import"./useTheme-COxG8dpy.js";import"./Box-Chsd4vbP.js";import"./AlertTitle-DIxvf3iw.js";import"./Typography-DqN6Bou9.js";import"./useTheme-ZMiCMtR3.js";import"./Grow-BjLbQ-fL.js";import"./index-ByQiLxoL.js";import"./utils-BYTqi8xE.js";import"./ClickAwayListener-3VJLVNkD.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DtNzDJHf.js";import"./index-CpVUrsoO.js";import"./useControlled-BLmwoSKe.js";import"./useId-D_MF-2iJ.js";import"./Popper-BfKDlvYQ.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-CzgJJW-6.js";import"./useQuery-Bk6g_8Gf.js";import"./utils-NbB0Ut0Y.js";import"./Link-DmbSphAj.js";import"./Collapse-c4oLUGBD.js";import"./isNil-CM9qot0x.js";import"./_Uint8Array-Bido-coT.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-OwuH3sZ9.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-CXDd7ZQG.js";import"./_getTag-Dg9gL6QT.js";import"./tinycolor-Begke6kS.js";import"./Fade-BfUz1XMr.js";import"./Skeleton-Ci_PYPE4.js";import"./inputBaseClasses-BQ5llsZJ.js";import"./calculateFriendlyFileSize-z3744QQS.js";import"./CheckCircleTwoTone-Bg8tee4I.js";import"./InfoTwoTone-BJxK8Eo6.js";import"./mutation-QlbpiYUc.js";import"./dayjs.min-Dkt-OZPU.js";import"./chunk-AYJ5UCUI-D8Kh-TfU.js";import"./cloneDeep-DmxrBXJm.js";import"./_initCloneObject-DxaU8L-P.js";import"./isEqual-BzHeONx3.js";import"./merge-OM56T8yk.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DnxC6kpb.js";import"./react-sizeme-l0ueEH36.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-IgONV2yh.js";import"./Backdrop-BX0icQUo.js";import"./LinearProgress-BbUIynl2.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var s,n,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const _t=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,_t as __namedExportsOrder,Yt as default};
