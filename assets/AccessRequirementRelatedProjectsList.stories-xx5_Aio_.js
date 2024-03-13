import{A as j}from"./AccessRequirementRelatedProjectsList-CHQXMQki.js";import{M as P}from"./getEndpoint-CjoHA800.js";import{l as I}from"./index-BRAL7Xze.js";import{c as g}from"./ApplicationSessionManager-H255UMPB.js";import"./jsx-runtime-CKrituN3.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./OrientationBanner-eGM9Gy2i.js";import"./FullWidthAlert-843DPaPD.js";import"./Alert-C_9TnCz2.js";import"./createTheme-BmyBSwiD.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./styled-CpvAj9Jd.js";import"./createSvgIcon-hKF-axwl.js";import"./Paper-CypdJUpq.js";import"./IconButton-NUGov2wg.js";import"./ButtonBase-ywJhAmC4.js";import"./emotion-react.browser.esm-BhA2isNO.js";import"./index-DMoHWj5j.js";import"./TransitionGroupContext-CSiky9Ms.js";import"./useForkRef-BEI5gptS.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./useIsFocusVisible-YID51Ly0.js";import"./Stack-CHd9FObi.js";import"./extendSxProp-CItG1no9.js";import"./Box-Bs5qirON.js";import"./AlertTitle-Cg6cXOoN.js";import"./Typography-B9IcQwF1.js";import"./useTheme-BsCSKhvJ.js";import"./Grow-DI9-8Eyf.js";import"./isHostComponent-BHK9_qiJ.js";import"./index-BtM5VmRH.js";import"./utils-BhlLjzQ2.js";import"./ClickAwayListener-XLCmgdgg.js";import"./Tooltip-B3pRd4mi.js";import"./Button-CpzfOSQ4.js";import"./useAccessRequirements-YrsgTkrI.js";import"./useQueries-DxCeD7DL.js";import"./useMutation--LyKTFbH.js";import"./useInfiniteQuery-BsYq_f89.js";import"./useMediaQuery-DcYYGGNo.js";import"./sortBy-DLRAhl8G.js";import"./_baseFlatten-BoYGAIPY.js";import"./_getAllKeys-vOeThzpn.js";import"./isArray-D3Xc0Edl.js";import"./_Uint8Array-BypDT5Ps.js";import"./_Map-W_LbVzGG.js";import"./_baseTimes-DoMoQz2v.js";import"./_getTag-CQLY2zcD.js";import"./toString-DMqudUWC.js";import"./isSymbol-BVHl_2sa.js";import"./_baseIteratee-140XfRAx.js";import"./_getMatchData-Qw9Fp_YQ.js";import"./_cacheHas-DFFdrG_S.js";import"./_setToArray-CSiN_fit.js";import"./identity-DKeuBCMA.js";import"./_baseFor-CpEDs2Sd.js";import"./_baseRest-6bl_2T60.js";import"./_overRest-Ctve69FT.js";import"./_isIterateeCall-B-8PPihj.js";import"./QueryFilterUtils-rRltlklg.js";import"./SynapseConstants-BgUUD4xl.js";import"./isNumber-IkxNlUCJ.js";import"./EntityLink-_dKszzo7.js";import"./useEntity-3z-R08V0.js";import"./isEqualWith-DjP7gGtj.js";import"./pick-Bo8F47qG.js";import"./_baseIndexOf-DlmoT9Yo.js";import"./toInteger-wfy7oWZN.js";import"./_baseClone-CzWqv-1o.js";import"./_initCloneObject-Cv5HhKD3.js";import"./_baseUnset-C6kptcPq.js";import"./_baseSlice-F8doVSIJ.js";import"./isPlainObject-zHgHEaNo.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./EntityIcon-D-7iPLhp.js";import"./index-C-UbkUMQ.js";import"./IconSvg-Bn_bYvII.js";import"./ErrorOutlined-B-p_qnqa.js";import"./GetAppTwoTone-BchtSdkB.js";import"./InfoOutlined-CmTcoTdA.js";import"./CheckCircleTwoTone-Bm9Y8dkw.js";import"./ErrorChip-BXTRKO1m.js";import"./Chip-BXZbBufT.js";import"./Avatar-D-XyYmLN.js";import"./Link-BtokOTIY.js";import"./Skeleton-CL8YFeep.js";import"./pluralize-kXjzuMdn.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./List-BDLrlHJ3.js";import"./ListItem-DQxtq_d6.js";import"./listItemButtonClasses-Ce9P80hp.js";import"./isMuiElement-BxNAcTwJ.js";import"./events-CXH2uRM3.js";import"./util-Ab8roKK6.js";import"./index-DbSQXIGD.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-5MzHmxC_.js";import"./inputBaseClasses-gtOOSRs4.js";import"./Fade-BI7F9iy4.js";import"./dayjs.min-BaCjP-cF.js";import"./index-Dk74W0Oi.js";import"./tiny-invariant-CopsF_GD.js";import"./StringUtils-D4kDWP8q.js";const It={title:"Governance/AccessRequirementRelatedProjectsList",component:j},r={args:{accessRequirementId:9603055}},t={args:{accessRequirementId:9605913}},o={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[I.rest.post(`${P}${g}`,async(A,u,e)=>{const l={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return u(e.status(200),e.json(l))})]}}};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9603055
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var s,a,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9605913
  }
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var c,d,R;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 1234567
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
      // searchAccessRequirements
      rest.post(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_SEARCH}\`, async (req, res, ctx) => {
        const zeroRelatedProjects = {
          results: [{
            id: '1234567',
            type: 'org.sagebionetworks.repo.model.ManagedACTAccessRequirement',
            createdOn: '2017-08-23T18:48:20.892Z',
            modifiedOn: '2023-12-14T00:43:41.315Z',
            name: 'Team AR without Related Projects',
            version: '1',
            relatedProjectIds: [],
            reviewerIds: []
          }]
        };
        return res(ctx.status(200), ctx.json(zeroRelatedProjects));
      })]
    }
  }
}`,...(R=(d=o.parameters)==null?void 0:d.docs)==null?void 0:R.source}}};const gt=["ManyProjects","OneProject","ZeroProjectsMock"];export{r as ManyProjects,t as OneProject,o as ZeroProjectsMock,gt as __namedExportsOrder,It as default};
