import{n as o,b as n,Q as a,H as c}from"./iframe-BHpb1ner.js";import{A as m}from"./AccessRequirementRelatedProjectsList-3xRAFF0W.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CLnA27mO.js";import"./index-6DuJwvLX.js";import"./_baseOrderBy-B5o4_3PH.js";import"./_baseIteratee-DkA3wBze.js";import"./_baseMap-BrueBaHk.js";import"./_baseEach-B-GHBlQE.js";import"./useInfiniteQuery-zxcnvMhO.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-BOJISux5.js";import"./useEntity-DZd2XXl3.js";import"./pickBy-DampMGkr.js";import"./isString-DIvAB8YF.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-td2Biw1M.js";import"./useGetEntityHeaders-CSwkGK5_.js";import"./EntityIcon-CuRWPl-M.js";import"./ErrorChip-BMsQIiXs.js";import"./Chip-BwbGtSpr.js";import"./ListItem-Dw7Z8Blg.js";import"./listItemButtonClasses-VYj_cBrn.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
