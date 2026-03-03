import{ju as p}from"./iframe-BPIYH1oT.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CtgVGBkx.js";import"./index-Chi_LkuB.js";import"./useEntity-2zjLBXPR.js";import"./pickBy-DCBiBms_.js";import"./isString-CFu8K1iZ.js";import"./_baseIteratee-Bb0kra6V.js";import"./useInfiniteQuery-DoSJlmbq.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DLQmS3vZ.js";import"./useSchema-DXzTQ94z.js";import"./index-C7E09Izf.js";import"./enums-B6mZGIQK.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-H9iq9W3A.js";import"./uniq-DSqAZGaz.js";import"./forEach-CWOCpBhE.js";import"./Add-zzhCp0r9.js";import"./Grid-5ejuqc-K.js";import"./ListItem-DUhlXqat.js";import"./listItemButtonClasses-CykFNgCw.js";import"./ListItemIcon-BvSBf3s1.js";import"./MenuItem-B9zWTbwn.js";import"./ListItemText-BTIVk57U.js";import"./ArrowUpward-BZn2bQ2Z.js";import"./ContentCopy-DqDV1Cw6.js";import"./FormControlLabel-DUzfwAdY.js";import"./Checkbox-CdTW5ve-.js";import"./SwitchBase-DK0vqQ_k.js";import"./FormGroup-nKYofiF1.js";import"./RadioGroup-BKOKRhxf.js";import"./Radio-CPib6hdD.js";import"./Slider-BkfzCXGc.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BEwxNdsX.js";import"./DialogBase-YPU6xwB9.js";import"./Close-DUKe32AS.js";import"./HelpPopover-csZgSs5v.js";import"./MarkdownPopover-C_LkEX6f.js";import"./LightTooltip-C4JhsBFK.js";import"./MarkdownSynapse-B95PEuB_.js";import"./SkeletonButton-BzOCV9D1.js";import"./SkeletonInlineBlock-BqdJTX4s.js";import"./SkeletonTable-DGggFpSD.js";import"./SkeletonParagraph-CVXQh454.js";import"./JsonSchemaForm-DGoh26Oi.js";import"./GridLegacy-ytCgwPC9.js";import"./HelpTwoTone-CKLQiZcZ.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DmvZahyg.js";import"./_createAggregator-CVhJJFYH.js";import"./_baseMap-Bus0-AtT.js";import"./DateTimePicker-u_oYaU-c.js";import"./useMobilePicker-IJNg5ark.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-jdbQNk1m.js";import"./index-CSa6jvLb.js";import"./Chip-DDX768Id.js";import"./Tabs-xqv-q6GK.js";import"./KeyboardArrowRight-Ba95GDrU.js";import"./Autocomplete-CKenoOA_.js";import"./usePreviousProps-CQqHgb4K.js";import"./use-deep-compare-effect.esm-_H7Xcj2b.js";import"./TextWidget-YbqndbUG.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
