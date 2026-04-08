import{z as d,b as e,o as u,s,kp as i,kq as c,H as t,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-Ddo1nd2c.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-TM5l6Y9u.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-B01G8aYc.js";import"./useAccessRequirements-89AzbV_J.js";import"./index-BY1pmXbi.js";import"./_baseOrderBy-BJUcHcg9.js";import"./_baseIteratee-BL_XVY7N.js";import"./_baseMap-ZZuoWbUp.js";import"./_baseEach-Deb1er3l.js";import"./useInfiniteQuery-DJwQPHS2.js";import"./groupBy-BgtZoBjx.js";import"./_createAggregator-CDvlTxUA.js";import"./DialogBase-CayqfCYU.js";import"./Close-Bdp-VK_k.js";import"./HelpPopover-CG9mhVeJ.js";import"./MarkdownPopover-Dbkj-DS5.js";import"./LightTooltip-LQW8Tril.js";import"./MarkdownSynapse-D36GJOu2.js";import"./SkeletonButton-0wbjxtel.js";import"./SkeletonInlineBlock-CIgujLoL.js";import"./SkeletonTable-0-Nn1Nvg.js";import"./SkeletonParagraph-B50bUVUG.js";import"./EntityLink-Bru2vQ9X.js";import"./useEntity-6i1utiFK.js";import"./pickBy-Ca1HoaHl.js";import"./isString-C31m5vfz.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-qjtX1WIb.js";import"./useGetEntityHeaders-D0yLijSd.js";import"./EntityIcon-C1GtyKyQ.js";import"./ErrorChip-B2CshbSc.js";import"./Chip-Lk48EpR4.js";import"./UserOrTeamBadge-BABkP8Xd.js";import"./UserBadge-BZOEQyuT.js";import"./useUserBundle-CRr4o42O.js";import"./MenuItem-BaT97X1Q.js";import"./Card-DjIjXO0o.js";import"./TeamBadge-QrVsDqd7.js";import"./UnmanagedACTAccessRequirementItem-CdeGgCAy.js";import"./RequirementItem-BG23Nz_l.js";import"./LockTwoTone-dRhcJpHU.js";import"./ManagedACTAccessRequirementItemView-CJ2a_8-X.js";import"./SelfSignAccessRequirementItem-cRBJiXfo.js";import"./DataAccessRequestAccessorsFilesForm-BTgruAjE.js";import"./enums-C9JBc_Cp.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-DVrtmJut.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-D6paqFv6.js";import"./UserSearchBox-C6bkTzGH.js";import"./useDebouncedEffect-Beio-S8K.js";import"./Autocomplete-3ZOC5Hmp.js";import"./usePreviousProps-BnbbWDH5.js";import"./RadioGroup-DchJVIWM.js";import"./Radio-a_ECWc1o.js";import"./SwitchBase-LT8Y2S2D.js";import"./FormGroup-D84xiJQ6.js";import"./FormControlLabel-Y3B08TzJ.js";import"./UploadDocumentField-DPoH1nyp.js";import"./FileUpload-D_G90iYJ.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DjvNmEQq.js";import"./GridLegacy-DORIVWfG.js";import"./ResearchProjectForm-BrAjUjay.js";import"./TextFieldWithWordLimit-33mtP2mc.js";import"./AuthenticatedRequirement--R6BjID5.js";import"./CertificationRequirement-DhBPkr7R.js";import"./TwoFactorAuthEnabledRequirement-Cbn9ESDx.js";import"./ValidationRequirement-CF6VhrwG.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DaiaWWlC.js";import"./RejectDataAccessRequestModal-CMK23lTs.js";import"./CannedRejectionDialog-DRvT6piH.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-DbD8Znq3.js";import"./Checkbox-DuiaAW4b.js";import"./Grid-CX3jOppe.js";import"./upperFirst-Brb2hS1_.js";import"./_stringToArray-tHr5q6sH.js";const Le={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
