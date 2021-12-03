var btn=document.getElementsByClassName("Button Button--plain")[document.getElementsByClassName("Button Button--plain").length-2];
if($(btn).find("#blockAllFollowers").length==0){
    $('<button id="blockAllFollowers" class="Button Button--plain">拉黑其关注者</button><span class="Profile-footerDot"></span>').insertBefore(btn);
}
function fetchAllFollowers(urlToken,offset,followers,callback){
  var str="101_3_2.0"+"+"+"/api/v4/members/"+urlToken+"/followers?include=data%5B*%5D.answer_count%2Carticles_count%2Cgender%2Cfollower_count%2Cis_followed%2Cis_following%2Cbadge%5B%3F%28type%3Dbest_answerer%29%5D.topics&offset="+offset+"&limit=20"+"+"+"\"AACed66CzhGPTjSLnxG1J8an8bP1rfs0-X0=|1598696459\""+"+"+"3_2.0aR_sn77yn6O92wOB8hPZnQr0EMYxc4f18wNBUgpTc_tue8FqK6P0EQ9y-LS9-hp1DufI-we8gGHPgJO1xuPZ0GxCTJHR7820XM20cLRGDJXfgGCBxupMuD_Ie8FL7AtqM6O1VDQyQ6nxrRPCHukMoCXBEgOsiRP0XL2ZUBXmDDV9qhnyTXFMnXcTF_ntRueTh6LfhhUqjwc18hpLHBFL9cu9kGx8JUwCKLoMXrO0o_SfIcNMWbN9o4LyJUCPv03C-cxfBDuMb73pQXwf79wLtgpKc_Os0upMQw2MjugfcwpmbbHYQvL0-Coq89OBe0F9vhg0qhLYoH3OSGOOsH2mIco_iuVBkAS8tvXL-JpBzJx1YwL05qfzq9OLbhY1aqLYsvc1rveVXDppTD39YqFC-hXYhwH8cekMp7LLDGHCxwcOfC2YKvOZPcV92Mg86BHB8reLqGNKTGgYCDcq6hLKPvLYzgO9rTOYuhLL6A9C";
  $.ajax({
      url:"https://www.zhihu.com/api/v4/members/"+urlToken+"/followers?include=data%5B*%5D.answer_count%2Carticles_count%2Cgender%2Cfollower_count%2Cis_followed%2Cis_following%2Cbadge%5B%3F%28type%3Dbest_answerer%29%5D.topics&offset="+offset+"&limit=20",
      headers:{
          "accept": "*/*",
          "accept-language": "zh-CN,zh;q=0.9",
          "cache-control": "no-cache",
          "pragma": "no-cache",
          "x-ab-param": "zr_slotpaidexp=1;tp_dingyue_video=0;tp_contents=1;tp_topic_style=0;pf_adjust=1;top_test_4_liguangyi=1;se_ffzx_jushen1=0;qap_question_author=0;qap_question_visitor= 0;zr_expslotpaid=7;tp_zrec=1;pf_noti_entry_num=2",
          "x-ab-pb": "CtoBdAHYAk8DEgVBBvQLjATaBJ4FAQZcBjkG7ApSBWoBMgWLBVYMmwu0AEABjAIRBcIFNwW5AjME4As3DH0CHAZFBOAEFAWyBVsGQwBpAdcCjAV+BrULMwVSC9wLKgMyA1cDtAoHDFADDgUVBYAF1wugAxsAVgU0DPgDdQTWBEAGjQRRBXIDogO3AwoE4wQ/AFcERwCEAvMDCwTpBMwC9gJVBQ8LiQwxBkIEZAQZBX8FYAv0AzQEFgYwBs8LOwKfAhgGpgTBBCkF2AXkCqEDCgaJBioGPwYBC7EF4wUSbQAAAAEAAAQBAAAAAAEEAQAAAQAAAQAAAAAVAAABAQEAAgIAABUCAAAAAwABAAEAAAABAAACAAAAAAAAAQAAAAQBAQAAAQIAAQAAAAABAAAAAQAAAQEAAAAAAAAACwACAAAAAAEAAAEAAAAAAwA=",
          "x-requested-with": "fetch",
          "x-xsrftoken": "v4hFClV3Sn8ii6BEFqVf72ceIfCsT2sj",
          "x-zse-93": "101_3_2.0",
          "x-zse-96": "2.0_"+b(hex_md5(str)).substring(0,44),
          "x-zst-81": "3_2.0aR_sn77yn6O92wOB8hPZnQr0EMYxc4f18wNBUgpTc_tue8FqK6P0EQ9y-LS9-hp1DufI-we8gGHPgJO1xuPZ0GxCTJHR7820XM20cLRGDJXfgGCBxupMuD_Ie8FL7AtqM6O1VDQyQ6nxrRPCHukMoCXBEgOsiRP0XL2ZUBXmDDV9qhnyTXFMnXcTF_ntRueTh6LfhhUqjwc18hpLHBFL9cu9kGx8JUwCKLoMXrO0o_SfIcNMWbN9o4LyJUCPv03C-cxfBDuMb73pQXwf79wLtgpKc_Os0upMQw2MjugfcwpmbbHYQvL0-Coq89OBe0F9vhg0qhLYoH3OSGOOsH2mIco_iuVBkAS8tvXL-JpBzJx1YwL05qfzq9OLbhY1aqLYsvc1rveVXDppTD39YqFC-hXYhwH8cekMp7LLDGHCxwcOfC2YKvOZPcV92Mg86BHB8reLqGNKTGgYCDcq6hLKPvLYzgO9rTOYuhLL6A9C"
        },
        success:function(data){
            if(data.paging.is_end==true){
                for(var i = 0; i < data.data.length; i++){
                    followers.push(data.data[i].url_token)
                }
                callback(followers);
            }else{
              for(var i = 0; i < data.data.length; i++){
                  followers.push(data.data[i].url_token)
              }
              fetchAllFollowers(urlToken,offset+20,followers,callback);
            }
        }
  })
}
function blockAllFollowers(followers){
  alert("获取用户列表完毕，大概需要" + (followers.length*3) + "秒" + "，请不要关闭此页面");
  for (let i = 0; i < followers.length; i++) {
      if ((i + 1) === followers.length) {
          setTimeout(block(followers[i], function () {
              alert("拉黑完毕")
          }), i * 3000);
      }
      setTimeout(block(followers[i]), i * 3000);
  }
}
function block(user, callback) {
  var block="/api/v4/members/"+user+"/actions/block";
  var str="101_3_2.0"+"+"+block+"+"+"\"AACed66CzhGPTjSLnxG1J8an8bP1rfs0-X0=|1598696459\""+"+"+"3_2.0aR_sn77yn6O92wOB8hPZnQr0EMYxc4f18wNBUgpTc_tue8FqK6P0EQ9y-LS9-hp1DufI-we8gGHPgJO1xuPZ0GxCTJHR7820XM20cLRGDJXfgGCBxupMuD_Ie8FL7AtqM6O1VDQyQ6nxrRPCHukMoCXBEgOsiRP0XL2ZUBXmDDV9qhnyTXFMnXcTF_ntRueThHO9eT9BZDO1uGpKtceL_wHLyveB2L317CXyJ9HBqqLYLgxYqGtqtqw1e7VPvXXO-GYKSUuLpGFX20N8gJXCbhXy9cO9xbSYfh28JeCOkqXxpqxKZrNqQvCMQXXVIwVLPvH0S8NmqhSVegXmM7NfPBH08ugKWULY1HXGWCo00Cc1VJO05qfzWhO9oHpVQMe_G72068OY09cLiut084N9ECNKsgcuogwYbutfFhC8eCSpcwp0W9V_cJp1zGcOIcOYTCpm2JUqiDX1EvwCjuc1EgH0I9V_svgG-weCWJrC";
  return function() {
    $.ajax({
      type: "POST",
      url: "https://www.zhihu.com"+block,
      headers:{
          "accept": "*/*",
          "accept-language": "zh-CN,zh;q=0.9",
          "cache-control": "no-cache",
          "pragma": "no-cache",
          "x-ab-param": "zr_slotpaidexp=1;tp_dingyue_video=0;tp_contents=1;tp_topic_style=0;pf_adjust=1;top_test_4_liguangyi=1;se_ffzx_jushen1=0;qap_question_author=0;qap_question_visitor= 0;zr_expslotpaid=7;tp_zrec=1;pf_noti_entry_num=2",
          "x-ab-pb": "CtoBdAHYAk8DEgVBBvQLjATaBJ4FAQZcBjkG7ApSBWoBMgWLBVYMmwu0AEABjAIRBcIFNwW5AjME4As3DH0CHAZFBOAEFAWyBVsGQwBpAdcCjAV+BrULMwVSC9wLKgMyA1cDtAoHDFADDgUVBYAF1wugAxsAVgU0DPgDdQTWBEAGjQRRBXIDogO3AwoE4wQ/AFcERwCEAvMDCwTpBMwC9gJVBQ8LiQwxBkIEZAQZBX8FYAv0AzQEFgYwBs8LOwKfAhgGpgTBBCkF2AXkCqEDCgaJBioGPwYBC7EF4wUSbQAAAAEAAAQBAAAAAAEEAQAAAQAAAQAAAAAVAAABAQEAAgIAABUCAAAAAwABAAEAAAABAAACAAAAAAAAAQAAAAQBAQAAAQIAAQAAAAABAAAAAQAAAQEAAAAAAAAACwACAAAAAAEAAAEAAAAAAwA=",
          "x-requested-with": "fetch",
          "x-xsrftoken": "v4hFClV3Sn8ii6BEFqVf72ceIfCsT2sj",
          "x-zse-93": "101_3_2.0",
          "x-zse-96": "2.0_"+b(hex_md5(str)).substring(0,44),
          "x-zst-81": "3_2.0aR_sn77yn6O92wOB8hPZnQr0EMYxc4f18wNBUgpTc_tue8FqK6P0EQ9y-LS9-hp1DufI-we8gGHPgJO1xuPZ0GxCTJHR7820XM20cLRGDJXfgGCBxupMuD_Ie8FL7AtqM6O1VDQyQ6nxrRPCHukMoCXBEgOsiRP0XL2ZUBXmDDV9qhnyTXFMnXcTF_ntRueThHO9eT9BZDO1uGpKtceL_wHLyveB2L317CXyJ9HBqqLYLgxYqGtqtqw1e7VPvXXO-GYKSUuLpGFX20N8gJXCbhXy9cO9xbSYfh28JeCOkqXxpqxKZrNqQvCMQXXVIwVLPvH0S8NmqhSVegXmM7NfPBH08ugKWULY1HXGWCo00Cc1VJO05qfzWhO9oHpVQMe_G72068OY09cLiut084N9ECNKsgcuogwYbutfFhC8eCSpcwp0W9V_cJp1zGcOIcOYTCpm2JUqiDX1EvwCjuc1EgH0I9V_svgG-weCWJrC"
        },
      complete: function() {
        if (callback) {
          callback();
        }
      }
    })
  }
}  

var token=window.location.href.match(/(?<=people\/)[\w:-]+/g);
$(document).on("click","#blockAllFollowers",function(){
  if(window.confirm("你确认要拉黑他们吗？")){
    fetchAllFollowers(token,0,[],blockAllFollowers)
  }
});
