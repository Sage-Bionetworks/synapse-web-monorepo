import{n as o,b as n,Q as a,H as c}from"./iframe-yrc_qHyu.js";import{A as m}from"./AccessRequirementRelatedProjectsList-CVeXavRj.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BahwTKJ-.js";import"./index-Cza2pBOV.js";import"./_baseOrderBy-ClsXy_tN.js";import"./_baseIteratee-B0J-KDKo.js";import"./_baseMap-CcYtFPTe.js";import"./_baseEach-DwOMPOPt.js";import"./useInfiniteQuery-DvtqKNa0.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-A5hgiEyn.js";import"./useEntity-Erg9uHlv.js";import"./pickBy-geHVkVLl.js";import"./isString-DT4CNQuk.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DFZLKvF8.js";import"./useGetEntityHeaders-BX5CQVYB.js";import"./EntityIcon-recR1Rd-.js";import"./ErrorChip-8JPuLvkV.js";import"./Chip-Bjj18pYr.js";import"./ListItem-D4zFgr7h.js";import"./listItemButtonClasses-CR92Gpqa.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
