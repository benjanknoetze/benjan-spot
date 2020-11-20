//Import the Link API to support client-side navigation
import Layout from '../components/MyLayout'
import PeopleHero from '../components/People/PeopleHero'
import PeopleBody from '../components/People/PeopleBody'

//People page
export default () => (
  <Layout>
    <title>People page</title>
    <PeopleHero/>
    <PeopleBody/>
  </Layout>
)