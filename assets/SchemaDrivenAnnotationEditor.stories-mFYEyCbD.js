import{jF as T}from"./iframe-DVXODLNu.js";import{S as C}from"./SchemaDrivenAnnotationEditor-CHbj2cy4.js";import"./index-r8ZA1smB.js";import"./useEntity-DVoCZCK1.js";import"./pickBy-BK2OgJ-K.js";import"./isString-BA_dK8xI.js";import"./_baseIteratee-BHw4qJII.js";import"./useQueries-ByecndiH.js";import"./useSuspenseQuery-sm4bvu-Z.js";import"./useInfiniteQuery-BezuufV7.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-gxy6vIym.js";import"./useSchema-Dhpndgr4.js";import"./index-DHJVF4CD.js";import"./enums-D_pI--ew.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Bw65e-UW.js";import"./uniq-B5-F1PUr.js";import"./forEach-B8iwwgef.js";import"./Add-DpZS--qo.js";import"./Grid-PNkqt1O4.js";import"./ListItem-Cpe2-Ecz.js";import"./listItemButtonClasses-wVJFmvzZ.js";import"./ListItemIcon-BQKFVK-C.js";import"./MenuItem-BqHSezmF.js";import"./ListItemText-BQvtlLal.js";import"./ArrowUpward-DRrJfJWT.js";import"./ContentCopy-DW2s3-5f.js";import"./FormControlLabel-DTqn-dl-.js";import"./Checkbox-D5Ka3-kx.js";import"./SwitchBase-CkD1vswi.js";import"./FormGroup-HRUWJAS5.js";import"./RadioGroup-DE6lChWk.js";import"./Radio-B2qY6t1E.js";import"./Slider-nwBLwuQk.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-DPilllRq.js";import"./DialogBase-CV0H5xOa.js";import"./Close-CWDc50NR.js";import"./HelpPopover-095Yn2au.js";import"./MarkdownPopover-cDp6lRwo.js";import"./LightTooltip-UuB-IIfM.js";import"./MarkdownSynapse-CTK4Gw0-.js";import"./SkeletonButton-C9WhwSFv.js";import"./SkeletonInlineBlock-rd-Pq8Ur.js";import"./SkeletonTable-MyquJLbe.js";import"./SkeletonParagraph-DapPZsJe.js";import"./JsonSchemaForm-i5u971-B.js";import"./GridLegacy-DOmW3ulC.js";import"./HelpTwoTone-BMQgBbwS.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-tSGfwrdi.js";import"./_createAggregator-PfdPvP4Q.js";import"./_baseMap-CS6dt86a.js";import"./DateTimePicker-DYZW6Al-.js";import"./useMobilePicker-DQkqnuyC.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-sbfeXHws.js";import"./index-Bd7KE_sO.js";import"./Chip-Cr5hy2JG.js";import"./Tabs-CRUnoltU.js";import"./KeyboardArrowRight-C9wYV26D.js";import"./Autocomplete-HQne2WOX.js";import"./usePreviousProps-E5TmmVJE.js";import"./use-deep-compare-effect.esm-NBDLnfqg.js";import"./TextWidget-DKc8yb4f.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Lr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
