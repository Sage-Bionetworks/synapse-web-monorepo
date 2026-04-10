import{s as o,b as n,O as a,H as c}from"./iframe-90f2SQV6.js";import{A as m}from"./AccessRequirementRelatedProjectsList-3DtGUJnN.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-C8DG-3mq.js";import"./index-DBtU2uN0.js";import"./_baseOrderBy-B_kTw8AV.js";import"./_baseIteratee-DS7Uv7Qg.js";import"./_baseMap-BCtJ1V6g.js";import"./_baseEach-iJRgvUTF.js";import"./useInfiniteQuery-B6I0bq03.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-ClNGq7GT.js";import"./useEntity-DdAkX9nj.js";import"./pickBy-BoCYbEVx.js";import"./isString-mpfQo2G8.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CXT05GtQ.js";import"./useGetEntityHeaders-DriWS_uf.js";import"./EntityIcon-s60Z3jzT.js";import"./ErrorChip-DsJ4CH2t.js";import"./Chip-DkWyanB2.js";import"./ListItem-eNi2DDpy.js";import"./listItemButtonClasses-oeVRGQYM.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const H=["ManyProjects","OneProject","ZeroProjectsMock"];export{e as ManyProjects,r as OneProject,s as ZeroProjectsMock,H as __namedExportsOrder,v as default};
