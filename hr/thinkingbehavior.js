var from=new Array(92);   //40个选择题目，控制存储选择值的长度
var namea; var phonea;var schoola;  //存储填写的个人信息
// 表单提交事件 添加修改表单提交
layui.form.on('submit(btnSubmit)', function(data) {
	for(i=0;i<from.length;i++){
		var froma=from[i];	
		if(froma==""||froma==null||froma==undefined){
			i+=1;
			layer.msg("第"+i+"题还未选择,请选择完全后在提交", {
			  icon: 2,
			  time: 800});
			return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。    		  
		}	
	}
	var value;
	for(i=0;i<from.length;i++){
		if(i==0){
			value=from[i];			
		}else{
			value=value+","+from[i];
		}
	}
	data.field.value=value;
	$.post("https://mesqrcode.liwinon.com/inform/thinkingbehavior", data.field, function(res) {
		if (res.count==200) {
			$('#choose').hide();//那么就显示题目
			$('#information').hide();//就隐藏信息
			$('#jl').show();//就隐藏信息
			$('#sc').hide();//就隐藏信息
			//$("tou").append(res.tou);
			//$("nr").append(res.data);
			var divA = document.getElementById("tou")
			divA.innerHTML = divA.innerText+res.tou;
			var divb = document.getElementById("nr")
			divb.innerHTML = divb.innerText+res.jl;
			layer.msg(res.msg, {
				icon : 1, 
				time : 500
			// 1秒关闭（如果不配置，默认是3秒）
			});
			echartsfun(res);
		}if(res.count==201){
			$('#choose').hide();//那么就显示题目
			$('#information').hide();//就隐藏信息
			$('#jl').hide();//就隐藏信息
			$('#sc').show();//就隐藏信息
			layer.msg(res.msg, {
				icon : 1,
				time : 500
			// 1秒关闭（如果不配置，默认是3秒）
			});
		} else {
			layer.msg(res.msg, {
				icon : 2,
				time : 800
			// 2秒关闭（如果不配置，默认是3秒）
			});
			return false;
		}
	}, "JSON");
	return false;
});
$("#start").click(function() {
	namea=$('#namea').val();
	phonea=$('#phonea').val();
	schoola=$('#schoola').val();
	var agea=$('#agea').val();
	var sexa=$("input[name='sexa']:checked").val();
	if(namea==""||namea==null||namea==undefined){
	  layer.msg("请填写你的名字", {
		  icon: 2,
		  time: 1500});
	  return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。    		  
	}
	if(phonea==""||phonea==null||phonea==undefined){
	  layer.msg("请填写你的电话", {
		  icon: 2,
		  time: 1500});
	  return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。    		  
	}else{
	  var reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
	  if (!reg.test(phonea)) {
		  layer.msg("请填写正确的手机电话号码", {
			  icon: 2,
			  time: 1500});
		  $("#phonea").val("");
		  return false; 
	  }
	}
	if(schoola==""||schoola==null||schoola==undefined){
	  layer.msg("请填写你的学校", {
		  icon: 2,
		  time: 1500});
	  return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。    		  
	}
	if(agea==""||agea==null||agea==undefined){
	  layer.msg("请选择年龄", {
		  icon: 2,
		  time: 1500});
	  return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。    		  
	}
	$('#choose').show();//那么就显示题目
	$('#information').hide();//就隐藏信息
	$('#jl').hide();//就隐藏信息
	$('#sc').hide();//就隐藏信息
	$("#name").val(namea);
	$("#phone").val(phonea);
	$("#school").val(schoola);
	$("#age").val(agea);
	$("#sex").val(sexa);
	/* layer.msg("温馨提示：问卷用于揭示你是如何看待事物以及如何做决定的，答案无好坏之分，问卷结果有助于你了解自己的职业倾向、个性特征、人际相处的特征。请仔细阅读每一个问题，答案直接写在题目上面。不必对问题想的太多，根据第一感觉回答即可。", {
	  icon: 6,
	  time: 5000,
	}); */
	  //time();
});

