import{z as d,b as e,o as u,s as t,kp as i,kq as c,H as s,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-zB-jZjF1.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BHEveb7u.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-Dm28g13i.js";import"./useAccessRequirements-N-mQs8gZ.js";import"./index-CpNo1svs.js";import"./_baseOrderBy-8C8_6s3v.js";import"./_baseIteratee-D_pQoQ0U.js";import"./_baseMap-3faxojLo.js";import"./_baseEach-BxbuAt9h.js";import"./useInfiniteQuery--NK2xn9-.js";import"./groupBy-DhHhPaSS.js";import"./_createAggregator-BWvVSyyk.js";import"./DialogBase-65T0H8Lc.js";import"./Close-DurIvuzE.js";import"./HelpPopover-tpWqXUpg.js";import"./MarkdownPopover-C_96Abiz.js";import"./LightTooltip-Bbhh6aTb.js";import"./MarkdownSynapse-DWu3M3VU.js";import"./SkeletonButton-DitOEAxO.js";import"./SkeletonInlineBlock-CeW9qPuC.js";import"./SkeletonTable-Xio-92ZC.js";import"./SkeletonParagraph-D0noDT_a.js";import"./EntityLink-DpENZb_Q.js";import"./useEntity-O8bJrzVR.js";import"./pickBy-Cdf8hihV.js";import"./isString-Cma2iw_R.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-HBiYxCDc.js";import"./useGetEntityHeaders-C6AqGtfJ.js";import"./EntityIcon-B2LOgno0.js";import"./ErrorChip-DJ988Kcs.js";import"./Chip-C8ZEijAb.js";import"./UserOrTeamBadge-BiOTE_VT.js";import"./useUserGroupHeader-aV7k__0H.js";import"./TeamBadge-Dey48b7e.js";import"./UserBadge-t9MoYrmb.js";import"./useUserBundle-DmoRhqzX.js";import"./MenuItem-BWX0VE3I.js";import"./Card-Den_1IvA.js";import"./UnmanagedACTAccessRequirementItem-DPBuED3b.js";import"./RequirementItem-BrZR0uy1.js";import"./LockTwoTone-BuJ71JNo.js";import"./ManagedACTAccessRequirementItemView-B1ESiLV9.js";import"./SelfSignAccessRequirementItem-DnJJLj8y.js";import"./DataAccessRequestAccessorsFilesForm-UsWxC0Qf.js";import"./enums-DMd-clyO.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-BCGVJOr3.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-B_NKwfSG.js";import"./UserSearchBox-CvWkNX_h.js";import"./useDebouncedEffect-BgMfo1QX.js";import"./Autocomplete-DdeAb70f.js";import"./usePreviousProps-Bo09v6Gt.js";import"./RadioGroup-p-_cvwYP.js";import"./Radio-C0QAkrBr.js";import"./SwitchBase-BJlTVCbW.js";import"./FormGroup-DkNf8m6H.js";import"./FormControlLabel-XYuCSYJu.js";import"./UploadDocumentField-O-hy_0am.js";import"./FileUpload-BO4da2vH.js";import"./ManagedACTAccessRequirementFormWikiWrapper-Clfh0WsM.js";import"./GridLegacy-CeLvMfUZ.js";import"./ResearchProjectForm-h-UGpLzV.js";import"./TextFieldWithWordLimit-Dmv8vu5q.js";import"./AuthenticatedRequirement-BzpgJTJo.js";import"./CertificationRequirement-D3Qg9DKX.js";import"./TwoFactorAuthEnabledRequirement-BlNPZ9eh.js";import"./ValidationRequirement-BssCAxzE.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BnbX51bs.js";import"./RejectDataAccessRequestModal-BXUf94Vj.js";import"./CannedRejectionDialog-BjPzrzTu.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-D8snEBXQ.js";import"./Checkbox-Du6iielx.js";import"./Grid-B5h6UUcr.js";import"./upperFirst-D_HeTcEB.js";import"./_stringToArray-Cn25Rkug.js";const Je={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${R(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${E(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Ve=["Demo","DemoError"];export{o as Demo,n as DemoError,Ve as __namedExportsOrder,Je as default};
