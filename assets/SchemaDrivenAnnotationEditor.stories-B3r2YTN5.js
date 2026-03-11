import{jy as p}from"./iframe-BFOdDDU9.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CLJiCiR2.js";import"./index-Chi_LkuB.js";import"./useEntity-Lcrqi5Tl.js";import"./pickBy-B3cb2NI1.js";import"./isString-DMM1tUYl.js";import"./_baseIteratee-BJyYAHwo.js";import"./useInfiniteQuery-Dy46-GOZ.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-qy3h9EVn.js";import"./useSchema-BZENI9Eu.js";import"./index-DK_u9PMK.js";import"./enums-B4vYx7ZF.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-C50d_HcC.js";import"./uniq-DOCtMVWj.js";import"./forEach-CWOCpBhE.js";import"./Add-a7iA3eLZ.js";import"./Grid-DZ39djx4.js";import"./ListItem-CYmW793j.js";import"./listItemButtonClasses-ByFlDGo4.js";import"./ListItemIcon-CfqepO6P.js";import"./MenuItem-PnDY4AEM.js";import"./ListItemText-T3VEE9OQ.js";import"./ArrowUpward-Bk3mjNoy.js";import"./ContentCopy-Dp6AIqyK.js";import"./FormControlLabel-C2HtIWRI.js";import"./Checkbox-BMEnJ1KU.js";import"./SwitchBase-BWakJaHi.js";import"./FormGroup-DzHJ7JMK.js";import"./RadioGroup-B1l1zvNg.js";import"./Radio-DuwzW3VN.js";import"./Slider-QvBol4El.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DE_sDXrs.js";import"./DialogBase-CqjTgUyd.js";import"./Close-BiMPyEJa.js";import"./HelpPopover-BGoqvETW.js";import"./MarkdownPopover-DNOZWbzO.js";import"./LightTooltip-CvVy39ak.js";import"./MarkdownSynapse-CvUwVk43.js";import"./SkeletonButton-DqU7tug-.js";import"./SkeletonInlineBlock-DA2_ugLR.js";import"./SkeletonTable-YSrwQoxW.js";import"./SkeletonParagraph-tO6IeoMO.js";import"./JsonSchemaForm-6dEXkChN.js";import"./GridLegacy-CcrBl3NU.js";import"./HelpTwoTone-CuVhXiqT.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-Dfja1gqi.js";import"./_createAggregator-CZjnnX8H.js";import"./_baseMap-D7kDkJWv.js";import"./DateTimePicker-BfNjNo2Z.js";import"./useMobilePicker-DvdQMuBj.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-Cn7M2egv.js";import"./index-DDJJe_s9.js";import"./Chip-D2x9BPaK.js";import"./Tabs-UO7EtSpl.js";import"./KeyboardArrowRight-D74rIE2H.js";import"./Autocomplete-CtPEMbCA.js";import"./usePreviousProps-BDW0O-o-.js";import"./use-deep-compare-effect.esm-Dix54tvZ.js";import"./TextWidget-CGUqoTmz.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