function echartsfun(json){
	// 基于准备好的容器(这里的容器是id为chart1的div)，初始化echarts实例
	var myChart = echarts.init(document.getElementById('main'));
	option = {
	    title: {
	        text: '选择分布'
	    },
	    tooltip: {},
	    legend: {
	        data: json.tou
	    },
	    radar: {
	        name: {
	            textStyle: {
	                color: '#fff',
	                backgroundColor: '#999',
	                 fontSize: 10,
	                padding: [3, 5]
	            }
	        },
	        indicator: [
	            { text: '内倾（I）', max: 21},
	            { text: '感觉（S）', max: 26},
	            { text: '思考（T）', max: 24},
				{ text: '知觉（P）', max: 22},
	            { text: '外倾（E）', max: 21},
				{ text: '直觉（N）', max: 26},
	            { text: '情感（F）', max: 24},
	            { text: '判断（J）', max: 22}
	        ],
			center: ["50%", "50%"],
			radius: ["2%", "52%"]
	    },
	    series: [{
	        name: json.tou,
	        type: 'radar',
	        data: [{
				name: json.tou,
				value: json.data.value
			}]
	    }]
	};
	// 使用刚指定的配置项和数据显示图表
	myChart.setOption(option);
}
function gonghaoid(){
	phonea=$('#phonea').val();
	if(phonea==""||phonea==null||phonea==undefined){
		  layer.msg("请填写你的电话", {
			  icon: 2,
			  time: 1500});
		  return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。    		  
	  }else{
		  var reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
		  if (!reg.test(phonea)) {
			  layer.msg("请填写正确的手机电话号码", {
				  icon: 2,
				  time: 1500});
			  $("#phonea").val("");
			  return false; 
		  }
	  }
}
layui.use(['form','element', 'layer'], function(){
    var element = layui.element
        ,layer = layui.layer
        ,form = layui.form;
    form.on('radio(a1)', function(data){
	    from[0]=data.value;  
	}); 
	form.on('radio(a2)', function(data){
	    from[1]=data.value;  
	}); 
	form.on('radio(a3)', function(data){
	    from[2]=data.value;  
	});
	form.on('radio(a4)', function(data){
	    from[3]=data.value;  
	}); 
	form.on('radio(a5)', function(data){
	    from[4]=data.value;  
	}); 
	form.on('radio(a6)', function(data){
	    from[5]=data.value;  
	}); 
	form.on('radio(a7)', function(data){
	    from[6]=data.value;  
	}); 
	form.on('radio(a8)', function(data){
	    from[7]=data.value;  
	}); 
	form.on('radio(a9)', function(data){
	    from[8]=data.value;  
	}); 
	form.on('radio(a10)', function(data){
	    from[9]=data.value;  
	}); 
	form.on('radio(a11)', function(data){
	    from[10]=data.value;  
	}); 
	form.on('radio(a12)', function(data){
	    from[11]=data.value;  
	}); 
	form.on('radio(a13)', function(data){
	    from[12]=data.value;  
	}); 
	form.on('radio(a14)', function(data){
	    from[13]=data.value;  
	}); 
	form.on('radio(a15)', function(data){
	    from[14]=data.value;  
	}); 
	form.on('radio(a16)', function(data){
	    from[15]=data.value;  
	}); 
	form.on('radio(a17)', function(data){
	    from[16]=data.value;  
	}); 
	form.on('radio(a18)', function(data){
	    from[17]=data.value;  
	}); 
	form.on('radio(a19)', function(data){
	    from[18]=data.value;  
	}); 
	form.on('radio(a20)', function(data){
	    from[19]=data.value;  
	}); 
	form.on('radio(a21)', function(data){
	    from[20]=data.value;  
	}); 
	form.on('radio(a22)', function(data){
	    from[21]=data.value;  
	}); 
	form.on('radio(a23)', function(data){
	    from[22]=data.value;  
	}); 
	form.on('radio(a24)', function(data){
	    from[23]=data.value;  
	}); 
	form.on('radio(a25)', function(data){
	    from[24]=data.value;  
	}); 
	form.on('radio(a26)', function(data){
	    from[25]=data.value;  
	}); 
	form.on('radio(a27)', function(data){
	    from[26]=data.value;  
	}); 
	form.on('radio(a28)', function(data){
	    from[27]=data.value;  
	}); 
	form.on('radio(a29)', function(data){
	    from[28]=data.value;  
	}); 
	form.on('radio(a30)', function(data){
	    from[29]=data.value;  
	}); 
	form.on('radio(a31)', function(data){
	    from[30]=data.value;  
	}); 
	form.on('radio(a32)', function(data){
	    from[31]=data.value;  
	}); 
	form.on('radio(a33)', function(data){
	    from[32]=data.value;  
	}); 
	form.on('radio(a34)', function(data){
	    from[33]=data.value;  
	}); 
	form.on('radio(a35)', function(data){
	    from[34]=data.value;  
	}); 
	form.on('radio(a36)', function(data){
	    from[35]=data.value;  
	}); 
	form.on('radio(a37)', function(data){
	    from[36]=data.value;  
	}); 
	form.on('radio(a38)', function(data){
	    from[37]=data.value;  
	}); 
	form.on('radio(a39)', function(data){
	    from[38]=data.value;  
	}); 
	form.on('radio(a40)', function(data){
	    from[39]=data.value;  
	}); 
	form.on('radio(a41)', function(data){
	    from[40]=data.value;  
	}); 
	form.on('radio(a42)', function(data){
	    from[41]=data.value;  
	}); 
	form.on('radio(a43)', function(data){
	    from[42]=data.value;  
	}); 
	form.on('radio(a44)', function(data){
	    from[43]=data.value;  
	}); 
	form.on('radio(a45)', function(data){
	    from[44]=data.value;  
	}); 
	form.on('radio(a46)', function(data){
	    from[45]=data.value;  
	}); 
	form.on('radio(a47)', function(data){
	    from[46]=data.value;  
	}); 
	form.on('radio(a48)', function(data){
	    from[47]=data.value;  
	}); 
	form.on('radio(a49)', function(data){
	    from[48]=data.value;  
	}); 
	form.on('radio(a50)', function(data){
	    from[49]=data.value;  
	}); 
	form.on('radio(a51)', function(data){
	    from[50]=data.value;  
	}); 
	form.on('radio(a52)', function(data){
	    from[51]=data.value;  
	}); 
	form.on('radio(a53)', function(data){
	    from[52]=data.value;  
	}); 
	form.on('radio(a54)', function(data){
	    from[53]=data.value;  
	}); 
	form.on('radio(a55)', function(data){
	    from[54]=data.value;  
	}); 
	form.on('radio(a56)', function(data){
	    from[55]=data.value;  
	}); 
	form.on('radio(a57)', function(data){
	    from[56]=data.value;  
	}); 
	form.on('radio(a58)', function(data){
	    from[57]=data.value;  
	}); 
	form.on('radio(a59)', function(data){
	    from[58]=data.value;  
	}); 
	form.on('radio(a60)', function(data){
	    from[59]=data.value;  
	}); 
	form.on('radio(a61)', function(data){
	    from[60]=data.value;  
	}); 
	form.on('radio(a62)', function(data){
	    from[61]=data.value;  
	}); 
	form.on('radio(a63)', function(data){
	    from[62]=data.value;  
	}); 
	form.on('radio(a64)', function(data){
	    from[63]=data.value;  
	}); 
	form.on('radio(a65)', function(data){
	    from[64]=data.value;  
	}); 
	form.on('radio(a66)', function(data){
	    from[65]=data.value;  
	}); 
	form.on('radio(a67)', function(data){
	    from[66]=data.value;  
	}); 
	form.on('radio(a68)', function(data){
	    from[67]=data.value;  
	}); 
	form.on('radio(a69)', function(data){
	    from[68]=data.value;  
	}); 
	form.on('radio(a70)', function(data){
	    from[69]=data.value;  
	}); 
	form.on('radio(a71)', function(data){
	    from[70]=data.value;  
	}); 
	form.on('radio(a72)', function(data){
	    from[71]=data.value;  
	}); 
	form.on('radio(a73)', function(data){
	    from[72]=data.value;  
	}); 
	form.on('radio(a74)', function(data){
	    from[73]=data.value;  
	}); 
	form.on('radio(a75)', function(data){
	    from[74]=data.value;  
	}); 
	form.on('radio(a76)', function(data){
	    from[75]=data.value;  
	}); 
	form.on('radio(a77)', function(data){
	    from[76]=data.value;  
	}); 
	form.on('radio(a78)', function(data){
	    from[77]=data.value;  
	}); 
	form.on('radio(a79)', function(data){
	    from[78]=data.value;  
	}); 
	form.on('radio(a80)', function(data){
	    from[79]=data.value;  
	}); 
	form.on('radio(a81)', function(data){
	    from[80]=data.value;  
	}); 
	form.on('radio(a82)', function(data){
	    from[81]=data.value;  
	}); 
	form.on('radio(a83)', function(data){
	    from[82]=data.value;  
	}); 
	form.on('radio(a84)', function(data){
	    from[83]=data.value;  
	}); 
	form.on('radio(a85)', function(data){
	    from[84]=data.value;  
	}); 
	form.on('radio(a86)', function(data){
	    from[85]=data.value;  
	}); 
	form.on('radio(a87)', function(data){
	    from[86]=data.value;  
	}); 
	form.on('radio(a88)', function(data){
	    from[87]=data.value;  
	}); 
	form.on('radio(a89)', function(data){
	    from[88]=data.value;  
	}); 
	form.on('radio(a90)', function(data){
	    from[89]=data.value;  
	}); 
	form.on('radio(a91)', function(data){
	    from[90]=data.value;  
	}); 
	form.on('radio(a92)', function(data){
	    from[91]=data.value;  
	}); 
	form.on('radio(a93)', function(data){
	    from[92]=data.value;  
	}); 
});
//提交数据
/*  var from=new Array(39);   //40个选择题目，控制存储选择值的长度
	var name; var phone;var jobs;var school;  //存储填写的个人信息
 * */
