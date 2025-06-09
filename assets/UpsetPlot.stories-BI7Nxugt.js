import{U as L}from"./UpsetPlot-BoRHgHTO.js";import{f as u}from"./index-DLd5GtBa.js";import"./jsx-runtime-Bv99z4dA.js";import"./index-CF0uzcjZ.js";import"./iframe-BGHbsuBY.js";import"./LargeButton-BTZRWCjP.js";import"./DefaultPropsProvider-Du8GyagO.js";import"./createTheme-Bw_q8xoX.js";import"./Button-rQ4_7pWR.js";import"./ButtonBase-D9Xa11JY.js";import"./useTimeout-D0voTyHk.js";import"./TransitionGroupContext-CcdTK9uz.js";import"./useForkRef-CR5Lr8iG.js";import"./useIsFocusVisible-BREXiXd7.js";import"./useEventCallback-B52rbrpi.js";import"./useFiles-DfbAmMh0.js";import"./VerificationSubmission-DHPhgAH7.js";import"./SynapseConstants-BcNR6UVe.js";import"./OrientationBanner-Stv6OLE_.js";import"./index-BjW319T1.js";import"./spreadSx-CwcO6WA9.js";import"./react-C0_LrvjC.js";import"./FullWidthAlert-CTTU8S7m.js";import"./Alert-BxPsGBYe.js";import"./resolveComponentProps-CKpD1PaC.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-DYUB9sIM.js";import"./Close-Cn1wJK3o.js";import"./IconButton-ByhlliFY.js";import"./Paper-3DUu0WIH.js";import"./Stack-DOpWO4At.js";import"./getThemeProps-B6Zyu7l2.js";import"./useTheme-DMGyK5v9.js";import"./Box-CBOI_66A.js";import"./AlertTitle-CUlu-O_E.js";import"./Typography-DzYp-gx0.js";import"./useTheme-B2hHvz9R.js";import"./Grow-DQ9AjbB6.js";import"./index-Tn3qadKg.js";import"./utils-BbVrO47L.js";import"./ClickAwayListener-CEWBU0B0.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-Dyps0rkr.js";import"./index-D80nYRsb.js";import"./useControlled-YvkHZGdj.js";import"./useId-CETeX-Gn.js";import"./Popper-BDcRHdTY.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-Brk-0fy0.js";import"./utils-fj-tQrRX.js";import"./Link-nOr9EzS9.js";import"./Collapse-CfSLrk2G.js";import"./isNil-BLECkZ0t.js";import"./_Uint8Array-C9b-PzRe.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Eui5bRYR.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-D0dXxHzC.js";import"./_getTag-C45n9TB1.js";import"./tinycolor-Begke6kS.js";import"./Fade-DpYMkibC.js";import"./Skeleton-CSx2cjkl.js";import"./inputBaseClasses-BuIFm7nN.js";import"./calculateFriendlyFileSize-CttCZT0w.js";import"./CheckCircleTwoTone-CeSmIQGa.js";import"./InfoTwoTone-CgTBjUs_.js";import"./useMutation-BD58zpYn.js";import"./isEqual-JGHzCGNG.js";import"./dayjs.min-B6HdU3vP.js";import"./chunk-AYJ5UCUI-CzysO3QB.js";import"./cloneDeep-CxCk-B3s.js";import"./_initCloneObject-yXBc5QAf.js";import"./merge-BL56xzl6.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DhoAZ_qc.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DDHl-lOe.js";import"./Backdrop-DbiWWtWK.js";import"./LinearProgress-BBv5ryds.js";import"./index-C8qnY_TX.js";import"./index-CAFIBiDk.js";import"./index-Bw49UAc5.js";import"./const-Doag8klc.js";import"./index-Bs7cuBTB.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
