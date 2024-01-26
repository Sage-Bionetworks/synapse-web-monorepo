import{A as j}from"./AccessRequirementRelatedProjectsList-edab2eb5.js";import{M as P}from"./getEndpoint-ac94413e.js";import{l as I}from"./index-088d26f6.js";import{a9 as g}from"./SynapseClient-9f95ca1a.js";import"./jsx-runtime-9dc53467.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./OrientationBanner-1c6f5b11.js";import"./FullWidthAlert-88a09c3d.js";import"./Alert-34cc4490.js";import"./styled-01bfb76d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./createSvgIcon-af041161.js";import"./Paper-b990f44f.js";import"./IconButton-e4815158.js";import"./ButtonBase-f3be4fb1.js";import"./emotion-react.browser.esm-04dee135.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-1474f578.js";import"./useForkRef-8feb2ebf.js";import"./useIsFocusVisible-e5f6c995.js";import"./Stack-b0292d83.js";import"./extendSxProp-e91f91cb.js";import"./Box-ddce9904.js";import"./AlertTitle-1d33b140.js";import"./Typography-10432b83.js";import"./useTheme-541c21f5.js";import"./Grow-5b2ac6ed.js";import"./isHostComponent-fa76b8d9.js";import"./index-d3ea75b5.js";import"./utils-7ba61cee.js";import"./ClickAwayListener-3907f9d7.js";import"./Tooltip-3e2f7ab3.js";import"./Button-6cf38875.js";import"./useAccessRequirements-d8ba1dad.js";import"./useMutation-93672772.js";import"./useInfiniteQuery-63511019.js";import"./useMediaQuery-facaab58.js";import"./sortBy-4171bc8e.js";import"./_baseIteratee-586c072b.js";import"./_Uint8Array-d975c071.js";import"./_getTag-0896febb.js";import"./isArray-5e3f9107.js";import"./_baseTimes-8715be3e.js";import"./_getMatchData-e949e548.js";import"./_cacheHas-39d10511.js";import"./_setToArray-3d6ec6fd.js";import"./isSymbol-7c514724.js";import"./toString-cc90cb98.js";import"./identity-46f208ab.js";import"./_baseFor-d254fa1e.js";import"./_baseRest-7a583b78.js";import"./_overRest-02925c7b.js";import"./_isIterateeCall-d9e6e9ec.js";import"./EntityLink-f93ea5ca.js";import"./useEntity-9beda7be.js";import"./isEqualWith-010efd83.js";import"./pick-66a3459f.js";import"./_baseIndexOf-c808ca38.js";import"./toInteger-08085a83.js";import"./_baseClone-1af98579.js";import"./_baseSlice-cf92e063.js";import"./isPlainObject-dfc65155.js";import"./InfiniteQueryUtils-54ae7e6b.js";import"./useGetEntityHeaders-007b6b29.js";import"./EntityIcon-ec275fc7.js";import"./index-7db48dfb.js";import"./IconSvg-9cb7df33.js";import"./ErrorOutlined-6b31cdea.js";import"./GetAppTwoTone-8acfb280.js";import"./InfoOutlined-1c91e984.js";import"./CheckCircleTwoTone-5c97bb6f.js";import"./ErrorChip-2a67904f.js";import"./Chip-3ab3a829.js";import"./Avatar-b9207744.js";import"./Link-980677d0.js";import"./Skeleton-c327557e.js";import"./pluralize-9f2b9a2f.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./List-94bb762a.js";import"./ListItem-5947e5d7.js";import"./listItemButtonClasses-592b9053.js";import"./isMuiElement-bce4c331.js";import"./util-c0197ce2.js";import"./index-4166e284.js";import"./SynapseConstants-567f6998.js";import"./InfoTwoTone-1a20b6d6.js";import"./inputBaseClasses-9710a733.js";import"./Fade-7e0b73d6.js";import"./StringUtils-2ea3ab4d.js";import"./dayjs.min-f79c4412.js";import"./index-9d475cdf.js";import"./tiny-invariant-dd7d57d2.js";const st={title:"Governance/AccessRequirementRelatedProjectsList",component:j},r={args:{accessRequirementId:9603055}},t={args:{accessRequirementId:9605913}},o={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[I.rest.post(`${P}${g}`,async(A,u,e)=>{const l={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return u(e.status(200),e.json(l))})]}}};var m,i,s;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9603055
  }
}`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var p,a,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(R=(d=o.parameters)==null?void 0:d.docs)==null?void 0:R.source}}};const pt=["ManyProjects","OneProject","ZeroProjectsMock"];export{r as ManyProjects,t as OneProject,o as ZeroProjectsMock,pt as __namedExportsOrder,st as default};
//# sourceMappingURL=AccessRequirementRelatedProjectsList.stories-7b28b1d8.js.map
