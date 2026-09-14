import { consortiaAndRepositoriesSql } from '@/config/resources'
import { consortiaAndRepositoriesCardConfig } from '@/config/synapseConfigs/consortiaAndRepositories'
import { CardContainerLogic } from 'synapse-react-client'
import styles from './ResearchEcosystem.module.scss'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'

function ResearchEcosystem() {
  return (
    <SectionLayout
      title="Research Ecosystem"
      subtitle="Grounded in truly open science and radical collaboration, the AD Knowledge Portal bridges data silos by integrating with a broad network of consortia and repositories. Each contributes unique data and expertise needed to drive discovery in Alzheimer's Disease research."
      centerTitle
      ContainerProps={{
        sx: {
          marginTop: '80px',
        },
      }}
    >
      <div className={styles.consortiaAndRepositoriesCards}>
        <CardContainerLogic
          cardConfiguration={consortiaAndRepositoriesCardConfig}
          sql={consortiaAndRepositoriesSql}
        />
      </div>
    </SectionLayout>
  )
}

export default ResearchEcosystem
