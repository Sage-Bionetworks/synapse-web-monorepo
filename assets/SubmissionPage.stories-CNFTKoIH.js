import{g as u,k as d,n as t,a3 as c,e0 as R,b as e,kv as i,kw as E,H as s,kx as _,p as m,ky as I,kz as S,ke as O}from"./iframe-C_dryyJN.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BM7n1HQ8.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-D0_9NHK5.js";import"./useAccessRequirements-VK3UcgxM.js";import"./index-ClzeWg2J.js";import"./_baseOrderBy-DMrrzLD7.js";import"./_baseIteratee-BWtFRFDt.js";import"./_baseMap-BLNeiwE3.js";import"./_baseEach-DAcOskvX.js";import"./useQueries-CV3SItnz.js";import"./useInfiniteQuery-CNeRYV1j.js";import"./groupBy-CoMS2XMN.js";import"./_createAggregator-Cp-FM7lY.js";import"./DialogBase-DK1f3XXS.js";import"./Close-qhBbRzO3.js";import"./HelpPopover-Bv7T8EMS.js";import"./MarkdownPopover-t0Q781ku.js";import"./LightTooltip-kABvS4Wq.js";import"./MarkdownSynapse-63MOCJzX.js";import"./SkeletonButton-DhVxQIGw.js";import"./SkeletonInlineBlock-DprLb70P.js";import"./SkeletonTable-DtAMx_Lr.js";import"./SkeletonParagraph-Me_ye6-N.js";import"./EntityLink-BiyaUvUb.js";import"./useEntity-BvJnGaOd.js";import"./pickBy-DYsFflkF.js";import"./isString-DiG9etdC.js";import"./useSuspenseQuery-DbrtCnso.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CnImPArp.js";import"./useGetEntityHeaders-DrpQbB8i.js";import"./EntityIcon-D_7auWzm.js";import"./ErrorChip-BAnJwrGV.js";import"./Chip-0QWq_ruD.js";import"./UserOrTeamBadge-CCotwU-K.js";import"./UserBadge-DyxfWgNS.js";import"./useUserBundle-QtzgNDHJ.js";import"./MenuItem-DGJNpis4.js";import"./Card-CVLPxeE5.js";import"./TeamBadge-xEz4sH1j.js";import"./UnmanagedACTAccessRequirementItem-BcFaPjnl.js";import"./RequirementItem-ChGGjKY1.js";import"./LockTwoTone-JiJES-HV.js";import"./UserSearchBoxV2-CYh84hpw.js";import"./useDebouncedEffect-BTqYOr7X.js";import"./use-deep-compare-effect.esm-OAQm12oT.js";import"./uniq-Bo6-IDOO.js";import"./without-CTyW5iZu.js";import"./Select-aab027f3.esm-B2RRpnPW.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-ZrZ6jg2q.js";import"./SelfSignAccessRequirementItem-CNtwA5x8.js";import"./DataAccessRequestAccessorsFilesForm-4y0yX1_b.js";import"./enums-DFNzBHg3.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-g6PzE50r.js";import"./RadioGroup-Byt3G26C.js";import"./Radio-VQPG9_1H.js";import"./SwitchBase-CP_0pcQR.js";import"./FormGroup-D867ixit.js";import"./FormControlLabel-COE-xUzF.js";import"./UploadDocumentField-BWjO5big.js";import"./FileUpload-BcRgBofx.js";import"./ManagedACTAccessRequirementFormWikiWrapper-C0nFd1Mp.js";import"./GridLegacy-BHgIXg1b.js";import"./ResearchProjectForm-rA4-QIpc.js";import"./TextFieldWithWordLimit-Dv-Y4QUb.js";import"./AuthenticatedRequirement-TxrWh75X.js";import"./CertificationRequirement-6wRT_q-D.js";import"./TwoFactorAuthEnabledRequirement-Otxk3NbP.js";import"./ValidationRequirement-BtZ5j1in.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-C-NkJmxc.js";import"./RejectDataAccessRequestModal-B66wH3OD.js";import"./CannedRejectionDialog-AiPZoHji.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-DwI3ORsC.js";import"./Checkbox-BbczdEJd.js";import"./Grid-BY3BZ-52.js";import"./upperFirst-DNm9WuCb.js";import"./_stringToArray-DxyzRcAp.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
