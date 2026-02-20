import{jG as p}from"./iframe-Cb9YNozx.js";import{S as a}from"./SchemaDrivenAnnotationEditor-D_78_5LF.js";import"./index-Chi_LkuB.js";import"./useEntity-DyZqXoe_.js";import"./pickBy-Itep66an.js";import"./isString-T56SNEqc.js";import"./_baseIteratee-Crm1dtkV.js";import"./useQueries-Ba1QGbRl.js";import"./useSuspenseQuery-DijQnciR.js";import"./useInfiniteQuery-CgLSPwL6.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CG9M7-op.js";import"./useSchema-Cr7bobAZ.js";import"./index-CFB7FTvw.js";import"./enums-9EnIqiIL.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-C8hjnQXk.js";import"./uniq-B_kjh9wh.js";import"./forEach-CWOCpBhE.js";import"./Add-DatHcS7X.js";import"./Grid-L5kZtU_P.js";import"./ListItem-DmdFXjd_.js";import"./listItemButtonClasses-BiDZNeUi.js";import"./ListItemIcon-Tqr0dXjX.js";import"./MenuItem-WtaSofOf.js";import"./ListItemText-B57J_0xk.js";import"./ArrowUpward-BqOs2YUk.js";import"./ContentCopy-CU0mDjXq.js";import"./FormControlLabel-DLrXg_In.js";import"./Checkbox-nIJeGWWn.js";import"./SwitchBase-Dg-qdkEc.js";import"./FormGroup-DLCtR279.js";import"./RadioGroup-Bb5it0eo.js";import"./Radio-CPckAT_J.js";import"./Slider-CzjXgNox.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Cy0nFlwJ.js";import"./DialogBase-CgXBzYW4.js";import"./Close-CQaXLTm7.js";import"./HelpPopover-BQnaThHT.js";import"./MarkdownPopover-DhA9uHcY.js";import"./LightTooltip-CdqBbLFh.js";import"./MarkdownSynapse-DVECeIy7.js";import"./SkeletonButton-n18AgO8O.js";import"./SkeletonInlineBlock-Cy31Etok.js";import"./SkeletonTable-D9G853Nf.js";import"./SkeletonParagraph-C98TKSTr.js";import"./JsonSchemaForm-CXj64zjv.js";import"./GridLegacy-Dc0OtKIb.js";import"./HelpTwoTone-C66zQCmq.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-b5pI-3ia.js";import"./_createAggregator-H-JN2VCX.js";import"./_baseMap-CaFbY6tk.js";import"./DateTimePicker-Bn-0bN69.js";import"./useMobilePicker-BUkdnJvP.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CWXE8_bW.js";import"./index-_wJIgEa8.js";import"./Chip-DkiZ-DGD.js";import"./Tabs-B3of1-e9.js";import"./KeyboardArrowRight-BQ8BL_4P.js";import"./Autocomplete-BAhT-HwX.js";import"./usePreviousProps-CuwqmkqL.js";import"./use-deep-compare-effect.esm-DRlUfThG.js";import"./TextWidget-CsEBjRG-.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Er={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const qr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,qr as __namedExportsOrder,Er as default};
