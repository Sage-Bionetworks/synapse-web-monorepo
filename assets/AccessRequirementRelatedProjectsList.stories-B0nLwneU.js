import{n as o,b as n,Q as a,H as c}from"./iframe-Dbbh8EoS.js";import{A as m}from"./AccessRequirementRelatedProjectsList-BsZLTdol.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-C2qVnv1S.js";import"./index-C5FBv2d-.js";import"./_baseOrderBy-BqQw7fHP.js";import"./_baseIteratee-Cv68UzAc.js";import"./_baseMap-uGS4ydDB.js";import"./_baseEach-B2oUF5fZ.js";import"./useInfiniteQuery-DwX98EP2.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-naADock1.js";import"./useEntity-C7229iuw.js";import"./pickBy-euuktPBy.js";import"./isString-Crns8k2p.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Bz0ZdlYf.js";import"./useGetEntityHeaders-DWuHFpFD.js";import"./EntityIcon-B87JxmSB.js";import"./ErrorChip-DJeBG0Mg.js";import"./Chip-D58Qw1vN.js";import"./ListItem-F4osOKIr.js";import"./listItemButtonClasses-BdiprMYh.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
