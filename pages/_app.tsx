import '@/styles/app.scss'
import '@/styles/modal.scss'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
