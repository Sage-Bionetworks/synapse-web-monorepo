import{jH as p}from"./iframe-Bvh78Lip.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DReDnZje.js";import"./index-Chi_LkuB.js";import"./useEntity-DMQV6cN8.js";import"./pickBy-DHB3DoRP.js";import"./isString-DcoLED5O.js";import"./_baseIteratee-CMAOpFF8.js";import"./useQueries-C_spzrWe.js";import"./useSuspenseQuery-Bos4-4YQ.js";import"./useInfiniteQuery-Bs48Hq-k.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-ZTP8hW3j.js";import"./useSchema-C2TUgVKq.js";import"./index-CBItESVz.js";import"./enums-BY52EMN4.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BEegoy1c.js";import"./uniq-BLdVdnGW.js";import"./forEach-CWOCpBhE.js";import"./Add-BHlT50pm.js";import"./Grid-eXtr296u.js";import"./ListItem-B-yciqvL.js";import"./listItemButtonClasses-BKblHEER.js";import"./ListItemIcon-Bl7yLp5t.js";import"./MenuItem-CDGWVe-G.js";import"./ListItemText-Bu7ISaWo.js";import"./ArrowUpward-B4ehOcYc.js";import"./ContentCopy-BN_DtQ_G.js";import"./FormControlLabel-Clz1cXB5.js";import"./Checkbox-pmNlMftZ.js";import"./SwitchBase-CLePCnig.js";import"./FormGroup-BB1v2Ic7.js";import"./RadioGroup-ClpaRU5c.js";import"./Radio-DFv6aSF6.js";import"./Slider-qp6h2bOl.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-Cmxx7cdh.js";import"./DialogBase-CCsdoegG.js";import"./Close-CJJqWftx.js";import"./HelpPopover-BLWEr8Pu.js";import"./MarkdownPopover-rYIJ3MR9.js";import"./LightTooltip-BdYR1aB0.js";import"./MarkdownSynapse-BqKPy748.js";import"./SkeletonButton-3kp2DVDd.js";import"./SkeletonInlineBlock-ferE3Pfl.js";import"./SkeletonTable-CLqiC9iF.js";import"./SkeletonParagraph-D3tb0h1Y.js";import"./JsonSchemaForm-NtrHDMPJ.js";import"./GridLegacy-DXQK7Suo.js";import"./HelpTwoTone-BkiZrMrr.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-jZ8Gi-za.js";import"./_createAggregator-sWV4ZS_3.js";import"./_baseMap-Ba9XjSMD.js";import"./DateTimePicker-DPJMLLbW.js";import"./useMobilePicker-8mWxFLi1.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-D3O-nv6n.js";import"./index-C5Az4rP9.js";import"./Chip-BCnYHX9c.js";import"./Tabs-Brpvkg6L.js";import"./KeyboardArrowRight-Cgvra8Ng.js";import"./Autocomplete-DcgDIALM.js";import"./usePreviousProps-Dn9nd-S_.js";import"./use-deep-compare-effect.esm-CFBLIdQm.js";import"./TextWidget-DDJdDLZ6.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
