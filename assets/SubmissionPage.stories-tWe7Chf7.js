import{z as d,b as e,o as u,s,kp as i,kq as c,H as t,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-DvDPVyr3.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BlhQum1J.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DfXGp60_.js";import"./useAccessRequirements-DtrRejXJ.js";import"./index-Cd-T-abm.js";import"./_baseOrderBy-BfEs3q_n.js";import"./_baseIteratee-DZhuazRW.js";import"./_baseMap-DyGl9fGh.js";import"./_baseEach-DlWazupd.js";import"./useInfiniteQuery-DWj8q4Ou.js";import"./groupBy-CYIs4_uR.js";import"./_createAggregator-CayUNsm1.js";import"./DialogBase-J8iZt42d.js";import"./Close-Dl87lOTy.js";import"./HelpPopover-B9l6QfUy.js";import"./MarkdownPopover-1Vxonhz2.js";import"./LightTooltip-A87-OJtX.js";import"./MarkdownSynapse-CFI-ggll.js";import"./SkeletonButton-ChNWGaeP.js";import"./SkeletonInlineBlock-DTOZhiyP.js";import"./SkeletonTable-0fE1v7Jp.js";import"./SkeletonParagraph-C4mex8S5.js";import"./EntityLink-CjtLRFmJ.js";import"./useEntity-Bh24ZT11.js";import"./pickBy-kEll3AOM.js";import"./isString-C-LtdkHl.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-sb2T9JNK.js";import"./useGetEntityHeaders-CPfyttCM.js";import"./EntityIcon-D-YTaS44.js";import"./ErrorChip-BcsWd7ui.js";import"./Chip-YSiJYC5a.js";import"./UserOrTeamBadge-BCBJ34Cp.js";import"./UserBadge-BlKDuGTK.js";import"./useUserBundle--EY3PjCb.js";import"./MenuItem-Dbhxy3EU.js";import"./Card-B9Wv_sea.js";import"./TeamBadge-Dc875krb.js";import"./UnmanagedACTAccessRequirementItem-C8oFYOOl.js";import"./RequirementItem-CppjFGL5.js";import"./LockTwoTone-b7ug3tVa.js";import"./ManagedACTAccessRequirementItemView-CMtldJnZ.js";import"./SelfSignAccessRequirementItem-DcAw5az_.js";import"./DataAccessRequestAccessorsFilesForm-D85a2dj3.js";import"./enums-CLVPcZO1.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-MrUNQ1ba.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-u5Q_vJfa.js";import"./UserSearchBox-BwdbHC8B.js";import"./useDebouncedEffect-JywINAjS.js";import"./Autocomplete-pax_CLk5.js";import"./usePreviousProps-BDKffoJB.js";import"./RadioGroup-BT7m1XRU.js";import"./Radio-uitb1bFh.js";import"./SwitchBase-DnKqddam.js";import"./FormGroup-pRaQDHMr.js";import"./FormControlLabel-D9Jvuq4Y.js";import"./UploadDocumentField-D9xGjm8a.js";import"./FileUpload-BXyP7Wm9.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DqHjPIbV.js";import"./GridLegacy-Bc37lRtQ.js";import"./ResearchProjectForm-DAXbkCqz.js";import"./TextFieldWithWordLimit-D0gV5em9.js";import"./AuthenticatedRequirement-5EvO976w.js";import"./CertificationRequirement-DRRMPQru.js";import"./TwoFactorAuthEnabledRequirement-CsCVUfyQ.js";import"./ValidationRequirement-s6hHdFPp.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-B-VW5lcp.js";import"./RejectDataAccessRequestModal-vKWItiLE.js";import"./CannedRejectionDialog-Ch3MgcvM.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-hJY-6MQc.js";import"./Checkbox-F9Ku5hpR.js";import"./Grid-7B2QSBEP.js";import"./upperFirst-Dj8QDPzR.js";import"./_stringToArray-qyTth_0F.js";const Le={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
