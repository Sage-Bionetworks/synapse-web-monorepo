import{jF as p}from"./iframe-DCJ7skCF.js";import{S as a}from"./SchemaDrivenAnnotationEditor-jYdjqk7o.js";import"./index-Chi_LkuB.js";import"./useEntity-7Mmx4dfI.js";import"./pickBy-8XGIGDox.js";import"./isString-DO8e_9rj.js";import"./_baseIteratee-BxzXFjBF.js";import"./useQueries-HPJfUFcz.js";import"./useSuspenseQuery-hpjNpxLU.js";import"./useInfiniteQuery-Cnz7W2re.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-rdkBsBdL.js";import"./useSchema-Cwx_4fPV.js";import"./index-CeSsztJl.js";import"./enums-_3bGLgvO.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-C1NioYL1.js";import"./uniq-5mVGOylI.js";import"./forEach-CWOCpBhE.js";import"./Add-DJtTFgD9.js";import"./Grid-BzWj-ZgH.js";import"./ListItem-LExT27w0.js";import"./listItemButtonClasses-C8FrM3d1.js";import"./ListItemIcon-D5DKqBTv.js";import"./MenuItem-yNgfeWcI.js";import"./ListItemText-ZOAwKeAh.js";import"./ArrowUpward-BcHML-Va.js";import"./ContentCopy-eEiWsnB6.js";import"./FormControlLabel-B12_DI4H.js";import"./Checkbox-dKk_kWGN.js";import"./SwitchBase-CnTd8DTj.js";import"./FormGroup-DJ0nMlSq.js";import"./RadioGroup-EAvFIfF1.js";import"./Radio-CB1uIkZJ.js";import"./Slider-D5oWDZnK.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-CNckvYkU.js";import"./DialogBase-DG8iPOdE.js";import"./Close-D40JfmeO.js";import"./HelpPopover-DR0W0zRn.js";import"./MarkdownPopover-C1w3Ce6S.js";import"./LightTooltip-C9fCe4UT.js";import"./MarkdownSynapse-BU0jW5rD.js";import"./SkeletonButton-Ckcy3ANt.js";import"./SkeletonInlineBlock-XM0IHiqH.js";import"./SkeletonTable-91lmyC3W.js";import"./SkeletonParagraph-CIIa240g.js";import"./JsonSchemaForm-VYwFYl8Q.js";import"./GridLegacy-D2s81Tma.js";import"./HelpTwoTone-DUvbZDPu.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BLoA9FIa.js";import"./_createAggregator-CkjuUdbm.js";import"./_baseMap-GyITq5cq.js";import"./DateTimePicker-B9Ysit53.js";import"./useMobilePicker-CrkQEmHY.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BsCMhBAI.js";import"./index-BmNsh1D_.js";import"./Chip-BB_My-sd.js";import"./Tabs-DT17Jk1F.js";import"./KeyboardArrowRight-DvMYGM9U.js";import"./Autocomplete-CV_ASBFa.js";import"./usePreviousProps-B55_EH7B.js";import"./use-deep-compare-effect.esm-DRQaZ9j-.js";import"./TextWidget-DN33xwVW.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
