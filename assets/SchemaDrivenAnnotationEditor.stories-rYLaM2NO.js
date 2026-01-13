import{jF as p}from"./iframe-DVNYwO2X.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BXUbPQ7R.js";import"./index-Chi_LkuB.js";import"./useEntity-olcXtPjS.js";import"./pickBy-BQ7-Hlay.js";import"./isString-D_fby3AB.js";import"./_baseIteratee-DppP0dwZ.js";import"./useQueries-BQ487jlg.js";import"./useSuspenseQuery-33kCA9BT.js";import"./useInfiniteQuery-B9oS7yw5.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DJPyfImq.js";import"./useSchema-B1RR3Z09.js";import"./index-DghSK5br.js";import"./enums-q9hYWdUy.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Dp5MzYWx.js";import"./uniq-Ct69rUQw.js";import"./forEach-CWOCpBhE.js";import"./Add-CXSX9Zz_.js";import"./Grid-CwhdJPOL.js";import"./ListItem-3zmpEz5q.js";import"./listItemButtonClasses-Bb6i5z9V.js";import"./ListItemIcon-DGLdpto0.js";import"./MenuItem-Ci0bIVjj.js";import"./ListItemText-ppoZ7nbf.js";import"./ArrowUpward-j7wkyUcO.js";import"./ContentCopy-BOy3Tqly.js";import"./FormControlLabel-2BD87kef.js";import"./Checkbox-DTSE5Rp3.js";import"./SwitchBase-CgidC8Mu.js";import"./FormGroup--LcGs4NA.js";import"./RadioGroup-D_-J_cVD.js";import"./Radio-C0iUxmjC.js";import"./Slider-BrQWN_6r.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-u7vUp13p.js";import"./DialogBase-D-pfxM0N.js";import"./Close-BRaPVnbs.js";import"./HelpPopover-CGudOJSg.js";import"./MarkdownPopover-BeI37cFn.js";import"./LightTooltip-bl3iHu17.js";import"./MarkdownSynapse-5ft7ZGQf.js";import"./SkeletonButton-CiDtB3IB.js";import"./SkeletonInlineBlock-Bgae_khf.js";import"./SkeletonTable-BpqkbE8o.js";import"./SkeletonParagraph-Bq0xaWku.js";import"./JsonSchemaForm-BCV_Cq9s.js";import"./GridLegacy-BSUk7kUd.js";import"./HelpTwoTone-1L32PAHJ.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-D_zPxWD6.js";import"./_createAggregator-Cc5opjSo.js";import"./_baseMap-ksk5ZDPW.js";import"./DateTimePicker-BVXXkcGb.js";import"./useMobilePicker-CE8f5mHY.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-ixiV28qj.js";import"./index-9hqwGMA7.js";import"./Chip-sOf8CffO.js";import"./Tabs-DmbfPqy2.js";import"./KeyboardArrowRight-B6jvsm1f.js";import"./Autocomplete-BN1_C4sF.js";import"./usePreviousProps-BplBI0Ga.js";import"./use-deep-compare-effect.esm-_A2F6RRf.js";import"./TextWidget-CpYRjunV.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
