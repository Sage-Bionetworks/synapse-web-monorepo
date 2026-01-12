import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,kr as i,ks as E,H as s,kt as _,p as m,ku as I,kv as S,ka as O}from"./iframe-CaOcC-hf.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-q6f3nDmL.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-CqK4Cxw8.js";import"./useAccessRequirements-DIAzDHFU.js";import"./index-DGAj4kvP.js";import"./_baseOrderBy-DPMMd0k9.js";import"./_baseIteratee-CnGLSoYc.js";import"./_baseMap-DQ2Ub_HZ.js";import"./_baseEach-DGJRiyKO.js";import"./useQueries-DwQcF1rT.js";import"./useInfiniteQuery-DsHtYM7m.js";import"./groupBy-i2-grRQq.js";import"./_createAggregator-C9TVrnWc.js";import"./DialogBase-Dn94ypHd.js";import"./Close-7gN2buzZ.js";import"./HelpPopover-DtGoLtv4.js";import"./MarkdownPopover-pxj3Gfsw.js";import"./LightTooltip-DLMcdQ8O.js";import"./MarkdownSynapse-Bu_iQFQg.js";import"./SkeletonButton-C1Ne2e4S.js";import"./SkeletonInlineBlock-CXC8p12o.js";import"./SkeletonTable-BGTjeLmw.js";import"./SkeletonParagraph-DlGa_aoP.js";import"./EntityLink-WjLoApPJ.js";import"./useEntity-BdQEsk8n.js";import"./pickBy-8SjG7ER4.js";import"./isString-BgQb4HBW.js";import"./useSuspenseQuery-D6gXheFj.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CNIm-M4T.js";import"./useGetEntityHeaders-DIFG2Xdd.js";import"./EntityIcon-CDcpa4HC.js";import"./ErrorChip-IKXBAE43.js";import"./Chip-B_m5Zg1D.js";import"./UserOrTeamBadge-Bc306Ybt.js";import"./UserBadge-BkOupbtC.js";import"./useUserBundle-Dyiy-2qt.js";import"./MenuItem-BUoZ5k6v.js";import"./Card-CpYJILgz.js";import"./TeamBadge-C9LBQNlY.js";import"./UnmanagedACTAccessRequirementItem-BbqdBpCt.js";import"./RequirementItem-BK2EM-qq.js";import"./LockTwoTone-vb0dVqHq.js";import"./UserSearchBoxV2-iTRPit4b.js";import"./useDebouncedEffect-BndS4jSX.js";import"./use-deep-compare-effect.esm-fXqDiM5e.js";import"./uniq-CMIq24Kg.js";import"./without-mgekjG79.js";import"./Select-aab027f3.esm-DIlYLWDx.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-Je_MUsj4.js";import"./SelfSignAccessRequirementItem-BocEkfGF.js";import"./DataAccessRequestAccessorsFilesForm-H-5DqZBz.js";import"./enums-BtaxbSII.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-CdV3AjAj.js";import"./RadioGroup-DkwB7FNs.js";import"./Radio-C884L7vy.js";import"./SwitchBase-19wbeUii.js";import"./FormGroup-C-VqjZ7_.js";import"./FormControlLabel-C2Rm-ZU_.js";import"./UploadDocumentField-S250ZEz1.js";import"./FileUpload-CDCu6Alw.js";import"./ManagedACTAccessRequirementFormWikiWrapper-F5MUJm5H.js";import"./GridLegacy-D85eKpKn.js";import"./ResearchProjectForm-_JS7xN9p.js";import"./TextFieldWithWordLimit-ClyIqQ8x.js";import"./AuthenticatedRequirement-fN7_Q5wY.js";import"./CertificationRequirement-BWGJWsSb.js";import"./TwoFactorAuthEnabledRequirement-BhTS-nbQ.js";import"./ValidationRequirement-DrZKbtdy.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-_IhBwHND.js";import"./RejectDataAccessRequestModal-cuiOQu_l.js";import"./CannedRejectionDialog-B7bRoFt9.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-D38gahaL.js";import"./Checkbox-wHAkxbLY.js";import"./Grid-BGFct7I5.js";import"./upperFirst-DCMIqk-L.js";import"./_stringToArray-Bdc8LerX.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
