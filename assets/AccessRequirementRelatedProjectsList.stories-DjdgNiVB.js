import{n as o,b as n,Q as a,H as c}from"./iframe-9Dp3veeu.js";import{A as m}from"./AccessRequirementRelatedProjectsList-DyMdcn-K.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DLLm8Ex9.js";import"./index-SBatv29g.js";import"./_baseOrderBy-BAW_8EQV.js";import"./_baseIteratee-BdYCFxHU.js";import"./_baseMap-BE81D0D0.js";import"./_baseEach-CZKI3vcT.js";import"./useInfiniteQuery-Db6GiRYb.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-CTfl4CS0.js";import"./useEntity-D50J89pv.js";import"./pickBy-CpMnZzU7.js";import"./isString-BcDOty8O.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BzblwMUL.js";import"./useGetEntityHeaders-rImvv5h-.js";import"./EntityIcon-CjiFbO8m.js";import"./ErrorChip-fTdTz-mh.js";import"./Chip-gPffx778.js";import"./ListItem-BZFztavt.js";import"./listItemButtonClasses-DxeChUKh.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9603055
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9605913
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 1234567
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
      // searchAccessRequirements
      http.post(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_SEARCH}\`, () => {
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
        return HttpResponse.json(zeroRelatedProjects, {
          status: 200
        });
      })]
    }
  }
}`,...s.parameters?.docs?.source}}};const v=["ManyProjects","OneProject","ZeroProjectsMock"];export{e as ManyProjects,r as OneProject,s as ZeroProjectsMock,v as __namedExportsOrder,f as default};
