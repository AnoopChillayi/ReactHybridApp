import { Dimensions, Platform } from 'react-native';
import { isAndroid } from '../utils/Platform';

const { width, height } = Dimensions.get('window');

// Used via Metrics.baseMargin
const metrics = {
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  toolBarTop: (Platform.OS === 'ios') ? 5 : 17,
  statusBarHeight: (Platform.OS === 'ios') ? 0 : 24,
  buttonRadius: 4,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200
  },
  font7:7,
  font8: 8,
  font10: 10,
  font16: 16,
  font13: 13,
  font14: 14,
  font12: 12,
  font20: 20,
  font18: 18,
  font19: 19,
  font22: 22,
  font24: 24,
  marginCommon: 10,
  searchBarHeigth: 40,
  searchBarBorderRadius: 8,
  navTabsHeight: 40,
  navTabItemHeight: 40,
  windowCorner: 5,
  iconCorner: 10,
  lineNumberHeight: 30,
  lineNumberWidth: 40,
  headerHeight: 40,
  backButtonHeight: 35,
  backButtonRadius: 35,
  toolBarBottom: 15,
  toolBarTextMargin: 70,
  toolBarHeadingHeight: 30,
  toolbarHeight: Platform.OS === 'ios' ? 64 : 54,
  searchBarMarginTop: isAndroid() ? 30 : 20,
  alertNotificationHeight: 20,
  toolbarHeadingPadding: 40,
  viewPagerHeightPortrait: 350,
  viewPagerHeightLandscape: 200,
  scheduleListPadding: 10,
  closeToMeHeaderBorderRadius: 20,
  cardviewHeight: 270,
  indicatorSize: 9,
  unSelectedIndicatorSize: 7
};

export default metrics;
