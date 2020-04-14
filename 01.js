if (login) {
    popLogin();
}
window._agl = window._agl || [];
(function () {
    _agl.push(
        ['production', '_f7L2XwGXjyszb4d1e2oxPybgD']
    );
    (function () {
        var agl = document.createElement('script');
        agl.type = 'text/javascript';
        agl.async = true;
        agl.src = 'https://fxgate.baidu.com/angelia/fcagl.js?production=_f7L2XwGXjyszb4d1e2oxPybgD';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(agl, s);
    })();
})();
devicePixelRatio = window.devicePixelRatio;
if (devicePixelRatio > 1 && page_info_id != 'site_index' && page_info_id != 'site_start-design') {
    let imgBox = $('#nav-y').find(".logo-box .logo img");
    if (imgBox.attr('src') != imgBox.attr('data-logo-black-2x')) {
        imgBox.attr('src', imgBox.attr('data-logo-black-2x'));
    }
}

$(function() {
    if ($('.message .closeTopMessage').length > 0) {
        recordPv(1193);
    }
    bindNavTemplCenterEvent();
    if (typeof bindIndexNavTemplCenterEvent === "function") {
        bindIndexNavTemplCenterEvent();
    }
});

function bindNavTemplCenterEvent() {
    $('.templ-center-box-tag').eq(0).find('a').click(function() {
        recordPv(1126,$(this).text());
    });
    $('.templ-center-box-tag').eq(1).find('a').click(function() {
        recordPv(1127,$(this).text());
    });
    $('.templ-center-box-tag').eq(2).find('a').click(function() {
        recordPv(1128);
    });
    $('.templ-center-box-tag').eq(3).find('a').click(function() {
        recordPv(1129);
    });
    $('#templ-on').on('click', function() {
        recordPv(1147);
    });

    $('#templ-on .nav-pulldown .pulldown-list a').click(function() {
        pname = $(this).attr('pname');
        if (pname) {
            recordPv(448, pname)
        }
    });
    $('#templ-on .nav-pulldown .pulldown-list a').click(function() {
        recordPv(270, $(this).text())
    });
    var nav_templ_on_hover = "";
    $('#templ-on').hover(function() {
        nav_templ_on_hover = setTimeout(function() {
            recordPv(444)
        }, 1000)
    }, function() {
        clearTimeout(nav_templ_on_hover)
    });
    $('.templ-center-box-content ul li a').click(function() {
        var kw = $.trim($(this).find('span').text());
        recordPv(1183, kw)
    });
    $('.templ-center-box .templ-center-box-tag .templ-center-class-album').click(function() {
        var kw = $.trim($(this).find('span').text());
        recordPv(1185, kw)
    });
    $('.templ-center-box .templ-center-box-tag .templ-center-class-tool1 a,.templ-center-box .templ-center-box-tag .templ-center-class-tool2 a').click(function() {
        var kw = $.trim($(this).find('span').text());
        recordPv(1186, kw)
    });
    var templ_hang_time, templ_hang_set, templ_hang_set_two;
    $(".templ-center-box .templ-center-box-tag").mouseenter(function() {
        var that = $(this);
        var name = that.find('.tag-name').text().trim();
        recordPv(1217, name);
        if (name != '分类') {
            if (typeof templ_center_first_hang_time != 'undefined' && templ_center_first_hang_time > 0) {
                clearTimeout(templ_center_first_hang_set);
            }
            if (typeof templ_center_first_hang_two_time != 'undefined' && templ_center_first_hang_two_time > 0) {
                clearTimeout(templ_center_first_hang_two);
            }
        }
        templ_hang_time = new Date().getTime();
        if (typeof templ_center_first_hang_time == 'undefined' || !templ_center_first_hang_time) {
            templ_hang_set = setTimeout(function() {
                recordPv(1187, name)
            }, 1000);
        }
        if (typeof templ_center_first_hang_two_time == 'undefined' || !templ_center_first_hang_two_time) {
            templ_hang_set_two = setTimeout(function() {
                recordPv(1208, name)
            }, 2000);
        }
    }).mouseleave(function() {
        clearTimeout(templ_hang_set);
        clearTimeout(templ_hang_set_two);
        var leave_time = new Date().getTime();
        var name = $(this).find('.tag-name').text().trim();
        if (name == '分类' && typeof templ_center_first_hang_time != 'undefined' && templ_center_first_hang_time != 0) {
            recordPv(1216, '分类', '', '', '', parseInt(leave_time - templ_center_first_hang_time));
            templ_center_first_hang_time = 0;
        } else {
            recordPv(1188, name, '', '', '', parseInt(leave_time - templ_hang_time));
        }
    });
}

