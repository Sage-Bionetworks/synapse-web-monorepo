import{jx as p}from"./iframe-SpTPUL8m.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DqIhs_km.js";import"./index-Chi_LkuB.js";import"./useEntity-wFGgMglJ.js";import"./pickBy-lVBueDr9.js";import"./isString-CRjJcNPG.js";import"./_baseIteratee-CaM8Iugn.js";import"./useInfiniteQuery-BpbmMIh3.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CtG5jObx.js";import"./useSchema-0FPNLEjH.js";import"./index-BNnLEJV-.js";import"./enums-eDdn3xOo.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Dahxdq_T.js";import"./uniq-DWZFezQD.js";import"./forEach-CWOCpBhE.js";import"./Add-DbKCdcmW.js";import"./Grid-BjgyTgS9.js";import"./ListItem-C5FE55VF.js";import"./listItemButtonClasses-DD21Mqvg.js";import"./ListItemIcon-Pl_lgpo6.js";import"./MenuItem-DMW1-yIZ.js";import"./ListItemText-C8qeeOkT.js";import"./ArrowUpward-D5j68rmO.js";import"./ContentCopy-CPEJ87sr.js";import"./FormControlLabel-DqLQJsL_.js";import"./Checkbox-BJ4YMl8f.js";import"./SwitchBase-BbkaKoSO.js";import"./FormGroup-BRBfqQ_H.js";import"./RadioGroup-Bjuhxd8P.js";import"./Radio-CKRg1lRQ.js";import"./Slider-DHB0Y3k0.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Dh3Su1ip.js";import"./DialogBase-BJEwHP0p.js";import"./Close-CXggAjW9.js";import"./HelpPopover-BfVFLmxW.js";import"./MarkdownPopover-DmG1p_lZ.js";import"./LightTooltip-thM4wO9l.js";import"./MarkdownSynapse-D10-Vf-V.js";import"./SkeletonButton-BZ4aKRQm.js";import"./SkeletonInlineBlock-QplUKVpF.js";import"./SkeletonTable-BuAR6CBE.js";import"./SkeletonParagraph-CB5oiNEg.js";import"./JsonSchemaForm-CGv7IePy.js";import"./GridLegacy-GuhPfNSH.js";import"./HelpTwoTone-DxqQ5STp.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DByvYmsn.js";import"./_createAggregator-DscQkVaH.js";import"./_baseMap-BruZldJj.js";import"./DateTimePicker-BHZKE7CM.js";import"./useMobilePicker-BIoqT-XY.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-B4haAT7H.js";import"./index-BPOVYvhU.js";import"./Chip-BbzLJe0J.js";import"./Tabs-CQE3DpGg.js";import"./KeyboardArrowRight-D7j6nB_I.js";import"./Autocomplete-DjagCDDQ.js";import"./usePreviousProps-Cyr_peAw.js";import"./use-deep-compare-effect.esm-DwJuLYjs.js";import"./TextWidget-D6UNf_6Z.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Ir=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Ir as __namedExportsOrder,vr as default};
