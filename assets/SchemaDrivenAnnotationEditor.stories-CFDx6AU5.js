import{jx as p}from"./iframe-CvDTy6mw.js";import{S as a}from"./SchemaDrivenAnnotationEditor-6Nq_7nyZ.js";import"./index-Chi_LkuB.js";import"./useEntity-Dns-01NA.js";import"./pickBy-C4S4wLYu.js";import"./isString-Dr9O550V.js";import"./_baseIteratee-UbmsfpzB.js";import"./useInfiniteQuery-BDzyB6fR.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BpXjLlzv.js";import"./useSchema-RavFqXqB.js";import"./index-Dk2NmXV3.js";import"./enums-Bg9W5FdH.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BIPt8TRr.js";import"./uniq-BY_gCc0f.js";import"./forEach-CWOCpBhE.js";import"./Add-D3SEzMNf.js";import"./Grid-B7-Uodf9.js";import"./ListItem-DoXG3GUM.js";import"./listItemButtonClasses-DMs0uJ6l.js";import"./ListItemIcon-DodSyuQZ.js";import"./MenuItem-DnOuV5Bw.js";import"./ListItemText-DgJQjc6b.js";import"./ArrowUpward-DTaltZOS.js";import"./ContentCopy-C-buAY_Z.js";import"./FormControlLabel-BBtghWJq.js";import"./Checkbox-D534fmQJ.js";import"./SwitchBase-JpV5kKh9.js";import"./FormGroup-Chc8Z5ml.js";import"./RadioGroup-Cau3QYRo.js";import"./Radio-4wWynoNG.js";import"./Slider-T3YYFJ8s.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Cfqxxxlf.js";import"./DialogBase-DQQSlD3x.js";import"./Close-d7PqJiCL.js";import"./HelpPopover-Bk8Cc2qG.js";import"./MarkdownPopover-CX1rkX4a.js";import"./LightTooltip-Cn6AM7tu.js";import"./MarkdownSynapse-BqOzEXKP.js";import"./SkeletonButton-DrRqzwrL.js";import"./SkeletonInlineBlock-DRwNak6O.js";import"./SkeletonTable-DjmsDm7y.js";import"./SkeletonParagraph-DAWCny1c.js";import"./JsonSchemaForm-uONLb_29.js";import"./GridLegacy-DpaC7j1H.js";import"./HelpTwoTone-C3Ji0m65.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CusBMm_I.js";import"./_createAggregator-DwkJNWqk.js";import"./_baseMap-Dx7SZYqg.js";import"./DateTimePicker-DD6Q9dQb.js";import"./useMobilePicker-ilI3aC56.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-Cd5p1xI2.js";import"./index-CEVa6roL.js";import"./Chip-DmppX2NC.js";import"./Tabs-OyL2qVUr.js";import"./KeyboardArrowRight-C0CoeaT9.js";import"./Autocomplete-DwBAeBSM.js";import"./usePreviousProps-0ca6yt6K.js";import"./use-deep-compare-effect.esm-1RezRivx.js";import"./TextWidget-BpzGU3AM.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
