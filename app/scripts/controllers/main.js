'use strict';

angular.module('uniAdminApp')
    .controller('homeCtrl', function($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    }).controller('ModelListCtrl', function($scope, $rootScope, $route, $timeout) {
        $rootScope._ctx = {};
        $rootScope._ctx._meta = [{
            key: 'video',
            val: '视频',
            icon: 'fa-flag',
            type: 'APPLICATION',
            children: [{
                key: 'tv1',
                val: '短片',
                icon: 'fa-flag',
                type: 'RESOURCE',
                meta: {}
            }, {
                key: 'tv2',
                val: '电视剧',
                icon: 'fa-flag',
                type: 'RESOURCE',
                meta: {}
            }, {
                key: 'film',
                val: '电影',
                icon: 'fa-flag',
                type: 'RESOURCE',
                meta: {}
            }]
        }, {
            key: 'ebook',
            val: '电纸书',
            icon: 'fa-flag',
            type: 'APPLICATION',
            children: [{
                key: 'tv1',
                val: '短片',
                icon: 'fa-flag',
                type: 'RESOURCE',
                meta: {}
            }, {
                key: 'tv2',
                val: '电视剧',
                icon: 'fa-flag',
                type: 'RESOURCE',
                meta: {}
            }, {
                key: 'film',
                val: '电影',
                icon: 'fa-flag',
                type: 'RESOURCE',
                meta: {}
            }]
        }, {
            key: 'wallpaper',
            val: '壁纸',
            icon: 'fa-flag',
            type: 'APPLICATION',
            children: [{
                key: 'tv1',
                val: '短片',
                icon: 'fa-flag',
                type: 'RESOURCE',
                meta: {}
            }, {
                key: 'tv2',
                val: '电视剧',
                icon: 'fa-flag',
                type: 'RESOURCE',
                meta: {}
            }, {
                key: 'film',
                val: '电影',
                icon: 'fa-flag',
                type: 'RESOURCE',
                meta: {}
            }]
        }];
        $rootScope._ctx._fields = [{
            type: 'number',
            name: 'videoId',
            key: 'videoId'
        }, {
            type: 'image',
            name: '封面',
            key: 'cover'
        }, {
            type: 'char',
            name: '片名',
            key: 'videoTitle'
        }, {
            type: 'enumerator',
            name: '电影类型',
            key: 'videoType',
            choices: [{
                key: 'type1',
                val: '惊悚'
            }, {
                key: 'typew',
                val: '戏剧'
            }, {
                key: 'type3',
                val: '动作'
            }, {
                key: 'type4',
                val: '爱情'
            }]
        }, {
            type: 'date',
            name: '发行时间',
            key: 'publishDate',
            sortable: true
        }, {
            type: 'boolean',
            name: '下线',
            key: 'offline'
        }];

        $rootScope._ctx._modelData = {
            meta: {},
            page: {
                current: 2,
                per: 30,
                total: 420
            },
            list: [{
                videoId: 10001,
                cover: 'http://js.wiyun.com/site_media/images/wallpaper/eac1bce7-90d5-40a7-a7e2-ae02acca2e86_jpg_152x102_crop_upscale_q85.jpg',
                videoTitle: '今晚看啥',
                videoType: '喜剧',
                publishDate: '2014-03-04',
                offline: false,
            }, {
                videoId: 10001,
                cover: 'http://js.wiyun.com/site_media/images/wallpaper/eac1bce7-90d5-40a7-a7e2-ae02acca2e86_jpg_152x102_crop_upscale_q85.jpg',
                videoTitle: '今晚看啥',
                videoType: '喜剧',
                publishDate: '2014-03-04',
                offline: false,
            }, {
                videoId: 10001,
                cover: 'http://js.wiyun.com/site_media/images/wallpaper/eac1bce7-90d5-40a7-a7e2-ae02acca2e86_jpg_152x102_crop_upscale_q85.jpg',
                videoTitle: '今晚看啥',
                videoType: '喜剧',
                publishDate: '2014-03-04',
                offline: false,
            }]
        };

        $timeout(function() {
            $rootScope.$emit('refreshSiteMenu');
            $rootScope._ctx.currentApp = _.find($rootScope._ctx._meta, function(item) {
                return item.key === $route.current.params.app;
            });
            $rootScope._ctx.currentResource = _.find($rootScope._ctx.currentApp.children, function(item) {
                return item.key === $route.current.params.resource;
            });
        });
    });