/* $("#submittijiao").click(function() {
	tijiao();
});
function tijiao(){
	var froma;
	for(i=0;i<from.length;i++){
		if(i==0){
			froma=from[i];			
		}else{
			froma=froma+","+from[i];
		}
	}
	$.ajax({
        url:"/inform/savepsychologicaltests",
        data: {from:froma,name:name,phone:phone,jobs:jobs},
        type: "post",
        success:function (res) {
            if("ok"==res){
           	 layer.msg("提交成功", {
      			  icon: 1,
      			  time: 500});
           	 	setTimeout( function(){
	     			window.opener=null;      //关闭页面   2秒
	     			window.open("","_self");    
	     			window.close();
     			},500 );
            }else{
           	 layer.msg("提交失败", {
      			  icon: 2,
      			  time: 1000});
            }
        },
        error:function (err) {
            console.log(err)
            layer.msg("提交失败", {
     			  icon: 2,
     			  time: 1000});
        }
    })
} */
/* //倒计时计时
function time(){
	var countdown=document.getElementById("time");
    var time=20*60;//30分钟换算成1800秒
    setInterval(function(){
    	if(time>=0){
	    	if(time==5*60){
	    		layer.msg("还有5分钟作答时间", {
	    			icon: 1,
	    			time: 1000});
	    	}
	       time=time-1;
	       var minute=parseInt(time/60);
	       var second=parseInt(time%60);
	       countdown.innerHTML=minute+'分'+second+'秒';
    	}else{
    		layer.msg("作答时间已到，谢谢参与", {
    			icon: 1,
    			time: 1000});
    		tijiao();
    	}
    },1000);
} */