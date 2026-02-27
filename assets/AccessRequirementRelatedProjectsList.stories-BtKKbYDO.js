import{n as o,b as n,Q as a,H as c}from"./iframe-RNQ9FFfL.js";import{A as m}from"./AccessRequirementRelatedProjectsList-DLYUM_pm.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BpcWwB_F.js";import"./index-BQpHgqbu.js";import"./_baseOrderBy-BAC9mgPR.js";import"./_baseIteratee-DejOueIh.js";import"./_baseMap-By2r3gd3.js";import"./_baseEach-D2x73z0-.js";import"./useInfiniteQuery-BxfOt_4y.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-I9JNKj_9.js";import"./useEntity-D2rXBnNC.js";import"./pickBy-B1UJ-_RB.js";import"./isString-BkhGZ6X_.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BF6-QWBu.js";import"./useGetEntityHeaders-vFjpiI0O.js";import"./EntityIcon-BngzCxtn.js";import"./ErrorChip-BpdBH2i0.js";import"./Chip-Dz2JQ-pG.js";import"./ListItem-Bvl-IGxq.js";import"./listItemButtonClasses-CVAJKFUP.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
