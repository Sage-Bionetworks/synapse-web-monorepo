import{g as I,k as S,n as t,a2 as O,d_ as g,b as e,kr as i,ks as C,H as s,kt as l,p as m,ku as b,kv as T,ka as A}from"./iframe-CQJI7H2t.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-yAN0reGm.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-DTF-r4ba.js";import"./useAccessRequirements-DYyM5LI2.js";import"./index-DqkU7ALG.js";import"./_baseOrderBy-Bxe_T148.js";import"./_baseIteratee-5cMs_epi.js";import"./_baseMap-DrS9-FBW.js";import"./_baseEach-DN0mH8Et.js";import"./useQueries-DxTHEh5Q.js";import"./useInfiniteQuery-D6F9oIjz.js";import"./groupBy-CivGWQAR.js";import"./_createAggregator-CC0VGCBw.js";import"./DialogBase-Bii4OYGm.js";import"./Close-ByqpzM9n.js";import"./HelpPopover-BGDGJ311.js";import"./MarkdownPopover-BsAFOo-I.js";import"./LightTooltip-DON7P_WS.js";import"./MarkdownSynapse-Dg1sB7BI.js";import"./SkeletonButton-DUugX30x.js";import"./SkeletonInlineBlock-BCuuGuk5.js";import"./SkeletonTable-939R3x-7.js";import"./SkeletonParagraph-oxsYr-A_.js";import"./EntityLink-kJNHXTHo.js";import"./useEntity-nTwQEwob.js";import"./pickBy-DYTtcuOm.js";import"./isString-MdCpdfIL.js";import"./useSuspenseQuery-Bc-UZawL.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BjN0-gWG.js";import"./useGetEntityHeaders-BCwNVn6V.js";import"./EntityIcon-DBnKcPud.js";import"./ErrorChip-DqaHrhMB.js";import"./Chip-CsTJhxo4.js";import"./UserOrTeamBadge-BTfCX5KN.js";import"./UserBadge-Dyq7f4N_.js";import"./useUserBundle-BJxyK2Lo.js";import"./MenuItem-CsWn5GfW.js";import"./Card-yxllXAz0.js";import"./TeamBadge-DsBkcbTI.js";import"./UnmanagedACTAccessRequirementItem-BllkEv_V.js";import"./RequirementItem-DiXN-NW4.js";import"./LockTwoTone-JdmZd491.js";import"./UserSearchBoxV2-DqBr4OoN.js";import"./useDebouncedEffect-BKWMUdzi.js";import"./use-deep-compare-effect.esm-BUsAUVzD.js";import"./uniq-C8Thh210.js";import"./without-Myf_x1iq.js";import"./Select-aab027f3.esm-DAjKwnsf.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-CFHZfXs3.js";import"./SelfSignAccessRequirementItem-xbdEzs8S.js";import"./DataAccessRequestAccessorsFilesForm-CC56QDF-.js";import"./enums-CMQwIa5M.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-BSoyl4dh.js";import"./RadioGroup-CeBzyp6I.js";import"./Radio-CnMFPJKi.js";import"./SwitchBase-24TTnX7U.js";import"./FormGroup-0d0XHNN_.js";import"./FormControlLabel-KQaj4uUj.js";import"./UploadDocumentField-Br05DISe.js";import"./FileUpload-BftYA1KY.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CTdSIwyc.js";import"./GridLegacy-DWdEjBy6.js";import"./ResearchProjectForm-DAeH5pqo.js";import"./TextFieldWithWordLimit-D8uRsR-_.js";import"./AuthenticatedRequirement-BQmRA5_a.js";import"./CertificationRequirement-bFecEj44.js";import"./TwoFactorAuthEnabledRequirement-3H3AiM0n.js";import"./ValidationRequirement-CgzV2oZH.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-BBD83tWf.js";import"./RejectDataAccessRequestModal-DrpEA8J7.js";import"./CannedRejectionDialog-Cr3X1MKC.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-ByNauc16.js";import"./Checkbox-DjMZlVKr.js";import"./Grid-Dsb41YIw.js";import"./upperFirst-D3RcythO.js";import"./_stringToArray-BKulqM1v.js";const sr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,c,R;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(R=(c=n.parameters)==null?void 0:c.docs)==null?void 0:R.source}}};const or=["Demo","DemoError"];export{o as Demo,n as DemoError,or as __namedExportsOrder,sr as default};
