import{jF as p}from"./iframe-dqn_o-j7.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DYMtiGvD.js";import"./index-Chi_LkuB.js";import"./useEntity-DB6kE4I7.js";import"./pickBy-C9oCdo7V.js";import"./isString-BLmuSzAW.js";import"./_baseIteratee-DkHLs-Ky.js";import"./useQueries-DJtgD_ZA.js";import"./useSuspenseQuery-BB8-jlr0.js";import"./useInfiniteQuery-CgM25XWi.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-H9wORxg2.js";import"./useSchema-CfkF17_M.js";import"./index-CaeM6Ntp.js";import"./enums-o3UU2upe.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DFZUyRJV.js";import"./uniq-BUywUvXJ.js";import"./forEach-CWOCpBhE.js";import"./Add-Ck-7MvFM.js";import"./Grid-C-uX_xYH.js";import"./ListItem-CLUeWxX4.js";import"./listItemButtonClasses-DuVG8e5O.js";import"./ListItemIcon-B-hRqL4V.js";import"./MenuItem-BOJ2Kk2Z.js";import"./ListItemText-DeW-8HTn.js";import"./ArrowUpward-BViri77B.js";import"./ContentCopy-GkanMZY6.js";import"./FormControlLabel-BpzhFtV1.js";import"./Checkbox-yynwhYBf.js";import"./SwitchBase-BP-8papi.js";import"./FormGroup-BK8MzcwA.js";import"./RadioGroup-D7DO8WQq.js";import"./Radio-DlMx9egD.js";import"./Slider-CxZ6Uwf1.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-BglZMyws.js";import"./DialogBase-Du7TIgB4.js";import"./Close-Axrw4Kzl.js";import"./HelpPopover-C9R8R_7q.js";import"./MarkdownPopover-D3CVPC0g.js";import"./LightTooltip-Dhs-cvGE.js";import"./MarkdownSynapse-BD2Fjx54.js";import"./SkeletonButton-B8uw_n6q.js";import"./SkeletonInlineBlock-nI55AVgz.js";import"./SkeletonTable-8ejcRdZg.js";import"./SkeletonParagraph-DUPitNKo.js";import"./JsonSchemaForm-y_Z_qxmj.js";import"./GridLegacy-vsOGacgv.js";import"./HelpTwoTone-DPEptFp5.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-5xz2gcTf.js";import"./_createAggregator-n6euWymG.js";import"./_baseMap-WOv2-e8c.js";import"./DateTimePicker-zMa2Ae-v.js";import"./useMobilePicker-BBZ-YKu7.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DeFht1oy.js";import"./index-TRDYm8vi.js";import"./Chip-CFttJTcb.js";import"./Tabs-CEMqh19c.js";import"./KeyboardArrowRight-DrLDpyX5.js";import"./Autocomplete-CU9dGdc0.js";import"./usePreviousProps-1OqQ4JRf.js";import"./use-deep-compare-effect.esm-CzfFsmDN.js";import"./TextWidget-BAe8drap.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
