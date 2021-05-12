$(function(){
    $(window).resize(function(){
        var w = $(window).width();
        var x = 990;
        var modal_x = 650;
        if (w <= x) {
            $("svg text").attr("y", "80%");
        } else {
            $("svg text").attr("y", "50%");
        }
        if (w > modal_x) {
            $(".menu_modal").hide();
        }
    });

    //ページ更新時のtop-wrapperのアニメーションイベント
    $("#black-effect").addClass("fade-out", 3000);
    $('.top-wrapper p').delay(2000).queue(function(){
        $(this).fadeIn(2000).dequeue();
      });

    //headerのリンクをクリックしたときのリンク内遷移処理
    $("header a").click(function() {
        var headerHight = $("header").height();
        var id = $(this).attr("href");
        var position = $(id).offset().top -  headerHight;
        $("html, body").animate({
            "scrollTop": position
        }, 2000);
        $(".menu_modal").fadeOut(2000);
        $("body,html").css("overflow-y", "visible");

    });

    $(".work img").click(function() {
        var imgSrc = $(this).attr("src");
        var title = $(this).next("p").text();
        function work_text(skill, detail, link) {
            $("#work-skill").text(skill);
            $("#work-detail").text(detail);
            $(".work-text a").attr("href", link);
        }
        $(".bigimg").children().attr("src", imgSrc);
        $("#work-title").text(title);

        if (title === "Shin Tamakuma(ポートフォリオサイト)") {
            work_text("Skill：HTML/CSS/JS", "このサイト（ポートフォリオ）になります。", "#");
        } else if (title === "Workout-plan") {
            work_text("Skill：HTML/CSS/JS/Python(Django)/MySQL/AWS", "トレーニングスケジュール管理アプリになります。", "http://workout-plan.work/");
        } else if (title === "Dog cafe Apricot 様") {
            work_text("Skill：HTML/CSS/JS/wordpress", "南砂町にあるDog cafe 「Apricot」のWEBサイトです。", "http://www.dog-cafe-apricot.tokyo/");
        }

        $(".modal").fadeIn();
        $("body,html").css("overflow-y", "hidden");
        return false
      });

    $(".close-modal").click(function() {
        $(".modal").fadeOut();
        $(".menu_modal").fadeOut();
        
        $("body,html").css("overflow-y", "visible");
        return false
      });
    
    $(".hamburger-menu").click(function() {

        $(".menu_modal").fadeIn();

        $("body,html").css("overflow-y", "hidden");
        return false
    });

    //scroll時のイベント
   $(window).scroll(function() {
        
        var current_position = $("html,body").scrollTop() + 200;

        for (let i = 0; i < 6; i++) {
            
            var num = i + 1
            var position_id = ".wrapper-" + String(num);
            var position = $(position_id).offset().top;
            var prev_id = "." + "link-" + String(num - 1);
            var next_position_id = ".wrapper-" + String(num + 1);
            var next_id = "." + "link-" + String(num + 1);
            var id = "." + "link-" + String(num)
            var background_color = "background-color-" + num;
            var subtitle_id = "#subtitle-" + num;
            var down_to_top = ".down-to-top-" + num;

            function scroll_anime() {
                $("nav ul a").removeClass("scroll-anime");
                $(id).addClass("scroll-anime");
                $(".back").removeClass(function(index, className) {
                    return (className.match(/\bbackground-\S+/g) || []).join(' ');
                });
            }

            function scroll_effect() {
                $(".back").addClass(background_color);
                $(subtitle_id).addClass("slide-subtitle");
                $(subtitle_id).fadeIn();
            }

            if (num !== 1 && num !== 6) {
                var next_position = $(next_position_id).offset().top;
                if (position <= current_position && current_position < next_position) {
                    $(next_id).removeClass("scroll-anime");
                    scroll_anime();

                    if (num === 2) {
                        $(".profile-image img, #subtitle-2, .profile-text p").show();
                        scroll_effect();
                        $(down_to_top).addClass('scrollin');
                    } else if (num === 3) {
                        $(".back").addClass(background_color);
                        scroll_effect();
                        $(down_to_top).addClass('scrollin');
                    } else if (num === 4) {
                        $(".back").addClass(background_color);
                        scroll_effect();
                        $(down_to_top).addClass('scrollin');
                    } else {
                        $(".back").addClass(background_color);
                        scroll_effect();
                        $(down_to_top).addClass('scrollin');
                    }

                }
            } else if (num === 6) {
                if (position <= current_position) {
                    scroll_anime();
                    scroll_effect();
                    $(down_to_top).addClass('scrollin');
                }
            } else {
                var next_position = $(next_position_id).offset().top;
                if (current_position < next_position) {
                    scroll_anime();
                    $(".back").addClass(background_color);
                    $(".profile-image img, #subtitle-2, .profile-text p").hide();
                }
            }
        }
    });
});

$(".skill-title").click(function() {
    $(".skill-title").removeClass("skill-select")
    $(this).addClass("skill-select")
    if ($(this).hasClass("frontend")) {
        $(".backend-skills").addClass("hide");
        $(".frontend-skills").removeClass("hide");
    } else {
        $(".frontend-skills").addClass("hide");
        $(".backend-skills").removeClass("hide");
    }
});

stage = new createjs.Stage("myCanvas");
// パーティクルシステム作成します。
particleSystem = new particlejs.ParticleSystem();
// パーティクルシステムの描画コンテナーを表示リストに登録します。
stage.addChild(particleSystem.container);

particleSystem.importFromJson(
    {
        "bgColor": "#00000",
        "width": 2000,
        "height": 1024,
        "emitFrequency": 18,
        "startX": 318,
        "startXVariance": 2900,
        "startY": 279,
        "startYVariance": 1300,
        "initialDirection": "0",
        "initialDirectionVariance": "360",
        "initialSpeed": 0,
        "initialSpeedVariance": 0,
        "friction": 0.15,
        "accelerationSpeed": 0,
        "accelerationDirection": 0,
        "startScale": 0.09,
        "startScaleVariance": 0.17,
        "finishScale": "0",
        "finishScaleVariance": "0",
        "lifeSpan": 105,
        "lifeSpanVariance": "196",
        "startAlpha": "1",
        "startAlphaVariance": "0",
        "finishAlpha": "0.35",
        "finishAlphaVariance": 0.5,
        "shapeIdList": [
            "blur_circle"
        ],
        "startColor": {
            "hue": "312",
            "hueVariance": "55",
            "saturation": "71",
            "saturationVariance": "78",
            "luminance": "83",
            "luminanceVariance": "16"
        },
        "blendMode": true,
        "alphaCurveType": "1",
        "VERSION": "1.0.0"
    }
)

// フレームレートの設定
createjs.Ticker.framerate = 60;
// 定期的に呼ばれる関数を登録
createjs.Ticker.on("tick", handleTick);

function handleTick() {
    // パーティクルの発生・更新
    particleSystem.update();
  
    // 描画を更新する
    stage.update();
  }
