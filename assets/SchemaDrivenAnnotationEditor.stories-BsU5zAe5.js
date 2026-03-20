import{jx as p}from"./iframe-CDThL800.js";import{S as a}from"./SchemaDrivenAnnotationEditor-AEBhoiu1.js";import"./index-Chi_LkuB.js";import"./useEntity-a1JV8O5f.js";import"./pickBy-D4LV4kin.js";import"./isString-kiX4Blh2.js";import"./_baseIteratee-v5oFDp_8.js";import"./useInfiniteQuery-Cp7Kwu84.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-vftcMZZQ.js";import"./useSchema-dosvS-5l.js";import"./index-SzXMH0RH.js";import"./enums-DMU0sVg-.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-C_MJJvSQ.js";import"./uniq-CTtFpapF.js";import"./forEach-CWOCpBhE.js";import"./Add-DNUFAs-8.js";import"./Grid-DS25EHc8.js";import"./ListItem-DQYb0Uxh.js";import"./listItemButtonClasses-Cg2nCnuj.js";import"./ListItemIcon-B4346n-f.js";import"./MenuItem-DxhVkehk.js";import"./ListItemText-BEEqrcQT.js";import"./ArrowUpward-YhvZsYz0.js";import"./ContentCopy-DB-wVXmF.js";import"./FormControlLabel-lFyHhGFK.js";import"./Checkbox-DVnkUkf8.js";import"./SwitchBase-DnYbE52r.js";import"./FormGroup-CTgucdbG.js";import"./RadioGroup-DR9uS7Il.js";import"./Radio-Bibfm9CL.js";import"./Slider-DuWZ5bKN.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Die5M7Ig.js";import"./DialogBase-D7t67H5I.js";import"./Close-BK5tRb3m.js";import"./HelpPopover-Dcl1P8CO.js";import"./MarkdownPopover-BxrNYFSZ.js";import"./LightTooltip-CeD-Iueq.js";import"./MarkdownSynapse-D1fATXb_.js";import"./SkeletonButton-BWSz9WUF.js";import"./SkeletonInlineBlock-B-Z5JZ59.js";import"./SkeletonTable-CKMKjGQn.js";import"./SkeletonParagraph-DNn6pQr4.js";import"./JsonSchemaForm-Tzkq6C44.js";import"./GridLegacy-BYJRQ09P.js";import"./HelpTwoTone-RciYjrgg.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BLf6MRDo.js";import"./_createAggregator-Z8GCD73r.js";import"./_baseMap-BzsjZ0ef.js";import"./DateTimePicker-Dk-TCJNo.js";import"./useMobilePicker-TzkaqYJG.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DdLfdr_2.js";import"./index-BZVSFT2Q.js";import"./Chip-DKZciXua.js";import"./Tabs-BQh56P9z.js";import"./KeyboardArrowRight-uZNt33O1.js";import"./Autocomplete-CoXnLfOp.js";import"./usePreviousProps--4wof1zz.js";import"./use-deep-compare-effect.esm-DQCvkLpg.js";import"./TextWidget-CsJ_rIda.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
