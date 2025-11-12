import{jJ as T}from"./iframe-CvY4ZvuJ.js";import{S as C}from"./SchemaDrivenAnnotationEditor-CouDo5om.js";import"./index-r8ZA1smB.js";import"./useEntity-BgJsBnAy.js";import"./pickBy-BHrCFvrn.js";import"./isString-CrAcLbvr.js";import"./_baseIteratee-D7LezZkr.js";import"./useQueries-DrGB5wIR.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery--_EbWIUu.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C7_2Y02m.js";import"./useSchema-B_AnWD8m.js";import"./index-CLhDtvBl.js";import"./enums-Cg9Hm76j.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DuKTxBZy.js";import"./uniq-DeLep7Ye.js";import"./forEach-B8iwwgef.js";import"./Grid-BqlScswC.js";import"./ListItem-iUF9-wmN.js";import"./listItemButtonClasses-BaIgwaKR.js";import"./ListItemIcon-CFyNline.js";import"./MenuItem-DKvXd6gt.js";import"./ListItemText-BUWh7wH8.js";import"./ArrowUpward-0SHvETFM.js";import"./ContentCopy-y1gRkK4G.js";import"./FormControlLabel-qE_sm44B.js";import"./Checkbox-B2JwnUlV.js";import"./SwitchBase-DgB78qVF.js";import"./FormGroup-Cn918oVW.js";import"./RadioGroup-D6JjNnHF.js";import"./Radio-zNHJ5PsT.js";import"./Slider-Cl-VxbdA.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-yKbj63se.js";import"./DialogBase-Cao7Dzdg.js";import"./Close-DK3fY5s5.js";import"./HelpPopover-C4eL4pDr.js";import"./MarkdownPopover-BINR37hc.js";import"./LightTooltip-DI-aYQ3b.js";import"./MarkdownSynapse-DLSzoPS4.js";import"./SkeletonButton-tyjQjXOk.js";import"./SkeletonInlineBlock-CuvHcddn.js";import"./SkeletonTable-dMQ-mK3Q.js";import"./SkeletonParagraph-C7GW6bi4.js";import"./JsonSchemaForm-BmckJx4X.js";import"./GridLegacy-BaFX-0fp.js";import"./HelpTwoTone-DdOWa1V-.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-DayZCAxL.js";import"./_createAggregator-BgMnhb5C.js";import"./_baseMap-CFTIclAl.js";import"./DateTimePicker-CvUyXD_b.js";import"./useMobilePicker-rKl_PSka.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-2LoE7r8s.js";import"./index-bMipKrjl.js";import"./Chip-BETMumCU.js";import"./Tabs-ZUapRSrF.js";import"./KeyboardArrowRight-CT5ybwfI.js";import"./Autocomplete-DpHUcuzM.js";import"./usePreviousProps-DdU2m-PX.js";import"./use-deep-compare-effect.esm-5lSoDmix.js";import"./TextWidget-C6-m6mI6.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Kr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Kr as __namedExportsOrder,Jr as default};
