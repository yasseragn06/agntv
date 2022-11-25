 //<![CDATA[
  function minToHours(t) {
    var e = parseInt(Math.floor(t / 60)),
        a = parseInt(t % 60);
    return e <= 0 ? a + "دقيقة " : e + "ساعة  و " + a + " دقيقة "
  }
  $(document).ready(function () {
    setInterval(function () {
        $(".underway1").fadeOut(700), $(".underway1").fadeIn(700)
    }, 1e3), $(".date").each(function () {
        var t = $(this),
            e = t.data("start"),
            a = t.data("gameends"),
            n = moment(e, "YYYY-MM-DD HH:mm:ssZ"),
            m = moment(a, "YYYY-MM-DD HH:mm:ssZ"),
            d = moment.utc().format("YYYY-MM-DD HH:mm:ssZ"),
            r = n.diff(d, "minutes"),
            i = m.diff(d, "minutes");
        switch (!0) {
        case 60 < r:
            var o = moment.utc(e).toDate();
            t.parent().find("#match-time").text(moment(o).format("LT")), t.parent().find("#result").hide(), t.parent().find(".date").html("لم تبدا بعد").addClass("not-start");
            break;
        case 0 < r:
            o = moment.utc(e).toDate(), t.parent().find("#match-time").text(moment(o).format("LT")), t.parent().find("#result").hide(), t.parent().find(".date").html("بعد قليل").addClass("soon");
            break;
        case 0 < i:
            o = moment.utc(e).toDate(), t.parent().find("#match-time").hide(), t.parent().find(".date").html("جارية الآن").addClass("live"), t.parent().find("#match-time").text(moment(o).format("LT"));
            break;
        default:
            o = moment.utc(e).toDate(), t.parent().find("#match-time").hide(), t.parent().find("#match-time").text(moment(o).format("LT")), t.parent().find(".date").html("إنتهت المباراة").addClass("end")
        }
    })
  });

  function rdmode() {
    localStorage.setItem("mode", "rdmode" === localStorage.getItem("mode") ? "light" : "rdmode"), "rdmode" === localStorage.getItem("mode") ? document.querySelector("body").classList.add("Night") : document.querySelector("body").classList.remove("Night")
  };
  ! function (s) {
    function t() {
        $("img[" + s + "]").each(function () {
            var t = this.getBoundingClientRect().top - $("body")[0].getBoundingClientRect().top;
            if (window.pageYOffset + window.innerHeight > t) {
                var e = Math.ceil(this.parentNode.offsetWidth),
                    i = Math.ceil(this.parentNode.offsetHeight),
                    n = function (t, e, i) {
                        try {
                            t = -1 !== t.indexOf("img.youtube.com") || -1 !== t.indexOf("ytimg.com") ? t.replace("/default", "/mqdefault") : t.replace(/\/(s72\-c|s40\-c|s1600\-c|s220|s113|w1600)\//, "/w" + parseInt(e) + "-h" + i + "-p-k-nu-rw-e90/")
                        } finally {
                            return t
                        }
                    }(this.getAttribute(s), e, i);
                this.setAttribute("src", n), this.removeAttribute(s), $(this).parent().removeClass("PLHolder"), $(this).parent().addClass("")
            }
        })
    }
    window.addEventListener("load", t), document.addEventListener("scroll", t)
  }("data-img");

  function destory() {
    $('html').html('<div style="font-family: Cairo;position: fixed;overflow-x: hidden;background: #f8f8f8;top: 0;left: 0;right: 0;bottom: 0;width: 100%;height: 100%;z-index: 1;text-align: center;" > <div style="position: relative;padding: 2em;width: 80%;max-width: 600px;min-width: 200px;margin: 5em auto;background: white;box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0px 1px 1px 0 rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);-webkit-box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0px 1px 1px 0 rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);" > <div> <div style="color: #fff; position: absolute; margin: 0 auto; left: 0; right: 0; top: -25px; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; -webkit-border-radius: 50%; z-index: 9; background:#f66; padding: 0; text-align: center; box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.26); -webkit-box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.26); font-size: 2em; font-family: arial; text-decoration: none;" > <span>©<\/span> <\/div> <h4 style="text-align: center; font-size: 26px; margin: 30px 0 15px;line-height: normal;" > عفواً..!! <\/h4> <\/div> <div style="position: relative;padding: 5px;text-align: right;font-size: 14px;" > <p> لا يمكنك إستخدام هذا القالب .. هذا التوقف يحدث تلقائياً بسبب مايلي .. <\/p> <p> <span style="font-size: 17px; font-weight: bold; color:#f66;" >1<\/span >-العبث بحقوق ملكية التصميم!..كإخفاء توقيع المصمم <\/p> <p> <span style="font-size: 17px; font-weight: bold; color:#f66;" >2<\/span >-لا تملك رخصة؟ .. للحصول على تفعيل القالب يرجى<a style="color: #f66;font-size: 14px; font-weight: 400;" href="https://livekoora.online/" > طلب رخصة <\/a> <\/p> <p> <span style="font-size: 17px; font-weight: bold; color: #f66;" >3<\/span >-تملك رخصة ومع ذلك لا تستطيع إستخدام هذا القالب .. يرجى التواصل بـ <a style="color: #f66;font-size: 14px; font-weight: 400;" href="https://livekoora.online/" > فريق الدعم <\/a> <\/p> <\/div> <div style="text-align: center; overflow: hidden;"> <a style="color: #fff;background: #f66;text-decoration: none;display: block;max-width: 180px;padding: 10px 12px;margin: 5px auto;font-size: 14px;font-weight: 400;line-height: 1.42857143;text-align: center;white-space: nowrap;vertical-align: middle;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;background-image: none;border: 0;box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0px 1px 1px 0 rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);-webkit-box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0px 1px 1px 0 rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);" href="https://livekoora.online/" >الصفحة الرسمية<\/a > <\/div> <\/div> <\/div>');
    setTimeout(function () {
        window['location']['assign']('https://livekoora.online/')
    }, 100000)
  }

  function ZomaChickLicen() {
    var b = "3042559647615396110";
    var c = "3067616340155514783";
    var d = document.querySelector('link[rel="DNSBlog"]').getAttribute('content');
    $.ajax({
        dataType: "json",
        url: 'https://www.blogger.com/feeds/' + b + '/pages/default/' + c + '?alt=json-in-script',
        method: "GET",
        dataType: "jsonp",
        success: function (a) {
            can_use_this_product = false;
            if (d !== false) {
                $('<div>' + a.entry.content.$t + '<\/div>').find("li").each(function () {
                    if (typeof d !== "undefined" && d !== "") {
                        if ($(this).text() == d) {
                            can_use_this_product = true
                        }
                    }
                })
            }
            if (can_use_this_product) {
                console.log("المدونة مفعلة")
            } else {
                destory()
            }
        }
    })
  }
  //setTimeout(ZomaChickLicen, 500);//]]>
