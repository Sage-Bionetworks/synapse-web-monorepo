import{n as o,b as n,Q as a,H as c}from"./iframe-osdcj8gT.js";import{A as m}from"./AccessRequirementRelatedProjectsList-BoNkctUk.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-By8ZR-4J.js";import"./index-D_1mjmCL.js";import"./_baseOrderBy-A39yyPqs.js";import"./_baseIteratee-B5HvQivk.js";import"./_baseMap-I-hgX6EY.js";import"./_baseEach-DnD5uJJS.js";import"./useInfiniteQuery-DDd67-Kv.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-Bp1Ydb85.js";import"./useEntity-ZuIv_x_h.js";import"./pickBy-tfZNLt_m.js";import"./isString-C6XgMWDt.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BYgAZyXG.js";import"./useGetEntityHeaders-DWsd3Bao.js";import"./EntityIcon-CapODEbF.js";import"./ErrorChip-6HVYKzzC.js";import"./Chip-B7nPIvxj.js";import"./ListItem-BYarPtcm.js";import"./listItemButtonClasses-Dh2UN_tW.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
