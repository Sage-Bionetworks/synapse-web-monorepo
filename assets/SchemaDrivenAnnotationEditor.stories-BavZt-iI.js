import{jF as T}from"./iframe-WhfIvkO3.js";import{S as C}from"./SchemaDrivenAnnotationEditor-B5BxzpOM.js";import"./index-r8ZA1smB.js";import"./useEntity-Did6JTgt.js";import"./pickBy-uX0s9NBY.js";import"./isString-BFBF8Ssk.js";import"./_baseIteratee-CH6bpyis.js";import"./useQueries-uA84kYd4.js";import"./useSuspenseQuery-dzosinIB.js";import"./useInfiniteQuery-DR_7XXgj.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BFRgYMsj.js";import"./useSchema-SpsNPmNe.js";import"./index-BNfUCFGO.js";import"./enums-ApWzxJh1.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-9J6UhAkG.js";import"./uniq-CTpbJdFY.js";import"./forEach-B8iwwgef.js";import"./Add-CfDTdVr6.js";import"./Grid-pdQLRbNP.js";import"./ListItem-NOMhssXa.js";import"./listItemButtonClasses-BHYF_LrE.js";import"./ListItemIcon-Dzopgbbs.js";import"./MenuItem-Dje8pbb_.js";import"./ListItemText-xJDcsOaA.js";import"./ArrowUpward-D_qvKKIn.js";import"./ContentCopy-CDWVnE7w.js";import"./FormControlLabel-CFLwIoC9.js";import"./Checkbox-DygchsjE.js";import"./SwitchBase-DhBFqZMr.js";import"./FormGroup-3y-5qnT7.js";import"./RadioGroup-s37nS9d2.js";import"./Radio-BZ8NXYqC.js";import"./Slider-haXEwR1r.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-DiLnWHAQ.js";import"./DialogBase-Crh1Kg5E.js";import"./Close-CmSe9oF4.js";import"./HelpPopover-DFlbq1oD.js";import"./MarkdownPopover-CFtct9XU.js";import"./LightTooltip-BPRV-Vss.js";import"./MarkdownSynapse-DpQsv1qU.js";import"./SkeletonButton-qFC4BpI5.js";import"./SkeletonInlineBlock-BW6N_xDK.js";import"./SkeletonTable-Di0hBp4_.js";import"./SkeletonParagraph-D0-idZNQ.js";import"./JsonSchemaForm-DpLeMgUG.js";import"./GridLegacy-D9LubUBW.js";import"./HelpTwoTone-CcVmrW7C.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-h_REB5rd.js";import"./_createAggregator-DJtjSLtR.js";import"./_baseMap-TUJrX8WR.js";import"./DateTimePicker-4ugAuIA3.js";import"./useMobilePicker-DNB2_gE1.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-By-00YBB.js";import"./index-sVzarH1I.js";import"./Chip-BbqPcVoT.js";import"./Tabs-DmYC_uUQ.js";import"./KeyboardArrowRight-CUnfx-8d.js";import"./Autocomplete-BCELVQvC.js";import"./usePreviousProps-BbNBRyvJ.js";import"./use-deep-compare-effect.esm-DfR59o2r.js";import"./TextWidget-B72LVhot.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Lr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var c,d,y;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...(y=(d=e.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var u,h,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var S,l,A;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...(A=(l=o.parameters)==null?void 0:l.docs)==null?void 0:A.source}}};var f,v,I;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...(I=(v=n.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var E,q,b;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Mr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Mr as __namedExportsOrder,Lr as default};
