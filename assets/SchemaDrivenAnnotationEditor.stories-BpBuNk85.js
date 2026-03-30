import{jx as p}from"./iframe-Cj0e1zel.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DKCEhEzr.js";import"./index-Chi_LkuB.js";import"./useEntity-B9fCB26v.js";import"./pickBy-DdtJhL1v.js";import"./isString-hG5mPmml.js";import"./_baseIteratee-467XhaM-.js";import"./useInfiniteQuery-CPI4HKnX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DsPUnDhp.js";import"./useSchema-Bn6h9doW.js";import"./index-q-HkxXLH.js";import"./enums-CF8VvvRt.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BSzMssFr.js";import"./uniq-BoHpyE19.js";import"./forEach-CWOCpBhE.js";import"./Add-DjkRkER4.js";import"./Grid-DBEISHdJ.js";import"./ListItem-YX9FXMYJ.js";import"./listItemButtonClasses-C4DYsQo7.js";import"./ListItemIcon-B6ZzfXtx.js";import"./MenuItem-BJCMGP6I.js";import"./ListItemText-DZiuK4W_.js";import"./ArrowUpward-SsDJKq4Q.js";import"./ContentCopy-Clo1HL-N.js";import"./FormControlLabel-DLtpIQqW.js";import"./Checkbox-B3xT3d14.js";import"./SwitchBase-tOsTduEd.js";import"./FormGroup-BAAYIYJh.js";import"./RadioGroup-BGEkWaVf.js";import"./Radio-DPKPg9aD.js";import"./Slider-NI6yMDk9.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BOs_vWQu.js";import"./DialogBase-BtW1rv2q.js";import"./Close-B0Ezzxla.js";import"./HelpPopover-vs9IjcEE.js";import"./MarkdownPopover-DANY9xik.js";import"./LightTooltip-GdOigsor.js";import"./MarkdownSynapse-C0Os_jLu.js";import"./SkeletonButton-70dk5TWK.js";import"./SkeletonInlineBlock-ChrVufN-.js";import"./SkeletonTable-CBixK2YG.js";import"./SkeletonParagraph-BiV9WxhL.js";import"./JsonSchemaForm-z_M0Fmc6.js";import"./GridLegacy-QWyCOxDO.js";import"./HelpTwoTone-DU8BMz7N.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-9qR1MAvP.js";import"./_createAggregator-6nh7NXq7.js";import"./_baseMap-FtsgiS9G.js";import"./DateTimePicker-C1vZrtCE.js";import"./useMobilePicker-BoMWC5g_.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DEbuiBTq.js";import"./index-ZhGqh7fx.js";import"./Chip-Deb-rO6G.js";import"./Tabs-LY8FeVSy.js";import"./KeyboardArrowRight-Do-NXqZ4.js";import"./Autocomplete-BZLL6fQL.js";import"./usePreviousProps-BzH06mOY.js";import"./use-deep-compare-effect.esm-D4cj4MEP.js";import"./TextWidget-ChGXLmMu.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
