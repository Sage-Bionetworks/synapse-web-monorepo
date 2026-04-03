import{jw as p}from"./iframe-ClOjSJTq.js";import{S as a}from"./SchemaDrivenAnnotationEditor-t2SsvhAT.js";import"./index-Chi_LkuB.js";import"./useEntity-B5q0foS7.js";import"./pickBy-tj_hzmtS.js";import"./isString-D-YS4RG8.js";import"./_baseIteratee-DSUbmYQr.js";import"./useInfiniteQuery-KGAKspLs.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BuxfqmKk.js";import"./useSchema-C2-SFb1G.js";import"./index-B-oHRSVO.js";import"./enums-BfvqQesP.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DVm10B22.js";import"./uniq-BzOjiWUl.js";import"./forEach-UWyboym_.js";import"./Add-B7iU1riW.js";import"./Grid-DffX279F.js";import"./ListItem-B5PwrZdH.js";import"./listItemButtonClasses-BJ5ATAmT.js";import"./ListItemIcon-xraxN0ek.js";import"./MenuItem-DYvQjb0q.js";import"./ListItemText-CB2nRxbw.js";import"./ArrowUpward-B2FJv0g_.js";import"./ContentCopy-CiPOjmQK.js";import"./FormControlLabel-CFZjeheO.js";import"./Checkbox-CeKJbUBf.js";import"./SwitchBase-CdsD8oG7.js";import"./FormGroup-CJnG9yeP.js";import"./RadioGroup-CW7vhLhh.js";import"./Radio-aXYQtjHX.js";import"./Slider-JtSSVQTI.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BJVxGzfJ.js";import"./DialogBase-B-Ztm902.js";import"./Close-Bm9lWJyo.js";import"./HelpPopover-C7jMTeEB.js";import"./MarkdownPopover-Bc65lpb5.js";import"./LightTooltip-BNOwvCMp.js";import"./MarkdownSynapse-BDWo9JUV.js";import"./SkeletonButton-_jksuL_Y.js";import"./SkeletonInlineBlock-BlfzAWSG.js";import"./SkeletonTable-j4z7TzDn.js";import"./SkeletonParagraph-C8wM_A5n.js";import"./JsonSchemaForm-DZf21J26.js";import"./GridLegacy-Co_eJg5n.js";import"./HelpTwoTone-DqQNSizo.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CA2ydlz7.js";import"./_createAggregator-Dz6W_S6v.js";import"./_baseMap-CzWHLApD.js";import"./DateTimePicker-C4nQYEpY.js";import"./useMobilePicker-CEF1ffmv.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DBRTwN3y.js";import"./index-35chbdE6.js";import"./Chip-CnxOiplN.js";import"./Tabs-9uGGmhyE.js";import"./KeyboardArrowRight-Ch43fRSY.js";import"./Autocomplete-SfvGNW1s.js";import"./usePreviousProps-D9lcDy2V.js";import"./use-deep-compare-effect.esm-CpkZffiw.js";import"./TextWidget-CrKc9GbU.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
