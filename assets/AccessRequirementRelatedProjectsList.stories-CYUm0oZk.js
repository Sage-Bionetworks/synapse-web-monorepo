import{n as o,b as n,Q as a,H as c}from"./iframe-r7gAu2bc.js";import{A as m}from"./AccessRequirementRelatedProjectsList-lCbsZRgh.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CcZpityR.js";import"./index-abBLt8Ff.js";import"./_baseOrderBy-DOd0_89h.js";import"./_baseIteratee-DVLYk22D.js";import"./_baseMap-C01ANpbm.js";import"./_baseEach-BnwaDblR.js";import"./useQueries-9m2Bezy_.js";import"./useInfiniteQuery-B8z8XTlO.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-BpDJIqjC.js";import"./useEntity-fJrHHkhL.js";import"./pickBy-BCgFv0xF.js";import"./isString-CByKS3-p.js";import"./useSuspenseQuery-DnY7oDDS.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle--mzUFdcF.js";import"./useGetEntityHeaders-CzGo9vlM.js";import"./EntityIcon-CiTbHeWw.js";import"./ErrorChip-BX9upZBY.js";import"./Chip-Da8UDvbq.js";import"./ListItem-BFJw64wu.js";import"./listItemButtonClasses-BgX_caKS.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9603055
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9605913
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const y=["ManyProjects","OneProject","ZeroProjectsMock"];export{e as ManyProjects,r as OneProject,t as ZeroProjectsMock,y as __namedExportsOrder,H as default};
