import{jw as p}from"./iframe-BFtw_QUH.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CbBgtBQK.js";import"./index-Chi_LkuB.js";import"./useEntity-C3m0mLEK.js";import"./pickBy-CxxY41Bx.js";import"./isString-D2qY6B-G.js";import"./_baseIteratee-CJVbWW0K.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-D-5eLx7Z.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BNNdEoVQ.js";import"./useSchema-DXOpg-sL.js";import"./index-DiB5YxVM.js";import"./enums-BV5pg9zS.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-B9RBeIUP.js";import"./uniq-DzTH1J8A.js";import"./forEach-UWyboym_.js";import"./Add-BLfeJqPZ.js";import"./Grid-BXgscMMC.js";import"./ListItem-C67FS7Y0.js";import"./listItemButtonClasses-rrzIeHbz.js";import"./ListItemIcon-fpvRvd-g.js";import"./MenuItem-BSH3FhSr.js";import"./ListItemText-BvX0HI7o.js";import"./ArrowUpward-CRtUTAt_.js";import"./ContentCopy-DnJoyJU-.js";import"./FormControlLabel-DZ2iiYCt.js";import"./Checkbox-BC1SCJw9.js";import"./SwitchBase-C1pJsVMO.js";import"./FormGroup-CClz24Rt.js";import"./RadioGroup-TVe5dn4H.js";import"./Radio-BFqOiVbA.js";import"./Slider-BThEgeO7.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DMF1vChz.js";import"./DialogBase-Cw5G9tCf.js";import"./Close-QS7unxGx.js";import"./HelpPopover-6Oy9kimx.js";import"./MarkdownPopover-DJba9PaX.js";import"./LightTooltip-BdZaegEb.js";import"./MarkdownSynapse-CJdYnncr.js";import"./SkeletonButton-CsTw-ZPX.js";import"./SkeletonInlineBlock-BmmJQ24u.js";import"./SkeletonTable-CwH7xhuw.js";import"./SkeletonParagraph-DsZs81_F.js";import"./JsonSchemaForm-DMsLKxZE.js";import"./GridLegacy-CcFELHgN.js";import"./HelpTwoTone-GiaufCQN.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-B7ZXbV-D.js";import"./_createAggregator-DR_ZhGsZ.js";import"./_baseMap-BFNisPHr.js";import"./DateTimePicker-BVpE9SED.js";import"./useMobilePicker-CIjq4UvY.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-Cjg1c1kq.js";import"./index-CFaVGWZ0.js";import"./Chip-CtpBh3N1.js";import"./Tabs-ABwAKqo1.js";import"./KeyboardArrowRight-zxZKw_78.js";import"./Autocomplete-DkUQEECU.js";import"./usePreviousProps-DmrmMyQ5.js";import"./use-deep-compare-effect.esm-2g0-sizw.js";import"./TextWidget-DN7Qj6vx.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Er=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Er as __namedExportsOrder,Ir as default};
