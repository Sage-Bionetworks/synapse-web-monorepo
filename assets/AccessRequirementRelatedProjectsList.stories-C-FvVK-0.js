import{n as o,b as n,Q as a,H as c}from"./iframe-4beS0gqZ.js";import{A as m}from"./AccessRequirementRelatedProjectsList-B2weQnvC.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-B4xxCjmH.js";import"./index-CK_NCQ6g.js";import"./_baseOrderBy-DxFK1bnT.js";import"./_baseIteratee-BmxS9WAT.js";import"./_baseMap-9rlWQfeU.js";import"./_baseEach-C7tOoOBF.js";import"./useQueries-D3UXgcMQ.js";import"./useInfiniteQuery-BMIQmsjh.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-BWQc0UbK.js";import"./useEntity-CCW2T7nm.js";import"./pickBy-Ch8IJYmc.js";import"./isString-DrznTeW8.js";import"./useSuspenseQuery-DcbESSKQ.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DFpyvJ5c.js";import"./useGetEntityHeaders-8CBp3ZD_.js";import"./EntityIcon-2rgwGR4o.js";import"./ErrorChip-DgkZBqXt.js";import"./Chip-DN1AmnB5.js";import"./ListItem-BB4x_Hd2.js";import"./listItemButtonClasses-uayquW46.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
