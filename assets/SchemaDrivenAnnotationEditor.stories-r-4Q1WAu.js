import{jI as p}from"./iframe-D-3jDgkP.js";import{S as a}from"./SchemaDrivenAnnotationEditor-K3y6x-Vn.js";import"./index-Chi_LkuB.js";import"./useEntity-B6svLYEJ.js";import"./pickBy-B4Jk1TTY.js";import"./isString-LRv9Os_2.js";import"./_baseIteratee-DyY3KhVC.js";import"./useQueries-C3g3qxiV.js";import"./useSuspenseQuery-CtXxGYgq.js";import"./useInfiniteQuery-C8k1H9sd.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C0BL-9h9.js";import"./useSchema-DIafcpO5.js";import"./index-DFr2ekDp.js";import"./enums-DXh7Y-tx.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-ChY8cEpb.js";import"./uniq-DeK1FA4B.js";import"./forEach-CWOCpBhE.js";import"./Add-ZgmrO8PW.js";import"./Grid-D-Fepwy6.js";import"./ListItem-oUWFd0jK.js";import"./listItemButtonClasses-dd7ynsmY.js";import"./ListItemIcon-DzeXMiSG.js";import"./MenuItem-aznIDkac.js";import"./ListItemText-B7e0EPSS.js";import"./ArrowUpward-x1iFtamT.js";import"./ContentCopy-DgChSVjE.js";import"./FormControlLabel-C87EfYI2.js";import"./Checkbox-BPvRmOPY.js";import"./SwitchBase-BVjlCjDZ.js";import"./FormGroup-Cj2tkZHi.js";import"./RadioGroup-CAnmHS6G.js";import"./Radio-DL8SwJEE.js";import"./Slider-D-DJL9fq.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-BV5SAAe9.js";import"./DialogBase-BUof1-nB.js";import"./Close-ByM6mNY6.js";import"./HelpPopover-DV6SUIjj.js";import"./MarkdownPopover-BlAtFiSx.js";import"./LightTooltip-DeeNgOG_.js";import"./MarkdownSynapse-CYhP7mn0.js";import"./SkeletonButton-C7XBrhUR.js";import"./SkeletonInlineBlock-DPp6vqqG.js";import"./SkeletonTable-gbeUh3ur.js";import"./SkeletonParagraph-BGwjKkDC.js";import"./JsonSchemaForm-Di_zmH2Y.js";import"./GridLegacy-De2oSEr-.js";import"./HelpTwoTone-BPR6esAS.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-fz89v1Df.js";import"./_createAggregator-BU6jYcIz.js";import"./_baseMap-Ca_HBm0L.js";import"./DateTimePicker-CVi6uRDL.js";import"./useMobilePicker-DDjm41pb.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DBOur7Wl.js";import"./index-DB-dn3wn.js";import"./Chip-CH85Kc0i.js";import"./Tabs-BJ9mN7R-.js";import"./KeyboardArrowRight-LnCVJhb1.js";import"./Autocomplete-Cf7RJBjK.js";import"./usePreviousProps-zH3RsD8o.js";import"./use-deep-compare-effect.esm-BrMn--PC.js";import"./TextWidget-DL7x7-Co.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
