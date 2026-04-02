import{g as u,a as e,q as d,u as t,kq as i,kr as c,H as s,ks as R,l as m,kt as E,ku as _,a1 as I,dO as S,k9 as O}from"./iframe-DW4EtDFR.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BN8QwNMy.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BD1i8-1V.js";import"./useAccessRequirements-Bx-a7XZ6.js";import"./index-BLzBB5Yr.js";import"./_baseOrderBy-BtuaxwW1.js";import"./_baseIteratee-B5nmCdgY.js";import"./_baseMap-j4TtnkBh.js";import"./_baseEach-DJgCo8iQ.js";import"./useInfiniteQuery-ZPKFav0H.js";import"./groupBy-Ce682toM.js";import"./_createAggregator-CqC-U3qF.js";import"./DialogBase-CQkYTY7H.js";import"./Close-_nKTpQqj.js";import"./HelpPopover-BJUnqSJY.js";import"./MarkdownPopover-Ddkoqa14.js";import"./LightTooltip-RHqCPVzc.js";import"./MarkdownSynapse-BRThLhl9.js";import"./SkeletonButton-DsCjZbv1.js";import"./SkeletonInlineBlock-ItfWjoQ8.js";import"./SkeletonTable-ItfNMNmd.js";import"./SkeletonParagraph-B74Z-tR5.js";import"./EntityLink-DKmszXch.js";import"./useEntity-Br6tMZiC.js";import"./pickBy-DLXoSZ5t.js";import"./isString-BpTDfkdd.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CgWKW-Dr.js";import"./useGetEntityHeaders-_0Pc_0hH.js";import"./EntityIcon-DGgzKS3-.js";import"./ErrorChip-D5ySMl9c.js";import"./Chip-CUP-lTls.js";import"./UserOrTeamBadge-BEQSN6p-.js";import"./UserBadge-BDGrhvHF.js";import"./useUserBundle-0eDzSDJE.js";import"./MenuItem-Cc9sDD7i.js";import"./Card-C9YZLq29.js";import"./TeamBadge-Rwvpw6hT.js";import"./UnmanagedACTAccessRequirementItem-BiwXhEfm.js";import"./RequirementItem-DDwdSzOg.js";import"./LockTwoTone-B77Lw-lU.js";import"./UserSearchBoxV2-qrLgBU6m.js";import"./useDebouncedEffect-CjPG4ax-.js";import"./use-deep-compare-effect.esm-D866EjLt.js";import"./uniq-BIBkykeI.js";import"./without-DnE8OcVf.js";import"./Select-aab027f3.esm-D_ciEZ4i.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-DclwLh6Y.js";import"./SelfSignAccessRequirementItem-O_CLVAQe.js";import"./DataAccessRequestAccessorsFilesForm-GgOKBHlN.js";import"./enums-Ba9oSUiY.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-DEQOBFFK.js";import"./RadioGroup-CkA35aY6.js";import"./Radio-Hm72npc_.js";import"./SwitchBase-DzaBh5YX.js";import"./FormGroup-DdOV-hoL.js";import"./FormControlLabel-D6ErXhmT.js";import"./UploadDocumentField-BivWPkQk.js";import"./FileUpload-EOPsXE2X.js";import"./ManagedACTAccessRequirementFormWikiWrapper-B68jMJqL.js";import"./GridLegacy-B5TSzA3p.js";import"./ResearchProjectForm-1y6pQtOp.js";import"./TextFieldWithWordLimit-CNjR0llF.js";import"./AuthenticatedRequirement-CoJsLwVc.js";import"./CertificationRequirement-Blfehv_w.js";import"./TwoFactorAuthEnabledRequirement-BT9_mf8e.js";import"./ValidationRequirement-D99SPbY_.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-Cvce0hiO.js";import"./RejectDataAccessRequestModal-ATDdF37U.js";import"./CannedRejectionDialog-CPChhTUN.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-BP8fvy3x.js";import"./Checkbox-DrHdzPHL.js";import"./Grid-Behu8C3L.js";import"./upperFirst-shF-dUFl.js";import"./_stringToArray-DBwZnq-Z.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${R(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${E(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
