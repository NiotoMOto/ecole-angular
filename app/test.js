angular.module("app", ["filters", "services", "directives", "ngSanitize"]).config(["$compileProvider", function (a) {
    a.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file):|data:image\/|chrome-extension:/)
}]).controller("appController", ["$scope", "$http", "$window", "cssHelper", function ($scope, $http, $window, a) {
    function b(a) {
        for (var b = {}, c = /([^&=\s]+)\s*[=]\s*([^\s&]+)/g, d = null; null != (d = c.exec(a.substr(1)));)b[d[1].toLowerCase()] = d[2];
        return b
    }

    angular.extend($scope, a);
    var c = null;
    $scope.online = !0;
    var d = b(location.hash).wid;
    $scope.panelMode = isNaN(d), $scope.showList = !1, $scope.init = function () {
        chrome.runtime.onMessage.addListener(function (b) {
            if ("app::onChanged" === b.msg) {
                var d = b.data;
                $scope.online = !0, $scope.$apply(), c != d.currentApp.Name && (c = d.currentApp.Name, $scope.$apply(function () {
                    if ($scope.appNames = d.appNames, $scope.currentApp = d.currentApp, d.currentApp.Data && d.currentApp.Data.themeSettings && d.currentApp.Data.themeSettings.length)try {
                        var b = JSON.parse(d.currentApp.Data.themeSettings);
                        $scope.toolbarColor = 247 != b.toolbarColor[0] && 247 != b.toolbarColor[1] && 247 != b.toolbarColor[2] ? {color: a.rgb(b.toolbarColor), "border-bottom": "5px solid " + a.rgb(b.toolbarColor)} : {color: "#ccc", "border-bottom": "5px solid #ccc"}, $scope.currentApp.appStyle = {backgroundColor: a.rgb(b.appHeaderColor), color: a.rgb(b.appTextColor), borderColor: a.rgb(b.appTextColor), fill: a.rgb(b.appTextColor)}
                    } catch (c) {
                    }
                    $scope.currentApp.modules = $scope.currentApp.feeds = [], $scope.currentApp.secureDownloader = !1, $scope.currentApp.modules = $scope.currentApp.feeds = $scope.currentApp.secureDownloader = $scope.currentApp.yappyz = [], $scope.currentApp.modules = d.currentApp.Components.filter(function (a) {
                        return 1 === a.Type && a.Data.moduleType && "feed" != a.Data.layout && "secureDownloader" != a.Data.layout && "yappyz" != a.Data.layout
                    }), $scope.currentApp.feeds = d.currentApp.Components.filter(function (a) {
                        return 1 === a.Type && a.Data.moduleType && "feed" === a.Data.layout
                    }), $scope.currentApp.yappyz = d.currentApp.Components.filter(function (a) {
                        return a.Data.moduleType && "yappyz" === a.Data.layout
                    }), $scope.currentApp.secureDownloader = d.currentApp.Components.filter(function (a) {
                        return a.Data.moduleType && "secureDownloader" === a.Data.layout
                    }), $scope.selectMenu = $scope.currentApp.feeds && $scope.currentApp.feeds.length > 0 ? "feeds" : $scope.currentApp.modules && $scope.currentApp.modules.length > 0 ? "apps" : $scope.currentApp.yappyz && $scope.currentApp.yappyz.length > 0 ? "yappyz" : "SD"
                }))
            } else"app::offline" === b.msg && ($scope.online = !1, $scope.$apply())
        }), chrome.runtime.sendMessage({msg: "app::ready"})
    }, $scope.reconnect = function () {
        chrome.runtime.sendMessage({msg: "app::ready"})
    }, $scope.toggleMenu = function (a) {
        a.stopPropagation(), $scope.menuOpened = !$scope.menuOpened
    }, $scope.toggleSidebar = function () {
        isNaN(d) || chrome.runtime.sendMessage({msg: "home::toggle", data: {windowId: parseInt(d)}})
    }, $scope.selectApp = function (a) {
        chrome.runtime.sendMessage({msg: "app::change", data: a}), $scope.menuOpened = !1
    }, $scope.openTab = function () {
        chrome.runtime.sendMessage({msg: "home::openWindow"})
    }, $scope.pageIndex = 0, $scope.pageCount = 0, $scope.changePage = function (a) {
        $scope.pageIndex += a
    }, $scope.searchHeader = function () {
        var a = "http://www.google.com/?q=" + this.request;
        chrome.runtime.sendMessage({msg: "home::openWindow", data: {url: a}})
    }, $scope.closeWindow = function () {
        chrome.app.window.current().close()
    }, $scope.minimizeWindow = function () {
        chrome.app.window.current().minimize()
    }
}]);