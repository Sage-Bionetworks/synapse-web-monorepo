import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,ku as i,kv as C,H as s,kw as l,p as m,kx as b,ky as T,k9 as A}from"./iframe-TYPaZ6LN.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-D4bCoxVg.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-10I-1_fr.js";import"./useAccessRequirements-D7tv4NHL.js";import"./index-C_dXWgcu.js";import"./_baseOrderBy-D844RP_3.js";import"./_baseIteratee-BPacOvsO.js";import"./_baseMap-DhxkwXW9.js";import"./_baseEach-WuiEJq7T.js";import"./useQueries-DChvZEmX.js";import"./useInfiniteQuery-DGBLsrXS.js";import"./groupBy-Dc0sMzgw.js";import"./_createAggregator-CRIUnh4s.js";import"./DialogBase-2bW80153.js";import"./Close-5hmioipF.js";import"./HelpPopover-7_yWsHqt.js";import"./MarkdownPopover-DXfCvJzS.js";import"./LightTooltip-DMsvcwJu.js";import"./MarkdownSynapse-DUiCZcKp.js";import"./SkeletonButton-BeXgw9Nt.js";import"./SkeletonInlineBlock-BBtOGIqx.js";import"./SkeletonTable-CKGrlPmE.js";import"./SkeletonParagraph-CEVUjrsB.js";import"./EntityLink-q4AGWehy.js";import"./useEntity-TVgfB3Kt.js";import"./pickBy-Dfp_86sg.js";import"./isString-DFDrWyde.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DlfQKmuq.js";import"./useGetEntityHeaders-C92eLHA4.js";import"./EntityIcon-CCyQyqMS.js";import"./ErrorChip-BRFDF3Dk.js";import"./Chip-CqTIrq2s.js";import"./UserOrTeamBadge-nX_mdz3g.js";import"./UserBadge-AucszkFw.js";import"./MenuItem--XzA7FJc.js";import"./Card-CPwsCsQR.js";import"./TeamBadge-IJZhooCY.js";import"./UnmanagedACTAccessRequirementItem-C8AT8V09.js";import"./RequirementItem-DASNMRUb.js";import"./LockTwoTone-CpH-vYuP.js";import"./UserSearchBoxV2-BE73OkBn.js";import"./useDebouncedEffect-BiUjU_HC.js";import"./use-deep-compare-effect.esm-CZAnXGsk.js";import"./uniq-CrS56XKU.js";import"./without-6D7HEseO.js";import"./Select-aab027f3.esm-BSYaODl1.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-CrpbXYH5.js";import"./SelfSignAccessRequirementItem-DBsYq-fe.js";import"./DataAccessRequestAccessorsFilesForm-Z_v8WXdE.js";import"./enums-zL8CB_sd.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-DYN9xARs.js";import"./RadioGroup-DFMIqGd-.js";import"./Radio-BHCqxIY1.js";import"./SwitchBase-Cm31-ZuN.js";import"./FormGroup-BREKUiMV.js";import"./FormControlLabel-CFIZDz1l.js";import"./UploadDocumentField-LLUkWum-.js";import"./FileUpload-Bp-RVieb.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DgywRFqc.js";import"./GridLegacy-C8o6hZh3.js";import"./ResearchProjectForm-DL8vkndV.js";import"./TextFieldWithWordLimit-Ziw9hJ2N.js";import"./AuthenticatedRequirement-rUm1uCJ5.js";import"./CertificationRequirement-DIseP8B3.js";import"./TwoFactorAuthEnabledRequirement-Bv2-pqHO.js";import"./ValidationRequirement-CzsrVgzT.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-D73qxXnw.js";import"./RejectDataAccessRequestModal-DiL5U41H.js";import"./CannedRejectionDialog-Bli0vplp.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-DPmq4FUs.js";import"./Checkbox-DwR_QE3H.js";import"./Grid-DpofsVqj.js";import"./upperFirst-DXXGyrOf.js";import"./_stringToArray-RVGqktkG.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
