import{jF as T}from"./iframe-k9YwU_Xc.js";import{S as C}from"./SchemaDrivenAnnotationEditor-DEHkTHdM.js";import"./index-r8ZA1smB.js";import"./useEntity-DLxNvIyy.js";import"./pickBy-CBoyaqdZ.js";import"./isString-D-byzQtq.js";import"./_baseIteratee-DxLFM1hL.js";import"./useQueries-J55c1hQt.js";import"./useSuspenseQuery-CiFSWrMs.js";import"./useInfiniteQuery-CV6-OEbg.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CRLaABuD.js";import"./useSchema-CGMKM3_8.js";import"./index-BmfbG0Tc.js";import"./enums-ztILG7tN.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CNGY3RY2.js";import"./uniq-Dd01wqMQ.js";import"./forEach-B8iwwgef.js";import"./Add-CAf1C3bQ.js";import"./Grid-G8CgmtPB.js";import"./ListItem-DH0fqhPz.js";import"./listItemButtonClasses-COA1h9CO.js";import"./ListItemIcon-DoLyad5-.js";import"./MenuItem-xt1g1Ufs.js";import"./ListItemText-CdQKXyoQ.js";import"./ArrowUpward-C2Gk_ygm.js";import"./ContentCopy-DiVpB4uu.js";import"./FormControlLabel-DpD-rxj4.js";import"./Checkbox-DpmckRKo.js";import"./SwitchBase-B6MbIRzb.js";import"./FormGroup-BSxqv7UI.js";import"./RadioGroup-Cn0XWui1.js";import"./Radio-zHF2dm5y.js";import"./Slider-gwVZ8cHs.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-CAwv6LBe.js";import"./DialogBase-Gl_HIGD-.js";import"./Close-DFr4W5W5.js";import"./HelpPopover-dwgbsbh_.js";import"./MarkdownPopover-DALnZxkA.js";import"./LightTooltip-mwT1Csao.js";import"./MarkdownSynapse-Dx4lD55G.js";import"./SkeletonButton-BEjusTzn.js";import"./SkeletonInlineBlock-Cb_-AWMb.js";import"./SkeletonTable-aVeOh9ct.js";import"./SkeletonParagraph-Btg7J19e.js";import"./JsonSchemaForm-CwG2-Ihm.js";import"./GridLegacy-BXFtKdlm.js";import"./HelpTwoTone-DXRutCFa.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CiQaJIPI.js";import"./_createAggregator-ByllODrJ.js";import"./_baseMap-B172oB3N.js";import"./DateTimePicker-DWYoMeHi.js";import"./useMobilePicker-DwOXXeCE.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-xFLYHLEt.js";import"./index-DfC-1pI_.js";import"./Chip-CKkKYJUZ.js";import"./Tabs-DEQkuR_5.js";import"./KeyboardArrowRight-Do7yGKSb.js";import"./Autocomplete-Oan6vMQ3.js";import"./usePreviousProps-C2vfI3xn.js";import"./use-deep-compare-effect.esm-D2PrD07D.js";import"./TextWidget-BBBQeNTI.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Lr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var c,d,y;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...(y=(d=e.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var u,h,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var S,l,A;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...(A=(l=o.parameters)==null?void 0:l.docs)==null?void 0:A.source}}};var f,v,I;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...(I=(v=n.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var E,q,b;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    validationSchema: {
      $schema: 'http://json-schema.org/draft-07/schema#',
      $id: \`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/\${mockSchemaBinding.jsonSchemaVersionInfo.$id}\`,
      type: 'object',
      properties: {
        country: {
          enum: ['USA', 'CA'],
          description: 'Test description for country property'
        },
        showStringArray: {
          type: 'boolean'
        }
      },
      required: ['country'],
      allOf: [{
        if: {
          properties: {
            country: {
              const: 'USA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            state: {
              type: 'string'
            }
          },
          required: ['state']
        }
      }, {
        if: {
          properties: {
            country: {
              const: 'CA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            province: {
              type: 'string'
            }
          },
          required: ['province']
        }
      }, {
        if: {
          properties: {
            showStringArray: {
              const: true
            }
          },
          required: ['showStringArray']
        },
        then: {
          properties: {
            stringArray: {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          }
        }
      }]
    }
  }
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Mr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Mr as __namedExportsOrder,Lr as default};
