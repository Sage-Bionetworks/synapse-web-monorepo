import{jF as T}from"./iframe-B9AXyISm.js";import{S as C}from"./SchemaDrivenAnnotationEditor-BydhUZ__.js";import"./index-r8ZA1smB.js";import"./useEntity-C6fZFErB.js";import"./pickBy-mO7zXXdr.js";import"./isString-Bqhh1FSA.js";import"./_baseIteratee-DWFWiy4b.js";import"./useQueries-BCOBTSji.js";import"./useSuspenseQuery-DfskErri.js";import"./useInfiniteQuery-B0uiA_PZ.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CRRuEluV.js";import"./useSchema-BesquoYt.js";import"./index-Dh3CD9RU.js";import"./enums-Dx8h9RYY.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-D0al_2ma.js";import"./uniq-Crldg1C3.js";import"./forEach-B8iwwgef.js";import"./Add-C5iZeVVE.js";import"./Grid-EI8bT8L_.js";import"./ListItem-u7vwicF2.js";import"./listItemButtonClasses-CohNsYvv.js";import"./ListItemIcon-lY94U4N-.js";import"./MenuItem-Dn2OBO7e.js";import"./ListItemText-BxfycoFP.js";import"./ArrowUpward-CdAHCYEU.js";import"./ContentCopy-BpyVieH3.js";import"./FormControlLabel-C3JXkR06.js";import"./Checkbox-DQYBf5ik.js";import"./SwitchBase-Cb2xhxKM.js";import"./FormGroup-DzzUPcMw.js";import"./RadioGroup-DmzfoTkp.js";import"./Radio-9yamh_Y-.js";import"./Slider-D6KUGzBv.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-BV4A4Qpg.js";import"./DialogBase-Bv_6iVkM.js";import"./Close-NnOmK_QN.js";import"./HelpPopover-BKGnMhYA.js";import"./MarkdownPopover-CQwXLXPz.js";import"./LightTooltip-C9EShGL9.js";import"./MarkdownSynapse-ACifc84y.js";import"./SkeletonButton-C-q75hZ2.js";import"./SkeletonInlineBlock-BZYL3GN_.js";import"./SkeletonTable-DJaYvBkh.js";import"./SkeletonParagraph-DZGMGLgg.js";import"./JsonSchemaForm-B-TL33VZ.js";import"./GridLegacy-BYnML27f.js";import"./HelpTwoTone-CHowepS8.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-ldwWEl2K.js";import"./_createAggregator-Rt67Mqcq.js";import"./_baseMap-BVLp5GDP.js";import"./DateTimePicker-BZ-JxGVC.js";import"./useMobilePicker-Cqbyp58W.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-0d8bMAhF.js";import"./index-DcvNn4X2.js";import"./Chip-CoCC-fi6.js";import"./Tabs-OOLeyD4M.js";import"./KeyboardArrowRight-DKLVBeKI.js";import"./Autocomplete-BE2uQlB2.js";import"./usePreviousProps-C19tVBDD.js";import"./use-deep-compare-effect.esm-B_X0lumA.js";import"./TextWidget-Mwn8GrVf.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Lr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
