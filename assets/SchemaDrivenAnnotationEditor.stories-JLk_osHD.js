import{jF as p}from"./iframe-PKSisnYN.js";import{S as a}from"./SchemaDrivenAnnotationEditor-7GtOaSuP.js";import"./index-Chi_LkuB.js";import"./useEntity-Cv_M5zHw.js";import"./pickBy-CEueLmq4.js";import"./isString-DLYReQSx.js";import"./_baseIteratee-BO3lWvKN.js";import"./useQueries-DE5yqSSH.js";import"./useSuspenseQuery-CtKV56yt.js";import"./useInfiniteQuery-CbKeCSex.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-nzc7WWYK.js";import"./useSchema-DMdto6rB.js";import"./index-B1e14aj-.js";import"./enums-DBepWMdl.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-AR43v03m.js";import"./uniq-ni3FY8rS.js";import"./forEach-CWOCpBhE.js";import"./Add-V3OVXeJO.js";import"./Grid-Cd8xwGFy.js";import"./ListItem-Rh9ybIpc.js";import"./listItemButtonClasses-CQsaMkk1.js";import"./ListItemIcon-C6O0kFIb.js";import"./MenuItem-DV5diNve.js";import"./ListItemText-Cq51ykOU.js";import"./ArrowUpward-C-0RVuV0.js";import"./ContentCopy-s7LHRVFW.js";import"./FormControlLabel-oz1IItSj.js";import"./Checkbox-Df__YbMF.js";import"./SwitchBase-hDycEQAb.js";import"./FormGroup-C1MEjdUB.js";import"./RadioGroup-DPMb7QAr.js";import"./Radio-CQXLRDf5.js";import"./Slider-KsJE2Wvg.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-S4M52zPJ.js";import"./DialogBase-CB9fyCxz.js";import"./Close-B6DB3YsI.js";import"./HelpPopover-DzDKur2h.js";import"./MarkdownPopover-DS7FUQk-.js";import"./LightTooltip-8SVgZs3S.js";import"./MarkdownSynapse-xcQCt-re.js";import"./SkeletonButton-BGdnvIuV.js";import"./SkeletonInlineBlock-CSwI3yx9.js";import"./SkeletonTable-Dkrc7QOG.js";import"./SkeletonParagraph-C0R5SJWX.js";import"./JsonSchemaForm-lW8xS9WD.js";import"./GridLegacy-boRgCTp4.js";import"./HelpTwoTone-_jBD1Ct0.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-Bazr0He1.js";import"./_createAggregator-CRN_KOsZ.js";import"./_baseMap-B9PYQd7E.js";import"./DateTimePicker-BloeabSr.js";import"./useMobilePicker-CkJ-tfs9.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CQijo6xw.js";import"./index-CHPH14xa.js";import"./Chip-BQb8GEui.js";import"./Tabs-BdP0rsfW.js";import"./KeyboardArrowRight-MLpg2-Rj.js";import"./Autocomplete-D8_FPVde.js";import"./usePreviousProps-F4S7haKQ.js";import"./use-deep-compare-effect.esm-DoeHRFzR.js";import"./TextWidget-DKD_Sit6.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
