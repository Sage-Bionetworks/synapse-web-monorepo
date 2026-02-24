import{g as d,k as u,n as t,a3 as c,dZ as R,b as e,kw as i,kx as E,H as s,ky as _,p as m,kz as I,kA as S,kf as O}from"./iframe-BQS6qtw3.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BbhlsBNA.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-b-b8HIga.js";import"./useAccessRequirements-DnjV3O4T.js";import"./index-DIRtHi4A.js";import"./_baseOrderBy-DyNgBBWz.js";import"./_baseIteratee-tzEKu30x.js";import"./_baseMap-D1_qqhz5.js";import"./_baseEach-DGXnFwjl.js";import"./useQueries-CUWRB_Du.js";import"./useInfiniteQuery-CbIRomxB.js";import"./groupBy-TpYWqjub.js";import"./_createAggregator-8VvYkSxC.js";import"./DialogBase-BFxYZZoa.js";import"./Close-DNav6fH0.js";import"./HelpPopover-qCLkd-Tk.js";import"./MarkdownPopover-DTfEgFmO.js";import"./LightTooltip-CsVEpTPe.js";import"./MarkdownSynapse-DVax0Jmd.js";import"./SkeletonButton-Cq3ID3gv.js";import"./SkeletonInlineBlock-D36uEl4g.js";import"./SkeletonTable-EcKAjw5h.js";import"./SkeletonParagraph-C3oZhxG8.js";import"./EntityLink-C7wMFlju.js";import"./useEntity-D-Y1SZCd.js";import"./pickBy-jxgpgMOu.js";import"./isString-ZjUzAhK6.js";import"./useSuspenseQuery-z742AnhG.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BsZvQjm7.js";import"./useGetEntityHeaders-1Z_5fIsE.js";import"./EntityIcon-xZ-RQSDl.js";import"./ErrorChip-CGDjRB4z.js";import"./Chip-ecDlwPeu.js";import"./UserOrTeamBadge-Hatx19Wf.js";import"./UserBadge-CNqK9ajB.js";import"./useUserBundle-BrF0shF6.js";import"./MenuItem-C3kzUxKu.js";import"./Card-OQD5P-Gx.js";import"./TeamBadge-DU6tj7a_.js";import"./useRealmPrincipals-DoOSeMkE.js";import"./UnmanagedACTAccessRequirementItem-Bg2ui0qy.js";import"./RequirementItem-CoeRHHxM.js";import"./LockTwoTone-vpKRI6cn.js";import"./UserSearchBoxV2-C4R5MmV_.js";import"./useDebouncedEffect-C89lN_Iq.js";import"./use-deep-compare-effect.esm-Ds654Svp.js";import"./uniq-jIB07xbu.js";import"./without-Bds49jaK.js";import"./Select-aab027f3.esm-DI64KuHh.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-BSsZl22F.js";import"./SelfSignAccessRequirementItem-pP6HHPyp.js";import"./DataAccessRequestAccessorsFilesForm-BCHX7wzL.js";import"./enums-lTsc-J9N.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-dMOniu9Q.js";import"./RadioGroup-Dx_zNfZP.js";import"./Radio-C34-CQ0l.js";import"./SwitchBase-mlDnfciu.js";import"./FormGroup-BCCvC1EK.js";import"./FormControlLabel-C7djf5vw.js";import"./UploadDocumentField-BR83hr3z.js";import"./FileUpload-CAnEy6R5.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BsTPDqzB.js";import"./GridLegacy-DkRO5Enk.js";import"./ResearchProjectForm-CNOYhgNo.js";import"./TextFieldWithWordLimit-B0wFjvja.js";import"./AuthenticatedRequirement-CO42FRy0.js";import"./CertificationRequirement-t0gF94T_.js";import"./TwoFactorAuthEnabledRequirement-DTJhiW1m.js";import"./ValidationRequirement-DUDL0c0V.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-C7HySk6X.js";import"./RejectDataAccessRequestModal-ow5ZbWK9.js";import"./CannedRejectionDialog-DiL68yc4.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-ycX2jcUO.js";import"./Checkbox-DGUKfIt9.js";import"./Grid-3RO3DzDO.js";import"./upperFirst-CQALxJIQ.js";import"./_stringToArray-Wk_N1-ZK.js";const Xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const er=["Demo","DemoError"];export{o as Demo,n as DemoError,er as __namedExportsOrder,Xe as default};
