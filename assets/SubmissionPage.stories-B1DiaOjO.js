import{z as d,b as e,o as u,s,kp as i,kq as c,H as t,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-BqdsSWZd.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CjPAOU0l.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BSt-7UpZ.js";import"./useAccessRequirements-I-kVvhtC.js";import"./index-BGf55DBP.js";import"./_baseOrderBy-Dmv0IoPS.js";import"./_baseIteratee-BKxCLCkQ.js";import"./_baseMap-DAe4OjTy.js";import"./_baseEach-MY-m3ebR.js";import"./useInfiniteQuery-B8rjpe3i.js";import"./groupBy-qnH-nb_g.js";import"./_createAggregator-DdXHu1bk.js";import"./DialogBase-DhimsSeU.js";import"./Close-CiwYrWW2.js";import"./HelpPopover-Bj_HEu0H.js";import"./MarkdownPopover-1NSkQgo1.js";import"./LightTooltip-DuUAsYAd.js";import"./MarkdownSynapse-Cq3G3Ysd.js";import"./SkeletonButton-DQlCUFlj.js";import"./SkeletonInlineBlock-BTiJ2BO_.js";import"./SkeletonTable-BNCsFwsu.js";import"./SkeletonParagraph-CITKHxXA.js";import"./EntityLink-DyaxJ5O6.js";import"./useEntity-DGHiV3wP.js";import"./pickBy-DUs8MMAq.js";import"./isString-HbBIM6KT.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Hj1n1iEc.js";import"./useGetEntityHeaders-oqdxiLoR.js";import"./EntityIcon-CmageezX.js";import"./ErrorChip-BQqchxoC.js";import"./Chip-QNpY_KS_.js";import"./UserOrTeamBadge-DmHt8I9q.js";import"./UserBadge-CBefG1yG.js";import"./useUserBundle-D7Oq3eOX.js";import"./MenuItem-BDOSlvEx.js";import"./Card-rcxhgfJE.js";import"./TeamBadge-Cd3bGV8c.js";import"./UnmanagedACTAccessRequirementItem-bx1N9dPG.js";import"./RequirementItem-ClBiYEne.js";import"./LockTwoTone-DW7Mx53n.js";import"./ManagedACTAccessRequirementItemView-D6-35PtQ.js";import"./SelfSignAccessRequirementItem-l4NYOBGZ.js";import"./DataAccessRequestAccessorsFilesForm-COR8guLX.js";import"./enums-CmuyZYOd.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-BgWLSRZf.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-BLqW2haG.js";import"./UserSearchBox-BgN-JR1h.js";import"./useDebouncedEffect-CLjkSd3w.js";import"./Autocomplete-D2L8I004.js";import"./usePreviousProps-BGc4kDSn.js";import"./RadioGroup-CC612vJX.js";import"./Radio-Co-yh5xo.js";import"./SwitchBase-D249JllU.js";import"./FormGroup-DKNTgsef.js";import"./FormControlLabel-0ry4_IyI.js";import"./UploadDocumentField-CqOF-_6D.js";import"./FileUpload-DV7DNGB9.js";import"./ManagedACTAccessRequirementFormWikiWrapper-kb90cEky.js";import"./GridLegacy-COwedhpS.js";import"./ResearchProjectForm-DZrYyzwu.js";import"./TextFieldWithWordLimit-BeZ_R3kU.js";import"./AuthenticatedRequirement-82rHV9EP.js";import"./CertificationRequirement-DZvZX5sd.js";import"./TwoFactorAuthEnabledRequirement-BgAj4fRe.js";import"./ValidationRequirement-p4GLYyve.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-CVTuJuld.js";import"./RejectDataAccessRequestModal-BTztNw3q.js";import"./CannedRejectionDialog-CdT3RFyN.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-DfDAoE1B.js";import"./Checkbox-ZoMln06J.js";import"./Grid-Z1x-TWzV.js";import"./upperFirst-BLvHbXjh.js";import"./_stringToArray-Bay21gZg.js";const Le={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'SubmissionPage',
  loaders: [() => registerTableQueryResult({
    sql: \`SELECT * FROM \${REJECT_SUBMISSION_CANNED_RESPONSES_TABLE}\`
  }, mockRejectionReasonsTableQueryResultBundle)],
  parameters: {
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getWikiHandlers(MOCK_REPO_ORIGIN),
      // Return submission based on ID
      http.get(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, ({
        params
      }) => {
        const submission = mockSubmissions.find(submission => params.id === submission.id);
        return HttpResponse.json(submission, {
          status: 200
        });
      }),
      // Return a mocked access requirement
      http.get(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_BY_ID(':id')}\`, () => {
        return HttpResponse.json(mockManagedACTAccessRequirement, {
          status: 200
        });
      }), http.get(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_WIKI_PAGE_KEY(':id')}\`, () => {
        return HttpResponse.json({
          wikiPageId: 123,
          ownerObjectId: mockManagedACTAccessRequirement.id,
          ownerObjectType: 'ACCESS_REQUIREMENT'
        }, {
          status: 200
        });
      }), http.get<{
        id: string;
      }>(\`\${MOCK_REPO_ORIGIN}/repo/v1/accessRequirement/:id/acl\`, ({
        params
      }) => {
        return HttpResponse.json({
          id: params.id,
          creationDate: '2022-05-20T14:32:31.665Z',
          etag: 'f4fbd4f2-751d-40dd-9421-1d2693231217',
          resourceAccess: [{
            principalId: MOCK_USER_ID_2,
            accessType: ['REVIEW_SUBMISSIONS']
          }]
        }, {
          status: 200
        });
      }), ...getHandlersForTableQuery(MOCK_REPO_ORIGIN), http.put(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, async ({
        request
      }) => {
        return HttpResponse.json(await request.json(), {
          status: 201
        });
      })]
    }
  },
  args: {
    isReviewer: true,
    submissionId: 1
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Demo Error State',
  parameters: {
    msw: {
      handlers: [http.get(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, () => {
        const errorResponse: ErrorResponse = {
          reason: 'The user must be validated in order to review data access submissions.',
          concreteType: 'org.sagebionetworks.repo.model.ErrorResponse'
        };
        return HttpResponse.json(errorResponse, {
          status: 403
        });
      })]
    }
  },
  args: {
    isReviewer: true,
    submissionId: 9999
  }
}`,...n.parameters?.docs?.source}}};const xe=["Demo","DemoError"];export{o as Demo,n as DemoError,xe as __namedExportsOrder,Le as default};
