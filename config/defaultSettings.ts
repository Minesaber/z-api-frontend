import { ProLayoutProps } from '@ant-design/pro-components';

const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 火山
  colorPrimary: '#FA541C',
  layout: 'top',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  splitMenus: false,
  colorWeak: false,
  title: 'ZAPI',
  pwa: true,
  logo: 'https://s3.uuu.ovh/imgs/2025/03/31/f3dd56f14a93dbaf.png',
  iconfontUrl: '',
  token: {},
};

export default Settings;
