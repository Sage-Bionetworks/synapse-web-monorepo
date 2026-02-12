import{g as u,k as d,n as t,a3 as c,e0 as R,b as e,kv as i,kw as E,H as s,kx as _,p as m,ky as I,kz as S,ke as O}from"./iframe-Es1qDbGP.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-WbvXbK2e.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-ClNUv3yK.js";import"./useAccessRequirements-DYTw_Pge.js";import"./index-BV5A7KqH.js";import"./_baseOrderBy-BkGIHqcP.js";import"./_baseIteratee-mYcJ16Ig.js";import"./_baseMap-loH1m8zG.js";import"./_baseEach-C3zPdy9m.js";import"./useQueries-eWENE-QR.js";import"./useInfiniteQuery-COtoiiDm.js";import"./groupBy-DqdcHCdf.js";import"./_createAggregator-8PQI9WKW.js";import"./DialogBase-CnbWvOma.js";import"./Close-B3u-lq2b.js";import"./HelpPopover-C93LpQuO.js";import"./MarkdownPopover-BNqNuP7X.js";import"./LightTooltip-BYZb259d.js";import"./MarkdownSynapse-Bc_1YooS.js";import"./SkeletonButton-Dk6hA76Q.js";import"./SkeletonInlineBlock-ClWMeLhu.js";import"./SkeletonTable-lZm0nrpb.js";import"./SkeletonParagraph-DsApyNFa.js";import"./EntityLink-BaStRQpA.js";import"./useEntity-hcwalfFt.js";import"./pickBy-DpHz-Dvo.js";import"./isString-DTvs6K00.js";import"./useSuspenseQuery-CeVxUvBp.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Cpq9fcWX.js";import"./useGetEntityHeaders-B69xvGlR.js";import"./EntityIcon-BKxjFgDO.js";import"./ErrorChip-C2JDtPIl.js";import"./Chip-BzTFnY_r.js";import"./UserOrTeamBadge-CCprrEwc.js";import"./UserBadge-CRnAPqN0.js";import"./useUserBundle-B6mxhG5s.js";import"./MenuItem-B-EqIPb7.js";import"./Card-DHB9ti2h.js";import"./TeamBadge-Di778wFl.js";import"./UnmanagedACTAccessRequirementItem-teFzzZvU.js";import"./RequirementItem-e_c4kNOz.js";import"./LockTwoTone-B6sgMCD1.js";import"./UserSearchBoxV2-B1Ry4DpT.js";import"./useDebouncedEffect-CMaZ4kkY.js";import"./use-deep-compare-effect.esm-D9844x-7.js";import"./uniq-CDgyCgRb.js";import"./without-BPytMMUs.js";import"./Select-aab027f3.esm-D57G2gfj.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-qjVPwzbo.js";import"./SelfSignAccessRequirementItem-OYlnVwYc.js";import"./DataAccessRequestAccessorsFilesForm-Brueglnq.js";import"./enums--tDojoE2.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-r-1NI1Y2.js";import"./RadioGroup-2CxWJ6aV.js";import"./Radio-D2dcdSTx.js";import"./SwitchBase-Blk8OzSk.js";import"./FormGroup-DCANRdnx.js";import"./FormControlLabel-C69kwcak.js";import"./UploadDocumentField-ByaPbwWI.js";import"./FileUpload-DL2six1N.js";import"./ManagedACTAccessRequirementFormWikiWrapper-3NTIE4nI.js";import"./GridLegacy-C6Qipv1L.js";import"./ResearchProjectForm-DilQE0H6.js";import"./TextFieldWithWordLimit-DaIJnMV1.js";import"./AuthenticatedRequirement-DOshzogT.js";import"./CertificationRequirement-8Vr56DBJ.js";import"./TwoFactorAuthEnabledRequirement-Csiryb86.js";import"./ValidationRequirement-9VM_oUNr.js";import"./duration-DbmI10NM.js";import"./FileHandleLink--Km7JHa2.js";import"./RejectDataAccessRequestModal-87GJb6ew.js";import"./CannedRejectionDialog-CTNs4vM1.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-Dm9z241S.js";import"./Checkbox-mvgsc4Yl.js";import"./Grid-BeEIUbCD.js";import"./upperFirst-DU7DLSeT.js";import"./_stringToArray-Dd0NILJL.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
