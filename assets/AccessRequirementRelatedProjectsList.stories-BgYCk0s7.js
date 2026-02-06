import{n as o,b as n,Q as a,H as c}from"./iframe-Ya-g_qay.js";import{A as m}from"./AccessRequirementRelatedProjectsList-C4vTzgbs.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CCGCKFDe.js";import"./index-xVTfjyPx.js";import"./_baseOrderBy-DtAlKGoE.js";import"./_baseIteratee-NNKH08m9.js";import"./_baseMap-D_QMnoLZ.js";import"./_baseEach-ub4T8Ncm.js";import"./useQueries-BAvG0eo3.js";import"./useInfiniteQuery-DO90_A9I.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-hR0EMTtY.js";import"./useEntity-JPDUhxLN.js";import"./pickBy-DJc1YXZT.js";import"./isString-BPoMGSCO.js";import"./useSuspenseQuery-ajSSmE51.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-0DqdtmhJ.js";import"./useGetEntityHeaders-CrzK46ZA.js";import"./EntityIcon-Bvvg3Xos.js";import"./ErrorChip-DhI2xzY8.js";import"./Chip-CWV3Xi6n.js";import"./ListItem-WVfw-_Td.js";import"./listItemButtonClasses-CkcGfhEa.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
