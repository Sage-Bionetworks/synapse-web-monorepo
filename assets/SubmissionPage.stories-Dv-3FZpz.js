import{g as u,k as d,n as t,a3 as c,e0 as R,b as e,ku as i,kv as E,H as s,kw as _,p as m,kx as I,ky as S,kd as O}from"./iframe-D-3jDgkP.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-Djzzyl54.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-CFPoE1GT.js";import"./useAccessRequirements-CUKfd1Wa.js";import"./index-DB-dn3wn.js";import"./_baseOrderBy-h4Ei6xa1.js";import"./_baseIteratee-DyY3KhVC.js";import"./_baseMap-Ca_HBm0L.js";import"./_baseEach-ChY8cEpb.js";import"./useQueries-C3g3qxiV.js";import"./useInfiniteQuery-C8k1H9sd.js";import"./groupBy-fz89v1Df.js";import"./_createAggregator-BU6jYcIz.js";import"./DialogBase-BUof1-nB.js";import"./Close-ByM6mNY6.js";import"./HelpPopover-DV6SUIjj.js";import"./MarkdownPopover-BlAtFiSx.js";import"./LightTooltip-DeeNgOG_.js";import"./MarkdownSynapse-CYhP7mn0.js";import"./SkeletonButton-C7XBrhUR.js";import"./SkeletonInlineBlock-DPp6vqqG.js";import"./SkeletonTable-gbeUh3ur.js";import"./SkeletonParagraph-BGwjKkDC.js";import"./EntityLink-CrU9HjCv.js";import"./useEntity-B6svLYEJ.js";import"./pickBy-B4Jk1TTY.js";import"./isString-LRv9Os_2.js";import"./useSuspenseQuery-CtXxGYgq.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C0BL-9h9.js";import"./useGetEntityHeaders-B8TAoeTj.js";import"./EntityIcon-B-pMevjp.js";import"./ErrorChip-li_66L8y.js";import"./Chip-CH85Kc0i.js";import"./UserOrTeamBadge-BvSb0qOV.js";import"./UserBadge-D2SDTi18.js";import"./useUserBundle-B_3OQShc.js";import"./MenuItem-aznIDkac.js";import"./Card-C30_Jw7R.js";import"./TeamBadge-0Sq_c6Re.js";import"./UnmanagedACTAccessRequirementItem-DDYd4U8q.js";import"./RequirementItem-CAtq4iKU.js";import"./LockTwoTone-6XqVh-t_.js";import"./UserSearchBoxV2-CAcSYdV5.js";import"./useDebouncedEffect-CsFv19tw.js";import"./use-deep-compare-effect.esm-BrMn--PC.js";import"./uniq-DeK1FA4B.js";import"./without-DTKLuMUu.js";import"./Select-aab027f3.esm-BlRgl09U.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-DMCKUG-x.js";import"./SelfSignAccessRequirementItem-DU7buDWn.js";import"./DataAccessRequestAccessorsFilesForm-BjeCqFDM.js";import"./enums-DXh7Y-tx.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-Dm25y_6r.js";import"./RadioGroup-CAnmHS6G.js";import"./Radio-DL8SwJEE.js";import"./SwitchBase-BVjlCjDZ.js";import"./FormGroup-Cj2tkZHi.js";import"./FormControlLabel-C87EfYI2.js";import"./UploadDocumentField-6WsynjRl.js";import"./FileUpload-C44dyfa4.js";import"./ManagedACTAccessRequirementFormWikiWrapper-D6-MGwgy.js";import"./GridLegacy-De2oSEr-.js";import"./ResearchProjectForm-RcLvAIcl.js";import"./TextFieldWithWordLimit-CXBhteQs.js";import"./AuthenticatedRequirement-BdbFbP3X.js";import"./CertificationRequirement-CywF1XaO.js";import"./TwoFactorAuthEnabledRequirement-oVs3PCZj.js";import"./ValidationRequirement-CMevpImm.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-N6TAfDc5.js";import"./RejectDataAccessRequestModal-CWxRipeG.js";import"./CannedRejectionDialog-CP5CVnmj.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-BV5SAAe9.js";import"./Checkbox-BPvRmOPY.js";import"./Grid-D-Fepwy6.js";import"./upperFirst-BnGmGZ-d.js";import"./_stringToArray-B5ts4rip.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Xe=["Demo","DemoError"];export{o as Demo,n as DemoError,Xe as __namedExportsOrder,ze as default};
