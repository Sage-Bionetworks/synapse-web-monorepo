import{jF as p}from"./iframe-_xC4R-9l.js";import{S as a}from"./SchemaDrivenAnnotationEditor-2nHAQDCF.js";import"./index-Chi_LkuB.js";import"./useEntity-CkbUyaNW.js";import"./pickBy-Da3KKOg8.js";import"./isString-CEuCb2E6.js";import"./_baseIteratee-qDJ48MbJ.js";import"./useQueries-1X25ETRf.js";import"./useSuspenseQuery-BY1RfPC9.js";import"./useInfiniteQuery-_AZmyoIA.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-B4ZZO_R4.js";import"./useSchema-Coiaw_GX.js";import"./index-CRbaquok.js";import"./enums-CX4W2WkL.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BQPGiiEy.js";import"./uniq-CkffBx9u.js";import"./forEach-CWOCpBhE.js";import"./Add-CJkC5eSg.js";import"./Grid-DCv41BH4.js";import"./ListItem-MZnaYUw3.js";import"./listItemButtonClasses-BMDJa5nh.js";import"./ListItemIcon-CyxJiq-5.js";import"./MenuItem-DRoOm8dg.js";import"./ListItemText-DFBc28tz.js";import"./ArrowUpward-CqR5FHJq.js";import"./ContentCopy-C-AtbhON.js";import"./FormControlLabel-p0SPpstb.js";import"./Checkbox-CVG3iDMB.js";import"./SwitchBase-CbqU8wJI.js";import"./FormGroup-DmhIZoIR.js";import"./RadioGroup-Cr5EaPni.js";import"./Radio-B2BFOAsU.js";import"./Slider-CwoVGIn-.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-CL4wb7EO.js";import"./DialogBase-Dp6M9JD0.js";import"./Close-BfP40Jkn.js";import"./HelpPopover-1mww7JNK.js";import"./MarkdownPopover-C9UGNyb0.js";import"./LightTooltip-C7ewj1jU.js";import"./MarkdownSynapse-Ct3w_uzW.js";import"./SkeletonButton-DYUdhb7U.js";import"./SkeletonInlineBlock-BJckmeYC.js";import"./SkeletonTable-8K81cLuT.js";import"./SkeletonParagraph-BJTsWPfq.js";import"./JsonSchemaForm-Dpot0jqK.js";import"./GridLegacy-BtNSoadh.js";import"./HelpTwoTone-CCjTEqTj.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-C9dxSi_y.js";import"./_createAggregator-BuUHNBCB.js";import"./_baseMap-BwHlx4Pm.js";import"./DateTimePicker-D2tli53_.js";import"./useMobilePicker-DFR52jrA.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-D-Vq-fjb.js";import"./index-CUKFaSIZ.js";import"./Chip-m593CfK4.js";import"./Tabs-B2Umgj7s.js";import"./KeyboardArrowRight-DOtI3rZ6.js";import"./Autocomplete-mpUHPepv.js";import"./usePreviousProps-D7oyLWJ9.js";import"./use-deep-compare-effect.esm-DFXjhKOc.js";import"./TextWidget-JWpbcO77.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
