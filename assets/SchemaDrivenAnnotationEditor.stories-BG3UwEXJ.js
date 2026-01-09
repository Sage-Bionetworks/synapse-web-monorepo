import{jF as p}from"./iframe-BCo6xRtR.js";import{S as a}from"./SchemaDrivenAnnotationEditor-FXnSt2yT.js";import"./index-Chi_LkuB.js";import"./useEntity-DdatXp-C.js";import"./pickBy-7bpIkYUP.js";import"./isString-Bnn4G-E_.js";import"./_baseIteratee-TfZ3SFX4.js";import"./useQueries-DIyvlilN.js";import"./useSuspenseQuery-DtqIfE1u.js";import"./useInfiniteQuery-DNwGIq_T.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BlCrwPzV.js";import"./useSchema-DPqzaFop.js";import"./index-18kKsMGy.js";import"./enums-BIUUD9kO.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BZ-7nqlo.js";import"./uniq-BgtH7xA4.js";import"./forEach-CWOCpBhE.js";import"./Add-D9kNH8pK.js";import"./Grid-DdgWYWNa.js";import"./ListItem-D_ghWDd2.js";import"./listItemButtonClasses-DPiL5uzD.js";import"./ListItemIcon-D23xkNxm.js";import"./MenuItem-Dt5CKkV1.js";import"./ListItemText-BqtBGevl.js";import"./ArrowUpward-BKzaEwEl.js";import"./ContentCopy-DwV81fuS.js";import"./FormControlLabel-BQqHqMeR.js";import"./Checkbox-CtnxVUZk.js";import"./SwitchBase-ClCTg-Cz.js";import"./FormGroup-DVmOcGub.js";import"./RadioGroup-DuetIKYr.js";import"./Radio-CLhSN2MS.js";import"./Slider-By29WlZF.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-DI4QV0Bv.js";import"./DialogBase-CdXHsKxC.js";import"./Close-DWxxPOfT.js";import"./HelpPopover-COi1c2gB.js";import"./MarkdownPopover-xrdPtb-B.js";import"./LightTooltip-CCtrwSvI.js";import"./MarkdownSynapse-CwD5nz4r.js";import"./SkeletonButton-Di7WZDoT.js";import"./SkeletonInlineBlock-Oo_uHdtx.js";import"./SkeletonTable-CE_fO4U2.js";import"./SkeletonParagraph-BBZfUnUj.js";import"./JsonSchemaForm-0rWQVnl1.js";import"./GridLegacy-1sURH_k4.js";import"./HelpTwoTone-xP0iOTtR.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DvbguHva.js";import"./_createAggregator-BKrwbe37.js";import"./_baseMap-BjvZOnjw.js";import"./DateTimePicker-DivWCsQL.js";import"./useMobilePicker-VffWu33C.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DTCjSwe0.js";import"./index-BIDqU31Y.js";import"./Chip-_-7K_QD-.js";import"./Tabs-Cwu6KrZK.js";import"./KeyboardArrowRight-edixuPzz.js";import"./Autocomplete-5aBaMsEu.js";import"./usePreviousProps-D9BnOnjf.js";import"./use-deep-compare-effect.esm-BzNt_zAg.js";import"./TextWidget-BBkQ6tsg.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const br=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,br as __namedExportsOrder,qr as default};
