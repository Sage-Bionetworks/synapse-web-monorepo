import{jx as p}from"./iframe-Bq2Ob2aK.js";import{S as a}from"./SchemaDrivenAnnotationEditor-52PESE78.js";import"./index-Chi_LkuB.js";import"./useEntity-RdLrWF5v.js";import"./pickBy-CIbwfc1B.js";import"./isString-BbppNPY9.js";import"./_baseIteratee-CN9fj1bw.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-Ds4aQTI9.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CjWODRIC.js";import"./useSchema-e-QSt7fV.js";import"./index-DRfDzJRm.js";import"./enums-BFgsakBj.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BB0shV65.js";import"./uniq-BgZaMtMO.js";import"./forEach-UWyboym_.js";import"./Add-CXe9gEp8.js";import"./Grid-Bly1A-LN.js";import"./ListItem-M-np0-oS.js";import"./listItemButtonClasses-BDHYK_ZD.js";import"./ListItemIcon-C3FFMASe.js";import"./MenuItem-QKEL9EzE.js";import"./ListItemText-B7v3xLhH.js";import"./ArrowUpward-B-ZslTCe.js";import"./ContentCopy-DnLBvf60.js";import"./FormControlLabel-HJWDlDWs.js";import"./Checkbox-1GF_U2bt.js";import"./SwitchBase-C5-igteL.js";import"./FormGroup-C_b7b_WO.js";import"./RadioGroup-5LCSUqsC.js";import"./Radio-BwaWw5Pp.js";import"./Slider-7F0AJMrp.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Bu-Eb5tt.js";import"./DialogBase-94P046rC.js";import"./Close-UeiWMwwR.js";import"./HelpPopover-CG_-BC6G.js";import"./MarkdownPopover-CtjBz5l1.js";import"./LightTooltip-CzYg_hTr.js";import"./MarkdownSynapse-Dhzef1qm.js";import"./SkeletonButton-BGK0wFQC.js";import"./SkeletonInlineBlock-CmYjNg7h.js";import"./SkeletonTable-BBXhhxxV.js";import"./SkeletonParagraph-LdyaQqI_.js";import"./JsonSchemaForm-DaP5zjDn.js";import"./GridLegacy-Gvkq71cg.js";import"./HelpTwoTone-DWJ56QYb.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-UkkrJNDD.js";import"./_createAggregator-WaSn0SUK.js";import"./_baseMap-D4oR6jyW.js";import"./DateTimePicker-DIj_kSqf.js";import"./useMobilePicker-DX8YpxPL.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-B3QjXknZ.js";import"./index-BURFaEcg.js";import"./Chip-6y5YmXDt.js";import"./Tabs-C2iiCVGI.js";import"./KeyboardArrowRight-BfRM3oqW.js";import"./Autocomplete-09y2S2VY.js";import"./usePreviousProps-DZM5n9-N.js";import"./use-deep-compare-effect.esm-DfQ1MwPw.js";import"./TextWidget-CAD_1tQk.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Er=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Er as __namedExportsOrder,Ir as default};
