import { Meta, StoryObj } from '@storybook/react'
import { MOCK_REPO_ORIGIN } from '../../utils/functions/getEndpoint'
import { getHandlers } from '../../mocks/msw/handlers'
import { EntityHeaderTable } from './EntityHeaderTable'
import { MOCK_FILE_ENTITY_ID } from '../../mocks/entity/mockFileEntity'
import { MOCK_TABLE_ENTITY_ID } from '../../mocks/entity/mockTableEntity'
import { ReferenceList } from '@sage-bionetworks/synapse-types'

const meta = {
  title: 'Governance/EntityHeaderTable',
  component: EntityHeaderTable,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/vLusb6uSfhx45OyFx5IHwy/(XDM)-Extensible-Data-Management-Comps?type=design&node-id=6546-11978',
    },
  },
} satisfies Meta
export default meta

type Story = StoryObj<typeof meta>

export const Mock: Story = {
  args: {
    isEditable: false,
    references: [
      {
        targetId: MOCK_FILE_ENTITY_ID,
      },
      {
        targetId: MOCK_TABLE_ENTITY_ID,
      },
    ],
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: { ...getHandlers(MOCK_REPO_ORIGIN) },
    },
  },
}

export const RealWorldADKP: Story = {
  args: {
    isEditable: true,
    removeSelectedRowsButtonText: 'Mark for Removal from AR',
    onUpdate: (newReferenceList: ReferenceList) => {
      alert(
        `onUpdate(): New reference list after rows updated: ${JSON.stringify(
          newReferenceList,
        )}`,
      )
    },
    references: [
      {
        targetId: 'syn5550376',
      },
      {
        targetId: 'syn9866039',
      },
      {
        targetId: 'syn12532774',
      },
      {
        targetId: 'syn12177273',
      },
      {
        targetId: 'syn9702085',
      },
      {
        targetId: 'syn5550419',
      },
      {
        targetId: 'syn10491150',
      },
      {
        targetId: 'syn8456629',
      },
      {
        targetId: 'syn18518536',
      },
      {
        targetId: 'syn18520772',
      },
      {
        targetId: 'syn18751639',
      },
      {
        targetId: 'syn18701100',
      },
      {
        targetId: 'syn18726376',
      },
      {
        targetId: 'syn20545687',
      },
      {
        targetId: 'syn20682034',
      },
      {
        targetId: 'syn20703273',
      },
      {
        targetId: 'syn20709660',
      },
      {
        targetId: 'syn20703626',
      },
      {
        targetId: 'syn20710567',
      },
      {
        targetId: 'syn7416949',
      },
      {
        targetId: 'syn4645334',
      },
      {
        targetId: 'syn6038797',
      },
      {
        targetId: 'syn20833087',
      },
      {
        targetId: 'syn18485175',
      },
      {
        targetId: 'syn21441776',
      },
      {
        targetId: 'syn20821165',
      },
      {
        targetId: 'syn20933797',
      },
      {
        targetId: 'syn21670836',
      },
      {
        targetId: 'syn21442621',
      },
      {
        targetId: 'syn22004165',
      },
      {
        targetId: 'syn22004158',
      },
      {
        targetId: 'syn22024738',
      },
      {
        targetId: 'syn21440114',
      },
      {
        targetId: 'syn21440112',
      },
      {
        targetId: 'syn21440113',
      },
      {
        targetId: 'syn20781773',
      },
      {
        targetId: 'syn20801801',
      },
      {
        targetId: 'syn20801802',
      },
      {
        targetId: 'syn20801800',
      },
      {
        targetId: 'syn20801799',
      },
      {
        targetId: 'syn20801804',
      },
      {
        targetId: 'syn20801803',
      },
      {
        targetId: 'syn20801806',
      },
      {
        targetId: 'syn20801798',
      },
      {
        targetId: 'syn20801805',
      },
      {
        targetId: 'syn20801994',
      },
      {
        targetId: 'syn20801995',
      },
      {
        targetId: 'syn20801993',
      },
      {
        targetId: 'syn20801992',
      },
      {
        targetId: 'syn20801997',
      },
      {
        targetId: 'syn20801996',
      },
      {
        targetId: 'syn20801999',
      },
      {
        targetId: 'syn20801991',
      },
      {
        targetId: 'syn20801998',
      },
      {
        targetId: 'syn20835000',
      },
      {
        targetId: 'syn20835002',
      },
      {
        targetId: 'syn20834999',
      },
      {
        targetId: 'syn20835001',
      },
      {
        targetId: 'syn20857315',
      },
      {
        targetId: 'syn20857314',
      },
      {
        targetId: 'syn20857317',
      },
      {
        targetId: 'syn20800655',
      },
      {
        targetId: 'syn20800656',
      },
      {
        targetId: 'syn20800654',
      },
      {
        targetId: 'syn20800653',
      },
      {
        targetId: 'syn20800658',
      },
      {
        targetId: 'syn20800657',
      },
      {
        targetId: 'syn20800660',
      },
      {
        targetId: 'syn20800652',
      },
      {
        targetId: 'syn20800659',
      },
      {
        targetId: 'syn20835005',
      },
      {
        targetId: 'syn20835007',
      },
      {
        targetId: 'syn20834996',
      },
      {
        targetId: 'syn20835006',
      },
      {
        targetId: 'syn21450795',
      },
      {
        targetId: 'syn20820120',
      },
      {
        targetId: 'syn20820121',
      },
      {
        targetId: 'syn20820122',
      },
      {
        targetId: 'syn20820124',
      },
      {
        targetId: 'syn20820123',
      },
      {
        targetId: 'syn20857316',
      },
      {
        targetId: 'syn21011186',
      },
      {
        targetId: 'syn21011180',
      },
      {
        targetId: 'syn21011167',
      },
      {
        targetId: 'syn21011132',
      },
      {
        targetId: 'syn20809809',
      },
      {
        targetId: 'syn20682028',
      },
      {
        targetId: 'syn22313785',
      },
      {
        targetId: 'syn22391830',
      },
      {
        targetId: 'syn22391828',
      },
      {
        targetId: 'syn22278359',
      },
      {
        targetId: 'syn22278361',
      },
      {
        targetId: 'syn23445903',
      },
      {
        targetId: 'syn23446022',
      },
      {
        targetId: 'syn21411641',
      },
      {
        targetId: 'syn23446265',
      },
      {
        targetId: 'syn23538601',
      },
      {
        targetId: 'syn23538602',
      },
      {
        targetId: 'syn22323894',
      },
      {
        targetId: 'syn23564166',
      },
      {
        targetId: 'syn23564894',
      },
      {
        targetId: 'syn23564892',
      },
      {
        targetId: 'syn23568548',
      },
      {
        targetId: 'syn23568550',
      },
      {
        targetId: 'syn17014477',
      },
      {
        targetId: 'syn24168323',
      },
      {
        targetId: 'syn24171156',
      },
      {
        targetId: 'syn24239826',
      },
      {
        targetId: 'syn24239830',
      },
      {
        targetId: 'syn22695360',
      },
      {
        targetId: 'syn22695354',
      },
      {
        targetId: 'syn19077921',
      },
      {
        targetId: 'syn25533712',
      },
      {
        targetId: 'syn25533711',
      },
      {
        targetId: 'syn5550378',
      },
      {
        targetId: 'syn25667265',
      },
      {
        targetId: 'syn25671135',
      },
      {
        targetId: 'syn25671136',
      },
      {
        targetId: 'syn25672227',
      },
      {
        targetId: 'syn25672228',
      },
      {
        targetId: 'syn25682004',
      },
      {
        targetId: 'syn25681981',
      },
      {
        targetId: 'syn25686496',
      },
      {
        targetId: 'syn25686501',
      },
      {
        targetId: 'syn25705292',
      },
      {
        targetId: 'syn25705289',
      },
      {
        targetId: 'syn25711055',
      },
      {
        targetId: 'syn25807955',
      },
      {
        targetId: 'syn25807954',
      },
      {
        targetId: 'syn25832094',
      },
      {
        targetId: 'syn25832096',
      },
      {
        targetId: 'syn25879176',
      },
      {
        targetId: 'syn25879175',
      },
      {
        targetId: 'syn25927427',
      },
      {
        targetId: 'syn25927423',
      },
      {
        targetId: 'syn25945734',
      },
      {
        targetId: 'syn25945733',
      },
      {
        targetId: 'syn26254634',
      },
      {
        targetId: 'syn26293237',
      },
      {
        targetId: 'syn26337524',
      },
      {
        targetId: 'syn26337526',
      },
      {
        targetId: 'syn20957610',
      },
      {
        targetId: 'syn26410784',
      },
      {
        targetId: 'syn26410786',
      },
      {
        targetId: 'syn26410787',
      },
      {
        targetId: 'syn20825471',
      },
      {
        targetId: 'syn26410788',
      },
      {
        targetId: 'syn26410789',
      },
      {
        targetId: 'syn26410791',
      },
      {
        targetId: 'syn21573692',
      },
      {
        targetId: 'syn22231797',
      },
      {
        targetId: 'syn22219631',
      },
      {
        targetId: 'syn26427298',
      },
      {
        targetId: 'syn26452613',
      },
      {
        targetId: 'syn26452614',
      },
      {
        targetId: 'syn26670421',
      },
      {
        targetId: 'syn26670422',
      },
      {
        targetId: 'syn26947195',
      },
      {
        targetId: 'syn26947196',
      },
      {
        targetId: 'syn26951268',
      },
      {
        targetId: 'syn23633752',
      },
      {
        targetId: 'syn26720675',
      },
      {
        targetId: 'syn28546417',
      },
      {
        targetId: 'syn28546474',
      },
      {
        targetId: 'syn26223299',
      },
      {
        targetId: 'syn26223300',
      },
      {
        targetId: 'syn26720401',
      },
      {
        targetId: 'syn26969096',
      },
      {
        targetId: 'syn29348128',
      },
      {
        targetId: 'syn31511702',
      },
      {
        targetId: 'syn31511712',
      },
      {
        targetId: 'syn31513397',
      },
      {
        targetId: 'syn31513401',
      },
      {
        targetId: 'syn32141181',
      },
      {
        targetId: 'syn32141189',
      },
      {
        targetId: 'syn35578902',
      },
      {
        targetId: 'syn38195196',
      },
      {
        targetId: 'syn38195201',
      },
      {
        targetId: 'syn40008311',
      },
      {
        targetId: 'syn40008329',
      },
      {
        targetId: 'syn44424185',
      },
      {
        targetId: 'syn44424194',
      },
      {
        targetId: 'syn50670863',
      },
      {
        targetId: 'syn50670867',
      },
      {
        targetId: 'syn51197191',
      },
      {
        targetId: 'syn51197190',
      },
      {
        targetId: 'syn51226083',
      },
      {
        targetId: 'syn51226084',
      },
      {
        targetId: 'syn51298485',
      },
      {
        targetId: 'syn51298463',
      },
      {
        targetId: 'syn8272982',
      },
      {
        targetId: 'syn10901601',
      },
      {
        targetId: 'syn9779506',
      },
      {
        targetId: 'syn10901600',
      },
      {
        targetId: 'syn9944859',
      },
      {
        targetId: 'syn13894145',
      },
      {
        targetId: 'syn2910256',
      },
      {
        targetId: 'syn9705311',
      },
      {
        targetId: 'syn18909507',
      },
      {
        targetId: 'syn21638701',
      },
      {
        targetId: 'syn21638689',
      },
      {
        targetId: 'syn22024767',
      },
      {
        targetId: 'syn22024795',
      },
      {
        targetId: 'syn22024811',
      },
      {
        targetId: 'syn22024835',
      },
      {
        targetId: 'syn22024910',
      },
      {
        targetId: 'syn22024942',
      },
      {
        targetId: 'syn22024977',
      },
      {
        targetId: 'syn22024988',
      },
      {
        targetId: 'syn22024998',
      },
      {
        targetId: 'syn22025006',
      },
      {
        targetId: 'syn22025024',
      },
      {
        targetId: 'syn22025078',
      },
      {
        targetId: 'syn22025089',
      },
      {
        targetId: 'syn22025040',
      },
      {
        targetId: 'syn22024536',
      },
      {
        targetId: 'syn8484987',
      },
      {
        targetId: 'syn8466812',
      },
      {
        targetId: 'syn9732848',
      },
      {
        targetId: 'syn9732849',
      },
      {
        targetId: 'syn5570291',
      },
      {
        targetId: 'syn5592521',
      },
      {
        targetId: 'syn5615307',
      },
      {
        targetId: 'syn5761320',
      },
      {
        targetId: 'syn5761335',
      },
      {
        targetId: 'syn5761336',
      },
      {
        targetId: 'syn5761340',
      },
      {
        targetId: 'syn7750270',
      },
      {
        targetId: 'syn7981630',
      },
      {
        targetId: 'syn8403731',
      },
      {
        targetId: 'syn7450276',
      },
      {
        targetId: 'syn10491429',
      },
      {
        targetId: 'syn22264146',
      },
      {
        targetId: 'syn22098044',
      },
      {
        targetId: 'syn23262395',
      },
      {
        targetId: 'syn16809842',
      },
      {
        targetId: 'syn25428172',
      },
      {
        targetId: 'syn25460200',
      },
      {
        targetId: 'syn25927547',
      },
      {
        targetId: 'syn25927540',
      },
      {
        targetId: 'syn25927682',
      },
      {
        targetId: 'syn25927683',
      },
      {
        targetId: 'syn25927772',
      },
      {
        targetId: 'syn25927774',
      },
      {
        targetId: 'syn25944523',
      },
      {
        targetId: 'syn25944584',
      },
      {
        targetId: 'syn25944592',
      },
      {
        targetId: 'syn23633751',
      },
      {
        targetId: 'syn30821562',
      },
      {
        targetId: 'syn51732485',
      },
      {
        targetId: 'syn51732484',
      },
      {
        targetId: 'syn52050244',
      },
      {
        targetId: 'syn52050243',
      },
      {
        targetId: 'syn52050305',
      },
      {
        targetId: 'syn52050311',
      },
      {
        targetId: 'syn52293424',
      },
      {
        targetId: 'syn52293426',
      },
      {
        targetId: 'syn52383692',
      },
      {
        targetId: 'syn52383690',
      },
    ],
  },
  parameters: {
    stack: 'production',
  },
}
