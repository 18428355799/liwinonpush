$(function () {
      $('#zj-main').fadeOut();
      var $btn = $('.playbtn');
      var playnum = 1; //初始次数，由后台传入
      $('.playnum').html(playnum);
      var isture = 0;
      var clickfunc = function () {
        var data = [1, 2, 3, 4, 5, 6];
        //data为随机出来的结果，根据概率后的结果
        data = data[Math.floor(Math.random() * data.length)];
        switch (data) {
          case 1:
            rotateFunc(1, 0, '恭喜您获得2000元理财金!');
            break;
          case 2:
            rotateFunc(2, 60, '谢谢参与~明天再来吧~');
            break;
          case 3:
            rotateFunc(3, 120, '恭喜您获得5200元理财金!');
            break;
          case 4:
            rotateFunc(4, 180, '恭喜您获得100元京东E卡!');
            break;
          case 5:
            rotateFunc(5, 240, '谢谢参与~明天再来吧~');
            break;
          case 6:
            rotateFunc(6, 300, '恭喜您获得1000元理财金!');
            break;
        }
      }
      $btn.click(function () {
        if (isture) return; // 如果在执行就退出
        isture = true; // 标志为 在执行
        //先判断是否登录,未登录则执行下面的函数
        if (1 == 2) {
          $('.playnum').html('0');
          alert("请先登录");
          isture = false;
        } else { //登录了就执行下面
          if (playnum <= 0) { //当抽奖次数为0的时候执行
            alert("没有次数了，请您明天再来");
            $('.playnum').html(0);
            isture = false;
          } else { //还有次数就执行
            playnum = playnum - 1; //执行转盘了则次数减1
            if (playnum <= 0) {
              playnum = 0;
            }
            $('.playnum').html(playnum);
            clickfunc();
          }
        }
      });
      var rotateFunc = function (awards, angle, text) {
        isture = true;
        $btn.stopRotate();
        $btn.rotate({
          angle: 0,
          duration: 8000, //旋转时间
          animateTo: angle + 7200, //让它根据得出来的结果加上1440度旋转
          callback: function () {
            isture = false; // 标志为 执行完毕
            // alert(text);

            if (awards == 2 || awards == 5) {
              alert(text);
            } else {
              $("#zj-main").fadeIn();
              $("#jiangpin").text(text);
            }
          }
        });
      };

      // 关闭弹框
      $('.close_zj').click(function () {
        $('#zj-main').fadeOut();
        //$('#ml-main').fadeIn();
      });

      // 手机号只能输入数字
      $("#phone").bind("keyup", function () {
        $(this).val($(this).val().replace(/[\D]/g, ""));
      });
      // 地址只能输入中文英文数字
      $("#address").bind("keyup", function(){
        $(this).val($(this).val().replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g, ""));
      });

      // 验证中文名称
      function isChinaName(name) {
        var pattern = /^[\u4E00-\u9FA5]{1,6}$/;
        return pattern.test(name);
      }

      // 验证规则函数
      function formValidate() {
        var str = '';
        // 判断名称
        if ($.trim($('#name').val()).length == 0) {
          str += '姓名没有输入\n';
          $('#name').focus();
        } else {
          if (isChinaName($.trim($('#name').val())) == false) {
            str += '请输入中文姓名\n';
            $('#name').focus();
          }
        }
        // 判断手机号码
        if ($.trim($('#phone').val()).length == 0) {
          str += '手机号没有输入\n';
          $('#phone').focus();
        } else {
          if ($.trim($('#phone').val()).length < 11) {
            str += '手机号位数不正确\n';
            $('#phone').focus();
          }
        }
        // 验证地址
        if ($.trim($('#address').val()).length == 0) {
          str += '地址没有输入\n';
          $('#address').focus();
        }
        // 如果没有错误则提交
        if (str != '') {
          alert(str);
          return false;
        } else {
          console.log($('#name').val())
          console.log($('#phone').val())
          console.log($('#address').val())
        }
      };

      // 点击提交领奖按钮 验证规则
      $('.info_tj').on('click', function () {
        formValidate();
      });


});