function showNavSearch() {
    // $('.nav_search_top').show();
    // $('.nav > .nav-lists').css('left', "40%")
}

function hideNavSearch() {
    // $('.nav_search_top').hide();
    // $('.nav > .nav-lists').css('left', "50%")
}

$(function() {
    $('#templ-on').hover(function() {
        $('#templ-on .nav-pulldown-templ').stop().show();
    }, function() {
        $('#templ-on .nav-pulldown-templ').hide();
    });
    $(window).load(function() {
        if (avatar) {
            $("#useravatar1").attr('src', avatar);
        }
    });
    $('#go-fav a').click(function() {
        recordPv(49)
    });
    screen_width = window.screen.width;
    screen_height = window.screen.height;
    recordPv(876, Math.round(screen_width) + "x" + Math.round(screen_height), window.devicePixelRatio.toFixed(2))
    recordPvGif(876,"s0="+Math.round(screen_width) + "x" + Math.round(screen_height)+"&i0="+window.devicePixelRatio.toFixed(2)*100)

    $('.nav .logo-box').mouseenter(function() {
        $(this).find('.tip').show();
        recordPv(1044);
    }).mouseleave(function() {
        $(this).find('.tip').hide();
    })

    $('#search_top.nav_search_top .hider-seek .box-text').click(function() {
        recordPv(1076);
        sendRecordPvByGif("",1076)
    });

    $('#search_top.nav_search_top .hider-seek .box-text').bind('keypress', function(event) {
        if (event.keyCode == 13) {
            recordPv(1077);
        }
    });

    $('#search_top.nav_search_top .box-btn').click(function() {
        recordPv(1077);
        sendRecordPvByGif("",1077)
    });
    $('#search_top.nav_search_top .input-pull-down .new-down-link').click(function() {
        recordPv(1077);
        sendRecordPvByGif("",1077)
    });
});

/**sidebar**/
(function($) {
    $('#sidebar').on('click', '.sidebar-return-top-box', function() {
        scroll(0, 0);
    });
    $('#sidebar').on('click', '.sidebar-money-box', function() {
        routeQueryParams($(this));
        window.open('/recruit')
    });
    $('#sidebar').on('click', '.sidebar-sign-box', function() {
        routeQueryParams($(this));
        window.open('')
    });
    $('.sidebar-icon3,.feedback,.sidebar-feedback-box').on({
        click: function(e) {
            $('.fk-bg').css('display', 'block');
        }
    });
    $('.fk-close').on({
        click: function(e) {
            $('.fk-bg').css('display', 'none');
        }
    });
    $('.lxkf').on({
        click: function(e) {
            routeQueryParams($(this));
            window.open("https://1870046.s2.udesk.cn/im_client/?web_plugin_id=14749&"+udesk);
        }
    });
    devicePixelRatio = window.devicePixelRatio;
    if (devicePixelRatio > 1) {
        recordPv(827, devicePixelRatio)
        recordPvGif(827,"i0="+devicePixelRatio*100)
    }
})(jQuery);
$(document).scroll(function() {
    var soll = $(window).scrollTop();
    if (soll > 1010) {
        $('#sidebar .sidebar-return-top-box').show()
    } else {
        $('#sidebar .sidebar-return-top-box').hide();
    }
});

/**sidebar**/

// function recordPv(page_id, kw, tid, kid_1, kid_2, page_num) {
//     page_num = page_num ? page_num : all_page_num;
//     csrfToken = $('#_csrf').val();
//     url_address = window.location.href;
//     $.post('/site/pv', {
//         'page_id': page_id, _csrf: csrfToken, 'user_source': user_source, 'load_time': load_time,
//         'exec_time': exec_time, 'user_request_time': user_request_time, 'deal_time': deal_time,
//         'first_screen_load_time': first_screen_load_time, 'ready_time': ready_time,
//         'url': "//" + url_address,
//         'referer': HTTP_REFERER, "kw": kw, "templ_id": tid, "kid_1": kid_1, "kid_2": kid_2,
//         'page_num': page_num,
//         'send_area': page_info_id
//     });
// }

