import 'taro-ui/dist/style/index.scss'
import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
import './app.scss'

class App extends Component {

  config = {
    pages: [
      'pages/index/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    cloud: true
  }

  componentDidMount() {
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init()
    }
  }

  render() {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
