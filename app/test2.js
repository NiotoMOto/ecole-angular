!function (a) {
    function b(a) {
        return void 0 === a ? localStorage.LAST_APP_NAME : void(localStorage.LAST_APP_NAME = a)
    }

    function c(a, b) {ç
        var c = new XMLHttpRequest;
        c.open("GET", "http://www.appiance.com/api/app/?name=" + encodeURIComponent(a) + "&fillComponents=true", !0), c.responseType = "json", c.setRequestHeader("Accept", "application/json"), c.onload = function () {
            if (200 === this.status) {
                var a = this.response;
                return"string" == typeof a && (a = JSON.parse(a)), b(a)
            }
            b(null)
        }, c.onerror = function () {
            b(null)
        }, c.send()
    }

    function d(a) {
        chrome.sienium.getConfigFile("appiance.json", function (b) {
            b = JSON.parse(b);
            var c = {appInstanceUid: b.appinstanceuid, appNames: b.Appiance.map(function (a) {
                return a.name
            })};
            a(c)
        })
    }

    var e = a.appManager = {onAppChanged: new chrome.Event, current: null, appInstanceUid: null, isAppReady: !1, isBgReady: {appName: null, isReady: !1, externally: !1, secureDownloader: null}, online: !0, isFirstLaunch: !0, changeIsReady: function () {
        e.isBgReady.isReady && e.isAppReady ? (e.isBgReady.isReady = !1, e.isAppReady = !1, e.change(e.isBgReady.appName, e.isBgReady.externally)) : e.isBgReady.isReady || (e.isAppReady = !1, e.change())
    }, change: function (a, f) {
        e.isFirstRun = null === e.current, e.isBgReady.appName = null, e.isBgReady.externally = !1, d(function (d) {
            if (a || (a = b()), a || (a = d.appNames[d.appNames.length - 1]), e.appInstanceUid = d.appinstanceuid, e.current && e.current.Name == a && e.online) {
                var g = null === e.current;
                d.currentApp = e.current, e.onAppChanged.dispatch({online: !0, config: d, firstLaunch: g, externally: f})
            } else c(a, function (a) {
                if (a) {
                    e.online = !0, d.currentApp = a, chrome.sienium.setDefaultSearchEngine(3), b(a.Name);
                    var c = null === e.current;
                    e.current = a, e.onAppChanged.dispatch({online: !0, config: d, firstLaunch: c, externally: f})
                } else e.online = !1, e.onAppChanged.dispatch({online: !1})
            })
        })
    }, load: function () {
        chrome.sienium.getLaunchCommandLine && chrome.sienium.onCommandLineInvoked ? chrome.sienium.getLaunchCommandLine(function (a) {
            namespace = "";
            for (var b = 0; b < a.length; b++)"namespace" == a[b].name ? namespace = a[b].value : "url" == a[b].name && (e.isBgReady.secureDownloader = a[b].value);
            e.isBgReady.appName = namespace, e.isBgReady.externally = !1, e.isBgReady.isReady = !0, chrome.sienium.onCommandLineInvoked.addListener(function (a, b) {
                namespace = "";
                for (var c = 0; c < a.length; c++)"namespace" == a[c].name ? namespace = a[c].value : "url" == a[c].name;
                e.isBgReady.appName = namespace, e.isBgReady.externally = !1, e.isBgReady.isReady = !0, b.length > 0 && -1 != b[0].search(/.*\.appiance\.com/) && tracking.postEvent("ShortCutDesktop", {url: b[0]})
            })
        }) : chrome.sienium.getNamespace && chrome.sienium.onNamespaceInvoked && chrome.sienium.getNamespace(function (a) {
            e.isBgReady.appName = a, e.isBgReady.externally = !1, e.isBgReady.isReady = !0, chrome.sienium.onNamespaceInvoked.addListener(function (a) {
                e.isBgReady.appName = a, e.isBgReady.externally = !1, e.isBgReady.isReady = !0
            })
        })
    }}
}(this);