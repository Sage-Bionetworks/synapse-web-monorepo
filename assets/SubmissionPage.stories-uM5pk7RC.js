import{g as I,k as S,n as t,a1 as O,am as g,b as e,kl as i,km as C,H as s,kn as l,p as m,ko as b,kp as T,k0 as A}from"./iframe-SFoYirDz.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-Dd005baD.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-Cj-C6KXm.js";import"./useAccessRequirements-DvvBY_ie.js";import"./index-CPHx5Zd7.js";import"./_baseOrderBy-DPfTpwXq.js";import"./_baseIteratee-3mtgIhyy.js";import"./_baseMap-CF5SXoQH.js";import"./_baseEach-Dvvfy_q_.js";import"./useQueries-wygqzh_8.js";import"./useInfiniteQuery-BXG3TdfN.js";import"./groupBy-YHSKrCB9.js";import"./_createAggregator-BdR2456o.js";import"./DialogBase-inZlHGFS.js";import"./Close-BJ49k-BP.js";import"./HelpPopover-BLir_Etv.js";import"./MarkdownPopover-DPeUsc6W.js";import"./LightTooltip--axdJ8pX.js";import"./MarkdownSynapse-CC4Dnhut.js";import"./SkeletonButton-Di0Yg_Uv.js";import"./SkeletonInlineBlock-DrZRW3Px.js";import"./SkeletonTable-Drqg7wxh.js";import"./SkeletonParagraph-D_k7-Stv.js";import"./EntityLink-D9YekV6C.js";import"./useEntity-DJx9kr6F.js";import"./pickBy-B6e5906y.js";import"./isString-axfUnF0q.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Dn65PMqz.js";import"./useGetEntityHeaders-co6y1apF.js";import"./EntityIcon-FndRt8id.js";import"./ErrorChip-D9EHEyWl.js";import"./Chip-05FYIvnY.js";import"./UserOrTeamBadge-QF8a2JC_.js";import"./UserBadge-DEHXVbtz.js";import"./MenuItem-CfJpQ_dM.js";import"./Card-CkGOMELO.js";import"./TeamBadge-cIc67SuS.js";import"./UnmanagedACTAccessRequirementItem-Db78W_xp.js";import"./RequirementItem-GPS4n-8d.js";import"./LockTwoTone-DMxdCNIB.js";import"./UserSearchBoxV2-CgrXnVln.js";import"./useDebouncedEffect-CSXLwZhB.js";import"./use-deep-compare-effect.esm-CucFAbzx.js";import"./uniq-BBRbUiEP.js";import"./without-5Jyro_ef.js";import"./Select-aab027f3.esm-hNKGDf6H.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-DNLS3GNL.js";import"./SelfSignAccessRequirementItem-Cez3AmgT.js";import"./DataAccessRequestAccessorsFilesForm-Dipeqa_5.js";import"./enums-a14lInQj.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-QqtNGf0r.js";import"./RadioGroup-CFEtrjAe.js";import"./Radio-DepSv39E.js";import"./SwitchBase-B1PJBJjS.js";import"./FormGroup-D_baejGI.js";import"./FormControlLabel-BdI7Ynze.js";import"./UploadDocumentField-e-cU9r_k.js";import"./FileUpload-CA-14wyG.js";import"./ManagedACTAccessRequirementFormWikiWrapper-shBF3Ww8.js";import"./GridLegacy-C5WRGkuT.js";import"./ResearchProjectForm-JFU7d0sz.js";import"./TextFieldWithWordLimit-Dp33alyk.js";import"./AuthenticatedRequirement-Bvc6v0MB.js";import"./CertificationRequirement-DWVLwQhx.js";import"./TwoFactorAuthEnabledRequirement-DRYL4ZCg.js";import"./ValidationRequirement-BHZNfC0T.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-DACNKwlr.js";import"./RejectDataAccessRequestModal-DRKSW9Q6.js";import"./CannedRejectionDialog-BLv8yY5-.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-Sxdwb5-l.js";import"./Checkbox-C0ba4mce.js";import"./Grid-DgxOnKrN.js";import"./upperFirst-q4MXDRJD.js";import"./_stringToArray-CSjYbj2F.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
