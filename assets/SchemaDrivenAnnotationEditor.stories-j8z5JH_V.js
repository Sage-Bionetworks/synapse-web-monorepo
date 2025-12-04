import{jF as T}from"./iframe-CnFFtBM5.js";import{S as C}from"./SchemaDrivenAnnotationEditor-D3JbDrJu.js";import"./index-r8ZA1smB.js";import"./useEntity-DTVkIL6t.js";import"./pickBy-vcWcat19.js";import"./isString-B3KL6qo9.js";import"./_baseIteratee-BVMr-kVb.js";import"./useQueries-BF7Qkzzf.js";import"./useSuspenseQuery-D8hCSSQZ.js";import"./useInfiniteQuery-CQzVs7Nm.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Bx-Kc9ii.js";import"./useSchema-CFAS-yVB.js";import"./index-EcQmejSz.js";import"./enums-5YtokKXT.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-De-JfD7a.js";import"./uniq-CjmDJsGa.js";import"./forEach-B8iwwgef.js";import"./Grid-BGJHGkXH.js";import"./ListItem-BR5aNw_V.js";import"./listItemButtonClasses-DZOR9TSc.js";import"./ListItemIcon-BcJb7Vjg.js";import"./MenuItem-DeX5RPAC.js";import"./ListItemText-Cg9v-zMh.js";import"./ArrowUpward-RT5ZFxIn.js";import"./ContentCopy--loJcYCK.js";import"./FormControlLabel-Bli_r3Hb.js";import"./Checkbox-BkPCt9V2.js";import"./SwitchBase-BUvuFp9Q.js";import"./FormGroup-u1jdIV4F.js";import"./RadioGroup-El6UroqD.js";import"./Radio-D9oRIHzH.js";import"./Slider-BLQFEUxE.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-CmTg6HIg.js";import"./DialogBase-KF2hOckI.js";import"./Close-Dtzq_6wc.js";import"./HelpPopover-D_UunFPX.js";import"./MarkdownPopover-CzPIRMxY.js";import"./LightTooltip-Dl0q57ba.js";import"./MarkdownSynapse-CRdc62jY.js";import"./SkeletonButton-CClASP2Q.js";import"./SkeletonInlineBlock-SiFBwNDW.js";import"./SkeletonTable-CeXSUdJ0.js";import"./SkeletonParagraph-Bh_V5SGk.js";import"./JsonSchemaForm-bQkdO4nI.js";import"./GridLegacy-DPj44OJs.js";import"./HelpTwoTone-z7qE-1wN.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DoZvwjGn.js";import"./_createAggregator-BIjQbBAT.js";import"./_baseMap-BkngOU8S.js";import"./DateTimePicker-CFIlei8a.js";import"./useMobilePicker-BdWxp_3w.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-BU9gVPAE.js";import"./index-BSyMNs-U.js";import"./Chip-B7HTEMX4.js";import"./Tabs-WTOO5VJp.js";import"./KeyboardArrowRight-CnY7Fnp6.js";import"./Autocomplete-DKjexnQx.js";import"./usePreviousProps-UBiOn-9J.js";import"./use-deep-compare-effect.esm-_S-D4OI6.js";import"./TextWidget-BsDXdDyC.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Kr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Lr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Lr as __namedExportsOrder,Kr as default};
