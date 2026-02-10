import{jI as p}from"./iframe-C80DNIXY.js";import{S as a}from"./SchemaDrivenAnnotationEditor-C9B3iR80.js";import"./index-Chi_LkuB.js";import"./useEntity-BFq9en9A.js";import"./pickBy-C1JTeSPX.js";import"./isString-lbmFIYbF.js";import"./_baseIteratee-CmYeUqfJ.js";import"./useQueries-BaRURQgG.js";import"./useSuspenseQuery-CqybcQ2J.js";import"./useInfiniteQuery-4baG4-hB.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CzveUUhX.js";import"./useSchema-Dj62qIBS.js";import"./index-CEa-_Iic.js";import"./enums-DE5QfU55.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DUUo9Nf8.js";import"./uniq-CP9CCD-y.js";import"./forEach-CWOCpBhE.js";import"./Add-6YWNqJrc.js";import"./Grid-CZssvg8x.js";import"./ListItem-Baef_HGj.js";import"./listItemButtonClasses-D5iOJME6.js";import"./ListItemIcon-BaVevuxq.js";import"./MenuItem-DX3jCWRl.js";import"./ListItemText-C3FyZnbx.js";import"./ArrowUpward-DMyseQ-u.js";import"./ContentCopy-BbCzLl0w.js";import"./FormControlLabel-BStBW8z5.js";import"./Checkbox-AtJt6d_0.js";import"./SwitchBase-CINz3Fhr.js";import"./FormGroup-CYXXK9KG.js";import"./RadioGroup-CWYSDWxU.js";import"./Radio-QzUPD6c3.js";import"./Slider-CFNtfITB.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-C9JPgHed.js";import"./DialogBase-Cay5tgui.js";import"./Close-BuMywD3y.js";import"./HelpPopover-BipFBkNI.js";import"./MarkdownPopover-B07suYMP.js";import"./LightTooltip-DMhSxq7g.js";import"./MarkdownSynapse-DKqR68s3.js";import"./SkeletonButton-uDijPjPz.js";import"./SkeletonInlineBlock-DqQYipf9.js";import"./SkeletonTable-WwsVDHsD.js";import"./SkeletonParagraph-nOvV6g22.js";import"./JsonSchemaForm-CV6BD-F5.js";import"./GridLegacy-DiH3N7gN.js";import"./HelpTwoTone-CRAqKnwK.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-nIO_S1M6.js";import"./_createAggregator-BAmkPOkH.js";import"./_baseMap-eSh9iFHA.js";import"./DateTimePicker-BBK1FZcr.js";import"./useMobilePicker-68E9M5BX.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-EPxW0e3u.js";import"./index-Bee01HS_.js";import"./Chip-BVUqKial.js";import"./Tabs-QiPFGWtd.js";import"./KeyboardArrowRight-BX1-wPZt.js";import"./Autocomplete-AEHW-_RE.js";import"./usePreviousProps-BC1nkTdn.js";import"./use-deep-compare-effect.esm-CoyZ24TJ.js";import"./TextWidget-g5FJ8Xhu.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
