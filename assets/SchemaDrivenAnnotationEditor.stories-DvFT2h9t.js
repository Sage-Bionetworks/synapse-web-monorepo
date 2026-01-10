import{jF as p}from"./iframe-DtOCV9ZO.js";import{S as a}from"./SchemaDrivenAnnotationEditor-I69JaWa9.js";import"./index-Chi_LkuB.js";import"./useEntity-B3UI8wvz.js";import"./pickBy-BZq1ALQx.js";import"./isString-DEn23QUL.js";import"./_baseIteratee-BeERohTt.js";import"./useQueries-6xM6HhA6.js";import"./useSuspenseQuery-SVjMJt8R.js";import"./useInfiniteQuery-BrzIGqoa.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-HsFiPHD1.js";import"./useSchema-B9FQCVpq.js";import"./index-BsWaQfWQ.js";import"./enums-syS6Z6tX.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Cu1g2duW.js";import"./uniq-DZ1P1ajM.js";import"./forEach-CWOCpBhE.js";import"./Add-hvyCvRsZ.js";import"./Grid-C1XjfvKJ.js";import"./ListItem-Cj4hV5OB.js";import"./listItemButtonClasses-WkkuZrVR.js";import"./ListItemIcon-sok89Std.js";import"./MenuItem-BuDWfjYg.js";import"./ListItemText-h69Ag1d9.js";import"./ArrowUpward-Bco-Q2AT.js";import"./ContentCopy-DuCJSCaQ.js";import"./FormControlLabel-ySuzlJSZ.js";import"./Checkbox-DjdRQ8d3.js";import"./SwitchBase-7rd93fjV.js";import"./FormGroup-j32SvYlP.js";import"./RadioGroup-pLmlxQvR.js";import"./Radio-DnX-lcum.js";import"./Slider-CZDsewFO.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-BIEXc5Nr.js";import"./DialogBase-BWg90ihX.js";import"./Close-D6GiZp3q.js";import"./HelpPopover-Cdi7BMOo.js";import"./MarkdownPopover-DA9u2k23.js";import"./LightTooltip-7xtsJ5TU.js";import"./MarkdownSynapse-DtveY7cQ.js";import"./SkeletonButton-BW-Av5i1.js";import"./SkeletonInlineBlock-CzzA0rkX.js";import"./SkeletonTable-DpWsxm1f.js";import"./SkeletonParagraph-BvB6yuWG.js";import"./JsonSchemaForm-C91u2d6D.js";import"./GridLegacy-B-rjKHDY.js";import"./HelpTwoTone-Ch2SYOl0.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-Bgh41ALg.js";import"./_createAggregator-BavzNXRY.js";import"./_baseMap-CPsPgwJJ.js";import"./DateTimePicker-CKPveisY.js";import"./useMobilePicker-BDrq4E9u.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-Dih-NTfn.js";import"./index-CtezEvjc.js";import"./Chip-Br7md4nX.js";import"./Tabs-GVPRwF5d.js";import"./KeyboardArrowRight-vvMt6Shh.js";import"./Autocomplete-Dpx1L5FF.js";import"./usePreviousProps-CX3MHpk1.js";import"./use-deep-compare-effect.esm-BtvNeIL9.js";import"./TextWidget-DWleCdaP.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
