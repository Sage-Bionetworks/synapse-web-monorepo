import{jJ as p}from"./iframe-D-KER6Qh.js";import{S as a}from"./SchemaDrivenAnnotationEditor-aa-NK8zR.js";import"./index-Chi_LkuB.js";import"./useEntity-BOsr6wZ7.js";import"./pickBy-GQztHFvZ.js";import"./isString-DdCXbvgk.js";import"./_baseIteratee-DEkFHii0.js";import"./useQueries-VDAmT_8W.js";import"./useSuspenseQuery-BSi61cfF.js";import"./useInfiniteQuery-DdL0acdR.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Bj7rDXSp.js";import"./useSchema-C780Bq1D.js";import"./index-Bebi_iQT.js";import"./enums-CKCWh5HL.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DWPf_RCf.js";import"./uniq-B53z5Mvx.js";import"./forEach-CWOCpBhE.js";import"./Add-UeiDzlnT.js";import"./Grid-8grLPPZa.js";import"./ListItem-yGCAuYJI.js";import"./listItemButtonClasses-BQMHwEyd.js";import"./ListItemIcon-cBO_aXnj.js";import"./MenuItem-Dh0Z5Zi9.js";import"./ListItemText-CSiIWwEZ.js";import"./ArrowUpward-DeOaIoYG.js";import"./ContentCopy-DVZQE5-Q.js";import"./FormControlLabel-DYFts0_i.js";import"./Checkbox-BxWUJH6V.js";import"./SwitchBase-DLfqjyvF.js";import"./FormGroup-D_F3rPqf.js";import"./RadioGroup-1-xWnpnx.js";import"./Radio-CeAejfGH.js";import"./Slider-BU-Wjqr8.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-CSFf9HzN.js";import"./DialogBase-SiFub7hc.js";import"./Close-eai8_-Nr.js";import"./HelpPopover-D8a4-Hdu.js";import"./MarkdownPopover-ZXOIcEPl.js";import"./LightTooltip-CmTwAHaz.js";import"./MarkdownSynapse-CV2HCz36.js";import"./SkeletonButton-BHBiM-A7.js";import"./SkeletonInlineBlock-BwJZpIPy.js";import"./SkeletonTable-C--yRYi2.js";import"./SkeletonParagraph-DuJaGlPU.js";import"./JsonSchemaForm-BFpuTbKv.js";import"./GridLegacy-CLSO357H.js";import"./HelpTwoTone-dfhX4dwQ.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CifytuAK.js";import"./_createAggregator-Ce1ky4rV.js";import"./_baseMap-C2UuXXF2.js";import"./DateTimePicker-DXYLZXLO.js";import"./useMobilePicker-DS1ZAT9m.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DCzwHZPv.js";import"./index-C6MZRWmF.js";import"./Chip-BMsDoxJ4.js";import"./Tabs-BVfSM2on.js";import"./KeyboardArrowRight-CyL37h5x.js";import"./Autocomplete-DwB7ZQ_5.js";import"./usePreviousProps-DpBYS96o.js";import"./use-deep-compare-effect.esm-CJo0Bo62.js";import"./TextWidget-Ahy2xo8E.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
