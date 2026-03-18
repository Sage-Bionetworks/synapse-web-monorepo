import{n as o,b as n,Q as a,H as c}from"./iframe-B7gyTvXJ.js";import{A as m}from"./AccessRequirementRelatedProjectsList-DIm_5nAJ.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-C-hV9llN.js";import"./index-WdAvK5aU.js";import"./_baseOrderBy-hldRTRhc.js";import"./_baseIteratee-XgjUyU1H.js";import"./_baseMap-DOtyuz8m.js";import"./_baseEach-D6h0LkgA.js";import"./useInfiniteQuery-Cp7Cpj3Z.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-Cprmde94.js";import"./useEntity-B9e80l0L.js";import"./pickBy-8ftCar9P.js";import"./isString-DHmHBQ1y.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DIG05F37.js";import"./useGetEntityHeaders-DLq6v4dP.js";import"./EntityIcon-BSf5skmx.js";import"./ErrorChip-Bzwq7ROZ.js";import"./Chip-CZ04a0tX.js";import"./ListItem-BrhDRM0I.js";import"./listItemButtonClasses-buXogD7e.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
