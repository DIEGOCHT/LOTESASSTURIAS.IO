(function(){
let translateObjs = {};
const trans = (...a) => {
    return translateObjs[a[0x0]] = a, '';
};
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a], a['split']('.')[0x0]);
        let l = a['split']('.'), m = l[0x0] + '_vr';
        m in this && k['updateText'](k['translateObjs'][a], m);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this, !![]), e['call'](this);
                };
            m['bind']('begin', n, this, !![]);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"children":["this.MainViewer"],"width":"100%","scrollBarMargin":2,"xrPanelsEnabled":true,"start":"this.init()","id":"rootPlayer","data":{"locales":{"es":"locale/es.txt"},"history":{},"textToSpeechConfig":{"speechOnQuizQuestion":false,"speechOnTooltip":false,"volume":1,"stopBackgroundAudio":false,"pitch":1,"rate":1,"speechOnInfoWindow":false},"defaultLocale":"es","name":"Player20114","displayTooltipInTouchScreens":true},"backgroundColor":["#FFFFFF"],"backgroundColorRatios":[0],"propagateClick":false,"layout":"absolute","hash": "cfb33958befc78f12e0ed646e4b596e96aaf580e31904faeb64949be02920c3d", "definitions": [{"class":"PanoramaCamera","id":"panorama_916953E6_B74D_227C_41B2_9158819A6122_camera","initialPosition":{"class":"PanoramaCameraPosition","pitch":0,"yaw":0},"enterPointingToHorizon":true},{"playbackBarHeadShadow":true,"toolTipPaddingBottom":4,"subtitlesFontColor":"#FFFFFF","surfaceReticleColor":"#FFFFFF","progressBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"],"progressBackgroundColor":["#000000"],"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipShadowColor":"#333138","progressBottom":10,"subtitlesTop":0,"progressHeight":2,"progressBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesTextShadowColor":"#000000","playbackBarBackgroundColor":["#FFFFFF"],"progressBarBorderSize":0,"progressBarBorderRadius":2,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadWidth":6,"subtitlesBottom":50,"playbackBarBottom":5,"playbackBarProgressBorderSize":0,"playbackBarHeight":10,"toolTipPaddingRight":6,"playbackBarHeadShadowVerticalLength":0,"playbackBarRight":0,"playbackBarBackgroundColorDirection":"vertical","subtitlesFontSize":"3vmin","progressBorderRadius":2,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarProgressBorderRadius":0,"subtitlesBackgroundOpacity":0.2,"progressLeft":"33%","class":"ViewerArea","toolTipTextShadowColor":"#000000","vrThumbstickRotationStep":20,"toolTipFontColor":"#606060","toolTipBackgroundColor":"#F6F6F6","toolTipFontFamily":"Arial","playbackBarHeadShadowOpacity":0.7,"playbackBarProgressBackgroundColorRatios":[0],"data":{"name":"Main Viewer"},"vrPointerSelectionColor":"#FF6600","playbackBarBorderRadius":0,"id":"MainViewer","toolTipFontSize":"1.11vmin","playbackBarBorderColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","subtitlesFontFamily":"Arial","playbackBarHeadShadowHorizontalLength":0,"playbackBarHeadBorderRadius":0,"vrPointerSelectionTime":2000,"toolTipPaddingLeft":6,"subtitlesBorderColor":"#FFFFFF","playbackBarHeadBorderColor":"#000000","propagateClick":false,"playbackBarBorderSize":0,"toolTipPaddingTop":4,"firstTransitionDuration":0,"subtitlesBackgroundColor":"#000000","toolTipBorderColor":"#767676","minHeight":50,"minWidth":100,"subtitlesGap":0,"progressBackgroundColorRatios":[0],"progressRight":"33%","playbackBarHeadShadowBlurRadius":3,"playbackBarBackgroundOpacity":1,"progressOpacity":0.7,"progressBarBackgroundColorDirection":"horizontal","subtitlesTextShadowOpacity":1,"playbackBarLeft":0,"progressBarBorderColor":"#000000","playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"vrPointerColor":"#FFFFFF","height":"100%","playbackBarHeadShadowColor":"#000000","progressBarBackgroundColorRatios":[0],"width":"100%","subtitlesTextShadowVerticalLength":1,"playbackBarHeadBorderSize":0},{"id":"MainViewerPanoramaPlayer","viewerArea":"this.MainViewer","displayPlaybackBar":true,"touchControlMode":"drag_rotation","class":"PanoramaPlayer","keepModel3DLoadedWithoutLocation":true,"mouseControlMode":"drag_rotation","aaEnabled":true,"arrowKeysAction":"translate"},{"hfovMax":30,"hfovMin":"150%","id":"panorama_916953E6_B74D_227C_41B2_9158819A6122","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_916953E6_B74D_227C_41B2_9158819A6122_t.webp","front":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","rowCount":10,"height":5120,"url":"media/panorama_916953E6_B74D_227C_41B2_9158819A6122_0/f/0/{row}_{column}.webp","colCount":10,"tags":"ondemand","width":5120},{"class":"TiledImageResourceLevel","rowCount":5,"height":2560,"url":"media/panorama_916953E6_B74D_227C_41B2_9158819A6122_0/f/1/{row}_{column}.webp","colCount":5,"tags":"ondemand","width":2560},{"class":"TiledImageResourceLevel","rowCount":3,"height":1536,"url":"media/panorama_916953E6_B74D_227C_41B2_9158819A6122_0/f/2/{row}_{column}.webp","colCount":3,"tags":"ondemand","width":1536},{"class":"TiledImageResourceLevel","rowCount":2,"height":1024,"url":"media/panorama_916953E6_B74D_227C_41B2_9158819A6122_0/f/3/{row}_{column}.webp","colCount":2,"tags":"ondemand","width":1024},{"class":"TiledImageResourceLevel","rowCount":1,"height":512,"url":"media/panorama_916953E6_B74D_227C_41B2_9158819A6122_0/f/4/{row}_{column}.webp","colCount":1,"tags":["ondemand","preload"],"width":512}]}}],"thumbnailUrl":"media/panorama_916953E6_B74D_227C_41B2_9158819A6122_t.webp","partial":true,"hfov":30,"class":"Panorama","data":{"label":"ICONO PAGINA WEB"},"vfov":30,"label":trans('panorama_916953E6_B74D_227C_41B2_9158819A6122.label')},{"class":"PlayList","id":"mainPlayList","items":[{"class":"PanoramaPlayListItem","camera":"this.panorama_916953E6_B74D_227C_41B2_9158819A6122_camera","media":"this.panorama_916953E6_B74D_227C_41B2_9158819A6122","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer"}]}],"minHeight":0,"defaultMenu":["fullscreen","mute","rotation"],"scrollBarColor":"#000000","minWidth":0,"gap":10,"height":"100%","scripts":{"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"openLink":TDV.Tour.Script.openLink,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getMediaByName":TDV.Tour.Script.getMediaByName,"clone":TDV.Tour.Script.clone,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setValue":TDV.Tour.Script.setValue,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getMainViewer":TDV.Tour.Script.getMainViewer,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getKey":TDV.Tour.Script.getKey,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"quizShowScore":TDV.Tour.Script.quizShowScore,"isPanorama":TDV.Tour.Script.isPanorama,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getPixels":TDV.Tour.Script.getPixels,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"mixObject":TDV.Tour.Script.mixObject,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"quizStart":TDV.Tour.Script.quizStart,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"initQuiz":TDV.Tour.Script.initQuiz,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"executeJS":TDV.Tour.Script.executeJS,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"existsKey":TDV.Tour.Script.existsKey,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"registerKey":TDV.Tour.Script.registerKey,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"unregisterKey":TDV.Tour.Script.unregisterKey,"initAnalytics":TDV.Tour.Script.initAnalytics,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"historyGoForward":TDV.Tour.Script.historyGoForward,"init":TDV.Tour.Script.init,"startMeasurement":TDV.Tour.Script.startMeasurement,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getComponentByName":TDV.Tour.Script.getComponentByName,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"quizFinish":TDV.Tour.Script.quizFinish,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"toggleVR":TDV.Tour.Script.toggleVR,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"downloadFile":TDV.Tour.Script.downloadFile,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"cloneBindings":TDV.Tour.Script.cloneBindings,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"historyGoBack":TDV.Tour.Script.historyGoBack,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"textToSpeech":TDV.Tour.Script.textToSpeech,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"resumePlayers":TDV.Tour.Script.resumePlayers,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"disableVR":TDV.Tour.Script.disableVR,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"enableVR":TDV.Tour.Script.enableVR,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"showWindowBase":TDV.Tour.Script.showWindowBase,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"createTween":TDV.Tour.Script.createTween,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"showWindow":TDV.Tour.Script.showWindow,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"showPopupImage":TDV.Tour.Script.showPopupImage,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"shareSocial":TDV.Tour.Script.shareSocial,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getOverlays":TDV.Tour.Script.getOverlays,"unloadViewer":TDV.Tour.Script.unloadViewer,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"playAudioList":TDV.Tour.Script.playAudioList,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"translate":TDV.Tour.Script.translate,"setMapLocation":TDV.Tour.Script.setMapLocation,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setLocale":TDV.Tour.Script.setLocale,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot},"class":"Player"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    let a = {}, b = this['get']('data')['translateObjs'];
    for (const c in translateObjs) {
        if (!b['hasOwnProperty'](c))
            b[c] = translateObjs[c];
    }
    return a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2026.0.9, Thu Jun 11 2026