function recordPv_edit(tid, page_id, kw, origin) {
    $.get('/site/pv_edit', {
        'tid': tid, 'page_id': page_id, 'kw': kw, 'origin': origin,
        'url': "//" + url_address,
        'referer': HTTP_REFERER
    });
}

$('#small-program').mouseenter(function() {
    if (page_info_id === 'site_search') {
        recordPv(1091, $("#head-text").val());
    }
});
$('#sidebar .sidebar-qq-group-box').mouseenter(function() {
    if (page_info_id === 'site_search') {
        recordPv(1092, $("#head-text").val());
    }
});
$('.user-client-down').click(function() {
    recordPv(1301);
});
$('#wechat-box').mouseenter(function() {
    if (page_info_id === 'site_search') {
        recordPv(1093, $("#head-text").val());
    }
});
$('#sidebar .sidebar-cs-box').mouseenter(function() {
    if (page_info_id === 'site_search') {
        recordPv(1094, $("#head-text").val());
    }
});
$('#sidebar .sidebar-feedback-box').click(function() {
    if (page_info_id === 'site_search') {
        recordPv(1095, $("#head-text").val());
    }
})
$('#sidebar .sidebar-money-box').click(function() {
    if (page_info_id === 'site_search') {
        recordPv(1096, $("#head-text").val());
    }
})
$('#sidebar .sidebar-return-top-box').click(function() {
    if (page_info_id === 'site_search') {
        recordPv(1097, $("#head-text").val());
    }
})
$('#tool-click').click(function(e) {

    if (page_info_id === 'site_search') {
        recordPv(1075, $("#head-text").val())
    }
});

$('#VIP-privilege').click(function() {
    if (page_info_id === 'site_search') {
        recordPv(1082, $("#head-text").val())
    }
})
$('#message').click(function() {
    if (page_info_id === 'site_search') {
        recordPv(1083, $("#head-text").val())
    }
})
$('.find-more').click(function() {
    if (page_info_id === 'site_search') {
        recordPv(1089, $("#head-text").val())
    }
})
$('#new-template').click(function() {
    if (page_info_id === 'site_search') {
        recordPv(1090, $("#head-text").val())
    }
});
$('#templ-on .pulldown-title-link').click(function() {
    if (page_info_id === 'site_search') {
        recordPv(1107, $("#head-text").val())
    }
});
$('.index-logo').click(function() {
    if (page_info_id === 'site_search') {
        recordPv(1106, $("#head-text").val())
    }
});
$('.footer .feedback').click(function() {
    if (page_info_id === 'site_search') {
        recordPv(1110, $("#head-text").val())
    }
});
$('.qq-kefu .lxkf').click(function() {
    if (page_info_id === 'site_search') {
        recordPv(1111, $("#head-text").val())
    }
})
$('#about-us').click(function() {
    if (page_info_id === 'site_search') {
        recordPv(1114, $("#head-text").val())
    }
})
$('#user-agreement').click(function() {
    if (page_info_id === 'site_search') {
        recordPv(1115, $("#head-text").val())
    }
})
$('.head-mobile-poster').click(function() {
    recordPv(337)
});

$('.seek-select-list li').click(function() {
    var head_text_placeholder = $('#head-text').attr($(this).attr('name') + '_count');
    $('#keyword').attr('placeholder', head_text_placeholder);

    $('.nav .box-btn,.box-bg-btn,.box-as-btn').css('background', $(this).css('background'));
    $(this).parent().siblings('.seek-Selected').find('span').text($(this).text());
    $('.seek-select-list').hide();
    var type = check_style();
    change_func(type);
});
$('.seek-select').hover(function() {
        var ins = $(this).index('.seek-select');
        $('.seek-select-list').eq(ins).fadeIn(300);
    },
    function() {
        $('.seek-select-list').hide();
    }
);
$('.seek-select ul,.seek-select p').click(function(e) {
    e.stopPropagation();
});

