import{A as j}from"./AccessRequirementRelatedProjectsList-989e8bf5.js";import{M as P}from"./getEndpoint-ac94413e.js";import{l as I}from"./index-a284eae3.js";import{ak as g}from"./SynapseClient-b4c2fe2f.js";import"./jsx-runtime-095bf462.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./OrientationBanner-cdfc64df.js";import"./FullWidthAlert-1b1b4f63.js";import"./AlertTitle-36b934fa.js";import"./styled-a48939ef.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import"./createSvgIcon-90be9181.js";import"./Paper-169126a7.js";import"./IconButton-76e05815.js";import"./ButtonBase-895fb1ab.js";import"./emotion-react.browser.esm-69ef451a.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-aa95d3cf.js";import"./useForkRef-f2aa3d66.js";import"./useIsFocusVisible-bbf13f29.js";import"./Typography-039a8d28.js";import"./extendSxProp-fc750aff.js";import"./Stack-3b05645e.js";import"./Box-f53d00dc.js";import"./useTheme-60e5792f.js";import"./Grow-cb3cd8aa.js";import"./isHostComponent-fa76b8d9.js";import"./index-8ce4a492.js";import"./utils-4f6567de.js";import"./ClickAwayListener-e5c35437.js";import"./Tooltip-294ff439.js";import"./Button-3631c64e.js";import"./useAccessRequirements-f7b58187.js";import"./useMutation-7233ef1a.js";import"./useInfiniteQuery-0731982b.js";import"./useMediaQuery-17e1a875.js";import"./sortBy-3d8aa380.js";import"./hasIn-211aacb1.js";import"./_Uint8Array-a7acd3cb.js";import"./_getTag-f412bed9.js";import"./isArray-5e3f9107.js";import"./_baseTimes-8715be3e.js";import"./isSymbol-7c514724.js";import"./toString-cc90cb98.js";import"./_getMatchData-de88ee12.js";import"./_baseIsEqual-bbaf3bf4.js";import"./_cacheHas-073865f9.js";import"./_setToArray-3d6ec6fd.js";import"./identity-46f208ab.js";import"./_baseFor-d254fa1e.js";import"./_baseRest-c7612f8b.js";import"./_overRest-81c49661.js";import"./_isIterateeCall-c4bfe61b.js";import"./EntityLink-f6f59948.js";import"./useEntity-369ee68e.js";import"./isEqual-71569712.js";import"./InfiniteQueryUtils-54ae7e6b.js";import"./pick-b57db910.js";import"./_baseClone-c5bd2052.js";import"./_baseSlice-cf92e063.js";import"./isPlainObject-e33ee42d.js";import"./useGetEntityHeaders-2323a7d6.js";import"./EntityIcon-73b5ebab.js";import"./IconSvg-85f98416.js";import"./ErrorOutlined-8c6aeddb.js";import"./GetAppTwoTone-c8ac74d5.js";import"./InfoOutlined-82ee9e80.js";import"./CheckCircleTwoTone-71d1bb57.js";import"./ErrorChip-5af0928d.js";import"./Chip-b8d43608.js";import"./Avatar-ba4d610e.js";import"./Link-9ced689e.js";import"./Skeleton-a95d096c.js";import"./pluralize-9608a438.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./List-1e1cdf33.js";import"./ListItem-58b62e9e.js";import"./listItemButtonClasses-951c8d3d.js";import"./isMuiElement-3ce2dffc.js";import"./util-69f8ea98.js";import"./index-bef4e47c.js";import"./SynapseConstants-935f39ee.js";import"./StringUtils-2ea3ab4d.js";import"./dayjs.min-47c8dffe.js";import"./index-58d3fd43.js";import"./tiny-invariant-dd7d57d2.js";import"./InfoTwoTone-7af4ed61.js";import"./inputBaseClasses-2b9678c1.js";import"./Fade-06c2e3dd.js";const ot={title:"Governance/AccessRequirementRelatedProjectsList",component:j},r={args:{accessRequirementId:9603055}},t={args:{accessRequirementId:9605913}},e={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[I.rest.post(`${P}${g}`,async(A,u,o)=>{const l={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return u(o.status(200),o.json(l))})]}}};var m,i,s;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9603055
  }
}`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var p,a,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9605913
  }
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var c,d,R;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(R=(d=e.parameters)==null?void 0:d.docs)==null?void 0:R.source}}};const mt=["ManyProjects","OneProject","ZeroProjectsMock"];export{r as ManyProjects,t as OneProject,e as ZeroProjectsMock,mt as __namedExportsOrder,ot as default};
//# sourceMappingURL=AccessRequirementRelatedProjectsList.stories-31011ef8.js.map
