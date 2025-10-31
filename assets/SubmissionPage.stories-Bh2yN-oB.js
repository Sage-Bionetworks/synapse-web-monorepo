import{g as I,k as S,n as t,a1 as O,am as g,b as e,kl as i,km as C,H as s,kn as l,p as m,ko as b,kp as T,k0 as A}from"./iframe-Ci1lmE8g.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-MDuV1Jt7.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-BoSZJ_9q.js";import"./useAccessRequirements-BcP6tXmo.js";import"./index-BdMb-1ps.js";import"./_baseOrderBy-hgHOx6Yr.js";import"./_baseIteratee-BQlpWk-E.js";import"./_baseMap-DOU_FLyJ.js";import"./_baseEach-C_dLu_fx.js";import"./useQueries-DsbpWbBj.js";import"./useInfiniteQuery-DWL-Og4B.js";import"./groupBy-CGpBq9nU.js";import"./_createAggregator-BD97Dewg.js";import"./DialogBase-BYGdPH-i.js";import"./Close-CELbEfBf.js";import"./HelpPopover-Dp5xAO-J.js";import"./MarkdownPopover-C8x7eb7i.js";import"./LightTooltip-D8-ypvp8.js";import"./MarkdownSynapse-3G1qoarh.js";import"./SkeletonButton-CC-6gNoS.js";import"./SkeletonInlineBlock-B2RYwmUI.js";import"./SkeletonTable-DkbE7er9.js";import"./SkeletonParagraph-ITJPOI8x.js";import"./EntityLink-Bzj0KVFg.js";import"./useEntity-vafuLvak.js";import"./pickBy-DBr0S374.js";import"./isString-D4RD_z4s.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DbW89d5B.js";import"./useGetEntityHeaders-DP9Iv32P.js";import"./EntityIcon-42iM6nRf.js";import"./ErrorChip-FIzpsWdF.js";import"./Chip-7ZjY8iwO.js";import"./UserOrTeamBadge-BLAOGy8C.js";import"./UserBadge-DRfGM4AR.js";import"./MenuItem-DNhPNPdH.js";import"./Card-B9m98vxz.js";import"./TeamBadge-BtVGBgEB.js";import"./UnmanagedACTAccessRequirementItem-DMzWDNsT.js";import"./RequirementItem-DP_I-Bz7.js";import"./LockTwoTone-CrK_l1K_.js";import"./UserSearchBoxV2-CViwSSrF.js";import"./useDebouncedEffect-B_A-YylX.js";import"./use-deep-compare-effect.esm-CoZjJuVi.js";import"./uniq-DZseOKB0.js";import"./without-BMXd1Ulk.js";import"./Select-aab027f3.esm-CQJYo76m.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-CYbs5Fpo.js";import"./SelfSignAccessRequirementItem-Bv1rwp1u.js";import"./DataAccessRequestAccessorsFilesForm-4VD9RVpb.js";import"./enums-DHUNt8f7.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-DuTCSii6.js";import"./RadioGroup-BSAFIhhK.js";import"./Radio-Dr9D4Szr.js";import"./SwitchBase-Dywev717.js";import"./FormGroup-BsM0vA4B.js";import"./FormControlLabel-CP9zrs5G.js";import"./UploadDocumentField-eYu-FnoW.js";import"./FileUpload-D1d29Wem.js";import"./ManagedACTAccessRequirementFormWikiWrapper-c_CnggJ9.js";import"./GridLegacy-DUg-By5k.js";import"./ResearchProjectForm-BfE4Y_v2.js";import"./TextFieldWithWordLimit-4grzBmCY.js";import"./AuthenticatedRequirement-Cw3I_2ni.js";import"./CertificationRequirement-QNLxH5mK.js";import"./TwoFactorAuthEnabledRequirement-CeYc8Ldq.js";import"./ValidationRequirement-CJLodIRz.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-CdsM9Yua.js";import"./RejectDataAccessRequestModal-DO9xO4xN.js";import"./CannedRejectionDialog-DSmatpaX.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-C00Ejex4.js";import"./Checkbox-CfXy5gYt.js";import"./Grid-C8ZSRzfO.js";import"./upperFirst-Cmu6lusX.js";import"./_stringToArray-BSKxh2zb.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
