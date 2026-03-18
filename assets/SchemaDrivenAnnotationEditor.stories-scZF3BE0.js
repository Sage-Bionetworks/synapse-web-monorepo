import{jx as p}from"./iframe-C2kEGB7j.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CEhhZ0dm.js";import"./index-Chi_LkuB.js";import"./useEntity-D3-Hp30Z.js";import"./pickBy-Dzuflwg7.js";import"./isString-CogNup7E.js";import"./_baseIteratee-5rUV_LX2.js";import"./useInfiniteQuery-7NJwUk3W.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-VWT-RUCI.js";import"./useSchema-cI9tjz7k.js";import"./index-BrSB2nvZ.js";import"./enums-Dz8tuVcS.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-mV2SNSx4.js";import"./uniq-C68Gwzxs.js";import"./forEach-CWOCpBhE.js";import"./Add-CJEyajv7.js";import"./Grid-Dx-wlIwj.js";import"./ListItem-CDv6EZgt.js";import"./listItemButtonClasses-DdLkHwtt.js";import"./ListItemIcon-DhmRqz_1.js";import"./MenuItem-BNHT0Gz0.js";import"./ListItemText-Co5Fwvtf.js";import"./ArrowUpward-DyfprIQp.js";import"./ContentCopy-Bnj3eY2o.js";import"./FormControlLabel-DWUczytV.js";import"./Checkbox-CbGSUy_e.js";import"./SwitchBase-CwCVifNx.js";import"./FormGroup-TTNxP9Oz.js";import"./RadioGroup-I_S8jWme.js";import"./Radio-BFY1N0l5.js";import"./Slider-Cahpm2vv.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BbdKEfo2.js";import"./DialogBase-CW3j8lBK.js";import"./Close-zOC26mc8.js";import"./HelpPopover-CBvQB68Y.js";import"./MarkdownPopover-CcmAtHQ5.js";import"./LightTooltip-Bc96vcP5.js";import"./MarkdownSynapse-F7h7ulwU.js";import"./SkeletonButton-B3EXz-nP.js";import"./SkeletonInlineBlock-DfFg1BbM.js";import"./SkeletonTable-DkNCUEbr.js";import"./SkeletonParagraph-CzHkK7a_.js";import"./JsonSchemaForm-8GJKFPjv.js";import"./GridLegacy-BjziM31E.js";import"./HelpTwoTone-DMeiX_aZ.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BQbAJvQ9.js";import"./_createAggregator-D7rn-Ost.js";import"./_baseMap-0nIDTP6u.js";import"./DateTimePicker-UzRkRb8g.js";import"./useMobilePicker-CpItccb0.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-ktoJBIrd.js";import"./index-ZDojTcBs.js";import"./Chip-C46utT-v.js";import"./Tabs-DSuSjffy.js";import"./KeyboardArrowRight-D1lugU9v.js";import"./Autocomplete-Ct5Gxtra.js";import"./usePreviousProps-eEeh_K5H.js";import"./use-deep-compare-effect.esm-D0Q21txf.js";import"./TextWidget-7kyshnxY.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
