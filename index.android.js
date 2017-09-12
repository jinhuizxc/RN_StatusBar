/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/**
 * StatusBar
 * 用于控制应用状态栏的组件。
 * 与Navigator搭配的用法
 StatusBar组件可以同时加载多个。此时属性会按照加载顺序合并（后者覆盖前者）。一个典型的用法就是在使用Navigator时，针对不同的路由指定不同的状态栏样式，如下：

 <View>
 <StatusBar
 backgroundColor="blue"
 barStyle="light-content"
 />
 <Navigator
 initialRoute={{statusBarHidden: true}}
 renderScene={(route, navigator) =>
       <View>
         <StatusBar hidden={route.statusBarHidden} />
         ...
       </View>
     }
 />
 </View>
 静态API
 为了应付没有很好的使用组件的情况，StatusBar 暴露了一个静态API。然而不推荐大家同时通过静态API和组件来定义相同的属性，因为静态API定义的属性值在后续的渲染中会被组件中定义的值所覆盖。

 常量
 currentHeight 状态栏的当前高度。

 属性
 animated bool

 指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden。

 hidden bool

 是否隐藏状态栏。

 androidbackgroundColor color

 状态栏的背景色。

 androidtranslucent bool

 指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。

 barStyle  enum('default', 'light-content', 'dark-content')

 设置状态栏文本的颜色。

 iosnetworkActivityIndicatorVisible bool

 指定是否显示网络活动提示符。

 iosshowHideTransition enum('fade', 'slide')

 通过hidden属性来显示或隐藏状态栏时所使用的动画效果。默认值为'fade'。

 方法
 static setHidden(hidden:boolean, animation?:StatusBarAnimation)

 显示／隐藏状态栏

 hidden（布尔类型） - 是否隐藏状态栏
 [animation]（StatusBarAnimation） - 改变状态栏显示状态的动画过渡效果
 static setBarStyle(style:StatusBarStyle, animated?:boolean)

 设置状态栏的样式

 style（StatusBarStyle） - 将要设置的状态栏样式
 [animated]（布尔类型） - 是否启用过渡动画
 static setNetworkActivityIndicatorVisible(visible:boolean)

 显示／隐藏网络活动指示器

 visible（布尔类型） - 是否显示网络活动指示器
 static setBackgroundColor(color:string, animated?:boolean)

 设置状态栏的背景色

 color（字符串） - 背景色
 [animated]（布尔类型） - 是否启用过渡动画
 static setTranslucent(translucent:boolean)

 指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。

 translucent（布尔类型） - 状态栏是否透明
 类型定义
 StatusBarStyle

 状态栏样式

 default - 默认的样式（IOS为白底黑字、Android为黑底白字）
 light-content - 黑底白字
 dark-content - 白底黑字
 StatusBarAnimation

 状态栏动画过渡效果

 none - 没有动画
 fade - 渐变效果
 slide - 滑动效果
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    StatusBar
} from 'react-native';

export default class RN_StatusBar extends Component {
    render() {
        return (
            <View>
                <TouchableHighlight
                    style={styles.wrapper}
                    onPress={() => {
                        StatusBar.setHidden(true);
                    }}>
                    <View style={styles.button}>
                        <Text>setHidden(true)</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.wrapper}
                    onPress={() => {
                        StatusBar.setHidden(false);
                    }}>
                    <View style={styles.button}>
                        <Text>setHidden(false)</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.wrapper}
                    onPress={() => {
                        StatusBar.setBackgroundColor('#ff00ff', true);
                    }}>
                    <View style={styles.button}>
                        <Text>setBackgroundColor('#ff00ff', true)</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.wrapper}
                    onPress={() => {
                        StatusBar.setBackgroundColor('#00ff00', true);
                    }}>
                    <View style={styles.button}>
                        <Text>setBackgroundColor('#00ff00', true)</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.wrapper}
                    onPress={() => {
                        StatusBar.setTranslucent(true);
                        StatusBar.setBackgroundColor('rgba(0, 0, 0, 0.4)', true);
                    }}>
                    <View style={styles.button}>
                        <Text>setTranslucent(true) and setBackgroundColor('rgba(0, 0, 0, 0.4)', true)</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.wrapper}
                    onPress={() => {
                        StatusBar.setTranslucent(false);
                        StatusBar.setBackgroundColor('black', true);
                    }}>
                    <View style={styles.button}>
                        <Text>setTranslucent(false) and setBackgroundColor('black', true)</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        borderRadius: 5,
        marginBottom: 5,
    },
    button: {
        borderRadius: 5,
        backgroundColor: '#eeeeee',
        padding: 10,
    },
    title: {
        marginTop: 16,
        marginBottom: 8,
        fontWeight: 'bold',
    }
});

AppRegistry.registerComponent('RN_StatusBar', () => RN_StatusBar);
