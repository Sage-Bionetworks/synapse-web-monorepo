import{g as u,k as d,n as t,a3 as c,dO as R,b as e,kq as i,kr as E,H as s,ks as _,p as m,kt as I,ku as S,k9 as O}from"./iframe-BmEDGyjb.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-YnDQLRt3.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-C01Oyy2N.js";import"./useAccessRequirements-BeJHirEK.js";import"./index-95w8b1hR.js";import"./_baseOrderBy-CgfTDg7z.js";import"./_baseIteratee-DaFZjSQq.js";import"./_baseMap-g_RvZdBZ.js";import"./_baseEach-D0lChX0L.js";import"./useInfiniteQuery-BckXm8pp.js";import"./groupBy-BJDjeXXl.js";import"./_createAggregator-Btyg6S0g.js";import"./DialogBase--Z6amcCK.js";import"./Close-Ba6rPhRO.js";import"./HelpPopover-BBG0qokF.js";import"./MarkdownPopover-w2dEOi0v.js";import"./LightTooltip-D4z_e32b.js";import"./MarkdownSynapse-DScTNbQ4.js";import"./SkeletonButton-Dqpl9ltR.js";import"./SkeletonInlineBlock-gJQ0GVFi.js";import"./SkeletonTable-DO7dretU.js";import"./SkeletonParagraph-BB_2QaC-.js";import"./EntityLink-Dt1WP9rB.js";import"./useEntity-556WyfPL.js";import"./pickBy-DD2e3vqq.js";import"./isString-i0acvnu7.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DqFjpoQY.js";import"./useGetEntityHeaders-BIvRoFv9.js";import"./EntityIcon-DLnRvaVj.js";import"./ErrorChip-CzGEdIEJ.js";import"./Chip-COc0F3aL.js";import"./UserOrTeamBadge-DIUuZOau.js";import"./UserBadge-DNIzxmqc.js";import"./useUserBundle-Cd1kVc-i.js";import"./MenuItem-BK2EpW1E.js";import"./Card-CYKT739R.js";import"./TeamBadge-9MrGYgq4.js";import"./UnmanagedACTAccessRequirementItem-tr6VJ0nO.js";import"./RequirementItem-CIyCeTLb.js";import"./LockTwoTone-BpbiXihO.js";import"./UserSearchBoxV2-Cs1N-Cdp.js";import"./useDebouncedEffect-CAcOtDgR.js";import"./use-deep-compare-effect.esm-BKzENA5E.js";import"./uniq-BS1rMeBr.js";import"./without-BYA_Mnyb.js";import"./Select-aab027f3.esm-DON8waLJ.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-BHmXVWXm.js";import"./SelfSignAccessRequirementItem-CEHv-onl.js";import"./DataAccessRequestAccessorsFilesForm-Cic6rzsr.js";import"./enums-COXbQZi9.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-BllJy1Eu.js";import"./RadioGroup-BJcnSUtZ.js";import"./Radio-BujAsrmc.js";import"./SwitchBase-D5o4ldYs.js";import"./FormGroup-dXyhcsAq.js";import"./FormControlLabel-BmQ6KfaB.js";import"./UploadDocumentField-wGopsjwj.js";import"./FileUpload-B817QKd4.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CZPtBl7i.js";import"./GridLegacy-DHbHryfg.js";import"./ResearchProjectForm-CrJIu6Yz.js";import"./TextFieldWithWordLimit-CV6xbqr_.js";import"./AuthenticatedRequirement-PvzGNsbj.js";import"./CertificationRequirement-VxWuBYgD.js";import"./TwoFactorAuthEnabledRequirement-DZIC-3WX.js";import"./ValidationRequirement-BbWftbIN.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-H4K-HxNQ.js";import"./RejectDataAccessRequestModal-C4IVqQNH.js";import"./CannedRejectionDialog-CyuMKHMQ.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-CSeFQT8P.js";import"./Checkbox-iF1AD3Pq.js";import"./Grid-DnxKXq8X.js";import"./upperFirst-Brx-24im.js";import"./_stringToArray-UaUeisni.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Ze=["Demo","DemoError"];export{o as Demo,n as DemoError,Ze as __namedExportsOrder,Ve as default};
