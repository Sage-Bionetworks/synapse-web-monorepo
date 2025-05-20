import{U as L}from"./UpsetPlot-CvnDAuaL.js";import{f as u}from"./index-BoeNExZl.js";import"./jsx-runtime-7YCwI36c.js";import"./index-C9M_il_J.js";import"./iframe-M2uNqdbL.js";import"./LargeButton-CD6xoqcd.js";import"./DefaultPropsProvider-CJvfCKAu.js";import"./createTheme-SdSk3wwD.js";import"./Button-DAfmUnv3.js";import"./ButtonBase-CtFMKvXy.js";import"./useTimeout-B8yFsaAv.js";import"./TransitionGroupContext-DOB4L6KT.js";import"./useForkRef-_q_7mTIm.js";import"./useIsFocusVisible-CqlXx1mp.js";import"./useEventCallback-C8kim-Rr.js";import"./useFiles-B5k0fHaK.js";import"./VerificationSubmission-dxY1kvC5.js";import"./SynapseConstants-BV0-4_QF.js";import"./OrientationBanner-DjGZBNPH.js";import"./index-DZTeTwJ3.js";import"./spreadSx-CwcO6WA9.js";import"./react-Cqi5Udnm.js";import"./FullWidthAlert-CPVIz4Wz.js";import"./Alert-DHZvlRwT.js";import"./resolveComponentProps-C_boa-fy.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-BkJZknfb.js";import"./Close-BiyTYcOV.js";import"./IconButton-PbRpfjbr.js";import"./Paper-DxH-uwW9.js";import"./Stack-d5e5w4Ye.js";import"./getThemeProps-DOjU9IFn.js";import"./useTheme-B-J_FYJg.js";import"./Box-CVywjUOl.js";import"./AlertTitle-qqPjl8D9.js";import"./Typography-tuEHvF3F.js";import"./useTheme-CL4VxzvZ.js";import"./Grow-CGZtvPFd.js";import"./index-BUMelamN.js";import"./utils-Ecsgz-ex.js";import"./ClickAwayListener-CulQoVsa.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-5lCyVYpl.js";import"./index-cAvLThiO.js";import"./useControlled-Dl6X9RP0.js";import"./useId-CnHJMbo3.js";import"./Popper-iF4jELXw.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Df7AZImX.js";import"./useQuery-Bw2Txi7_.js";import"./utils-DvoQ-FO4.js";import"./Link-YOi7hgdm.js";import"./Collapse-VY5dXbQp.js";import"./isNil-C1cHp62C.js";import"./_Uint8Array-CRKTzfcx.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-B9wu438U.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-BD0mzzJ-.js";import"./_getTag-DZdP02yz.js";import"./tinycolor-Begke6kS.js";import"./Fade-CWwsiTWC.js";import"./Skeleton-CLO42135.js";import"./inputBaseClasses-CDZZCPli.js";import"./calculateFriendlyFileSize-s4H5ytOs.js";import"./CheckCircleTwoTone-QFBnsBZD.js";import"./InfoTwoTone-COYXC-bl.js";import"./mutation-Dso9fTIz.js";import"./dayjs.min-CxuSaHVW.js";import"./chunk-AYJ5UCUI-CPoEp2kj.js";import"./cloneDeep-CD-IgKhG.js";import"./_initCloneObject-STI8wTbS.js";import"./isEqual-C0SwGJ7g.js";import"./merge-DAUGgmio.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-BxVSBgLJ.js";import"./react-sizeme-CJS2EoX_.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BOk3BejJ.js";import"./Backdrop-JxuXEIl9.js";import"./LinearProgress-DDumuRLL.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
