import{jJ as p}from"./iframe-T7oLJ25f.js";import{S as a}from"./SchemaDrivenAnnotationEditor-K9NuoRiq.js";import"./index-Chi_LkuB.js";import"./useEntity-CXW7ZXO6.js";import"./pickBy-LjsbNNdy.js";import"./isString-B3VyUCFl.js";import"./_baseIteratee-Dy1SfAsC.js";import"./useQueries-CYX4p4ut.js";import"./useSuspenseQuery-0xwwePGu.js";import"./useInfiniteQuery-D-UxbEMz.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BV62bEP6.js";import"./useSchema-V5eNYJSw.js";import"./index-CvP9dyfb.js";import"./enums-BgRoPhI5.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CLkct6tL.js";import"./uniq-B94JdzcS.js";import"./forEach-CWOCpBhE.js";import"./Add-CoTXSz6M.js";import"./Grid-D792T7zJ.js";import"./ListItem-CG491Iyl.js";import"./listItemButtonClasses-BHIkM2n8.js";import"./ListItemIcon-B0VdlQyb.js";import"./MenuItem-CcVKVUSq.js";import"./ListItemText-CDRq2pzX.js";import"./ArrowUpward-gVFJvzXK.js";import"./ContentCopy-DQnRUtV8.js";import"./FormControlLabel-FS1tnZLz.js";import"./Checkbox-R1y8ieM8.js";import"./SwitchBase-DDKFHFxJ.js";import"./FormGroup-B94opkzR.js";import"./RadioGroup-dAsmlyaq.js";import"./Radio-CAFZykjz.js";import"./Slider-Cb6pM63v.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-CRRWyf25.js";import"./DialogBase-J7aweyN2.js";import"./Close-1h43D8ey.js";import"./HelpPopover-DSXOOapj.js";import"./MarkdownPopover-BuaJIUS8.js";import"./LightTooltip-d_5FyQ04.js";import"./MarkdownSynapse-BEmtf9mM.js";import"./SkeletonButton-BbQ1D2mw.js";import"./SkeletonInlineBlock-DDBz5ks6.js";import"./SkeletonTable-Iucvd8oY.js";import"./SkeletonParagraph-O68Vr_JV.js";import"./JsonSchemaForm-BJkYczNP.js";import"./GridLegacy-DwFqcFmw.js";import"./HelpTwoTone-ZQcyZc3s.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BhY5Q9XV.js";import"./_createAggregator-aMp1lnyV.js";import"./_baseMap-Da-WRcVt.js";import"./DateTimePicker-B387e-vB.js";import"./useMobilePicker-C2hgrICS.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CMkqhLYZ.js";import"./index-BdhaPNFV.js";import"./Chip-CoqraAOn.js";import"./Tabs-DJr_c8Qj.js";import"./KeyboardArrowRight-CP_yZkxx.js";import"./Autocomplete-Digwf59V.js";import"./usePreviousProps-BHpARy7x.js";import"./use-deep-compare-effect.esm-DWCQDhwA.js";import"./TextWidget-CRfuxEHq.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
