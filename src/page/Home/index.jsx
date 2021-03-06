import { FaFilter } from 'react-icons/fa'
import {
  Container,
  Header,
  SectionTitle,
  Title,
  Subtitle,
  Button,
  Text,
  Content
} from './styles'

import CardBar from '../../components/CardBar'
import CardScatter from '../../components/CardScatter'

export default function Home () {
  return (
    <Container>
      <Header />

      <SectionTitle>
        <div>
          <Title>Dashboard</Title>
          <Subtitle>Desafio Técnico Frontend</Subtitle>
        </div>

        <Button>
          <FaFilter size={13} color='var(--color-white)' />
          <Text>Filtrar</Text>
        </Button>
      </SectionTitle>

      <Content>
        <CardBar />
        <CardScatter />
      </Content>
    </Container>
  )
}
