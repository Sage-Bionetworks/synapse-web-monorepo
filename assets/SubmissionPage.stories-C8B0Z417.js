import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,kt as i,ku as E,H as s,kv as _,p as m,kw as I,kx as S,kc as O}from"./iframe-Bvh78Lip.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DUo93Eqp.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-Dx35BeTW.js";import"./useAccessRequirements-BtrKoIEU.js";import"./index-C5Az4rP9.js";import"./_baseOrderBy-Dpgrbaku.js";import"./_baseIteratee-CMAOpFF8.js";import"./_baseMap-Ba9XjSMD.js";import"./_baseEach-BEegoy1c.js";import"./useQueries-C_spzrWe.js";import"./useInfiniteQuery-Bs48Hq-k.js";import"./groupBy-jZ8Gi-za.js";import"./_createAggregator-sWV4ZS_3.js";import"./DialogBase-CCsdoegG.js";import"./Close-CJJqWftx.js";import"./HelpPopover-BLWEr8Pu.js";import"./MarkdownPopover-rYIJ3MR9.js";import"./LightTooltip-BdYR1aB0.js";import"./MarkdownSynapse-BqKPy748.js";import"./SkeletonButton-3kp2DVDd.js";import"./SkeletonInlineBlock-ferE3Pfl.js";import"./SkeletonTable-CLqiC9iF.js";import"./SkeletonParagraph-D3tb0h1Y.js";import"./EntityLink-CzlmBAmZ.js";import"./useEntity-DMQV6cN8.js";import"./pickBy-DHB3DoRP.js";import"./isString-DcoLED5O.js";import"./useSuspenseQuery-Bos4-4YQ.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-ZTP8hW3j.js";import"./useGetEntityHeaders-Bx8psGQr.js";import"./EntityIcon-B75MdgAf.js";import"./ErrorChip-Djs8R74t.js";import"./Chip-BCnYHX9c.js";import"./UserOrTeamBadge-CvJFA2d7.js";import"./UserBadge-C91cu101.js";import"./useUserBundle-EnZFVQAK.js";import"./MenuItem-CDGWVe-G.js";import"./Card-Bm2XEhIM.js";import"./TeamBadge-DgvY-lIb.js";import"./UnmanagedACTAccessRequirementItem-DhGUm8CE.js";import"./RequirementItem-BxBJ-KA3.js";import"./LockTwoTone-BPcbrwM4.js";import"./UserSearchBoxV2-ClY2XnBE.js";import"./useDebouncedEffect-Dr4MLt1r.js";import"./use-deep-compare-effect.esm-CFBLIdQm.js";import"./uniq-BLdVdnGW.js";import"./without-DhzvtXMG.js";import"./Select-aab027f3.esm-DNHmillR.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-BwCcvFYo.js";import"./SelfSignAccessRequirementItem-DD9qDdZS.js";import"./DataAccessRequestAccessorsFilesForm-BCbF2LbO.js";import"./enums-BY52EMN4.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-ae00TuhB.js";import"./RadioGroup-ClpaRU5c.js";import"./Radio-DFv6aSF6.js";import"./SwitchBase-CLePCnig.js";import"./FormGroup-BB1v2Ic7.js";import"./FormControlLabel-Clz1cXB5.js";import"./UploadDocumentField-BQlj-Yd7.js";import"./FileUpload-3OTWjyK1.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DP9rKbz8.js";import"./GridLegacy-DXQK7Suo.js";import"./ResearchProjectForm-B9JTFnSZ.js";import"./TextFieldWithWordLimit-BIBvCEe7.js";import"./AuthenticatedRequirement-D-pAhwIS.js";import"./CertificationRequirement-Cvt5cziZ.js";import"./TwoFactorAuthEnabledRequirement-CvR4Tsou.js";import"./ValidationRequirement-BNdrIB9-.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DESuzddd.js";import"./RejectDataAccessRequestModal-DO9ylRhp.js";import"./CannedRejectionDialog-DFlWMOV6.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-Cmxx7cdh.js";import"./Checkbox-pmNlMftZ.js";import"./Grid-eXtr296u.js";import"./upperFirst-D_buzMp1.js";import"./_stringToArray-B2PqjMtk.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