$('.seek-select-head-list li').click(function() {
    var head_text_placeholder = $('#head-text').attr($(this).attr('name') + '_count');
    $('#head-text').attr('placeholder', head_text_placeholder);
    $('.nav .box-btn,.box-bg-btn,.box-as-btn').css('background', $(this).css('background'));
    $(this).parent().siblings('.seek-Selected').find('span').text($(this).text());
    $('.seek-select-head-list').hide();
    // var type = check_head_style();
    // change_func(type);

    // 搜索框分类切换统计
    var style = $.trim($("#head-seek-p span").text());
    if (style == '全部模板' || style == 'GIF动图') {
        recordPv(998, style);
        recordPvGif(998,"s0="+style)
    }
});
$('.seek-head-select').hover(function() {
        var ins = $(this).index('.seek-head-select');
        $('.seek-select-head-list').eq(ins).fadeIn(300);
    },
    function() {
        $('.seek-select-head-list').hide();
    }
);
$('.seek-head-select ul,.seek-head-select p').click(function(e) {
    e.stopPropagation();
});

//      搜索栏下拉
$('.box-text').click(function(e) {
    var ins = $(this).index('.box-text');
    e.stopPropagation();
    $('.input-pull-down').hide().eq(ins).fadeIn(200);
});
$(document).click(function() {
    $('.input-pull-down').hide();
});
$('.input-pull-down').click(function(e) {
    e.stopPropagation();
});

$(".VIP-privilege").hover(function() {
    recordPv(104);
}, function() {
});

//裁剪按钮点击记录pv
$('.rotate-crop-pv').on('click', function() {
    recordPv(39);
});

function templateClick(tid, kw) {
    $.get('/apiv2/template-click', {'tid': tid, 'kw': kw});
}

function download_img(src) {
    routeQueryParams($(this));
    window.location.href = '//818ps.com/download?filename=' + src;
}

