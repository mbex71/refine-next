import type { AppProps } from 'next/app'
import { Refine } from '@pankod/refine-core'
import type { } from '@pankod/refine-core'
import routerProvider from '@pankod/refine-nextjs-router'
import dataProvider from '@pankod/refine-simple-rest'
import { Layout, ReadyPage, ErrorComponent, notificationProvider } from '@pankod/refine-antd'
import "@pankod/refine-antd/dist/styles.min.css";
const API_URL = "https://api.fake-rest.refine.dev";

import { PostList, PostCreate } from '@components'

function MyApp({ Component, pageProps }: AppProps) {

  return (

    <Refine
      routerProvider={routerProvider}
      dataProvider={dataProvider(API_URL)}
      Layout={Layout}
      ReadyPage={ReadyPage}
      notificationProvider={notificationProvider}
      catchAll={<ErrorComponent />}
      resources={[
        {
          name: 'posts',
          list: PostList,
          create: PostCreate
        }
      ]}

    >
      <Component {...pageProps} />
    </Refine >



  )
}

export default MyApp
