import{jF as p}from"./iframe-xmmb_I0l.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DL6Lg567.js";import"./index-Chi_LkuB.js";import"./useEntity-PsEU5Z6M.js";import"./pickBy-DQIDNL5V.js";import"./isString-CWN2TzYl.js";import"./_baseIteratee-BdxYwHJk.js";import"./useQueries-B6_MsPWT.js";import"./useSuspenseQuery-B2gu81Lt.js";import"./useInfiniteQuery-Dlr9EZ3N.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BfFlbH_n.js";import"./useSchema-DrVXoXFK.js";import"./index-aVoo80y9.js";import"./enums-CobEGAnq.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-B1RTpd10.js";import"./uniq-Dle9qHow.js";import"./forEach-CWOCpBhE.js";import"./Add-CkAxSZr4.js";import"./Grid-CgI5l4fr.js";import"./ListItem-CUqzWDmV.js";import"./listItemButtonClasses-DdhxpvT0.js";import"./ListItemIcon-ChJcNKxU.js";import"./MenuItem-PkdQuBZK.js";import"./ListItemText-BMIhJaIp.js";import"./ArrowUpward-D2Vwg6o1.js";import"./ContentCopy-JT8OY-yY.js";import"./FormControlLabel-CUoHWybp.js";import"./Checkbox-DX9286fe.js";import"./SwitchBase-rtiI9HZl.js";import"./FormGroup-Bs9P-L4U.js";import"./RadioGroup-5qx3E7PX.js";import"./Radio-DNjpeDa6.js";import"./Slider-ClMWefGB.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-Ct05-ZlH.js";import"./DialogBase-BYsOjz7L.js";import"./Close-Cnr5zUVu.js";import"./HelpPopover-BMEIvn42.js";import"./MarkdownPopover-DGXe5vs0.js";import"./LightTooltip-D9ucYA3A.js";import"./MarkdownSynapse-DiGGFE3_.js";import"./SkeletonButton-9FRcX2_1.js";import"./SkeletonInlineBlock-CLZ8B174.js";import"./SkeletonTable-jOb-G6tL.js";import"./SkeletonParagraph-BjPCkGoh.js";import"./JsonSchemaForm-CXC9DShn.js";import"./GridLegacy-DdP-xVL4.js";import"./HelpTwoTone-BR1JsBM2.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CK0aOVzf.js";import"./_createAggregator-DD1I8BMf.js";import"./_baseMap-CGzOi-md.js";import"./DateTimePicker-4OiEx6ZM.js";import"./useMobilePicker-YlBooRHN.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-wRnD27Uw.js";import"./index-lYHXK35I.js";import"./Chip-5gf_Tn0T.js";import"./Tabs-Csxu_Pp_.js";import"./KeyboardArrowRight-B9KNaWBU.js";import"./Autocomplete-DDW5OL9X.js";import"./usePreviousProps-B4NwU-is.js";import"./use-deep-compare-effect.esm-Bk5z4cMR.js";import"./TextWidget-gptK-UXc.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
