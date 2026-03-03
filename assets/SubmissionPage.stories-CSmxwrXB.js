import{g as d,k as u,n as t,a3 as c,dN as R,b as e,kn as i,ko as E,H as s,kp as _,p as m,kq as I,kr as S,k6 as O}from"./iframe-DRnLZq4W.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-Ck4Q_hyE.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-CIzSZ-tH.js";import"./useAccessRequirements-DBlX9XRA.js";import"./index-C6Fl73J9.js";import"./_baseOrderBy-DKzGPwCj.js";import"./_baseIteratee-CGgYpGW3.js";import"./_baseMap-UYxvI7CQ.js";import"./_baseEach-ZawQhoV0.js";import"./useInfiniteQuery-CEfwzGx4.js";import"./groupBy-BS2jY_3e.js";import"./_createAggregator-DjrWQ8gC.js";import"./DialogBase-DBv4DzqI.js";import"./Close-Lw7VtlJf.js";import"./HelpPopover-QWyK0RpX.js";import"./MarkdownPopover-DkKnwS9d.js";import"./LightTooltip-BATo5oyN.js";import"./MarkdownSynapse-BmDBsUdI.js";import"./SkeletonButton-DKOFMwSN.js";import"./SkeletonInlineBlock-qphYniCB.js";import"./SkeletonTable-BRvwRKgI.js";import"./SkeletonParagraph-gWuTxaCe.js";import"./EntityLink-BMKaqRtH.js";import"./useEntity-BoL3AsOb.js";import"./pickBy-DgdC9X2n.js";import"./isString-jqYJCv8E.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CqorM4vH.js";import"./useGetEntityHeaders-vGt_QlwA.js";import"./EntityIcon-0UKWIh-l.js";import"./ErrorChip-Lgancyet.js";import"./Chip-X2PFaiz1.js";import"./UserOrTeamBadge-UZaSX5LJ.js";import"./UserBadge-CuN2K17l.js";import"./useUserBundle-CVIljxhV.js";import"./MenuItem-FdihTtHL.js";import"./Card-Boln_G58.js";import"./TeamBadge-BtoBhTM4.js";import"./UnmanagedACTAccessRequirementItem-EEOJlL8D.js";import"./RequirementItem-C1UnL4Ab.js";import"./LockTwoTone-DQOLnbxs.js";import"./UserSearchBoxV2-bnTz6V1Y.js";import"./useDebouncedEffect-x6hId2ka.js";import"./use-deep-compare-effect.esm-ADfqYNtl.js";import"./uniq-sxyr_hIR.js";import"./without-BXHdBnG0.js";import"./Select-aab027f3.esm-CbsAjXq_.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-4s2BZeM5.js";import"./SelfSignAccessRequirementItem-D4rwO5zX.js";import"./DataAccessRequestAccessorsFilesForm-CRV5mkxj.js";import"./enums-B5fUPIcP.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-ct3sWJ78.js";import"./RadioGroup-CK8-a8Pz.js";import"./Radio-o0e-HG66.js";import"./SwitchBase-D8YwYWem.js";import"./FormGroup-Dj3Xs-iq.js";import"./FormControlLabel-ChAxAa_4.js";import"./UploadDocumentField-B1olcczo.js";import"./FileUpload-i7lPt3ZD.js";import"./ManagedACTAccessRequirementFormWikiWrapper-Cczbph9v.js";import"./GridLegacy-Bt9b4rzV.js";import"./ResearchProjectForm-alYl1Wlb.js";import"./TextFieldWithWordLimit-DmU_cdyw.js";import"./AuthenticatedRequirement-cuWRkH5Y.js";import"./CertificationRequirement-B226hnja.js";import"./TwoFactorAuthEnabledRequirement-cCuSJJMJ.js";import"./ValidationRequirement-BH1rS42O.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-i8SRhnX2.js";import"./RejectDataAccessRequestModal-DOAc1m2T.js";import"./CannedRejectionDialog-C8IPET6b.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-CeVKY213.js";import"./Checkbox-CkzF06aO.js";import"./Grid-ocV7cG9J.js";import"./upperFirst-DPFgwHHX.js";import"./_stringToArray-K7U9nsGD.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
