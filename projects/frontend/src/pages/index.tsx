import Head from 'next/head'
import Layout from '../shared/components/layout'

import { gql } from "@apollo/client";
import client from '../shared/infra/graphql/apolloClient';
import { Map } from '../shared/components/map/map';

export default function Home ({ countries, mapboxToken }) {
  return (
    <section id="home">
      <Map accessToken={mapboxToken}/>
    </section>
  )
}

export async function getStaticProps() {
  const mapboxToken = process.env.MAPBOX_ACCESS_TOKEN;
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  });

  return {
    props: {
      countries: data.countries.slice(0, 4),
      mapboxToken
    },
 };
}