$(window).load(function() {
    if (!(typeof (no_hanmaker) != 'undefined' && no_hanmaker == true)) {
        var _hmq = _hmq || [];
        $(document).ready(function() {
            var uid = document.getElementById('handata_uid').value;
            _hmq.push(['_uid', uid]);
            _hmq.push(['_is_pay', _is_pay]);
            (function() {
                var stat = document.createElement('script');
                stat.type = 'text/javascript';
                stat.async = true;
                stat.src = 'https://stats.hanmaker.com/stats.js';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(stat, s);
            })();
        });
    }
    if (!(typeof (no_baidu) != 'undefined' && no_baidu == true)) {
        if (typeof _hmt === 'undefined') {
            var _hmt = _hmt || [];
            (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?68ba0271f600f1146717e15ebd6337d1";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            })();
        }
    }
});

function checkPhoneBind() {
    if (phoneBind == '1') {
        return true;
    } else {
//            $('.phoneBind .icon-close').remove();
        recordPv('117');
        sendRecordPvByGif("",117)
        $('.phoneBind').show();
        $('.phoneBind .validateCodeImgN').attr('src', $('.phoneBind .validateCodeImgN').attr('attr_src'));
        return false;
    }
}

$(window).load(function() {
    var ps = $("#keyword").val();
    if (ps) {
        $("#head-text").val(ps);
    }
    if (avatar) {
        $("#useravatar").attr('src', avatar);
    }
});
$('.closeTopMessage').click(function() {
    $(this).hide();
    $('.message').eq(0).slideUp("slow");
    setCookie('hidemessage', 1, 10);
});

function setCookie(name, value, hours) {
    var exp = new Date();
    exp.setTime(exp.getTime() + parseInt(hours) * 3600 * 1000);//10小时
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

//读取cookies
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    arr = document.cookie.match(reg);
    if (arr)
        return unescape(arr[2]);
    else
        return null;
}

$(function() {
    if ($('.hider-seek .box-text,.banner-seek .box-text').length == 1 && isStartDesigner != 1) {
        showNavSearch()
    }

    refreshSearchHistory();
    setInterval(function() {
        refreshSearchHistory()
    }, 6000)

});

function refreshSearchHistory() {
    SearchHistory = Common.getSearchHistory();
    SearchHistoryHtml = '<label class="lately-search">最近搜索:</label>';
    hasSearchHistory = false;
    for (var key in SearchHistory) {
        if ($('#gif-page').val() == 1) {
            new_url = "/muban/0-0-0-0-" + SearchHistory[key] + "-null-437_0_0-0-0.html";
        } else {
            new_url = "/muban/" + SearchHistory[key] + ".html";
        }
        var tag1 = '';
        if(typeof isClientIndex != 'undefined' && isClientIndex == 1) {
            tag1 = 'target="_blank"';
        }
        SearchHistoryHtml += '<a href="' + new_url + '" '+tag1+' class="history-head-a" _c="1124" a8="s0=$test">' + key + '</a>';
        hasSearchHistory = true;
    }
    if (hasSearchHistory == true) {
        SearchHistoryHtml = '<i class="hasSearchHistory"></i>' + SearchHistoryHtml;
    }
    $('.search-history').html(SearchHistoryHtml);
}

$('.pop-vip-update .pop-mask a').click(function() {
    recordPv(350);
});
$('.pop-vip-update .pop-mask .pop-mask-close').click(function() {
    $('.pop-vip-update').hide();
    recordPv(351);
});

$('#useravatar').click(function() {
    routeQueryParams($(this));
    window.open('/imageeditor.html?route_area=avatar');
});
var timer;
$('.condition').hover(function() {
    clearTimeout(timer);
    timer = setTimeout(function() {
        recordPv(411);
        if ($('.my-vip .qzvip').length > 0 && $('.my-vip .qzvip').css('display') != 'none') {
            recordPv(666);
        }
        if ($('.my-vip .jttvip').length > 0 && $('.my-vip .jttvip').css('display') != 'none') {
            recordPv(667);
        }
        if ($('.my-vip .novip').length > 0 && $('.my-vip .novip').css('display') != 'none') {
            recordPv(666);
        }
        if ($('.my-vip .dttvip').length > 0 && $('.my-vip .dttvip').css('display') != 'none') {
            recordPv(668);
        }
    }, 1000);
}, function() {
    clearTimeout(timer);
});

var xcx_pulldown = "";
$('#xcx_show').hover(function() {
    xcx_pulldown = setTimeout(function() {
        recordPv(455);
    }, 1000);
}, function() {
    clearTimeout(xcx_pulldown);
}).click(function() {
    recordPv(1228)
});

$('#user-tool-box .my-des').on('click', function() {
    recordPv(969);
});
$('#user-tool-box .my-gzt').on('click', function() {
    recordPv(968);
});
$('.condition #useravatar').on('click', function() {
    recordPv(971);
});
$('.condition #useravatar1').on('click', function() {
    recordPv(971);
});
$('.condition .username_link').on('click', function() {
    recordPv(972);
});

$('body').on('change', '.uploadImagePlugin', function() {
    let file = this.files[0];
    let filename = this.files[0].name;
    let root = $(this).data('root');
    $.ajax({
        type: "GET",
        url: '//818ps.com/qiniu/upload-by-token',
        data: {filename: filename, root: root},
        dataType: 'json',
        xhrFields: {withCredentials: true},
        crossDomain: true,
        success: function(data) {
            if (data.stat == 1) {
                formData = new FormData();
                let msg = data.msg;
                xhr = new window.XMLHttpRequest();
                if (typeof uploadByTokenCallback === "function") {
                    //回调
                    xhr.onreadystatechange = uploadByTokenCallback;
                }
                formData.append('token', msg.token);
                formData.append('key', msg.key);
                formData.append("file", file, filename);
                xhr.open('post', msg.action, true);
                xhr.withCredentials = false;
                xhr.send(formData);
            }
        }
    });
});

$(window).load(function() {
    if (avatar) {
        $("#useravatar1").attr('src', avatar);
    }
});
$('#go-fav a').click(function() {
    recordPv(49)
});

$(function() {
    $('.nav .logo-box').mouseenter(function() {
        $(this).find('.tip').show();
        recordPv(1044);
    }).mouseleave(function() {
        $(this).find('.tip').hide();
    })
});

$('#rec-class').click(function() {
    recordPv(612);
    this_keyword = "";
    if (typeof keyword != "undefined") {
        this_keyword = keyword;
    }
    recordPv(1032, this_keyword, $(this).text());
    if (page_info_id === 'site_search') {
        recordPv(1108, $("#head-text").val())
    }
});

function looked() {
    localStorage.setItem('look', true)
    $('#red-dot').hide();
    $('#red-dot2').hide();
}

$('.album-recommend').click(function() {
    recordPv(728, '', '', '', '', $(this).attr('attr_num'));
});
$('.album-recommend-small').click(function() {
    recordPv(729, '', '', '', '', $(this).attr('attr_num'));
});

$('.payment-close , .redownloadBtn').click(function() {
    $('.pop-bg').hide();
});
$('.downloadCode .icon-close').click(function() {
    $('.downloadCode').hide();
});
//搜索定时限制
var search_keydown_timeout = '';
var search_keydown_interval = 0;

// 头部搜索
function search_A() {
    var kw = $(".search-box-text").val();
    var type = check_head_style();

    search_B(kw, type, '');
}

//头部小搜索框
function search_little() {
    var kw = $("#head-little-text").val();
    var type = 1;
    search_B(kw, type, '');
}

$('.login_pv').click(function() {
    recordPv(166);
});

$('#head-little-text').bind('keypress', function(event) {
    if (event.keyCode == 13) {
        search_little()
    }
});
$('#head-little-text').click(function() {
    var e = window.event || event;
    if (e.stopPropagation) {
        e.stopPropagation();
    } else {
        e.cancelBubble = true;
    }
    // $('#head-little-text-box .input-pull-down ').show();
});

// 检查类别
function check_head_style() {
    if ($("#head-seek-p span").length <= 0) {
        return false;
    }
    var style = $.trim($("#head-seek-p span").text());
    var type = 0;
    if (style == '全部模板' || style == 'GIF动图') {
        type = 1;
    } else if (style == '背景') {
        type = 2;
    } else if (style == '元素') {
        type = 3;
    }
    type == 0 ? type = 1 : type = type;

    // 标记gif搜索
    if (style == 'GIF动图') {
        $('#gif-page').val(1);
    } else {
        $('#gif-page').val(0);
    }

    return type;
}

// 分类改变 参数重新修改
function change_func(in_type) {
    var strs = '';
    var type = '';
    if (in_type != undefined) {
        type = in_type;
    }
    var csrfToken = $('#_csrf').val();
    $(".new-li").remove();
    var links = "/site/changetype";
    $.post(links, {'type': type, _csrf: csrfToken}, function(res) {
        var data = JSON.parse(res);
        var list = data.data;
        for (var i = 0; i < list.length; i++) {
            if (i < 3) {
                strs += '<li class="new-li down-hot"><a class="down-link" href="javascript:void(0);">';
            } else {
                strs += '<li class="new-li"><a class="down-link" href="javascript:void(0);" data-info="' + list[i]['pinyin'] + '">';
            }
            strs += '<span class="down-size">' + list[i]['kws'] + ' </span>';
            strs += '<span class="fr">' + list[i]['results'] + '结果</span>';
            strs += '</a></li>';
        }
        $(".input-pull-down").append(strs);
    })
}

/**
 * @title 筛选方法
 * @param kw        字段
 * @param type      类型编号
 * @param cat_1     模板大类编号
 * @param cat_2     模板分类编号
 * @param tag_id    模板行业编号
 * @param sceneId   背景场景编号
 * @param ratioId   背景版式编号
 * @param styleId   背景风格编号
 * @param scene_id  元素场景编号
 * @param url       ajax请求地址
 * @param href      ajax返回地址
 * @param new_url   参数为空返回路径
 */
function search_B(kw, type, list) {
    var url = "";
    var href = "";
    var new_url = "";
    var scene_id = '';
    var cat_1 = '';
    var cat_2 = '';
    var tag_id = '';
    var sceneId = '';
    var ratioId = '';
    var styleId = '';
    var isQr = '';

    if (!list) {
        list = [];
    }

    // gif搜索统计
    var style = $.trim($("#head-seek-p span").text());
    if (style == '全部模板' || style == 'GIF动图') {
        recordPv(999, style);
        recordPvGif(999,"s0="+style)
    }

    list.forEach(function(value, key) {
        if (key == 'scene_id') {
            scene_id = value ? value : '';
        } else if (key == 'cat_1') {
            cat_1 = value ? value : '';
        } else if (key == 'cat_2') {
            cat_2 = value ? value : '';
        } else if (key == 'tag_id') {
            tag_id = value ? value : '';
        } else if (key == 'sceneId') {
            sceneId = value ? value : '';
        } else if (key == 'ratioId') {
            ratioId = value ? value : '';
        } else if (key == 'styleId') {
            styleId = value ? value : '';
        } else if (key == 'isQr') {
            isQr = value ? value : '';
        }
    });
    if (type == 1) {
        baseUrl = kw ? '<%keyword%>' : 0;
        url = "/zh2py";
        new_url = href = "/muban/" + baseUrl + ".html";
        if ($('#gif-page').val() == 1) {
            new_url = href = "/muban/0-0-0-0-" + baseUrl + "-null-437_0_0-0-0.html";
        }
    } else if (type == 2) {
        baseUrl = kw ? '<%keyword%>' : 0;
        url = "/zh2py_b";
        new_url = href = "/beijing/" + baseUrl + ".html";
    } else if (type == 3) {
        baseUrl = kw ? '<%keyword%>' : 0;
        url = "/zh2py_a";
        new_url = href = "/png/" + baseUrl + ".html";
    }
    if (kw == '') {
        routeQueryParams($(this));
        if(typeof isClientIndex != 'undefined'&& isClientIndex == 1) {
            window.open(new_url, "_blank"); 
         }else{
           window.location.href = new_url;
         }   
        
    } else {
        $.get(url, {
            'keyword': kw,
            'type': type,
        }, function(res) {
            if (res != '' && res != 'null' && res != 'NULL') {
                setTimeout(function() {
                    if ($('#gif-page').val() == 1) {
                        res = res.replace('-0', '');
                    }
                    // console.log(href.replace('<%keyword%>', encodeURI(res)));
                    // return;
                    routeQueryParams($(this));
                    if(typeof isClientIndex != 'undefined'&& isClientIndex == 1) {
                        window.open(href.replace('<%keyword%>', encodeURI(res)), "_blank");
                    }else{
                        window.location.href = href.replace('<%keyword%>', encodeURI(res));
                    }
                    
                }, 500);
                Common.setSearchHistory(kw, encodeURI(res));
            }
        })
    }
}

$(".history-head-a").click(function() {
    var kw = $(this).text();
    var type = check_head_style();
    search_B(kw, type, '');
})

$(".input-pull-down").on('click', '.new-down-link,.down-link', function() {
    var kw = $(this).find('.down-size').text();
    var type = check_head_style();
    var info = $(this).attr('data-info');
    if (type == false) {
        return false;
    }

    if (type == 1 && info) {
        Common.setSearchHistory(kw, info);

        // gif搜索统计
        var style = $.trim($("#head-seek-p span").text());
        if (style == '全部模板' || style == 'GIF动图') {
            recordPv(999, style);
            recordPvGif(999,'s0='+style)
        }

        if ($('#gif-page').val() == 1) {
            info = info.replace("-0", "");
            new_url = "https://818ps.com/muban/0-0-0-0-" + info + "-null-437_0_0-0-0.html";
        } else {
            new_url = "https://818ps.com/muban/" + info + ".html";
        }
        routeQueryParams($(this));
        if(typeof isClientIndex != 'undefined'&& isClientIndex==1){
            window.open(new_url, "_blank");
        }else{
            window.location.href = new_url;
        }
        
    } else {
        search_B(kw, type, '');
    }
});

$('.search-box-text').keyup(function(e) {
    var kw = $('.search-box-text').val();
    var type = check_head_style();
    if (e.keyCode == 13) {
        search_B(kw, type, '')
    }
});
$('.search-box-text').keyup(function(e) {
    $('.search-box-text').val($(this).val());
});

$('#templ-on').mouseenter(function() {
    recordPv(1125);
});

$('.friendship .friend-link .friend-link-btn .tab').on('mouseenter', function() {
    var index = $(this).data('id');
    $('.bottom_seo_link').hide();
    $('.bottom_seo_link_'+index).show();
});

$('.drop_sign').on('click', function() {
    var btn = $(this);
    var btn2 = $('.go_down .sign-in-left');
    $.get('/integral/receive', {type: 4}, function(res) {
        if (res > 0) {
            $(btn).unbind('click');
            $(btn).removeClass('drop_sign');
            $(btn).addClass('had_sign');
            $(btn).html('已签到');

            if (btn2) {
                $(btn2).after('<span onclick="openPop1();recordPv(406);" class="showintegral" _c="406">已签到</span>');
                $(btn2).remove();
                var max = 0;
                $.each($('.sign-day'), function(i, v) {
                    if (parseInt($(v).data('value')) <= res) {
                        $(v).addClass('signed');
                        max = i;
                    }
                })
                $('.signed').eq(max).addClass('today-signed');
                $('.signed').eq(max).removeClass('signed');
            }
        }
    })
    recordPv(1300)
});