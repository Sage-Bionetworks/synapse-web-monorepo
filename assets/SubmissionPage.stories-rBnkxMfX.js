import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-BnETViYe.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-eIm5OePO.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-BlRv-1wA.js";import"./useAccessRequirements-Iv4cG14S.js";import"./index-DAJANqDt.js";import"./_baseOrderBy-B6I-T1FN.js";import"./_baseIteratee-ClPPPdqy.js";import"./_baseMap-BS8DVFvS.js";import"./_baseEach-UM9MKom9.js";import"./useQueries-CZq_142Z.js";import"./useInfiniteQuery-C73-i-7k.js";import"./groupBy-USzHAzO1.js";import"./_createAggregator-CO97MU5-.js";import"./DialogBase-QlbSbh1_.js";import"./Close-rvN_S8Vv.js";import"./HelpPopover-DK9Tpj6o.js";import"./MarkdownPopover-BvzvlMrF.js";import"./LightTooltip-j7NzfZhS.js";import"./MarkdownSynapse-Bip7xTA3.js";import"./SkeletonButton-DC6QAxqn.js";import"./SkeletonInlineBlock-CvdUTVnt.js";import"./SkeletonTable-C-IptaAB.js";import"./SkeletonParagraph-Cc0HWYg7.js";import"./EntityLink-BSm1IRxU.js";import"./useEntity-C6p_NrjE.js";import"./pickBy-CsRlTggi.js";import"./isString-DbDKXoQd.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DZsIq2C9.js";import"./useGetEntityHeaders-C5V4GIOr.js";import"./EntityIcon-ey8-Culf.js";import"./ErrorChip-Bs4RNhmp.js";import"./Chip-7gWmkBqZ.js";import"./UserOrTeamBadge-CdkNGGhP.js";import"./UserBadge-65z_ELHv.js";import"./MenuItem-BuXD1mJM.js";import"./Card-DOF_qhrk.js";import"./TeamBadge-Dr9P9eWS.js";import"./UnmanagedACTAccessRequirementItem-YFuM2niz.js";import"./RequirementItem-QlAd7XtE.js";import"./LockTwoTone-D1bi_7VB.js";import"./UserSearchBoxV2-B6sV4-za.js";import"./useDebouncedEffect-BF_6BQA9.js";import"./use-deep-compare-effect.esm-3-Rq1_uz.js";import"./uniq-I3Z8EEDb.js";import"./without-CEcrTaBy.js";import"./Select-aab027f3.esm-Dt5juruo.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-DRT3uRWo.js";import"./SelfSignAccessRequirementItem-Dtfh66Fw.js";import"./DataAccessRequestAccessorsFilesForm-Cw0cWboP.js";import"./enums-C4IE_DdM.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-CrFzyZcE.js";import"./RadioGroup-CEmX6Yid.js";import"./Radio-EoEdDMxh.js";import"./SwitchBase-B4WwzahN.js";import"./FormGroup-E1c6W9cb.js";import"./FormControlLabel-DQI_vNgk.js";import"./UploadDocumentField-DCnECTAe.js";import"./FileUpload-CLuliADU.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DNJAOf39.js";import"./GridLegacy-CM0-BlIu.js";import"./ResearchProjectForm-CGebwvuv.js";import"./TextFieldWithWordLimit-DGfLae3e.js";import"./AuthenticatedRequirement-B3v7BAQZ.js";import"./CertificationRequirement-DkYFeU4h.js";import"./TwoFactorAuthEnabledRequirement-CWvzfDfK.js";import"./ValidationRequirement-eWgm_aux.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-D84YYmHb.js";import"./RejectDataAccessRequestModal-BnCChN2F.js";import"./CannedRejectionDialog-DDN3bwoT.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-BIpXV5M8.js";import"./Checkbox-CGsodViY.js";import"./Grid-Bez3ZFd_.js";import"./upperFirst-BxsSSbFp.js";import"./_stringToArray-DREpSdT4.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(R=(c=n.parameters)==null?void 0:c.docs)==null?void 0:R.source}}};const sr=["Demo","DemoError"];export{o as Demo,n as DemoError,sr as __namedExportsOrder,tr as default};
