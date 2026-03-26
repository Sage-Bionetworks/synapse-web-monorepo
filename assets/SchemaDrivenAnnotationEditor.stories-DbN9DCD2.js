import{jx as p}from"./iframe-D7hmFFD3.js";import{S as a}from"./SchemaDrivenAnnotationEditor-C0rMh2Og.js";import"./index-Chi_LkuB.js";import"./useEntity-BePhXUWF.js";import"./pickBy-LPS-KT0v.js";import"./isString-D59s40uV.js";import"./_baseIteratee-FZWzk7ua.js";import"./useInfiniteQuery-D13lTl67.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Dh9OE1lF.js";import"./useSchema-Dsr3tRGQ.js";import"./index-BpgcSo8v.js";import"./enums-DO_i19JF.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CLfxsE0k.js";import"./uniq-BXe1zYGf.js";import"./forEach-CWOCpBhE.js";import"./Add-CCuUqdhp.js";import"./Grid-ByKjz8_y.js";import"./ListItem-BR9q5kUr.js";import"./listItemButtonClasses-DF1yMI__.js";import"./ListItemIcon-_IAsOBhG.js";import"./MenuItem-seRjpzQC.js";import"./ListItemText-MLviNoLH.js";import"./ArrowUpward-CDNVVHTS.js";import"./ContentCopy-DYpkvHYV.js";import"./FormControlLabel-DsGvY4MC.js";import"./Checkbox-DmdgFLw0.js";import"./SwitchBase-Dm2o857r.js";import"./FormGroup-dabxZ4lF.js";import"./RadioGroup-BRU02pdl.js";import"./Radio-7ytErKIW.js";import"./Slider-BhXuXbMT.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-D56eSZEC.js";import"./DialogBase-C0-vtQvS.js";import"./Close-1n6W943I.js";import"./HelpPopover-B0CLm-hu.js";import"./MarkdownPopover-BlNh2jNC.js";import"./LightTooltip-C6WNo1mK.js";import"./MarkdownSynapse-BOtk1yaV.js";import"./SkeletonButton-BRppMIVv.js";import"./SkeletonInlineBlock-J2_tfC8B.js";import"./SkeletonTable-DwOxfj-6.js";import"./SkeletonParagraph-RrPVfHxb.js";import"./JsonSchemaForm-CoZx8L80.js";import"./GridLegacy-EKANE37v.js";import"./HelpTwoTone-BZggY_CU.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-Ch89fRwz.js";import"./_createAggregator-5KCvto1w.js";import"./_baseMap-DsRa866f.js";import"./DateTimePicker-jMSC_PSj.js";import"./useMobilePicker-Ih1fFSu-.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-C2O8OJYd.js";import"./index-DkPQYPLq.js";import"./Chip-CwHKBceN.js";import"./Tabs-BB9K_PPC.js";import"./KeyboardArrowRight-uUyAWirS.js";import"./Autocomplete-C6-pO1rD.js";import"./usePreviousProps-D3pyyG5u.js";import"./use-deep-compare-effect.esm-D5U3OuuB.js";import"./TextWidget-4TctbqcZ.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
